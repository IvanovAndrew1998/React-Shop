import React, { useRef } from 'react'

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

  const ref = useRef();


  const shiftLengthInc = 270;

  let current = 0;

  const cardAmount = children.length;

  function shiftBy(shiftLength) {
    const chld = Array.from(ref.current.children)

    chld.forEach(card => {
      card.style.left = shiftLength + 'px'
      
    });
  }

  function getShiftLength() {
    return current*shiftLengthInc
  }

  function inc() {

    if (current < 0) {
      current++;
      shiftBy(getShiftLength());
      console.log (current);
    }
    
  }

  function dec() {

    if (current > -cardAmount+4) {
      current--;
      shiftBy(getShiftLength());
      console.log (current)
    }
  }



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
          onClick={inc} 
          />
          <div className="article2-flexbox profile" id={id} ref={ref}>
            {children}
          </div>
          <img className="right-arrow" src="src/mainarrow-right.svg" alt=""
          onClick={dec} 
          />
        </div>
      </article>
    </div>
  )
};


export default RecomendationBlock