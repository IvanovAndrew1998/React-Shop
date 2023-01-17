import React from 'react'
import ProductCard from '../../PRODUCTCARD/ProductCard'

const ProductList = () => {
    return (
        <div class="cardflex-right">
            <div class="product-quantity">
                <h1>Браслеты</h1>
                <a href="#">4 560 товаров</a>
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
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </article>
        </div>
    )
}

export default ProductList