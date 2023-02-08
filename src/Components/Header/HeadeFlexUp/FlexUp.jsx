import React, { useState, useEffect, useRef } from 'react'
import RegistrationWindow from '../modalWindows/RegistrationWindow/RegistrationWindow';
import './FlexUp.css'
import SuccessWindow from '../modalWindows/SuccesfulWindow/SuccessWindow';
import DDorder from './DDItems/DDorder';
import DDdiscount from './DDItems/DDdiscount';
import { listClasses } from '@mui/material';
import headerDiscounts from './DDdiscountsBackPlaceholder';
import headerOrders from './DDordersBackPlaceholder';
import { userStore } from '../../../Store/UserStore.js';
import { observer } from 'mobx-react-lite';


const FlexUp = observer(() => {

    const [listHeaderOrders, setListHeaderOrders] = useState(headerOrders);
    function removeOrderItem(id) {
        setListHeaderOrders(listHeaderOrders.filter(dataO => dataO.id != id))
    }

    const [listHeaderDiscounts, setListHeaderDiscounts] = useState(headerDiscounts);
    function removeItem(id) {
        setListHeaderDiscounts(listHeaderDiscounts.filter(data => data.id != id))

    }


    const [modalActive, setModalActive] = useState(false)
    const [modalSuccessActive, setModalSuccessActive] = useState(true)
    const [DDopen, setDDopen] = useState(false)
    const [DDOrdersOpen, setDDOrdersOpen] = useState(false)
    const [tabToggle, setTabToggle] = useState(1);


    let menuRef = useRef();
    let ordersRef = useRef()

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setDDopen(false);
            }

        }

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    useEffect(() => {
        let handler = (e) => {
            if (!ordersRef.current.contains(e.target)) {
                setDDOrdersOpen(false);
            }

        }

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    const toggleFunc = (index) => {
        setTabToggle(index)
    }


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
                {
                    userStore.logedIn
                        ?

                        <><div className="dropdownContainer" ref={menuRef}>
                            <img src="src/guy.svg" alt="" onClick={() => { setDDopen(!DDopen) }} />
                            <div className={`dropdownMenu ${DDopen ? 'active' : 'inactive'}`}>
                                <ul>
                                    <li>
                                        <img src="src/guideSection/Profile.svg" alt="" />
                                        <a href="">Профиль</a>
                                    </li>
                                    <li>
                                        <img src="src/guideSection/Orders.svg" alt="" />
                                        <a href="">Заказы</a>
                                    </li>
                                    <li>
                                        <img src="src/guideSection/heartGray.svg" alt="" />
                                        <a href="">Избранное</a>
                                        <div className="notificationQuantity">
                                            <p>13</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="src/guideSection/Basket.svg" alt="" />
                                        <a href="">Корзина</a>
                                        <div className="notificationQuantity">
                                            <p>6</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="src/guideSection/Discounts.svg" alt="" />
                                        <a href="">Скидки</a>
                                        <div className="notificationQuantity">
                                            <p>322</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="src/guideSection/Reviews.svg" alt="" />
                                        <a href="">Комментарии</a>
                                    </li>
                                    <li onClick={() => userStore.logOut()}>
                                        <img src="src/guideSection/Logout.svg" alt="" />
                                        <a href="">Выйти</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                            <div className="notificationContainer" ref={ordersRef}>
                                <img src="src/clock.svg" alt="" onClick={() => { setDDOrdersOpen(!DDOrdersOpen) }} />
                                <div className={`dropdownOrders ${DDOrdersOpen ? 'active' : 'inactive'}`}>
                                    <div className="DDOheaderPanel">
                                        <div className={tabToggle === 1 ? "DDOheaderButton DDOselected" : "DDOheaderButton"} onClick={() => toggleFunc(1)}>
                                            Заказы
                                        </div>
                                        <div className={tabToggle === 2 ? "DDOheaderButton DDOselected" : "DDOheaderButton"} onClick={() => toggleFunc(2)}>
                                            Скидки
                                        </div>
                                    </div>
                                    <ul className={tabToggle === 1 ? 'DDContent DDActiveContent' : "DDContent"}>
                                        {
                                            listHeaderOrders.length !== 0
                                                ?
                                                <>
                                                    {listHeaderOrders.map(dataO => {
                                                        return (
                                                            <DDorder dataO={dataO} orderDeleteCallBack={removeOrderItem} />
                                                        )
                                                    })}
                                                    <button className='clearAllBtn' onClick={() => setListHeaderOrders([])} >Очистить список</button>
                                                </>
                                                :
                                                <div className='EmptyList'>
                                                    <div className="EmptyListIcon">
                                                        <img src="src/guideSection/DiscountsBlue.svg" alt="" />
                                                    </div>
                                                    <h2>У вас пока нет заказов</h2>
                                                    <p>Найдите то, что вам нравится в каталоге или вопользуйтесь поиском</p>
                                                </div>
                                        }
                                    </ul>
                                    <ul className={tabToggle === 2 ? 'DDContent DDActiveContent' : "DDContent"}>
                                        {
                                            listHeaderDiscounts.length !== 0
                                                ?
                                                <>
                                                    {listHeaderDiscounts.map(data => {
                                                        return (
                                                            <DDdiscount data={data} deleteCallBack={removeItem} />

                                                        )
                                                    })}
                                                    <button className='clearAllBtn' onClick={() => setListHeaderDiscounts([])} >Очистить список</button>
                                                </>
                                                :
                                                <div className='EmptyList'>
                                                    <div className="EmptyListIcon">
                                                        <img src="src/guideSection/DiscountsBlue.svg" alt="" />
                                                    </div>
                                                    <h2>Узнать о снижении цены</h2>
                                                    <p className='EmptyListMargin'>Эту функцию можно найти на странице товара</p>
                                                </div>
                                        }
                                    </ul>
                                </div>
                            </div>
                            <img src="src/heart-filled.svg" alt="" />
                            <div className="backet">
                                <img src="src/basket.svg" alt="" />
                                <img className="backet-number" src="src/12.svg" alt="" />
                            </div></>
                        : <button className='signIn' onClick={() => setModalActive(true)} >Войти</button>
                }
            </div>
            <RegistrationWindow active={modalActive} setActive={setModalActive} />
            {/* <SuccessWindow active={modalSuccessActive} setModalActive={setModalSuccessActive}/> */}

        </div>
    )
})

export default FlexUp