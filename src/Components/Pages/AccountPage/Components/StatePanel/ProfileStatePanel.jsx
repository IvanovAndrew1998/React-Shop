import React from 'react'
import './ProfileStatePanel.css'

const ProfileStatePanel = () => {
    return (
        <div className="profileStatePanel">
            <div className="profileStateButton">
                <img src="/src/becomeCorporative.svg" alt="" />
                <p>Я корпоративный клиент</p>
            </div>
            <div className="profileStateButton">
                <img src="src/exitEverywhere.svg" alt="" />
                <p>Выйти на всех устройствах</p>
            </div>
            <div className="profileStateButton">
                <img src="/src/deleteProfile.svg" alt="" />
                <p>Удалить профиль</p>
            </div>
        </div>
    )
}

export default ProfileStatePanel