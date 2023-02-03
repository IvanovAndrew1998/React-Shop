import React, { useState } from 'react'
import { userStore } from '../../../../../Store/UserStore.js';

const MWCorporateClients = ({ setContentType, setActive }) => {

    const [typeToggled, setTypeToggled] = useState(true);
    const [shown, setShown] = useState('');
    function showPassword() {
        if (shown === '') {

            setTypeToggled(!typeToggled)
            setShown("shown");
        }
        else {

            setTypeToggled(!typeToggled)
            setShown('');
        }
    }

    return (
        <div>
            <div className="modalHeader">
                <p>Вход или регистрация</p>
            </div>
            <div className="selectionPanel">
                <p>Почта</p>
            </div>
            <div className="inputForm">
                <input type="text" className='emailInput' placeholder='Email' />
                <div className="passwordDiv">
                    <input type={typeToggled ? 'password' : 'text'} className="password" placeholder='Пароль'
                        onPaste={(e) => {
                            e.preventDefault()
                            return false;
                        }} />
                    <i className={"passwordIcon" + " " + shown} onClick={showPassword} />
                </div>

            </div>
            <button className='readyButton' type='submit' value='Submit' onClick={() => { userStore.logIn(); }}>Войти</button>
            <div className="bottomPanel">
                <a onClick={() => setContentType("login")}>Не корпоративный клиент</a>
                <a onClick={() => setContentType("registration")}>Регистрация</a>
            </div>
        </div>

    )
}

export default MWCorporateClients