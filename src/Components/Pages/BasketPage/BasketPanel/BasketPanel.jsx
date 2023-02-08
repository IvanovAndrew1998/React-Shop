import React from 'react'
import BasketCard from './BasketCard/BasketCard'
import './BasketPanel.css'



const BasketPanel = () => {
  return (
    <div className='BasketPanel'>
      <div className="panelHeader">
        <div className="left">
          <p>Корзина</p>
        </div>
        <div className="right">
          <p className='orangeHeader'>Очистить корзину</p>
          <img src="src/orange-cross.svg" alt="" />
        </div>
      </div>
      <div className="basket-flexbox">
        <BasketCard/>
        {/* <BasketCard/> */}
      </div>
    </div>
  )
}

export default BasketPanel