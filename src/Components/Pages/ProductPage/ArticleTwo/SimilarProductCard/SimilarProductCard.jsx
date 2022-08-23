import React from 'react'

const SimilarProductCard = ({productData}) => {
  return (
    <div className="productsim-card">
                        <p className="dis-per percantageSimilar">-{productData.discount}% </p> 
                        <img className="heart-card" src="src/heart1.svg" alt="" />
                        <img className="jew" src="src/product-card.png" alt="" />
                        <div className="discount-card">
                            <p className="pricecard-now">{productData.discountedPrice } р</p>
                            <p className="pricecard-then">{productData.originalPrice} р</p>
                        </div>
                        <p className="article2-dis">
                            {productData.name}
                        </p>
                        <div className="down-card">
                            <button className="backet-btn">
                                В корзину
                            </button>
                            <a href="#"><img src="src/arrow-right.svg" alt="" /></a>
                        </div>
                    </div>
  )
}

export default SimilarProductCard