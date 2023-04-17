import { observer } from 'mobx-react-lite'
import React, { useState, useEffect } from 'react'
import './BasketSidebar.css'
import { useNavigate } from 'react-router-dom';
import PromoCode from '../BasketPanel/BasketCard/Components/PromoCode/PromoCode';


const BasketSidebar = observer(({basket, corpClient}) => {

  const navigate = useNavigate();

  const handleOrder = () => {
    navigate('/corpOrder', { state: { data: basket.overAllPrice } });
 
  }

  return (
    <div>
      <div className="sidebarHeader">
        <p>В избранное</p>
        <img src="src/arrow-sideBold.svg" alt="" />
      </div>
      <div className="summaryBlock">
        <div className="total">
          <p > Итого</p>
          <p className='totalPrice'>{basket.overAllPrice[1]} р</p>
        </div>
        <div className="parameters">

          <div className="quantity">
            <p>Товары.....................................................</p>
            <p className='parametersTotal'> {basket.overAllPrice[2]} шт</p>
          </div>
          <div className="quantity">
            <p>Скидка..................................................</p>
            <p className='parametersTotal'>{basket.overAllPrice[0] - basket.overAllPrice[1]} р</p>
          </div>
          <div className="quantity">
            <p>Промокод................................................</p>
            <p className='parametersTotal'> Применен</p>
          </div>
          <div className="checkOutButton" onClick={handleOrder}>
            Перейти к оформлению
          </div>
          <p className='disclaimer'>Окончательная стоимость может отличаться и будет подтверждена после рассмотрения заявки</p>
        </div>
      </div>
     {corpClient === true
     ?
     <div></div>
     :
     <PromoCode/>}
    </div>
  )
})

export default BasketSidebar