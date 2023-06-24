import React from 'react'
import ProductCorpSize from './ProductCorpSize';
import './ProductCorpSizePanel.css'

const ProductCorpSizePanel = ({ sizeArr, id }) => {
  const generateUniqueId = (() => {
    let counter = 0;
    return () => {
      counter++;
      return counter;
    };
  })();

  const products = sizeArr.map((sizeSingle) => {
    const id = generateUniqueId();
    return {
      id,
      size: sizeSingle.size,
      originalPrice: sizeSingle.original_price,
      discountedPrice: sizeSingle.discounted_price,
    };
  });

  return (
    <div className='productWholesalePanel'>
      {products.map((product) => (
        <ProductCorpSize
          key={product.id}
          id={product.id}
          size={product.size}
          originalPrice={product.originalPrice}
          discountedPrice={product.discountedPrice}
        />
      ))}
    </div>
  )
}

export default ProductCorpSizePanel