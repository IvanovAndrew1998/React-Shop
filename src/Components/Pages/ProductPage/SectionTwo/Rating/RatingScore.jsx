import React from 'react'
import RatingRate from './Rating-Rate/RatingRate'

const RatingScore = ({rating}) => {
    return (
        <div className="flexbox2-right">
            <h2 className="rating-h2">Рейтинг</h2>
            <div className="rating-flex">
                <p> {rating.value} </p>
                <div className="stars-flex">
                    <img src="src/stars.svg" alt="" />
                    <a href="#">{rating.quantity}</a>
                </div>
            </div>
            <RatingRate numberOfReviews={rating.numberOfReviews}/>
            <button className="btn-orange">
                Написать свой отзыв
            </button>
            <div className="feedback-rules">
                <img src="src/question.svg" alt="" />
                <p>Перед отправкой отзыва, пожалуйста, ознакомьтесь с <a className="rules" href="#">правилами</a></p>
            </div>
        </div>
    )
}

export default RatingScore