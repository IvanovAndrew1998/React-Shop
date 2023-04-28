import {makeAutoObservable} from "mobx"
import { getCatalogue } from "../Api"

class CatalogueStore {
    tags
    catalogueCashe
    
    constructor() {
        this.tags = ["Цепи","Оргия","Свадьба","Похороны"]
        this.catalogueCashe = []
        makeAutoObservable(this)
    }

    toggleTag(name) {
        if (this.tags.includes(name))
            this.tags = this.tags.filter(tag => tag !== name)
        else
            this.tags.push(name);
        this.updCatalogueCashe()
    }
    


    updCatalogueCashe() {
        getCatalogue(this.tags).then(res => {
            const { count, next, previous, results } = res;
            this.catalogueCashe = results
        })
    }

    clearCatalogueCashe() {
        this.tags = []
    }
    clearCategoryCashe(category) {
        this.tags = this.tags.filter(tag => !category.includes(tag));
    }
}

export default new CatalogueStore();