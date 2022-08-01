import React from 'react'

const FlexUp = () => {
  return (
    <div className="header-flexup">
                        <img src="src/Logo.svg" className="logo" alt="#" />
                        <div className="flexup-middle">
                            <a className="catalogue-link" href="#">Каталог</a>
                            <div className="inside-input">
                                <input className="site-search" type="search" id="site-search" placeholder="Поиск" />
                                <span className="x"></span>
                                <span className="search-icon"></span>
                            </div>
                        </div>
                        <div className="flexup-right">
                            <img src="src/guy.svg" alt="" />
                            <img src="src/clock.svg" alt="" />
                            <img src="src/heart.svg" alt="" />
                            <div className="backet">
                                <img src="src/basket.svg" alt="" />
                                <img className="backet-number" src="src/12.svg" alt="" />
                            </div>
                        </div>
                    </div>
  )
}

export default FlexUp