import React, { useState } from 'react'
import './AReview.css'
import Ratings from 'react-ratings-declarative';
import ReportModal from './ReportModal/ReportModal';
import { userStore } from '../../../../../Store/UserStore';
import { set } from 'react-hook-form';


function imageRender(images) {
    if (images === null)
        return "noData"
    else return ""
}


const AReview = ({ review }) => {

    const [modalActive, setModalActive] = useState(false)

    const [like, setLike] = useState(review.likes);
    const [likeActive, setLikeActive] = useState(review.is_liked)

    function likePressed(e) {
        if (likeActive) {
            setLikeActive(false)
            setLike(like - 1)
        } else {
            setLikeActive(true)
            setLike(like + 1)
            
        };
        e.target.style.pointerEvents = "none";
        setTimeout(() => e.target.style.pointerEvents =  "initial" , 1000)
        // вставить пост запрос когда будут айдишники ревьюшек
    }

 
    return (
        <div className="feedback-up">
            <div className="reviewHeader">
                <img src="/src/guy.svg" alt="" />
                <div className="reviewHeaderRight">
                    <p className="feedback-name">{review.user.name}</p>
                    <p className="reviewerPostQuantity">{review.user.reviewCount}</p>
                </div>
            </div>
            <div className="rating-line">
                <p className="rating-num">{review.rating}.0</p>
                <Ratings
                    rating={Number(review.rating)}
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
                {review.reviewText}
            </p>
            {/* <div className={"feedback-flexbox" + " " + imageRender(review.images)}>
                <div className="feedbackphoto-left ">
                    {review.images}
                </div>
                <div className="feedbackphoto-right">
                    <img src="/src/feedphoto-up.png" alt="" />
                    <img src="/src/feedphoto-up.png" alt="" />
                    <p className="else">Еще 1</p>
                </div>
            </div> */}
            <div className="date-like">
                <div className="date-report">
                    <p className="date">{review.last_updated}</p>
                    <div className="report">
                        <img src="/src/reportIcon.svg" alt="" />
                        <p className='date' onClick={() => setModalActive(true)}>Пожаловаться</p>
                    </div>
                </div>
                <div className="like-dislike">
                    <div className="like" >
                        <span className={`likeButton ${likeActive ? 'liked' : ''}`} src="/src/like.svg" alt="" onClick={e => likePressed(e)}/>
                        <p className="likes">{like}</p>
                    </div>
                </div>
            </div>
            <ReportModal active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default AReview