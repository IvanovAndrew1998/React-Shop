import React from 'react';
import Ratings from 'react-ratings-declarative';

const ArticleThree = ({ recommendation }) => {
    console.log(recommendation)
    return (
        <div className="article-3">
            <a href="#navbar"><img className="arrow-up" src="src/arrow-up.svg" alt="" /></a>
            <div className="inner">
                <div className="article3-flex">
                    <div className="art3flex-left">
                        <img className="art3-img" src="src/feed-photo.png" alt="" />
                        <div>
                            <p className="gold">{recommendation.name}</p>
                            <p className="length">45 см</p>
                            <Ratings
                                rating={Number(recommendation.rating)}
                                widgetRatedColors="#FBB03B"
                                svgIconPaths='M6.84996 6.05112L9 1.69466L11.15 6.05112C11.3321 6.42005 11.6841 6.67576 12.0912 6.73492L16.8988 7.43351L13.42 10.8245C13.1254 11.1117 12.991 11.5255 13.0605 11.931L13.8818 16.7192L9.58168 14.4585C9.21752 14.267 8.78248 14.267 8.41832 14.4585L4.11825 16.7192L4.93949 11.931C5.00904 11.5255 4.8746 11.1117 4.57999 10.8245L1.10116 7.43351L5.90879 6.73492C6.31593 6.67576 6.66788 6.42005 6.84996 6.05112Z'
                                svgIconViewBoxes='0 0 22 22'
                                widgetDimensions="26px"
                                widgetSpacings="0px"

                            >
                                <Ratings.Widget />
                                <Ratings.Widget />
                                <Ratings.Widget />
                                <Ratings.Widget />
                                <Ratings.Widget />
                            </Ratings>
                        </div>
                    </div>
                    <div className="art3flex-right">
                        <div>
                            <p className="dis">-{recommendation.discount}%</p>
                            <p className="black-price">{recommendation.discountedPrice} р</p>
                            <p className="gray-price price-then">{recommendation.originalPrice} р</p>
                        </div>
                        <div className="btn-heart">
                            <button className="backet-btn">
                                В корзину
                            </button>
                            <img src="src/heart.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleThree