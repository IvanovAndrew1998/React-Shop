import React from 'react'

import Ratings from 'react-ratings-declarative';


function imageRender(images) {
    if (images === null)
        return "noData"
    else return ""
}

const AReview = ({ review }) => {
    const date = new Date(Date.parse(review.creation_date))

    return (
        <div className="feedback-up">
            <div className="feedback-num">
                <img src="src/guy.svg" alt="" />
                <div className="name-num">
                    <p className="feedback-name">{review.author}</p>
                    <p className="feedback-nub">2 отзыва</p>
                </div>
            </div>
            <div className="rating-line">
                <p className="rating-num">{review.rating}.0</p>
                <Ratings
                    rating={review.rating}
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
            <p className="conmment" >
                {review.text}
            </p>
            <div className={"feedback-flexbox" + " " + imageRender(review.images)}>
                <div className="feedbackphoto-left ">
                    {review.images}
                </div>
                <div className="feedbackphoto-right">
                    <img src="src/feedphoto-up.png" alt="" />
                    <img src="src/feedphoto-up.png" alt="" />
                    <p className="else">Еще 1</p>
                </div>
            </div>
            <div className="date-like">
                <p className="date">{date.toLocaleDateString() + '  ' + date.toLocaleTimeString()}</p>
                <div className="like-dislike">
                    <div className="dislike">
                        <img src="src/dislike.svg" alt="" />
                        <p className="dislikes">0</p>
                    </div>
                    <div className="like">
                        <img src="src/like.svg" alt="" />
                        <p className="likes">{review.likes}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AReview