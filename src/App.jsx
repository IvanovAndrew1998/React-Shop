import React, { useEffect, useState } from 'react';
import { getProductData } from './Api';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ProductPage from "./Components/Pages/ProductPage";

function App() {
    const [images, setImages] = useState();
    const [productInfo, setProductInfo]= useState();
    const [similarProducts, setSimilarProducts] = useState();
    const [recommendation, setRecomendation]= useState();

    function fetchProduct() {
        getProductData(1).then( res => {
            const {images, similarProducts, recommendation, ...productInfo} = res;
            setProductInfo(productInfo);
            setSimilarProducts(similarProducts);
            setRecomendation(recommendation);
            setImages(images);
        });
    }

    useEffect(
    fetchProduct
    , 
    []);

    return (
        <div className="App">
            <Header />
            {images
            ? <ProductPage images={images} productInfo={productInfo} recommendation={recommendation} similarProducts={similarProducts}/>
            : <p>LOADER</p>}
            
            
            <Footer/>
            

        </div >
    );
}

export default App;
