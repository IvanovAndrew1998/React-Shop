import React from 'react'
import Ratings from 'react-ratings-declarative';
import '../../../PRODUCTCARD/ProductCard.css'
import HeartButton from '../../../../HeartButton/HeartButton';

const SimilarProductCard = ({ recommendations }) => {

    return (

        <div className='cardPosition'>
            <div className="productsim-card">
                <div className="heart-card">
                    <HeartButton />
                </div>
                <img className="productCardImage" src={recommendations.image} alt="" />
                <div className="discount-number">
                    <p className="discount-prc">
                        -{recommendations.price.discount}%
                    </p>
                    <p className="prd-number">
                        3600 шт.
                    </p>
                </div>
                <div className="discount-card">
                    <p className="pricecard-now">{recommendations.price.discounted} р</p>
                    <p className="pricecard-then">{recommendations.price.original} р</p>
                </div>
                <div className="ratingBlock">
                    <Ratings
                        rating={Number(recommendations.rating)}
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

                <p className='brandname' >{recommendations.brand.name}</p>
                <p className="article2-dis">
                    {recommendations.name}
                </p>
                <div className="down-card">
                    <button className="backet-btn main">
                        В корзину
                    </button>
                </div>
            </div>
        </div>

    )
}

export default SimilarProductCard