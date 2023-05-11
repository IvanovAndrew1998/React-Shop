import React, { useState } from 'react'
import './ProfileSidebar.css'
import { observer } from 'mobx-react-lite';
import { userStore } from '../../../../../Store/UserStore';


const ProfileSidebar = observer(() => {
    


    const [avatar, setAvatar] = useState()

    if(userStore.profileInfo == undefined) {
        return <div/>
    }

    return (
        <div className="profileSidebar">
            <div className="profileSidebarTop">
                <label className='profileSidebarAvatar'>

                    <img src={userStore.profileInfo.data.userData.image} />
                    <input type="file" id='file' onChange={e => setAvatar(e.target.files[0])} style={{ display: "none" }} />

                </label>
                <div className="mainInfo">
                    <p className='profileName'>{userStore.profileInfo.data.userData.first_name}</p>
                    <p className='profilePhone'>{userStore.profileInfo.data.userData.phone_number}</p>
                </div>
            </div>
            <div className="profileSidebarBottom">
                <div className="guideSection">
                    <a href="#ProfileSection">
                        <div className="guideButton" >
                            <img src="/src/guideSection/Profile.svg" alt="" />
                            <p>Профиль</p>
                        </div>
                    </a>
                    <a href="#OrdersSection">
                        <div className="guideButton">
                            <img src="/src/guideSection/Orders.svg" alt="" />
                            <p>Заказы</p>
                        </div>
                    </a>
                    <a href="#MyCardsSection">
                        <div className="guideButton">
                            <img src="/src/guideSection/Wallet.svg" alt="" />
                            <p>Мои карты</p>
                        </div>
                    </a>
                    <a href="#MyAddressesSection">
                        <div className="guideButton">
                            <img src="/src/guideSection/Address.svg" alt="" />
                            <p>Мои адреса</p>
                        </div>
                    </a>
                    <a href="#ReviewsSection">
                        <div className="guideButton">
                            <img src="/src/guideSection/Reviews.svg" alt="" />
                            <p>Отзывы</p>
                        </div>
                    </a>
                </div>
                <div className="guideButton">
                    <img src="/src/guideSection/Logout.svg" alt="" />
                    <p>Выход</p>
                </div>

            </div>
        </div>

    )
})

export default ProfileSidebar