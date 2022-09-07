import axios from "axios"

export function getSizeList(/*  Product ID */) 
{
    return [40, 45, 50, 55, 60, 70]
}

export async function getProductData(id) {
    const product = await axios.get("http://127.0.0.1:8000/catalogue/product?id=" + id);
    return product.data;
}
export async function getProductReviews(id, offset = 0) { 
    const reviews = await axios.get(`http://localhost:8000/reviews/product?id=${id}&limit=5&offset=${offset}`);
    return reviews.data;
    
}
