import React from 'react'
import { getProductReviews } from '../../../../../Api';
import { useEffect, useState } from 'react';
import Loader from '../../Loader/Loader';
import AReview from './AReview'

const FeedbackComments = () => {
    const [reviews, setReviews] = useState()


    function fetchProduct() {
        getProductReviews(1).then(res =>
            setReviews(res))
    }
    useEffect(
        fetchProduct
        ,
        []);
    
    if (!reviews)
        return <Loader/>
    console.log(reviews)
    return (
        <div className="flexbox2-left">
            <div className="feedback-2">
                <h2 className="feedback-h2" id="feedbackLink">Отзывы</h2>
                <img src="src/threeF.svg" alt="" />
            </div>
            <div className="feedback-container">
               {reviews.map( review => 
               <AReview key={review.date} review={review}/>
               )}
            
            </div>
        </div>
    )
}

export default FeedbackComments