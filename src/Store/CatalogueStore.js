import {makeAutoObservable} from "mobx"
import { getCatalogue, getCatalogueTags } from "../Api"

class CatalogueStore {
    tags
    catalogueCashe

    catalogueTags
    
    constructor() {
        this.tags = []
        this.catalogueCashe = []
        this.catalogueTags = {}
        makeAutoObservable(this)
    }

    toggleTag(name) {
        if (this.tags.includes(name))
            this.tags = this.tags.filter(tag => tag !== name)
        else
            this.tags.push(name);
        this.updCatalogueCashe()
    }
    
    catalogueTags() {
        getCatalogueTags().then(res => {
            const { results } = res;
            this.catalogueTags = results;
            
        })
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