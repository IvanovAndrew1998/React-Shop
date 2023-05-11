import React from 'react'
import './ProfileSingleReview.css'
import Ratings from 'react-ratings-declarative';
import LikeButton from '../../../../../LikeButton/LikeButton';

const ProfileSingleReview = ({ review }) => {



    return (
        <div className="profileSingleReviewCard">
            <div className="profileSingleReviewCardTop">
                <div className="singleReviewCardHeader">
                    <img src="/src/guy.svg" alt="" />
                    <div className="name-num">
                        <p className="feedback-name">{review.user.name}</p>
                        <p className="singleReviewQuantity ">{review.user.reviewCount}</p>
                    </div>
                </div>
                <div className="singleReviewRatingPanel">
                    <p className="rating-num">{+review.rating}.0</p>
                    <Ratings
                        rating={+review.rating}
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
                <div className="publicationDate">
                    Опубликован {review.date}
                </div>
                <div className="singleReviewText">
                    {review.reviewText}
                </div>
                <div className="singleReviewClientImages">

                </div>
            </div>
            <div className="profileSingleReviewCardMiddle">
                <img src="/src/reviewProductImage.svg" alt="" />
                <div className="reviewProductInfo">
                    <div className='reviewProductInfoPrice'>
                        <p className='reviewProductInfoPriceDiscounted'>12 450 р</p>
                        <p className='reviewProductInfoPriceOriginal'>13 000 р</p>
                    </div>
                    <p className='reviewProductInfoName'>Серебряная цепь с огранкой</p>
                    <p className='reviewProductInfoBrand'>Алмаз-холдинг</p>
                    <div className="reviewProductInfoRating">
                        <Ratings
                            rating={1}
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
                        <p>1 отзыв</p>
                    </div>
                </div>
            </div>
            <div className="profileSingleReviewCardBottom">
                <div className="profileSingleReviewCardBottomLeft">
                    <div className="reviewEdit">
                        <img src="/src/Pencil.svg" alt="" />
                        <p>Редактировать</p>
                    </div>
                    <div className="reviewEdit">
                        <img src="/src/deleteProfile.svg" alt="" />
                        <p>Удалить</p>
                    </div>

                </div>
                <div className="profileSingleReviewCardBottomRight">
                    <LikeButton likes={review.likes} isLiked={review.is_liked}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileSingleReview