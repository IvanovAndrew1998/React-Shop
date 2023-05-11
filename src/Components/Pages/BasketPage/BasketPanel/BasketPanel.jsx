import React from 'react'
import BasketCard from './BasketCard/BasketCard'
import './BasketPanel.css'
import { observer } from 'mobx-react-lite';



const BasketPanel = observer(({basket}) => {


  
  return (
    <div className='BasketPanel'>
      <div className="panelHeader">
        <div className="left">
          <p>Корзина</p>
        </div>
        <div className="right">
          {/* <p className='orangeHeader'>Очистить корзину</p>
          <img src="/src/orange-cross.svg" alt="" /> */}
        </div>
      </div>
      <div className="basket-flexbox">
        {basket.basket.map(basketCard => (
          <BasketCard 
          key = {basketCard.id}
          brandName = {basketCard.brandName}
          productName = {basketCard.productName} 
          rating = {basketCard.rating}
          reviewQuantity = {basketCard.reviewQuantity}
          sizes = {basketCard.sizes}
          discount = {basketCard.discount} 
          basket = {basket}
          id = {basketCard.id}
          />

        ))}
        
      </div>
    </div>
  )
})  

export default BasketPanel