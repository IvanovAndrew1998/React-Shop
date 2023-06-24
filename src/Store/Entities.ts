export interface ISizeCount {
    size: string;
    count: number;
    original_price: number;
    discounted_price: number;
}


export interface IProduct {

    sizes: ISizeCount[];
    id: number;

    brandName: string;
    productName: string;
    image: string;
    rating: number;
    reviewQuantity: string;
    discount: number;
}

export interface IAttributeCategory {
    name: String,
    display_name: String
    items: IAttributeItem[],
}

export interface IAttributeItem {
    name: String,
    display_name: String,
}