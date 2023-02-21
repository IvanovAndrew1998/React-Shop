import React from 'react'
import { useEffect, useState } from 'react'
import { getCatalogue } from '../../../../Api';
import ProductCard from '../../PRODUCTCARD/ProductCard'
import Loader from '../../ProductPage/Loader/Loader';

const ProductList = ({count, results}) => {


    
    
    
    if (!count && !results)
    return <Loader/>

    
    return (
    
        <div class="cardflex-right">
            <div class="product-quantity">
                <h1>"имя категории?"</h1>
                <a href="#">{count} товаров</a>
            </div>
            <div class="popular">
                <div class="popular-left">
                    <h2>Популярные</h2>
                    <a href="#">Новые</a>
                    <a href="#">Рейтинг</a>
                    <a href="#">Цена</a>
                    <a href="#">Скидки</a>
                </div>
                <div class="popular-right">
                    <img src="src/up-orange.svg" alt="" />
                    <img src="src/down-orange.svg" alt="" />
                </div>
            </div>
            <article class="article-2 gap">
                <div class="article2-flexbox">
                    { results.map(result => 
                    <ProductCard 
                    key={result.id}
                    name={result.name} 
                    discount={result.price.discount}
                    rating={result.rating.value}
                    brand={result.manufacturer.name}
                    
                    />
                    )}
                    
                </div>
            </article>
        </div>
    )
}

export default ProductList