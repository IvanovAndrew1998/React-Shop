import React from 'react'
import './PromoCode.css'

const PromoCode = () => {
    return (
        <div className="promoCodeBlock">
            <input type="text" className='promoCodeInput' />
            <button className="promoSend">Промокод применен</button>
        </div>
    )
}

export default PromoCode