import React from 'react'
import Sizes from './Sizes'


const RightPanel = () => {
  return (
    <div className="sec1-right">
                            <p className="article-num">Артикул: 325875</p>
                            <h2>Серебряное ожерелье</h2>
                            <div className="feedback">
                                <a href="#"><img src="src/stars.svg" alt="" /></a>
                                <a href="#feedbackLink">14 500 отзывов</a>
                                <a href="#feedbackLink"><img src="src/arrow-down.svg" alt="" /></a>

                            </div>
                            <p className="percantage">-40%</p>
                            <div className="discount">
                                <p className="price-now">74 419 р</p>
                                <p className="price-then">114 419 р</p>
                            </div>
                            <div className="partial-payment">
                                <a href="#">14 583 р / мес на 6 месяцев</a>
                                <img src="src/arrow-down2.svg" alt="" />
                            </div>
                            <div className="add-buy">
                                <button className="add">Добавить в корзину</button>
                                <button className="buy">Купить</button>
                                <img src="src/heart1.svg" alt="" />
                            </div>
                            <div className="clock-click">
                                <img src="src/clock-click.svg" alt="" />
                                <a className="drop-price" href="#">Узнать о снижении цены</a>
                            </div>
                            <p className="choose-size">
                                Выберите размер
                            </p>
                            <Sizes/>
                            <div className="learn-size">
                                <a href="#">Как узнать размер</a>
                                <img src="src/arrow-side.svg" alt="" />
                            </div>
                            <p className="description">Описание</p>
                            <div className="description-det">
                                <p>
                                    Материал ............................ <span>Серебро</span>
                                </p>
                                <p>
                                    Проба .................................... <span>925 пробы</span>
                                </p>
                                <p>
                                    Бренд .................................... <span>Sokolov</span>
                                </p>
                                <p>
                                    Страна ................................... <span>Россия</span>
                                </p>
                                <p>
                                    Вид цепи ............................. <span>Полновесная</span>
                                </p>
                                <p>
                                    Замок ..................................... <span>FS074-F9W-02 </span>
                                </p>
                                <p>
                                    Вес изделия: ..................... <span>2.36 г</span>
                                </p>
                            </div>
                            <h2 className="sokolov">SOKOLOV</h2>
                            <p className="rare-cases">В редких случаях изделие может иметь отличие от представленного на фото и в описании</p>
                        </div>
  )
}

export default RightPanel