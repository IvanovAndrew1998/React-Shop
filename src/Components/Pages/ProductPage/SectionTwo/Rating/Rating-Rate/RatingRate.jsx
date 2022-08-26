import React from 'react'

const RatingRate = ({numberOfReviews}) => {
const maxRated = Math.max(...numberOfReviews);



    return (
        <div className="rating-rate">
            {
                numberOfReviews.map((elem, i) => 
                <div className="rate-flex">
                    <p className="rate">{i+1}</p>
                    <svg width="262" height="8" viewBox="0 0 262 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4L258 4.00002" stroke="#FFC2AD" stroke-width="8" stroke-linecap="round" />
                        <path d="M4 4L258 4.00002" stroke="#DC2E07" stroke-width="8" stroke-linecap="round" style={{transform: `scaleX(${elem/maxRated})`}}/>
                    </svg>
                </div>
                )
            }

        </div>
    )
}

export default RatingRate