import React, { useState, useEffect } from 'react'
import Article from "./ProductPage/Article/Article";
import ArticleTwoProductCards from "./ProductPage/ArticleTwo/ArticleTwoProductCards";
import AtricleTwo from "./ProductPage/ArticleTwo/AtricleTwo";
import SectionTwo from "./ProductPage/SectionTwo/SectionTwo";
// import ArticleThree from "./ProductPage/ArticleThree/ArticleThree";
import SectionOne from './ProductPage/SectionOne/SectionOne';
import { getProductData } from '../../Api';
import Loader from './ProductPage/Loader/Loader';


const ProductPage = () => {

  const [images, setImages] = useState();
  const [productInfo, setProductInfo] = useState();
  const [similarProducts, setSimilarProducts] = useState();
  const [recommendations, setRecomendations] = useState();
  const [rating, setRating] = useState();

  function fetchProduct() {
    getProductData(1).then(res => {
      const { images, similarProducts, recommendations, rating, ...productInfo } = res;
      setRating(rating)
      setProductInfo(productInfo);
      setSimilarProducts(similarProducts);
      setRecomendations(recommendations);
      setImages(images);
      console.log(recommendations);
      
    });
  }
 
  useEffect(
    fetchProduct
    ,
    []);
    

  if (images && productInfo && rating )


    return <div>
      <Article />
      <SectionOne productInfo={productInfo} images={images} rating={rating} />
      {/* <ArticleThree recommendation={recommendation[0]} /> */}
      <AtricleTwo />
      <ArticleTwoProductCards recommendations={recommendations} />
      <SectionTwo rating={rating} />
    </div>
  else return <Loader />
}

export default ProductPage