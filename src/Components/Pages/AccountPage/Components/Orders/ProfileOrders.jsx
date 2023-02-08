import React from 'react'
import './ProfileOrders.css'

const ProfileOrders = () => {
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
                <div className="orderCardSingle">
                    <div className="orderCardSingleLeft">
                        <div className="orderVendoreCode">
                            <p>Заказ № 897876432</p>
                            <img src="src/CopyButton.svg" alt="" />
                        </div>
                        <div className="orderName">
                            Ювелирный мир
                        </div>
                        <div className="orderDatePrice">
                            <div className="orderDatePriceLeft">
                                <p className='orderDatePriceHeader'>Самовывоз</p>
                                <p className='orderDatePriceValue'>24 Окт 2023</p>
                            </div>
                            <div className="orderDatePriceRight">
                                <p className='orderDatePriceHeader'>Цена</p>
                                <p className='orderDatePriceValue'>40 870 р</p>
                            </div>
                        </div>
                        <div className="orderStateLines">
                            <span className='orderStateReady'></span>
                            <span className='orderStateReady'></span>
                            <span></span>
                        </div>
                        <button className="orderButtonReadyToGet">
                            <img src="src/GiftIconWhite.svg" alt="" />
                            <p>Можно забрать</p>
                        </button>
                    </div>
                    <div className="orderCardSingleRight">
                        <div className="orderCardSingleRightTop">
                            <div className="orderProductImage">
                                <img src="src/orderProductImage1.svg" alt="" />
                                <div className="orderProductQuantity">
                                    <p>13</p>
                                </div>
                            </div>
                            <div className="orderProductImage">
                                <img src="src/orderProductImage2.svg" alt="" />
                                <div className="orderProductQuantity">
                                    <p>7</p>
                                </div>
                            </div>
                            <div className="orderProductImage">
                                <img src="src/orderProductImage3.svg" alt="" />
                                <div className="orderProductQuantity">
                                    <p>1</p>
                                </div>
                            </div>
                            <div className="orderProductMore">
                                <p>Ещё 2</p>
                            </div>
                        </div>
                        <div className="orderCardSingleRightBottom">
                            <button>Повторить</button>
                            <button>Чек</button>
                        </div>
                    </div>
                    <img className='orderAbsolute' src="src/arrow-sideBold.svg" alt="" />
                </div>
                <button className="buttonDownloadMore">
                    Загрузить ещё
                </button>
            </div>
        </div>
    )
}

export default ProfileOrders