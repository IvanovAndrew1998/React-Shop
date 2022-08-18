import React, { useState, useEffect } from 'react'
import Article from "./ProductPage/Article/Article";
import ArticleTwoProductCards from "./ProductPage/ArticleTwo/ArticleTwoProductCards";
import AtricleTwo from "./ProductPage/ArticleTwo/AtricleTwo";
import SectionTwo from "./ProductPage/SectionTwo/SectionTwo";
import ArticleThree from "./ProductPage/ArticleThree/ArticleThree";
import SectionOne from './ProductPage/SectionOne/SectionOne';
import { getProductData } from '../../Api';


const ProductPage = ({images, productInfo, similarProducts, recommendation}) => {
    // const [images, setImages] = useState();
    // const [productInfo, setProductInfo]= useState();
    // const [similarProducts, setSimilarProducts] = useState();
    // const [recommendation, setRecomendation]= useState();

    // function fetchProduct() {
    //     getProductData(1).then( res => {
    //         const {images, similarProducts, recommendation, ...productInfo} = res;
    //         setProductInfo(productInfo);
    //         setSimilarProducts(similarProducts);
    //         setRecomendation(recommendation);
    //         setImages(images);
    //     });
    // }

    // useEffect(
    // fetchProduct
    // , 
    // []);


  return (
    <div> 
    <Article/>
    <SectionOne productInfo={productInfo} images={images}/>
    <ArticleThree/>
    <AtricleTwo/>
    <ArticleTwoProductCards/>
    <SectionTwo/>
    </div>
  )
}

export default ProductPage