import React from 'react'

const ArticleThree = ({recommendation}) => {
  return (
    <div className="article-3">
        <a href="#navbar"><img className="arrow-up" src="src/arrow-up.svg" alt="" /></a>
        <div className="inner">
            <div className="article3-flex">
                <div className="art3flex-left">
                    <img className="art3-img" src="src/feed-photo.png" alt=""/>
                    <div>
                        <p className="gold">{recommendation.name}</p>
                        <p className="length">45 см</p>
                        <img src="src/stars.svg" alt=""/>
                    </div>
                </div>
                <div className="art3flex-right">
                    <div>
                        <p className="dis">-{recommendation.discount}%</p>
                        <p className="black-price">{recommendation.discountedPrice} р</p>
                        <p className="gray-price">{recommendation.originalPrice} р</p>
                    </div>
                    <div className="btn-heart">
                        <button className="backet-btn">
                            В корзину
                        </button>
                        <img src="src/heart.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default ArticleThree