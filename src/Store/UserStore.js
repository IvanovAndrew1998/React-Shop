import {makeAutoObservable} from "mobx"
import Cookies from 'js-cookie'
import {getAccessToken, getLoginTokens, dropRefreshToken, getProfileInfo, getOrdersInfo, getHeaderInfo, getLocationByAddress} from '../Api';


class UserData {
    loggedIn;
    accessToken;
    profileInfo;
    ordersInfo;
    headerNotificationsOrders;
    headerNotificationsDiscounts;
    headerNotificationsCount;
    headerTags;
    headerBasket;
    headerAvatar;


    constructor() {
        this.loggedIn = false;
        this.profileInfo = undefined;  
        this.ordersInfo = undefined;
        this.headerNotificationsOrders = undefined;
        this.headerNotificationsDiscounts = undefined;
        this.headerNotificationsCount = undefined;
        this.headerTags = undefined;
        this.headerBasket = undefined;
        this.headerAvatar = undefined;

        
        
        makeAutoObservable(this);
    }

    logIn(username, password) {
        getLoginTokens(username, password).then(res => {

            this.accessToken = res.data.access;
            this.loggedIn = true;
            Cookies.set('UM:REFRESHTOKEN', res.data.refresh);
            this.fetchData();
            this.fetchOrderData();
            this.fetchHeaderData();
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
      
            getAccessToken(refresh_token).then( tokens => {
                this.accessToken = tokens.data.access;
                this.loggedIn = true;
                this.fetchData();
                this.fetchOrderData();
                this.fetchHeaderData();
                Cookies.set('UM:REFRESHTOKEN' , tokens.data.refresh)

            }).catch(() => {alert('Сервер временно не доступен')});
            
        }
        else {
            this.logOut();
        }
    
    }
    fetchData() {
        getProfileInfo(this.accessToken).then(res => {this.profileInfo = res })  
    } ;
    fetchOrderData() {
        getOrdersInfo(this.accessToken).then(OrderRes => {this.ordersInfo = OrderRes.data})
    };
    fetchHeaderData() {
        getHeaderInfo(this.accessToken).then(HeaderRes => {
            this.headerTags = HeaderRes.data.tags
            this.headerNotificationsOrders = HeaderRes.data.notifications.orders
            this.headerNotificationsDiscounts = HeaderRes.data.notifications.discounts
            this.headerNotificationsCount = HeaderRes.data.notifications.count
            this.headerBasket = HeaderRes.data.basket
            this.headerAvatar = HeaderRes.data.user.avatar
        })
        
    };

    clearHeaderDiscounts() {
        this.headerNotificationsDiscounts = [];
    }

    deleteHeaderDiscount(id) {
        this.headerNotificationsDiscounts = this.headerNotificationsDiscounts.filter(discount => Number(discount.id) != Number(id))
    }

    clearHeaderOrders() {
        this.headerNotificationsOrders = [];
    }

    deleteHeaderOrder(id) {
        this.headerNotificationsOrders = this.headerNotificationsOrders.filter(order => Number(order.id) != Number(id))

    }

    deleteAddress(id) {
        this.profileInfo.data.addresses = this.profileInfo.data.addresses.filter(address => Number(address.id) != Number(id))
    }
    deleteCreditCard(id) {
        this.profileInfo.data.plasticCards = this.profileInfo.data.plasticCards.filter(creditCard => Number(creditCard.id) != Number(id))
    }


    get getAddressesLocation() {
        const LocationArr = []
        this.profileInfo.data.addresses.forEach( address => 
            LocationArr.push( getLocationByAddress(address.settlement, address.street, address.building) ) 
            )
        return LocationArr
    }
}

export const userStore = new UserData()
