import React from 'react'
import {useState} from 'react'
import './leftPanel.css'

const LeftPanel = ({images}) => {
  images = [
    "src/feed-photoBUKVAODIN.png",
    "src/feed-photoBUKVADVA.png",
    "src/feed-photoBUKVATRI.png"
  ];
  const [currentImage, setCurrentImage] = useState(images[0])

  //const otherImages = images.filter(el => el != currentImage);

  return (
    <div className="sec1-left">
      <div className="product-small">
          {images.map( (image, i) => 
            <img  key={image} src={image} alt="" onClick={() => setCurrentImage(images[i])}/>
          )}
        {/* <img src="src/feed-photo.png" alt="" />
        <img src="src/feed-photo.png" alt="" /> */}
        <a className="else" href="#">Еще {images.length-3}</a>
      </div>
      <div className="product-big">
        <img className='productImage' src={currentImage} alt="" />
      </div>
    </div>
  )
}

export default LeftPanel