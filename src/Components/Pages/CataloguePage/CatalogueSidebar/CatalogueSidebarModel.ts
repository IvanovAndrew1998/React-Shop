import { makeAutoObservable } from 'mobx';
import { CatalogueApi } from "../../../../Api/CatalogueApi"
import { IAttributeCategory } from '../../../../Store/Entities';


export class CatalogueSidebarModel {
    isLoading: boolean;
    attributes: IAttributeCategory[];

    constructor() {
        this.isLoading = true;
        this.attributes = [];
        makeAutoObservable(this);
        this.loadAttributes();
    }

    
    async loadAttributes() {
        const result = await (new CatalogueApi()).getCatalogueTags();

        this.attributes = result;

        this.isLoading = false;
    }
}