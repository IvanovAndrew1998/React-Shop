import React from 'react'
import './COPanel.css'
import COCard from './COCard/COCard';


const COPanel = ({ basketCards }) => {

  console.log(basketCards)

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
        {basketCards.map(corpCard =>
          <COCard 
          key = {corpCard.id}
          brandName = {corpCard.brandName}
          productName = {corpCard.productName} 
          rating = {corpCard.rating}
          reviewQuantity = {corpCard.reviewQuantity}
          sizes = {corpCard.sizes}
          discount = {corpCard.discount} 
          id = {corpCard.id}
          />
        )}

      </div>
    </div>
  )
}

export default COPanel