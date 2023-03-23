import React from 'react'
import '../../BasketPage/BasketSidebar/BasketSidebar.css'


const COSidebar = () => {
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
            Подать заявку
          </div>
          <p className='disclaimer'>Окончательная стоимость может отличаться и будет подтверждена после рассмотрения заявки</p>
        </div>
      </div>
      
    </div>
  )
}

export default COSidebar