import {makeAutoObservable} from "mobx"
import Cookies from 'js-cookie'
import {getAccessToken, getLoginTokens} from '../Api';


class UserData {
    loggedIn;
    accessToken;


    // вся инфа приходит отделными запросами

    constructor() {
        this.loggedIn = false;
        makeAutoObservable(this);
    }

    logIn(phone_number, password) {
        getLoginTokens(phone_number, password).then(res => {

            this.accessToken = res.data.access;
            this.loggedIn = true;
            Cookies.set('UM:REFRESHTOKEN', res.data.refresh);
        });
    }

    logOut() {
        this.loggedIn = false;
        Cookies.remove('UM:REFRESHTOKEN');

    }

    loadData() {
        const refresh_token = Cookies.get('UM:REFRESHTOKEN');

        if (refresh_token !== undefined) {
      
            getAccessToken(refresh_token).then( accessToken => {
                this.accessToken = accessToken.data.access;
                this.loggedIn = true;
                

            }).catch(() => {alert('Сервер временно не доступен')});
            
        }
        else {
            this.logOut();
        }

    }


}

export const userStore = new UserData()
