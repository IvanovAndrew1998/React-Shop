import React from 'react'
import './ODupperPanel.css'

const ODupperPanel = () => {
    return (
        <div className='ODupperPanel'>
            <div className="ODupperPanelLeft">
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
            </div>
            <div className="ODupperPanelRight">
                <div className="littleProductCarousel">
                    <img className='littleProductCarouselLeft' src="src/mainarrow-left.svg" alt="" />
                    <div className="littleProductCarouselTrack">
                        <div className="littleProductCarouselImage">
                            <img src="src/orderProductImage1.svg" alt="" />
                            <div className="orderProductQuantity">
                                <p>13</p>
                            </div>
                        </div>
                        <div className="littleProductCarouselImage">
                            <img src="src/orderProductImage2.svg" alt="" />
                            <div className="orderProductQuantity">
                                <p>7</p>
                            </div>
                        </div>
                        <div className="littleProductCarouselImage">
                            <img src="src/orderProductImage3.svg" alt="" />
                            <div className="orderProductQuantity">
                                <p>1</p>
                            </div>
                        </div>
                        <div className="littleProductCarouselImage">
                            <img src="src/orderProductImage3.svg" alt="" />
                            <div className="orderProductQuantity">
                                <p>1</p>
                            </div>
                        </div>
                        <div className="littleProductCarouselImage">
                            <img src="src/orderProductImage3.svg" alt="" />
                            <div className="orderProductQuantity">
                                <p>1</p>
                            </div>
                        </div>
                        <div className="littleProductCarouselImage">
                            <img src="src/orderProductImage3.svg" alt="" />
                            <div className="orderProductQuantity">
                                <p>1</p>
                            </div>
                        </div>

                    </div>
                    <img className='littleProductCarouselRight' src="src/mainarrow-right.svg" alt="" />
                </div>
                <div className="ODupperPanelRightButtons">
                    <div className="ODupperPanelRepeatCancel">
                        <button className='ODUbutton'>Повторить</button>
                        <button className='ODUbutton'>Отмена</button>
                    </div>
                    <button className='ODUbutton'>Чек</button>
                </div>
            </div>
        </div>
    )
}

export default ODupperPanel