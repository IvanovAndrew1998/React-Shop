import React from 'react'
import './profileMyCards.css'

const ProfileMyCards = () => {
    return (
        <div>
            <div className="profileMyCards">
                <div className="profileMyCardsHeader">
                    Мои карты
                </div>
                <div className="profileMyCardsContainer">
                    <div className="profileSingleCard">
                        <p className='profileSingleCardBankName'>Сбербанк</p>
                        <p>**** 2377</p>
                        <div className="profileSingleCardBottom">
                            <img src="src/guideSection/Wallet.svg" alt="" />
                            <p>Mastercard</p>
                        </div>
                        <img className='profileSingleCardButton' src="src/deleteProfile.svg" alt="" />
                    </div>
                    <div className="profileSingleCard pointer">
                        <p className='profileSingleCardBankName'>Добавить карту</p>
                        <img className='profileSingleCardButton' src="src/Plus.svg" alt="" />

                    </div>
                </div>
            </div>
            <div className="personalDisclaimer disclaimerLessWidth">
                <img src="src/LockGray.svg" alt="" />
                <p>Информация, которую вы укажете в этом разделе, публичная. Она указывается рядом с отзывами и видна другим пользователям сети Интернет. </p>
            </div>
        </div>
    )
}

export default ProfileMyCards