import React from 'react'
import './ProfileReviews.css'
import ProfileSingleReview from './profileSingleReview/ProfileSingleReview';

const ProfileReviews = () => {
    return (
        <div className="profileReviews">
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
                <ProfileSingleReview/>
                <button className="buttonDownloadMore">
                    Загрузить ещё
                </button>
            </div>
        </div>
    )
}

export default ProfileReviews