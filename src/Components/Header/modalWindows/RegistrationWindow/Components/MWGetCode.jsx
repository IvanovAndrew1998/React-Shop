import React from 'react';
import { userStore } from '../../../../../Store/UserStore.ts';

const MWGetCode = ({setContentType, setActive}) => {
    return (
        <div>
            <div className="codeEnter">
                <div className="modalHeader">
                    <p>Вход или регистрация</p>
                </div>
                <div className="selectionPanel">
                    <img src="src/greyArrowLeft.svg" alt="" onClick={() => setContentType("login")} />
                    <p>Введите код из SMS</p>
                </div>
            </div>
            <div className="inputPanel">
                <input type="text" />
                <button className="getCode" onClick={() => { userStore.logIn(); setActive(false) }} >
                    Войти
                </button>
            </div>
            <div className="timer">
                Получить новый код
            </div>
            <div className="bottomPanel">
                <a>Я корпоративный клиент</a>
                <a>Регистрация</a>
            </div>

        </div>
    )
}

export default MWGetCode