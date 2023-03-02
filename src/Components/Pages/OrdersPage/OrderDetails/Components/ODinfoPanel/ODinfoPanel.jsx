import React from 'react'
import './ODinfoPanel.css'
import { userStore } from '../../../../../../Store/UserStore'

const ODinfoPanel = ({recieverName, recieverEmail, recieverPhone, shippingAddress}) => {



    return (
        <div className='ODinfoPanel'>
            <div className="ODinfoPanelLeft">
                <div className="ODIitem alignStart">
                    <img src="src/guideSection/Profile.svg" alt="" />
                    <div className="ODinfoPanelText">
                        <p className='ODinfoPanelHeaderP'>Получатель</p>
                        <p className="ODInfoPanelP">{recieverName}</p>
                        <p className='ODInfoPanelP'>{recieverPhone}</p>
                    </div>
                </div>
                <div className="ODIitem">
                    <img src="src/guideSection/Orders.svg" alt="" />
                    <div>
                        <p className='ODinfoPanelHeaderP'>Доставка</p>
                        <p className='ODInfoPanelP'>0 р</p>
                    </div>
                </div>
                <div className="ODIitem">
                    <img src="src/guideSection/CubeIcon.svg" alt="" />
                    <div>
                        <p className='ODinfoPanelHeaderP'>Товары</p>
                        <p className='ODInfoPanelP'>{userStore.ordersInfo.data.count} шт</p>
                    </div>
                </div>
            </div>

            <div className="ODinfoPanelRight">
                <div className="ODIitem alignStart">
                    <img src="src/LocationBlue.svg" alt="" />

                    <div className="ODinfoPanelText">
                        <p className='ODinfoPanelHeaderP'>Пункт выдачи</p>
                        <p className="ODInfoPanelP">{shippingAddress}</p>
                    </div>
                </div>
                <div className="ODIitem">
                    <img src="src/guideSection/ClockIcon.svg" alt="" />
                    <div className="workingHours">
                        <div>
                            <p className='ODinfoPanelHeaderP'>Пн-Пт</p>
                            <p className='ODInfoPanelP'>10:30 - 19:30</p>
                        </div>
                        <div>
                            <p className='ODinfoPanelHeaderP'>Сб-Вс</p>
                            <p className='ODInfoPanelP'>09:00 - 16:00</p>
                        </div>
                    </div>

                </div>
                <div className="ODIitem">
                    <img src="src/guideSection/CalendarIcon.svg" alt="" />
                    <div>
                        <p className='ODinfoPanelHeaderP'>Срок хранения заказа</p>
                        <p className='ODInfoPanelP'>5 дней</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ODinfoPanel