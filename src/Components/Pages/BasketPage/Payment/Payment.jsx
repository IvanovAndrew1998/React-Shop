import React from 'react'
import './payment.css'
import InputMask from 'react-input-mask';
import { useForm } from "react-hook-form";

const Payment = () => {
    // form event
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onSubmit'
    });

    //  check password 
    const password = watch('password');

    // submit
    const onSubmit = data => alert(JSON.stringify(data));



    return (
        <div>
            <div className="panelHeader">
                <div className="left">
                    <p>Способ оплаты</p>
                </div>
                <div className="right">
                    <img src="/src/successfulIcon.svg" alt="" />
                </div>
            </div>
            <div className="paymentSelection">
                <div className="paymentCard">
                    <p className='paymentName'>Банковская карта</p>
                    <p className='paymentComment'>Онлайн</p>
                </div>
                <div className="paymentCard">
                    <p className='paymentName'>Добавить карту</p>
                    <img className='paymentAddImg' src="/src/Plus.svg" alt="" />
                </div>
            </div>
            <div className="registrationForm">
                <div className="panelHeader">
                    <div className="left">
                        <p>Укажите данные</p>
                    </div>
                    <div className="right">
                        <img src="/src/unsuccessfulIcon.svg" alt="" />
                    </div>
                </div>
                <div className="panelSelection">
                    <p className='selectedWay'>Регистрация</p>
                    <p >Войти</p>
                </div>
                <div className="signUpSection">


                    <form className='panelRegistration'>

                        <input type="text" placeholder='Имя' className={`${errors.name && "redBorder"}`}
                            {...register("name", { required: 'Введите имя' })}
                        />

                        <input type="text" placeholder='Фамилия' className={`${errors.surname && "redBorder"}`}
                            {...register("surname", { required: 'Введите фамилию' })}
                        />


                        <InputMask mask="+7 (999) 999 99 99" maskChar=" " placeholder='Телефон' className={`${errors.phone && "redBorder"}`}
                            {...register("phone", { required: 'Введите номер телефона' })}
                        />
                        {errors.phone && <span>
                            {errors.phone.message}
                        </span>}
                        <button className="resendCode">Отправить код повторно</button>
                        <input type="text" className="enterCode" />
                        <button className="submitButton">Готово</button>
                    </form>
                    <div className="agreement agreementMarginBotton">
                        <label className="containerPayment">
                            <input type="checkbox" />
                            <span className="markPayment"></span>
                        </label>
                        <p>Даю согласие на обработку персонадльных данных, и принимаю  <a href=''>пользовательское соглашение</a></p>
                    </div>
                    <p className='modalDescription'>Нажимая «Получить код», я соглашаюсь с условиями участия в Клубе SUNLIGHT, политикой конфиденциальности и подтверждаю согласие на получение сообщений рекламного характера. Отказаться от рассылки можно в личном кабинете.</p>
                </div>
                {/* <div className="sugnInSection">

                </div> */}
            </div>

        </div>
    )
}

export default Payment