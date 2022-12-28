import React, { useState } from 'react'
import RegisterCard from '../../PRODUCTCARD/RegisterCard';
import ProductCard from '../../PRODUCTCARD/ProductCard';
import "./RecomendationBlock.css";





// function SliderShift(id, shiftLength) {
//   const slider = document.getElementById(id);
//   const cards = Array.from(slider.children);
// console.log(shiftLength)

//   cards.forEach(slide => {
//     slide.style.left = shiftLength + 'px'
//   }
//   );


// }

// function inc(id, currentCard, shiftLengthInc, shiftLength) {
//   const slider = document.getElementById(id);
//   const cards = Array.from(slider.children);

//   if (
//     currentCard < 0
//   ) {
//     currentCard++;
//     shiftLength += shiftLengthInc;
//     SliderShift(id, shiftLength);

//   }
// };

// function dec(id, currentCard, shiftLengthInc, shiftLength) {
//   const slider = document.getElementById(id);
//   const cards = Array.from(slider.children);
//   console.log(id)

//   if (
//     currentCard >= -cards.length + 5
//   ) {
//     currentCard--;
//     shiftLength -= shiftLengthInc;
//     SliderShift(id, shiftLength);

//   }
// }



const RecomendationBlock = ({ id, children }) => {

  // let currentCard = 0;
  // const shiftLengthInc = 270;
  // let shiftLength = 0;

  const [moved, setMoved] = useState(0)



  return (
    <div>
      <div className="similar-products">
        <div className="inner">
          <div className="sim-flexbox">
            <h2>Похожие изделия</h2>
            <div className="watch-all">
              <a href="#">Смотерть все</a>
              <img src="src/arrow-side.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <article className="article-2 main-version">
        <div className="inner relativePosition">
          <img className="left-arrow" src="src/mainarrow-left.svg" alt=""
          // onClick={() => inc(id, currentCard, shiftLengthInc, shiftLength)} 
          />
          <div className="article2-flexbox profile" id={id}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <RegisterCard />
          </div>
          <img className="right-arrow" src="src/mainarrow-right.svg" alt=""
          // onClick={() => dec(id, currentCard, shiftLengthInc, shiftLength)} 
          />
        </div>
      </article>
    </div>
  )
};


export default RecomendationBlock