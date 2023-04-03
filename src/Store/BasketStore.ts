import {makeAutoObservable} from "mobx"
import placeholder from '../BasketPlaceholder.json'
import {deepObserve} from 'mobx-utils'


interface ISizeCount {
    size: string;
    count: number;
    originalPrice: number;
    discountedPrice: number;
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
        this.loadData();


        makeAutoObservable(this);
        const disposer = deepObserve(this.basket, (change, path) => {
            console.dir(change)
        })
    }

    get overAllPrice() {

        let fullPrice = 0;
        let fullDiscountedPrice = 0
        let count = 0;
        console.log('huy')
        this.basket.forEach(product => {
            product.sizes.forEach(size => {
                count += size.count
                fullPrice += size.originalPrice * size.count
                fullDiscountedPrice += size.discountedPrice * size.count
            })
        })
        return [fullPrice, fullDiscountedPrice, count]
    }

    sepPrice(id) {
        let fullPrice = 0;
        let fullDiscountedPrice = 0

        console.log('huy')
        const product = this.basket.find(product => 
             product.id == id
        )

        if (product) {

            product.sizes.forEach(size => {
                fullPrice += size.originalPrice * size.count
                fullDiscountedPrice += size.discountedPrice * size.count
            })
        }
        return [fullPrice, fullDiscountedPrice]
    }


    loadData() {
        placeholder.BasketCards.forEach(basketCard => {
            this.basket.push({
                id: basketCard.id,
                sizes: basketCard.basketSizesWeightsPrices,
                brandName: basketCard.brandName,
                productName: basketCard.productName,
                image: basketCard.image,
                rating: basketCard.rating,
                reviewQuantity: basketCard.reviewQuantity,
                discount: basketCard.discount
            })
        })
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
