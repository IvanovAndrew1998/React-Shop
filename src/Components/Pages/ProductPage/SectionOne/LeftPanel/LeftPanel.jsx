import React from 'react'
import { useState } from 'react'
import './leftPanel.css'

const LeftPanel = ({ images }) => {

  const [currentImage, setCurrentImage] = useState(images[0])

  //const otherImages = images.filter(el => el != currentImage);
  function imageQuantity() {
    if (images.length < 3) {
      return '0'
    } return `${images.length - 3}`
  }

  function imageZoom(imgId, resultId) {
    let img, lens, result, cx, cy;
    img = document.getElementById(imgId);
    result = document.getElementById(resultId);

    lens = document.createElement('DIV');
    lens.setAttribute("class", "productImgZoomLens");

    img.parentElement.insertBefore(lens, img);

    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;

    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + 'px' + (img.height * cy) + 'px';

    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);

    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);

    function moveLens(e) {
      let pos, x, y;
      pos = getCursorPos(e);
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
      if (x > img.width - lens.offsetWidth) { x = (img.width - lens.offsetWidth); }
      if (x < 0) { x = 0 ;}
      if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
      if (y < 0 ) { y = 0 ;}
      lens.style.left = x + 'px';
      lens.style.top = y + 'px';
      result.style.backgroundPosition = "-" + (x * cx) + 'px -' + (y * cy) + 'px'; 
    }
    function getCursorPos(e) {
      let a, x = 0, y = 0;
      e = e || window.event;
      a = img.getBoundingClientRect();
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x : x , y : y };
    }
  }
  imageZoom('productImage', 'productImgZoomed');


  return (
    <div className="sec1-left">
      <div className="product-small">
        {images.map((image, i) =>
          <img key={image} src={image} alt="" onClick={() => setCurrentImage(images[i])} />
        )}
        <a className="else" href="#">Еще {imageQuantity()}</a>
      </div>
      <div className="product-big">
        <img id='productImage' className='productImage' src={currentImage} alt="" />
        <div id='productImgZoomed' className="productImgZoomed"></div>
      </div>
    </div>
  )
}

export default LeftPanel