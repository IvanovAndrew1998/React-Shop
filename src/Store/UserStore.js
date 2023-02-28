import {makeAutoObservable} from "mobx"
import Cookies from 'js-cookie'
import {getAccessToken, getLoginTokens, dropRefreshToken, getProfileInfo, getOrdersInfo} from '../Api';


class UserData {
    loggedIn;
    accessToken;
    profileInfo;
    ordersInfo;  

    // вся инфа приходит отделными запросами

    constructor() {
        this.loggedIn = false;
        this.profileInfo = undefined;  
        this.ordersInfo = undefined;
        
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
        const refresh_token = Cookies.get('UM:REFRESHTOKEN');
        
        dropRefreshToken(refresh_token);
        Cookies.remove('UM:REFRESHTOKEN');
    }

    loadData() {
        const refresh_token = Cookies.get('UM:REFRESHTOKEN');  

        if (refresh_token !== undefined) {
      
            getAccessToken(refresh_token).then( accessToken => {
                this.accessToken = accessToken.data.access;
                this.loggedIn = true;
                this.fetchData();
                this.fetchOrderData();

            }).catch(() => {alert('Сервер временно не доступен')});
            
        }
        else {
            this.logOut();
        }
    
    }
    fetchData() {
        getProfileInfo(this.accessToken).then(res => {this.profileInfo = res });
        
    } ;
    fetchOrderData() {
        getOrdersInfo(this.accessToken).then(OrderRes => {this.ordersInfo = OrderRes});
    };


}

export const userStore = new UserData()
