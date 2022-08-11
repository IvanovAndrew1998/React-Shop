import React from 'react'

const ArticleThree = () => {
  return (
    <div className="article-3">
        <a href="#navbar"><img className="arrow-up" src="src/arrow-up.svg" alt="" /></a>
        <div className="inner">
            <div className="article3-flex">
                <div className="art3flex-left">
                    <img className="art3-img" src="src/feed-photo.png" alt=""/>
                    <div>
                        <p className="gold">Золотое кольцо</p>
                        <p className="length">45 см</p>
                        <img src="src/stars.svg" alt=""/>
                    </div>
                </div>
                <div className="art3flex-right">
                    <div>
                        <p className="dis">-15%</p>
                        <p className="black-price">3 350 р</p>
                        <p className="gray-price">4 419 р</p>
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