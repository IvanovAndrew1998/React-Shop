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
    }


}

export const userStore = new UserData()