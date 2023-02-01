import { makeAutoObservable } from "mobx"

class UserData {
    logedIn: boolean;

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
        localStorage.setItem("logedIn", JSON.stringify(this.logIn));
    }

    loadData() {
        // localStorage.getItem('logedIn')
        // // @ts-ignore
        // ? this.logedIn = JSON.parse(localStorage.getItem('logedIn'))
        // : this.logedIn = false
        this.logIn()
    }


}

export const userStore = new UserData()