import React, { useRef } from 'react'
import './ODupperPanel.css'
import './SpanColors.css'
import LittleProductCarouselImage from './littleProductCarouselImage/LittleProductCarouselImage';



const ODupperPanel = ({ id, orderID, products, shipmentType, orderStatus, orderSum, created }) => {

    const ref = useRef();


    const shiftLengthInc = 107;

    let current = 0;

    const cardAmount = products.length;

    function shiftBy(shiftLength) {
        const chld = Array.from(ref.current.products)

        chld.forEach(card => {
            card.style.left = shiftLength + 'px'

        });
    }

    function getShiftLength() {
        return current * shiftLengthInc
    }

    function inc() {

        if (current < 0) {
            current++;
            shiftBy(getShiftLength());
        }

    }

    function dec() {

        if (current > -cardAmount + 4) {
            current--;
            shiftBy(getShiftLength());
        }
    }

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
        <div className='ODupperPanel'>
            <div className="ODupperPanelLeft">
                <div className="orderCardSingleLeft">
                    <div className="orderVendoreCode">
                        <p>Заказ № {orderID}</p>
                        <img src="src/CopyButton.svg" alt="" />
                    </div>
                    <div className="orderName">
                        Ювелирный мир
                    </div>
                    <div className="orderDatePrice">

                        <p className='orderDatePriceHeader'>{shipmentType}</p>

                        <p className='orderDatePriceHeader'>Цена</p>

                        <p className='orderDatePriceValue'>{createdPretty(created)}</p>

                        <p className='orderDatePriceValue'>{orderSum} р</p>

                    </div>
                    <div >
                        {orderStatusPretty(orderStatus)}
                    </div>
                    <button className={"orderButtonReadyToGet" + " " + `${buttonColor}`}>
                        <img src="src/GiftIconWhite.svg" alt="" />
                        <p>{orderStatus}</p>
                    </button>
                </div>
            </div>
            <div className="ODupperPanelRight">
                <div className="littleProductCarousel">
                    <span className='littleProductCarouselLeft' src="src/mainarrow-left.svg" alt="" onClick={inc} />
                    <div className="littleProductCarouselTrack" id={id} ref={ref}>
                        <LittleProductCarouselImage />
                    </div>
                    <span className='littleProductCarouselRight' src="src/mainarrow-right.svg" alt="" onClick={dec} />
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