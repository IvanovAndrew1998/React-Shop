import React from 'react';
import InputMask from 'react-input-mask';




const RegisterCard = () => {


  return (
    <div className='cardPosition'>
      <div className="productsim-card main-last">
        
        <img className="heart-card" src="src/gift-main.png" alt="" />
        <img className="jew" src="src/main-ring.png" alt="" />
        <h2>
          Получите подарок за регистрацию
        </h2>
        <form>
          <div className="maincard-input">

          <InputMask mask="+7 (999) 999 99 99" maskChar=" "  placeholder='Номер телефона'/>




          </div>
          <button className="maincard-btn">
            Отправить код
          </button>
        </form>
        <div className="code-again">
          <img src="src/again.svg" alt="" />
          <p>
            Отправить код повторно
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterCard