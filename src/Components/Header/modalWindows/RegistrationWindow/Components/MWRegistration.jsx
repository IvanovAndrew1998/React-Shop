import React, { useState } from 'react'
import InputMask from 'react-input-mask';
import { useForm } from "react-hook-form";
import { userStore } from '../../../../../Store/UserStore.js';

const MWRegistration = ({setContentType}) => {

    // form event
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onSubmit'
    });

    //  check password 
    const password = watch('password');

    // submit
    const onSubmit = data => alert(JSON.stringify(data));



    // visability
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

    const [typeConfirmToggled, setTypeConfirmToggled] = useState(true);
    const [confirmShown, setConfirmShown] = useState('');
    function showConfirmPassword() {
        if (confirmShown === '') {

            setTypeConfirmToggled(!typeConfirmToggled)
            setConfirmShown("confirmShown");
        }
        else {

            setTypeConfirmToggled(!typeConfirmToggled)
            setConfirmShown('');
        }
    }

    return (
        <div>
            <form className="registration" onSubmit={handleSubmit(onSubmit)}>
                <div className="modalHeader">
                    <p>Вход или регистрация</p>
                </div>
                <div className="selectionPanel">
                    <img src="/src/greyArrowLeft.svg" alt="" onClick={() => setContentType("login")}/>
                    <p>Введите данные</p>
                </div>
                <div className="inputForm">

                    <div className="name">
                        <input type="text" placeholder='Имя' className={`${errors.name && "redBorder"}`}
                            {...register("name", { required: 'Введите имя' })}
                        />

                        <input type="text" placeholder='Фамилия' className={`${errors.surname && "redBorder"}`}
                            {...register("surname", { required: 'Введите фамилию' })}
                        />

                    </div>
                    <InputMask mask="+7 (999) 999 99 99" maskChar=" " placeholder='Телефон' className={`${errors.phone && "redBorder"}`}
                        {...register("phone", { required: 'Введите номер телефона' })}
                    />
                    {errors.phone && <span>
                        {errors.phone.message}
                    </span>}

                    <input type="text" placeholder='Email' className={`emailInput ${errors.password && "redBorder"}`}
                        {...register("email", { required: 'Введите адрес электронной почты' })}
                    />
                    {errors.email && <span>
                        {errors.email.message}
                    </span>}

                    <div className="passwordDiv">
                        <input type={typeToggled ? 'password' : 'text'} className={`password ${errors.password && "redBorder"}`} placeholder='Пароль'
                            {...register("password", {
                                required: 'Введите пароль',
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                    message: 'Пароль должен содержать хотя бы одну букву или цифру'
                                },
                                minLength: {
                                    value: 8,
                                    message: 'Пароль должен быть не менее 8 символов'
                                },
                                maxLength: {
                                    value: 30,
                                    message: 'Пароль должен быть не больше 30 символов'
                                }
                            })} />
                        {errors.password && <span>
                            {errors.password.message}
                        </span>}
                        <i className={"passwordIcon" + " " + shown} onClick={showPassword} />
                    </div>

                    <div className="passwordDiv">
                        <input type={typeConfirmToggled ? 'password' : 'text'} className="password" placeholder='Подтвердите пароль'
                            onPaste={(e) => {
                                e.preventDefault()
                                return false;
                            }}
                            {...register("confirmPassword", {
                                required: 'Введите пароль ещё раз',
                                validate: (value) =>
                                    value === password || 'Пароли не совпадают',

                            })} />
                        {errors.confirmPassword && <span>
                            {errors.confirmPassword.message}
                        </span>}
                        <i className={"passwordIcon" + " " + confirmShown} onClick={showConfirmPassword} />
                    </div>

                </div>
                <div className="agreement agreementMarginBottom">
                    <label className="container">
                        <input type="checkbox" />
                        <span className="mark"></span>
                    </label>
                    <p>Даю согласие на обработку персонадльных данных, и принимаю  <a href=''>пользовательское соглашение</a></p>
                </div>
                <button className='readyButton' type='submit' value='Submit' onClick={() => { userStore.logIn(); }}>Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default MWRegistration