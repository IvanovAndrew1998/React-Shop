import React from 'react'
import CorpSpin from './CorpSpin';

const CorpSpinPanel = ({sizes, basket , id}) => {

  if(sizes === undefined) {
    return <></>
}

  return (
    <div className='wholesalePanel'>
      {sizes.map((singleSize) => (
        <CorpSpin 
        key={singleSize.size}
        size = {singleSize.size}
        originalPrice = {singleSize.original_price}
        discountedPrice = {singleSize.discounted_price}
        basket = {basket}
        initCount = {singleSize.count}
        id = {id}
        />
      ))}
    </div>
  )
}

export default CorpSpinPanel