import React from 'react'
import { userStore } from '../../../../../Store/UserStore.js';

const MWCorporateClients = ({setContentType, setActive}) => {
    return (
        <div>
            <div className="corporativeClient">
                <div className="modalHeaderWide">
                    <p>Регистрация корпоративных клиентов</p>
                </div>
                <div className="selectionPanel">
                    <img src="src/greyArrowLeft.svg" alt="" onClick={() => setContentType("login")}/>
                    <p>Оставьте номер телефона или почту, мы с вами свяжемся</p>
                </div>
                <div className="inputPanel">
                    <input type="text" placeholder='Email' className='emailInput' />
                </div>
                <button className='readyButton' onClick={() => { userStore.logIn(); setActive(false) }}>Готово</button>
            </div>
        </div>
    )
}

export default MWCorporateClients