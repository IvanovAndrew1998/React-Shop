import { makeAutoObservable } from "mobx"
import Cookies from 'js-cookie'
import { getLoginTokens } from '../Api';


class UserData {
    logedIn;
    accessToken;

    
// вся инфа приходит отделными запросами

    constructor() {
        this.logedIn = false;
        makeAutoObservable(this);
    }

    logIn(phone_number, password) {
        this.saveData();


        getLoginTokens(phone_number, password).then(res => {
           
            this.accessToken = res.data.access; 
            Cookies.set('UM:REFRESHTOKEN', res.data.refresh);
        });
    }


    logOut() {
        this.logedIn = false;
        Cookies.remove( 'UM:REFRESHTOKEN' );
    }

    loadData() {
        this.logedIn = Boolean(Cookies.get( 'UM:LOGGEDIN' ))
        this.logedIn = Cookies.get( 'UM:LOGGEDIN' ) === 'true' ? true : false
    
    }
  
    


}

export const userStore = new UserData()