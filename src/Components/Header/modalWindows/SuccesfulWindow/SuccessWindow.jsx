import React from 'react'
import './SuccessWindow.css'

const SuccessWindow = () => {
  return (
    <div className='modal'>
        <div className="successContent">
            <div className="successHeader">
                <p>Успешно!</p>
            </div>
            <div className="successMessage">
                {/* <p>Ваш аккаунт зарегистрирован</p> */}
                <p>Наши сотрудники свяжутся с вами в ближайшее время</p>
                <p></p>
            </div>
            <button className='ContinueButton'>Продолжить</button>
        </div>
    </div>
  )
}

export default SuccessWindow