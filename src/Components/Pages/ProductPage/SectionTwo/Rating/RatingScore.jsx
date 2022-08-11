import React from 'react'

const RatingScore = () => {
    return (
        <div className="flexbox2-right">
            <h2 className="rating-h2">Рейтинг</h2>
            <div className="rating-flex">
                <p> 4.0 </p>
                <div className="stars-flex">
                    <img src="src/stars.svg" alt="" />
                    <a href="#">14 500 отзывов</a>
                </div>
            </div>
            <div className="rating-rate">
                <div className="rate-flex">
                    <p className="rate">5</p>
                    <svg width="262" height="8" viewBox="0 0 262 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4L258 4.00002" stroke="#FFC2AD" stroke-width="8" stroke-linecap="round" />
                    </svg>
                </div>
                <div className="rate-flex">
                    <p className="rate">4</p>
                    <svg width="262" height="8" viewBox="0 0 262 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4L258 4.00002" stroke="#FFC2AD" stroke-width="8" stroke-linecap="round" />
                    </svg>
                </div>
                <div className="rate-flex">
                    <p className="rate">3</p>
                    <svg width="262" height="8" viewBox="0 0 262 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4L258 4.00002" stroke="#FFC2AD" stroke-width="8" stroke-linecap="round" />
                    </svg>
                </div>
                <div className="rate-flex">
                    <p className="rate">2</p>
                    <svg width="262" height="8" viewBox="0 0 262 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4L258 4.00002" stroke="#FFC2AD" stroke-width="8" stroke-linecap="round" />
                    </svg>
                </div>
                <div className="rate-flex">
                    <p className="rate">1</p>
                    <svg width="262" height="8" viewBox="0 0 262 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4L258 4.00002" stroke="#FFC2AD" stroke-width="8" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
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