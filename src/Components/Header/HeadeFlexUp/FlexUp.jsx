import React, { useState } from 'react'
import RegistrationWindow from '../modalWindows/RegistrationWindow/RegistrationWindow';
import './FlexUp.css'
import SuccessWindow  from '../modalWindows/SuccesfulWindow/SuccessWindow';

const FlexUp = () => {

    const [modalActive, setModalActive] = useState(true)
    const [modalSuccessActive, setModalSuccessActive] = useState(true)

    return (
        <div className="header-flexup">
            <img className="instead-logo" src="src/insteadof-logo.svg" alt=""></img>
            <img src="src/LogoHeader.svg" className="logo" alt="#" />
            <div className="flexup-middle">
                <button className='catalogue-button'>
                    <a className="catalogue-link" href="#">Каталог</a>
                </button>
               
                <div className="inside-input">
                    <input className="site-search" type="search" id="site-search" placeholder="Поиск" />
                    <span className="x"></span>
                    <button className='find-button'>
                        <p className='catalogue-link'>Найти</p>
                    </button>
                    <span className="search-icon"></span>
                </div>
            </div>
            <div className="flexup-right">
                <img src="src/guy.svg" alt="" />
                <img src="src/clock.svg" alt="" />
                <img src="src/heart-filled.svg" alt="" />
                <div className="backet">
                    <img src="src/basket.svg" alt="" />
                    <img className="backet-number" src="src/12.svg" alt="" />
                </div>
            </div>
            {/* <RegistrationWindow active={modalActive} setActive={setModalActive}/> 
            <SuccessWindow active={modalSuccessActive} setModalActive={setModalSuccessActive}/>*/}

        </div>
    )
}

export default FlexUp