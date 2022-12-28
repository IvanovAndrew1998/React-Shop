import React from 'react'

const FlexUp = () => {
    return (
        <div className="header-flexup">
            <img class="instead-logo" src="src/insteadof-logo.svg" alt=""></img>
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
        </div>
    )
}

export default FlexUp