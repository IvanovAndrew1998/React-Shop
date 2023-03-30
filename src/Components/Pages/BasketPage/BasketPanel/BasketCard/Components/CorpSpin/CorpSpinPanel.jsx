import React from 'react'
import CorpSpin from './CorpSpin';

const CorpSpinPanel = (basketSizesWeightsPrices) => {


  return (
    <div className='wholesalePanel'>
      {basketSizesWeightsPrices.basketSizesWeightsPrices.map((singleSize) => (
        <CorpSpin 
        key={singleSize.size}
        size = {singleSize.size}
        weight = {singleSize.weight}
        originalPrice = {singleSize.originalPrice}
        discountedPrice = {singleSize.discountedPrice}
        />
      ))}
    </div>
  )
}

export default CorpSpinPanel