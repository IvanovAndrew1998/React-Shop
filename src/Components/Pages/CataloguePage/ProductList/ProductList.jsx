import { observer } from 'mobx-react-lite';
import React from 'react'
import CatalogueStore from '../../../../Store/CatalogueStore';
import ProductCard from '../../PRODUCTCARD/ProductCard'

const ProductList = () => {

 

    return (

        <div className="cardflex-right">
            <div className="product-quantity">
                <h1>"имя категории?"</h1>
                <a href="#">{CatalogueStore.catalogueCashe.length} товаров</a>
            </div>
            <div className="popular">
                <div className="popular-left">
                    <h2>Популярные</h2>
                    <a href="#">Новые</a>
                    <a href="#">Рейтинг</a>
                    <a href="#">Цена</a>
                    <a href="#">Скидки</a>
                </div>
                <div className="popular-right">
                    <img src="src/up-orange.svg" alt="" />
                    <img src="src/down-orange.svg" alt="" />
                </div>
            </div>
            <article className="article-2 gap">
                <div className="article2-flexbox">
                    {CatalogueStore.catalogueCashe.map(result =>
                        <ProductCard
                            key={result.id}
                            name={result.name}
                            discount={result.price.discount}
                            ratingValue={result.rating}
                            brand={result.brand.name}
                            discounted={result.price.discounted}
                            original={result.price.original}
                            image={result.image}
                            inBasket={result.in_basket}
                        />
                    )}

                </div>
            </article>
        </div>
    )
}

export default observer(ProductList)