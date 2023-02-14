import React from 'react'
import './OrderDetails.css'
import ODinfoPanel from './Components/ODinfoPanel/ODinfoPanel'
import ODupperPanel from './Components/ODupperPanel/ODupperPanel'
import ProductCard from '../../PRODUCTCARD/ProductCard';
import LittleProductCarouselImage from './Components/ODupperPanel/littleProductCarouselImage/LittleProductCarouselImage';

const OrderDetails = () => {


  return (
    <div className='OrderDetails'>
      <ODupperPanel id='orderedProducts'>
        <LittleProductCarouselImage />
        <LittleProductCarouselImage />
        <LittleProductCarouselImage />
        <LittleProductCarouselImage />
        <LittleProductCarouselImage />
        <LittleProductCarouselImage />
      </ODupperPanel>
      <ODinfoPanel />
      <div className="ODgrid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default OrderDetails