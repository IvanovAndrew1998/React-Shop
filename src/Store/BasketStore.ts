import {makeAutoObservable, autorun} from "mobx"
import placeholder from '../BasketPlaceholder.json'
import {deepObserve} from 'mobx-utils'
import { getBasket } from "../Api";
import { userStore } from './UserStore';
import { access } from "fs";



interface ISizeCount {
    size: string;
    count: number;
    original_price: number;
    discounted_price: number;
}


interface IProduct {

    sizes: ISizeCount[];
    id: number;

    brandName: string;
    productName: string;
    image: string;
    rating: number;
    reviewQuantity: string;
    discount: number;
}

class BasketStore {
    basket : IProduct[];

    constructor() {
        this.basket = [];
        


        makeAutoObservable(this);
        const disposer = deepObserve(this.basket, (change, path) => {
           
        })
    }

    get overAllPrice() {

        let fullPrice = 0;
        let fullDiscountedPrice = 0
        let count = 0;
     
        this.basket.forEach(product => {
            product.sizes.forEach(size => {
                count += size.count
                fullPrice += size.original_price * size.count
                fullDiscountedPrice += size.discounted_price * size.count
            })
        })
        return [fullPrice, fullDiscountedPrice, count]
    }

    sepPrice(id) {
        let fullPrice = 0;
        let fullDiscountedPrice = 0


        const product = this.basket.find(product => 
             product.id == id
        )

        if (product) {

            product.sizes.forEach(size => {
                fullPrice += size.original_price * size.count
                fullDiscountedPrice += size.discounted_price * size.count
            })
        }
        return [fullPrice, fullDiscountedPrice]
    }


    loadData(accessToken) {
  
        getBasket(accessToken).then(basket => 
           
            basket.data.products.forEach(basketCard => {
                
                this.basket.push({
                    id: basketCard.id,
                    sizes: basketCard.sizes,
                    brandName: basketCard.brand,
                    productName: basketCard.name,
                    image: basketCard.image,
                    rating: basketCard.rating,
                    reviewQuantity: basketCard.reviews_quantity,
                    discount: basketCard.discount
                })
            })
        )
    }
    setSizeCount(id, size, count) {
        const product = this.basket.find(product => product.id == id)
        if (product) {
            const productSize = product.sizes.find(productSize => productSize.size == size)
            if (productSize) {
                productSize.count = count;
            }
        }


    }
  
}


export default BasketStore
