import React from 'react'

const SingleCreditCard = ({paymentSystem, setModalCardDeleteActive, modalAppear}) => {
    return (
        <div className="profileSingleCard">
            <p className='profileSingleCardBankName'>*Имя банка?</p>
            <p></p>
            <div className="profileSingleCardBottom">
                <img src="src/guideSection/Wallet.svg" alt="" />
                <p>{paymentSystem}</p>
            </div>
            <img className='profileSingleCardButton' src="src/deleteProfile.svg" alt="" onClick={ modalAppear }/>
        </div>
    )
}

export default SingleCreditCard