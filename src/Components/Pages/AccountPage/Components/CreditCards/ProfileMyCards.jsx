import React, { useRef } from 'react'
import './profileMyCards.css'
import { observer } from 'mobx-react-lite'




const ProfileMyCards = observer(({ children }) => {

  function isScrollable(children) {
    let scrollable;
    if (children[0].length < 3) {
      scrollable = false
    } else { scrollable = true }
    return scrollable
  }
  isScrollable(children);

  const ref = useRef();


  const shiftLengthInc = 260;

  let current = 0;

  const cardAmount = children[0].length;

  function shiftBy(shiftLength) {
    const chld = Array.from(ref.current.children)

    chld.forEach(card => {
      card.style.left = shiftLength + 'px'

    });
  }

  function getShiftLength() {
    return current * shiftLengthInc
  }

  function inc() {

    if (current < 0) {
      current++;
      shiftBy(getShiftLength());
    }

  }

  function dec() {

    if (current > -cardAmount + 2) {
      current--;
      shiftBy(getShiftLength());
    }
  }
  

  return (
    <div className='profileMyCardsBlock'>
      <div className="profileMyCards" id='MyCardsSection'>
        <div className="profileMyCardsHeader">
          Мои карты
        </div>
        <div className="outerContainer">

          <img className={`outerContainerLeft-arrow` + ` ${isScrollable(children) ? 'pointer' : 'unScrollable'}`} src="/src/mainarrow-left.svg" alt=""
            onClick={inc}
          />

          <div className="profileMyCardsContainer" onChange={isScrollable(children)} ref={ref}>

            {children}

          </div>


          <img className={`outerContainerRight-arrow` + ` ${isScrollable(children) ? 'pointer' : 'unScrollable'}`} src="/src/mainarrow-right.svg" alt=""
            onClick={dec}
          />

        </div>
      </div>
      <div className="personalDisclaimer disclaimerLessWidth">
        <img src="/src/LockGray.svg" alt="" />
        <p>Информация, которую вы укажете в этом разделе, публичная. Она указывается рядом с отзывами и видна другим пользователям сети Интернет. </p>
      </div>
    </div>
  )
})

export default ProfileMyCards