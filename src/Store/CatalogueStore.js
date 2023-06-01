import {makeAutoObservable} from "mobx"
import { CatalogueApi } from "../Api/CatalogueApi.ts"

class CatalogueStore {
    tags
    catalogueCashe

    catalogueTags
    
    constructor() {
        this.tags = []
        this.catalogueCashe = []
        this.catalogueTags = {}
        makeAutoObservable(this)

        // this.loadCatalogueTags();
    }

    toggleTag(name) {
        if (this.tags.includes(name))
            this.tags = this.tags.filter(tag => tag !== name)
        else
            this.tags.push(name);
        this.updCatalogueCashe()
    }
    
    loadCatalogueTags() {
        CatalogueApi.getCatalogueTags().then(res => {
            this.catalogueTags = res;
            console.log(this.catalogueTags);
        })
    }

    updCatalogueCashe() {
        (new CatalogueApi()).getCatalogue(this.tags).then(res => {
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