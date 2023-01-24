import React from 'react'
import './ProfileMyAddresses.css'

const ProfileMyAddresses = () => {
    return (
        <div>
            <div className="profileMyAddresses">
                <div className="profileHeader">Мои адреса</div>
                <div className="profileMyAddressesContainer">

                    <div className="profileSingleAddress">
                        <div className="singleAddressHeader">
                            <img src="src/LocationBlue.svg" alt="" />
                            <p>Мой адрес 1</p>
                        </div>
                        <div className="addressInfo">
                            Россия, Республика Марий Эл, Йошкар-Ола, Ленинский проспект, 41, кв 15, 1 этаж
                        </div>
                        <div className="singleAddressBottom">
                            <div className="addressEdit">
                                <img src="src/Pencil.svg" alt="" />
                                <p>Редактировать</p>
                            </div>
                            <img className='pointer' src="src/deleteProfile.svg" alt="" />
                        </div>

                    </div>
                    <div className="addNewAddress">
                        <p>Добавить адрес</p>
                        <img className='profileSingleCardButton' src="src/Plus.svg" alt="" />
                    </div>


                </div>
            </div>

            <div className="personalDisclaimer">
                <img src="src/exclamationMarkGray.svg" alt="" />
                <p>Информация, которую вы укажете в этом разделе, публичная. Она указывается рядом с отзывами и видна другим пользователям сети Интернет.   </p>
            </div>
        </div>
    )
}

export default ProfileMyAddresses