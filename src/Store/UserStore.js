import { makeAutoObservable } from "mobx"
import Cookies from 'js-cookie'


class UserData {
    logedIn;


    constructor() {
        this.logedIn = false;
        makeAutoObservable(this);
    }

    logIn() {
        this.logedIn = true;
        this.saveData()
    }

    logOut() {
        this.logedIn = false;
        this.saveData()
    }

    saveData() {
        Cookies.set('UM:LOGGEDIN', String(this.logedIn) , { expires: 7 })
    
    }
    loadData() {
        this.logedIn = Boolean(Cookies.get( 'UM:LOGGEDIN' ))
        this.logedIn = Cookies.get( 'UM:LOGGEDIN' ) === 'true' ? true : false
    }


}

export const userStore = new UserData()