import React from 'react'
import BasketCard from './BasketCard/BasketCard'
import './BasketPanel.css'
import data from '../../../../BasketPlaceholder.json'


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
        {data.BasketCards.map(basketCard => (
          <BasketCard 
          key = {basketCard.id}
          brandName = {basketCard.brandName}
          productName = {basketCard.productName} 
          rating = {basketCard.rating.rating}
          reviewQuantity = {basketCard.rating.reviewQuantity}
          basketSizesWeightsPrices = {basketCard.price.basketSizesWeightsPrices}
          discount = {basketCard.price.discount} 
          />

        ))}
        
      </div>
    </div>
  )
}

export default BasketPanel