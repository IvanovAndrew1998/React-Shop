import React from 'react'
import LittleProductCarouselImage from '../../../OrdersPage/OrderDetails/Components/ODupperPanel/littleProductCarouselImage/LittleProductCarouselImage';


const ProfileSingleOrder = ({ singleOrder }) => {

    function createdPretty(created) {
        const months = ['Янв', "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"]

        const date = new Date(created);
        let month = months[date.getMonth()]

        created = `${created.slice(8, 10)}` + ` ${month} ` + `${created.slice(0, 4)}`
        return created
    }

    let buttonColor;
    function orderStatusPretty(orderStatus) {

        if (orderStatus === 'Ожидает оплаты') {
            buttonColor = 'yellowButton'
            return <div className="orderStateLines">
                <span className='awaiting'></span>
                <span className=''></span>
                <span className=''></span>
            </div>
        }
        else if (orderStatus === 'В обработке') {
            buttonColor = ''
            return <div className="orderStateLines">
                <span className='orderStateReady'></span>
                <span className=''></span>
                <span className=''></span>
            </div>
        }
        else if (orderStatus === 'Доставляется') {
            buttonColor = ''
            return <div className="orderStateLines">
                <span className='orderStateReady'></span>
                <span className='orderStateReady'></span>
                <span className=''></span>
            </div>
        }
        else if (orderStatus === 'Готов к выдаче') {
            buttonColor = ''
            return <div className="orderStateLines">
                <span className='orderStateReady'></span>
                <span className='orderStateReady'></span>
                <span className='orderStateReady'></span>
            </div>
        }
        else if (orderStatus === 'Завершен') {
            buttonColor = 'greenButton'
            return <div className="orderStateLines">
                <span className='finished'></span>
                <span className='finished'></span>
                <span className='finished'></span>
            </div>
        }
    }

    return (
        <div className="orderCardSingle">
            <div className="orderCardSingleLeft">
                <div className="orderVendoreCode">
                    <p>Заказ № {singleOrder.id}</p>
                    <img src="/src/CopyButton.svg" alt="" />
                </div>
                <div className="orderName">
                    Ювелирный мир
                </div>
                <div className="orderDatePrice">

                    <p className='orderDatePriceHeader'>{singleOrder.shipment_type}</p>

                    <p className='orderDatePriceHeader'>Цена</p>

                    <p className='orderDatePriceValue'>{createdPretty(singleOrder.created)}</p>

                    <p className='orderDatePriceValue'>{singleOrder.order_sum} р</p>

                </div>
                <div className="orderStateLines">
                    {orderStatusPretty(singleOrder.order_status)}
                </div>
                <button className={"orderButtonReadyToGet" + " " + `${buttonColor}`}>
                    <img src="/src/GiftIconWhite.svg" alt="" />
                    <p>{singleOrder.order_status}</p>
                </button>
            </div>
            <div className="orderCardSingleRight">
                <LittleProductCarouselImage products={singleOrder.products} />
                <div className="orderCardSingleRightBottom">
                    <button>Повторить</button>
                    <button>Чек</button>
                </div>
            </div>
            <img className='orderAbsolute' src="/src/arrow-sideBold.svg" alt="" />
        </div>
    )
}

export default ProfileSingleOrder