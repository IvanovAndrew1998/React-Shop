import React from 'react'
import ProductCorpSize from './ProductCorpSize';
import './ProductCorpSizePanel.css'
import sizeStore from '../../../../../../Store/ProductPageStore';

const ProductCorpSizePanel = ({ sizeArr, id }) => {
  return (
    <div className='productWholesalePanel'>
      {
        sizeArr.map(
          (size) => {
            sizeStore.addSize(size)
            return (
              <ProductCorpSize
                key={id}
                id={id}
                size={size.size}
                originalPrice={size.originalPrice}
                discountedPrice={size.discountedPrice}
              />
            )
          }
        )
      }
    </div>
  )
}

export default ProductCorpSizePanel