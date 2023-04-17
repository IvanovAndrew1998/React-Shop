import React from 'react'
import './ProfileOrders.css'
import ProfileSingleOrder from './ProfileSingleOrder'

const ProfileOrders = ({ orders }) => {
    return (
        <div className="profileOrders" id='OrdersSection'>
            <div className="profileHeader">Заказы</div>
            <div className="orderCategories">
                <p>Все</p>
                <p className='orderCategoriesSelected'>Можно забрать</p>
                <p>В пути</p>
                <p>Сборка заказа</p>
                <p>Ожидает оплаты</p>
                <p>Получен</p>
            </div>
            <div className="ordedByYearContainer">
                <div className="orderByYearSingle orderByYearSingle_Selected">2023</div>
                <div className="orderByYearSingle">2022</div>
                <div className="orderByYearSingle">2021</div>
                <div className="orderByYearSingle">2020</div>
            </div>
            <div className="ordersContainer">
                {orders.map(singleOrder =>
                    <ProfileSingleOrder singleOrder={singleOrder} key={singleOrder.id}/>
                )}
                <button className="buttonDownloadMore">
                    Загрузить ещё
                </button>
            </div>
        </div>
    )
}

export default ProfileOrders