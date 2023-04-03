import React from 'react'
import CorpSpin from './CorpSpin';

const CorpSpinPanel = ({basketSizesWeightsPrices, basket , id}) => {


  return (
    <div className='wholesalePanel'>
      {basketSizesWeightsPrices.map((singleSize) => (
        <CorpSpin 
        key={singleSize.size}
        size = {singleSize.size}
        weight = {singleSize.weight}
        originalPrice = {singleSize.originalPrice}
        discountedPrice = {singleSize.discountedPrice}
        basket = {basket}
        id = {id}
        />
      ))}
    </div>
  )
}

export default CorpSpinPanel