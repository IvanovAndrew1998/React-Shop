import React, { useState } from 'react'
import './ProfileInfoForm.css'
import BirthDateSelector from './BirthDateSelector/BirthDateSelector'
import { observer } from 'mobx-react-lite';
import { userStore } from '../../../../../Store/UserStore'
import CalendarSelector from './BirthDateSelector/CalendarSelector';
import { patchProfileInfo } from '../../../../../Api';



const ProfileInfoForm = observer(() => {
    
    
    
    const [name, setName] = useState(userStore.profileInfo.data.userData.first_name);

    const [lastName, setLastName] = useState(userStore.profileInfo.data.userData.lastName);
    const [birthDate, setBirthDate] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(userStore.profileInfo.data.userData.username);
    const [email, setEmail] = useState(userStore.profileInfo.data.userData.email);
    const [gender, setGender] = useState();
    const [inputsDisabled, setInputsDisabled] = useState(true);
    const [inputChanged, setInputChanged] = useState();
    
    const handleSave = () => {
        patchProfileInfo(name, lastName, birthDate, email, gender, userStore.accessToken);
        setInputsDisabled(true);
    };
    const handleChange = () => {
        
        setInputsDisabled(false)
        
    };
    
    
 

    return (
        <div>
            <div className="profileInfoForm" id='ProfileSection'>
                <div className="formItemTopOne">
                    <p>Имя</p>
                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={inputsDisabled} />
                </div>
                <div className="formItemTopTwo">
                    <p>Фамилия</p>
                    <input type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        disabled={inputsDisabled} />
                </div>
                <CalendarSelector date_of_birth={userStore.profileInfo.data.userData.date_of_birth}/>
                <div className="formItemBottomOne">
                    <p>Телефон</p>
                    <div className="formGridItem">

                        <input type="text" 
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                disabled={inputsDisabled}
                        />
                        <button>Получить код</button>

                    </div>
                </div>
                <div className="formItemBottomTwo">
                    <p>Почта</p>
                    <div className="formGridItem">

                        <input type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={inputsDisabled} />
                        <button >Подтвердить</button>

                    </div>
                </div>
                <div className="formItemBottomThree">
                    <p>Пол</p>
                    <div className="genderSelection">
                        <button className={
                            gender === 2 ? 'selectGender' 
                            : gender === 1 ? 'selectGender selectedGender'  
                            : 'selectGender' }
                        
                        onClick={() => setGender(1)}>Женский</button>
                        <button className={gender === 2 ? 'selectGender selectedGender' : 'selectGender'} 
                        
                        onClick={() => setGender(2)}>Мужской</button>
                        <button onClick={handleSave} className={inputsDisabled ? '' : 'inputChangedButton'}>Сохранить</button>
                        <button onClick={handleChange} className={inputsDisabled ? 'inputChangedButton' : ''}>Изменить</button>
                    </div>
                </div>
            </div>
            <div className="personalDisclaimer">
                <img src="src/exclamationMarkGray.svg" alt="" />
                <p>Указанное в этом разделе имя является публичной информацией. Оно указывается рядом с вашими отзывами и видимо для других пользователей сети Интернет. </p>
            </div>
        </div>
    )
})

export default ProfileInfoForm