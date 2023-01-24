import React from 'react'
import './ProfileInfoForm.css'

const ProfileInfoForm = () => {
    return (
        <div>
            <div className="profileInfoForm">
                <div className="formItemTopOne">
                    <p>Имя</p>
                    <input type="text" />
                </div>
                <div className="formItemTopTwo">
                    <p>Фамилия</p>
                    <input type="text" />
                </div>
                <div className="formItemTopThree">
                    <p>Дата рождения</p>
                    <div className="birthDate">
                        <div className="selectorContainer">

                            <select name="" id="">
                                <option value="0">01</option>
                                <option value="1">02</option>
                                <option value="2">03</option>
                                <option value="3">04</option>
                                <option value="4">05</option>
                                <option value="5">06</option>
                                <option value="6">07</option>
                                <option value="7">08</option>
                                <option value="8">09</option>
                                <option value="9">10</option>
                                <option value="10">11</option>
                                <option value="11">12</option>
                                <option value="12">13</option>
                                <option value="13">14</option>
                                <option value="14">15</option>
                                <option value="15">16</option>
                                <option value="16">17</option>
                                <option value="17">18</option>
                                <option value="18">19</option>
                                <option value="19">20</option>
                                <option value="20">21</option>
                                <option value="21">22</option>
                                <option value="22">23</option>
                                <option value="23">24</option>
                                <option value="24">25</option>
                                <option value="25">26</option>
                                <option value="26">27</option>
                                <option value="27">28</option>
                                <option value="28">29</option>
                                <option value="29">30</option>
                                <option value="30">31</option>
                            </select>
                            <img src="src/selectorIcon.svg" alt="" />
                        </div>
                        <div className="selectorContainer">

                            <select name="" id="">
                                <option value="0">Янв</option>
                                <option value="1">Фев</option>
                                <option value="2">Мар</option>
                                <option value="3">Апр</option>
                                <option value="4">Май</option>
                                <option value="5">Июн</option>
                                <option value="6">Июл</option>
                                <option value="7">Авг</option>
                                <option value="8">Сен</option>
                                <option value="9">Окт</option>
                                <option value="10">Ноя</option>
                                <option value="11">Дек</option>
                            </select>
                            <img src="src/selectorIcon.svg" alt="" />

                        </div>

                        <div className="selectorContainer">

                            <select>

                                <option value="0">2015</option>
                                <option value="1">2007</option>

                            </select>
                            <img src="src/selectorIcon.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="formItemBottomOne">
                    <p>Телефон</p>
                    <div className="formGridItem">

                        <input type="text" />
                        <button>Получить код</button>

                    </div>
                </div>
                <div className="formItemBottomTwo">
                    <p>Почта</p>
                    <div className="formGridItem">

                        <input type="text" />
                        <button>Подтвердить</button>

                    </div>
                </div>
                <div className="formItemBottomThree">
                    <p>Пол</p>
                    <div className="genderSelection">
                        <button className='selectGender'>Женский</button>
                        <button className='selectGender selectedGender'>Мужской</button>
                        <button>Сохранить</button>
                        <button>Отмена</button>
                    </div>
                </div>
            </div>
            <div className="personalDisclaimer">
                <img src="src/exclamationMarkGray.svg" alt="" />
                <p>Указанное в этом разделе имя является публичной информацией. Оно указывается рядом с вашими отзывами и видимо для других пользователей сети Интернет. </p>
            </div>
        </div>
    )
}

export default ProfileInfoForm