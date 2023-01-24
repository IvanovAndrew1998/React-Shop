import React from 'react'
import './ProfileSidebar.css'

const ProfileSidebar = () => {
    return (
        <div className="profileSidebar">
            <div className="profileSidebarTop">
                <img src="src/guy.svg" alt="" />
                <div className="mainInfo">
                    <p className='profileName'>Алексей</p>
                    <p className='profilePhone'>+7 (892) 654 78 90</p>
                </div>
            </div>
            <div className="profileSidebarBottom">
                <div className="guideSection">
                    <div className="guideButton">
                        <img src="src/guideSection/Profile.svg" alt="" />
                        <p>Профиль</p>
                    </div>
                    <div className="guideButton">
                        <img src="src/guideSection/Orders.svg" alt="" />
                        <p>Заказы</p>
                    </div>
                    <div className="guideButton">
                        <img src="src/guideSection/Wallet.svg" alt="" />
                        <p>Мои карты</p>
                    </div>
                    <div className="guideButton">
                        <img src="src/guideSection/Address.svg" alt="" />
                        <p>Мои адреса</p>
                    </div>
                    <div className="guideButton">
                        <img src="src/guideSection/Discounts.svg" alt="" />
                        <p>Скидки</p>
                    </div>
                    <div className="guideButton">
                        <img src="src/guideSection/Reviews.svg" alt="" />
                        <p>Отзывы</p>
                    </div>
                </div>
                <div className="guideButton">
                    <img src="src/guideSection/Logout.svg" alt="" />
                    <p>Выход</p>
                </div>

            </div>
        </div>
        
    )
}

export default ProfileSidebar