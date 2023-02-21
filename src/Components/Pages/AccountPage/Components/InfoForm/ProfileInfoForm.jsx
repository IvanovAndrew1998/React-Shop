import React, { useState } from 'react'
import './ProfileInfoForm.css'
import BirthDateSelector from './BirthDateSelector/BirthDateSelector'
import { observer } from 'mobx-react-lite';
import { userStore} from '../../../../../Store/UserStore'
import Loader from '../../../ProductPage/Loader/Loader';


const ProfileInfoForm = observer(() => {
    
    
    
    const [name, setName] = useState();

    const [secondName, setSecondName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState();
    const [inputsDisabled, setInputsDisabled] = useState(true);
    const [inputChanged, setInputChanged] = useState();
    
    const handleSave = () => {
        // Submit your data here (e.g. make an API call to save the data to a database)
        setInputsDisabled(true);
    };
    const handleChange = () => {
        
        setInputsDisabled(false)
        
    };
    
    
    if(userStore.profileInfo == undefined) {
        return <Loader/>
    }
 

    return (
        <div>
            <div className="profileInfoForm" id='ProfileSection'>
                <div className="formItemTopOne">
                    <p>Имя</p>
                    <input type="text"
                        value={userStore.profileInfo.data.userData.first_name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={inputsDisabled} />
                </div>
                <div className="formItemTopTwo">
                    <p>Фамилия</p>
                    <input type="text"
                        value={userStore.profileInfo.data.userData.lastName}
                        onChange={(e) => setSecondName(e.target.value)}
                        disabled={inputsDisabled} />
                </div>
                <BirthDateSelector date_of_birth={userStore.profileInfo.data.userData.date_of_birth}/>
                <div className="formItemBottomOne">
                    <p>Телефон</p>
                    <div className="formGridItem">

                        <input type="text" 
                                value={userStore.profileInfo.data.userData.phone_number}
                                onChange={(e) => setPhone(e.target.value)}
                                disabled={inputsDisabled}
                        />
                        <button>Получить код</button>

                    </div>
                </div>
                <div className="formItemBottomTwo">
                    <p>Почта</p>
                    <div className="formGridItem">

                        <input type="text"
                            value={userStore.profileInfo.data.userData.email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={inputsDisabled} />
                        <button >Подтвердить</button>

                    </div>
                </div>
                <div className="formItemBottomThree">
                    <p>Пол</p>
                    <div className="genderSelection">
                        <button className={gender === 2 ? 'selectGender' : 'selectGender selectedGender'} onClick={() => setGender(1)}>Женский</button>
                        <button className={gender === 2 ? 'selectGender selectedGender' : 'selectGender'} onClick={() => setGender(2)}>Мужской</button>
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