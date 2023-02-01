import React from 'react'
import InputMask from 'react-input-mask';

const MWLogin = ({setContentType}) => {
  return (
    <div>
              <div className="modalHeader">
                <p>Вход или регистрация</p>
              </div>
              <div className="selectionPanel">
                <p>Телефон</p>
              </div>
              <div className="inputPanel">
                <InputMask mask="+7 (999) 999 99 99" maskChar=" " />
                <button className="getCode" onClick={() => setContentType("getCode")}>
                  Получить код
                </button>
              </div>
              <div className="agreement">
                <label class="container">
                  <input type="checkbox" />
                  <span class="mark"></span>
                </label>
                <p>Даю согласие на обработку персонадльных данных, и принимаю  <a href=''>пользовательское соглашение</a></p>
              </div>
              <p className='modalDescription'>Нажимая «Получить код», я соглашаюсь с условиями участия в Клубе SUNLIGHT, политикой конфиденциальности и подтверждаю согласие на получение сообщений рекламного характера. Отказаться от рассылки можно в личном кабинете.</p>
              <div className="bottomPanel">
                <a onClick={() => setContentType("corporative")}>Я корпоративный клиент</a>
                <a onClick={() => setContentType("registration")}>Регистрация</a>
              </div>
            </div>
  )
}

export default MWLogin