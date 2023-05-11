import React from 'react'
import { userStore } from '../../../../Store/UserStore';

const DDdiscount = ({result}) => {

    


    return (
        <li>
            <img className='DDOimg' src={result.image} alt="" />

            <div className="DDOsingleOrder">
                <p className='DDOsingleDiscount'>-{result.discount}%</p>
                <div className='DDOsinglePrices'>
                    <p className="DDOvendorCode">{result.discountedPrice} р</p>
                    <p className='DDOsingleOriginal'>{result.originalPrice} р</p>
                </div>
                <p>Можно забрать</p>
                <img className='x' src="/src/Xicon.svg" alt=""  onClick={() => userStore.deleteHeaderDiscount(result.id)}/>
            </div>
        </li>
    )
}

export default DDdiscount