import {makeAutoObservable, autorun} from "mobx"
import {deepObserve} from 'mobx-utils'
import { getBasket } from "../Api";

import { makeObservable, observable, action } from 'mobx';

class ProductStore {
  products = [];

  constructor() {
    makeObservable(this, {
      products: observable,
      addProduct: action,
      updateProductSize: action,
    });
  }

  addProduct(id) {
    this.products.push({ id, sizes: {} });
  }

  updateProductSize(id, size, count) {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      product.sizes[size] = count;
    }
  }
}

const sizeStore = new ProductStore();
export default sizeStore;