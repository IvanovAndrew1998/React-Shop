import React, { useRef } from 'react'
import './ODupperPanel.css'



const ODupperPanel = ({id, children}) => {

    const ref = useRef();


    const shiftLengthInc = 107;
  
    let current = 0;
  
    const cardAmount = children.length;
  
    function shiftBy(shiftLength) {
      const chld = Array.from(ref.current.children)
  
      chld.forEach(card => {
        card.style.left = shiftLength + 'px'
        
      });
    }
  
    function getShiftLength() {
      return current*shiftLengthInc
    }
  
    function inc() {
  
      if (current < 0) {
        current++;
        shiftBy(getShiftLength());
        console.log (current);
      }
      
    }
  
    function dec() {
  
      if (current > -cardAmount+4) {
        current--;
        shiftBy(getShiftLength());
        console.log (current)
      }
    }




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
                    <span className='littleProductCarouselLeft' src="src/mainarrow-left.svg" alt="" onClick={inc} />
                    <div className="littleProductCarouselTrack" id={id} ref={ref}>
                        {children}
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