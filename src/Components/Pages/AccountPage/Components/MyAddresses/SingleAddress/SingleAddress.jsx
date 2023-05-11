import React from 'react'


const SingleAddress = ({ address, modalAppear }) => {

    
  
    return (
        <div className="profileSingleAddress">
            <div className="singleAddressHeader">
                <img src="/src/LocationBlue.svg" alt="" />
                <p>Мой адрес 1</p>
            </div>
            <div className="addressInfo">
                {address.settlement}, {address.street} {address.building}, квартира {address.apartment}
            </div>
            <div className="singleAddressBottom">
                <div className="addressEdit">
                    <img src="/src/Pencil.svg" alt="" />
                    <p>Редактировать</p>
                </div>
                <img className='pointer' src="/src/deleteProfile.svg" alt="" onClick={ modalAppear }/>
            </div>
           
        </div>
    )
}

export default SingleAddress