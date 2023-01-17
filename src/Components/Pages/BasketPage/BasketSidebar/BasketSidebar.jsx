import React from 'react'
import './BasketSidebar.css'

const BasketSidebar = () => {
  return (
    <div>
      <div className="sidebarHeader">
        <p>В избранное</p>
        <img src="src/arrow-sideBold.svg" alt="" />
      </div>
      <div className="summaryBlock">
        <div className="total">
          <p > Итого</p>
          <p className='totalPrice'>12 300 р</p>
        </div>
        <div className="parameters">

          <div className="quantity">
            <p>Товары.....................................................</p>
            <p className='parametersTotal'> 2 шт</p>
          </div>
          <div className="quantity">
            <p>Скидка..................................................</p>
            <p className='parametersTotal'> 5 140 р</p>
          </div>
          <div className="quantity">
            <p>Промокод................................................</p>
            <p className='parametersTotal'> Применен</p>
          </div>
          <div className="checkOutButton">
            Перейти к оформлению
          </div>
          <p className='disclaimer'>Доступные способы и время доставки можно выбрать при оформлении заказа</p>
        </div>
      </div>
      <div className="promoCodeBlock">
        <input type="text"  className='promoCodeInput'/>
        <button className="promoSend">Промокод применен</button>
      </div>
    </div>
  )
}

export default BasketSidebar