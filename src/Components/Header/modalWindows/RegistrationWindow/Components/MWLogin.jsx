import React, { useState } from 'react'
import InputMask from 'react-input-mask';
import { userStore } from '../../../../../Store/UserStore.js';
import { useForm } from "react-hook-form";

const MWLogin = ({ setContentType }) => {

  // form event
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode: 'onSubmit'
  });

  //  check password 
  const password = watch('password');

  // submit
  const onSubmit = data => {userStore.logIn(data.username.replace("+7", "8"), data.password);
  };

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="modalHeader">
          <p>Вход или регистрация</p>
        </div>
        <div className="selectionPanel">
          <p>Телефон</p>
        </div>
        <div className="inputForm">
          <InputMask mask="+7 (999) 999-99-99" maskChar=" " placeholder='Телефон' className={`${errors.username && "redBorder"}`}
            {...register("username", { required: 'Введите номер телефона' })}
          />
          {errors.username && <span>
            {errors.username.message}
          </span>}

          <div className="passwordDiv">
            <input type={typeToggled ? 'password' : 'text'} className={`password ${errors.password && "redBorder"}`} placeholder='Пароль'
              onPaste={(e) => {
                e.preventDefault()
                return false;
              }}
              {...register("password", {
                required: 'Введите пароль'
              })}
            />
            <i className={"passwordIcon" + " " + shown} onClick={showPassword} />
          </div>
          {errors.password && <span>
            {errors.password.message}
          </span>}
        </div>
        <button className='readyButton' type='submit' value='Submit'>Войти</button>
        <div className="bottomPanel">
          <a onClick={() => setContentType("corporative")}>Я корпоративный клиент</a>
          <a onClick={() => setContentType("registration")}>Регистрация</a>
        </div>
      </div>
    </form>
  )
}

export default MWLogin