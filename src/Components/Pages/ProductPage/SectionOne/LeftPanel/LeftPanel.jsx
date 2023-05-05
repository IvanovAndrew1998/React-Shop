import React from 'react'
import { useState } from 'react'
import {
  GlassMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";
import './leftPanel.css'

const LeftPanel = ({ images }) => {
  
  const [currentImage, setCurrentImage] = useState(images[0])

  //const otherImages = images.filter(el => el != currentImage);
  function imageQuantity() {
    if (images.length < 3) {
      return '0'
    } return `${images.length - 3}`
  }

  

 


  return (
    <div className="sec1-left">
      <div className="product-small">
        {images.map((image, i) =>
          <img key={image} src={image} alt="" onClick={() => setCurrentImage(images[i])} />
        )}
        <a className="else" href="#">Еще {imageQuantity()}</a>
      </div>
      <div id='parentImage' className="productImage">
        <GlassMagnifier
          imageSrc={currentImage}
          magnifierBorderColor={'#FF8B66'}
          magnifierBorderSize={1}
          magnifierSize={'40%'}

          
        />
        {/* <img id='productImage' className='productImage' src={currentImage} alt="" /> */}

      </div>
    </div>
  )
}

export default LeftPanel