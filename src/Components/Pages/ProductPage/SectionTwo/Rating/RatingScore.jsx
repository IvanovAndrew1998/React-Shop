import React from 'react'
import RatingRate from './Rating-Rate/RatingRate'
import Ratings from 'react-ratings-declarative';
import RatingStar from '../../../../RatingStar';

const RatingScore = ({ rating }) => {
    return (
        <div className="flexbox2-right">
            <div className='RatingSticky'>
                <h2 className="rating-h2">Рейтинг</h2>
                <div className="rating-flex">
                    <p> {rating.value.toFixed(1)} </p>
                    <div className="stars-flex">
                        <Ratings
                            rating={rating.value}
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
                        <a href="#">{rating.quantity} отзывов</a>
                    </div>
                </div>
                <RatingRate numberOfReviews={rating.numberOfReviews} />
                <button className="btn-orange">
                    Написать свой отзыв
                </button>
                <div className="feedback-rules">
                    <img src="src/question.svg" alt="" />
                    <p>Перед отправкой отзыва, пожалуйста, ознакомьтесь с <a className="rules" href="#">правилами</a></p>
                </div>
            </div>
        </div>
    )
}

export default RatingScore