import React from 'react'
import './ProfileReviews.css'
import ProfileSingleReview from './profileSingleReview/ProfileSingleReview';
import { observer } from 'mobx-react-lite';
import { userStore} from '../../../../../Store/UserStore'
import Loader from '../../../../../Components/Pages/ProductPage/Loader/Loader'

const ProfileReviews = observer(() => {



    if(userStore.profileInfo == undefined) {
        return <Loader/>
    }


    return (
        <div className="profileReviews" id='ReviewsSection'>
            <div className="profileHeader">
                <p>Отзывы</p>
                <div className="profileReviewsQuantity">3</div>
            </div>
            <div className="reviewsCategoriesPanel">
                <div className="reviewsCategories">
                    <p>Популярные</p>
                    <p className='categorySelected'>Новые</p>
                    <p>Рейтинг</p>
                    <p>Цена</p>
                    <p>Скидки</p>
                </div>
                <img src="src/SortListButton.svg" className='pointer' alt="" />

            </div>
            <div className="profileReviewsContainer">
            {userStore.profileInfo.data.reviews.map( review => 
                <ProfileSingleReview key={review.date} review={review}/>
               )}
                <button className="buttonDownloadMore">
                    Загрузить ещё
                </button>
            </div>
        </div>
    )
})

export default ProfileReviews