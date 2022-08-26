import React, { useState, useEffect } from 'react'
import Article from "./ProductPage/Article/Article";
import ArticleTwoProductCards from "./ProductPage/ArticleTwo/ArticleTwoProductCards";
import AtricleTwo from "./ProductPage/ArticleTwo/AtricleTwo";
import SectionTwo from "./ProductPage/SectionTwo/SectionTwo";
import ArticleThree from "./ProductPage/ArticleThree/ArticleThree";
import SectionOne from './ProductPage/SectionOne/SectionOne';
import { getProductData } from '../../Api';


const ProductPage = ({images, productInfo, similarProducts, recommendation}) => {


  return (
    <div> 
    <Article/>
    <SectionOne productInfo={productInfo} images={images}/>
    <ArticleThree recommendation={recommendation}/>
    <AtricleTwo/>
    <ArticleTwoProductCards similar={similarProducts}/>
    <SectionTwo rating={productInfo.rating}/>
    </div>
  )
}

export default ProductPage