import React, { useState, useEffect, useRef } from 'react'
import RegistrationWindow from '../modalWindows/RegistrationWindow/RegistrationWindow';
import './FlexUp.css'
import SuccessWindow from '../modalWindows/SuccesfulWindow/SuccessWindow';

import { listClasses } from '@mui/material';

import { userStore } from '../../../Store/UserStore.js';
import { observer } from 'mobx-react-lite';
import DDListOrder from './DDLists/DDListOrder';
import DDListDiscount from './DDLists/DDListDiscount';
import { Link } from 'react-router-dom';
import Loader from '../../Pages/ProductPage/Loader/Loader';
import BasketNumber from './BasketNumber/BasketNumber';
import NotificationNumber from './NotificationNumber/NotificationNumber';


const FlexUp = observer(() => {




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
            <Link to='/'>
                <img src="src/LogoHeader.svg" className="logo" alt="#" />
            </Link>
            <div className="flexup-middle">
                <Link className="catalogue-link" to='/catalogue'>
                    <button className='catalogue-button'>
                        <p className="catalogue-link">
                            Каталог
                        </p>
                    </button>
                </Link>

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
                    userStore.loggedIn
                        ?

                        <><div className="dropdownContainer" ref={menuRef}>
                            <img className='headerAvatar'
                                src={userStore.headerAvatar}
                                alt=""
                                onClick={() => { setDDopen(!DDopen) }} />
                            <div className={`dropdownMenu ${DDopen ? 'active' : 'inactive'}`}>
                                <ul>
                                    <li>
                                        <Link to='/profile' className='dropdownMenuLink'>
                                            <img src="src/guideSection/Profile.svg" alt="" />
                                            <a href="">Профиль</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/orders' className='dropdownMenuLink'>
                                            <img src="src/guideSection/Orders.svg" alt="" />
                                            <a href="">Заказы</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/basket' className='dropdownMenuLink'>
                                            <img src="src/guideSection/heartGray.svg" alt="" />
                                            <a href="">Избранное</a>
                                            <div className="notificationQuantity">
                                                <p>13</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/basket' className='dropdownMenuLink'>
                                            <img src="src/guideSection/Basket.svg" alt="" />
                                            <a href="">Корзина</a>
                                            <div className="notificationQuantity">
                                                <p>6</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/basket' className='dropdownMenuLink'>
                                            <img src="src/guideSection/Discounts.svg" alt="" />
                                            <a href="">Скидки</a>
                                            <div className="notificationQuantity">
                                                <p>322</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/profile' className='dropdownMenuLink'>
                                            <img src="src/guideSection/Reviews.svg" alt="" />
                                            <a href="">Комментарии</a>
                                        </Link>
                                    </li>
                                    <li onClick={() => userStore.logOut()}>
                                        <div className="dropdownMenuLink">
                                            <img src="src/guideSection/Logout.svg" alt="" />
                                            <a href="">Выйти</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                            <div className="notificationContainer" ref={ordersRef}>
                                <img src="src/clock.svg" alt="" onClick={() => { setDDOrdersOpen(!DDOrdersOpen) }} />
                                <NotificationNumber />
                                <div className={`dropdownOrders ${DDOrdersOpen ? 'active' : 'inactive'}`}>
                                    <div className="DDOheaderPanel">
                                        <div className={tabToggle === 1 ? "DDOheaderButton DDOselected" : "DDOheaderButton"} onClick={() => toggleFunc(1)}>
                                            Заказы
                                        </div>
                                        <div className={tabToggle === 2 ? "DDOheaderButton DDOselected" : "DDOheaderButton"} onClick={() => toggleFunc(2)}>
                                            Скидки
                                        </div>
                                    </div>
                                    <div className={tabToggle === 1 ? 'DDContent DDActiveContent' : "DDContent"}>

                                        <DDListOrder />

                                    </div>
                                    <div className={tabToggle === 2 ? 'DDContent DDActiveContent' : "DDContent"}>

                                        <DDListDiscount />

                                    </div>
                                </div>
                            </div>
                            <img src="src/heart-filled.svg" alt="" />
                            <div className="backet">
                                <Link to='/basket'>
                                    <img src="src/basket.svg" alt="" />
                                </Link>
                                <BasketNumber />
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