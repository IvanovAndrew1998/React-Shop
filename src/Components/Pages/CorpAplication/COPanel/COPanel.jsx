import React from 'react'
import './COPanel.css'
import COCard from './COCard/COCard';

const COPanel = () => {
  return (
    <div className='BasketPanel'>
      <div className="panelHeader">
        <div className="left">
          <p>Текущая заявка</p>
        </div>
        <div className="right">
          <p className='orangeHeader'>Очистить корзину</p>
          <img src="src/orange-cross.svg" alt="" />
        </div>
      </div>
      <div className="basket-flexbox">
        <COCard/>
      </div>
    </div>
  )
}

export default COPanel