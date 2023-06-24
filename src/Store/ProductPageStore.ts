import { ISizeCount } from './Entities';
import {makeAutoObservable, autorun} from "mobx"
import {deepObserve} from 'mobx-utils'
import { getBasket } from "../Api";

import { makeObservable, observable, action } from 'mobx';

class ProductStore {
  sizes: ISizeCount[] = [];
  id: number = 0;

  constructor() {
    makeObservable(this, {
      sizes: observable,
      addSize: action,
      updateProductSize: action,
      changeProduct: action,
    });
  }

  changeProduct(id: number) {
    if (id != this.id) {
      this.id = id;
      this.sizes = [];
    }
  }

  addSize(size: ISizeCount) {
    this.sizes.push(size);
  }

  updateProductSize(size: string , count: number) {
    const sizeobj = this.sizes.find((p) => p.size === size);
    if (sizeobj) {
      sizeobj.count = count;
    }
  }
}

const sizeStore = new ProductStore();
export default sizeStore;