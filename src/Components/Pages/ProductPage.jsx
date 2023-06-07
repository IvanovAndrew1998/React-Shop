import React, { useState, useEffect } from 'react'
import Article from "./ProductPage/Article/Article";
import ArticleTwoProductCards from "./ProductPage/ArticleTwo/ArticleTwoProductCards";
import AtricleTwo from "./ProductPage/ArticleTwo/AtricleTwo";
import SectionTwo from "./ProductPage/SectionTwo/SectionTwo";
// import ArticleThree from "./ProductPage/ArticleThree/ArticleThree";
import SectionOne from './ProductPage/SectionOne/SectionOne';
import { getProductData } from '../../Api';
import Loader from './ProductPage/Loader/Loader';
import { useParams } from 'react-router-dom';

const ProductPage = () => {

  let { productId } = useParams();



  const [images, setImages] = useState();
  const [productInfo, setProductInfo] = useState();
  const [similarProducts, setSimilarProducts] = useState();
  const [recommendations, setRecomendations] = useState();
  const [rating, setRating] = useState();

  function fetchProduct() {
    getProductData(productId).then(res => {
      const { images, similarProducts, recommendations, rating, ...productInfo } = res;
      setRating(rating)
      setProductInfo(productInfo);
      setSimilarProducts(similarProducts);
      setRecomendations(recommendations);
      setImages(images);
      
      
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
      <SectionTwo rating={rating} productId={productId}/>
    </div>
  else return <Loader />
}

export default ProductPage