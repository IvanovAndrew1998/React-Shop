import React from 'react'
import ProductCorpSize from './ProductCorpSize';
import './ProductCorpSizePanel.css'

const ProductCorpSizePanel = ({ sizeArr }) => {
  return (
    <div className='productWholesalePanel'>
      {sizeArr.map((sizeSingle) => (
        <ProductCorpSize
          key={sizeSingle.size}
          size={sizeSingle.size}
          originalPrice={sizeSingle.original_price}
          discountedPrice={sizeSingle.discounted_price}
        />
      ))}

    </div>
  )
}

export default ProductCorpSizePanel