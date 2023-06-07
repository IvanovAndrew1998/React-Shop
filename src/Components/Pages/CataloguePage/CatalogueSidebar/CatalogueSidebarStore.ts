import { makeAutoObservable } from 'mobx';
import { CatalogueApi } from "../../../../Api/CatalogueApi"

interface IAttributeCategory {
    name: String,
    displayName: String
    items: IAttributeItem[],
}

interface IAttributeItem {
    name: String,
    displayName: String,
}


export class CatalogueSidebarStore {
    isLoading = true;
    attributes: IAttributeCategory[];

    constructor() {
        this.attributes = [];
        makeAutoObservable(this);

        this.loadAttributes();
    }

    
    async loadAttributes() {
        const result = await (new CatalogueApi()).getCatalogueTags();

        console.log(result);
        console.log(result as IAttributeCategory[]);
        this.attributes = result as IAttributeCategory[];

        this.isLoading = false;
    }
}