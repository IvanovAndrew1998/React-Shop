import React from 'react'

const DDdiscount = ({data, deleteCallBack}) => {

    


    return (
        <li>
            <img className='DDOimg' src="src/basketImage.svg" alt="" />

            <div className="DDOsingleOrder">
                <p className='DDOsingleDiscount'>-{data.discount}%</p>
                <div className='DDOsinglePrices'>
                    <p className="DDOvendorCode">{data.discountedPrice} р</p>
                    <p className='DDOsingleOriginal'>{data.originalPrice} р</p>
                </div>
                <p>Можно забрать</p>
                <img className='x' src="src/Xicon.svg" alt=""  onClick={() => deleteCallBack(data.id)}/>
            </div>
        </li>
    )
}

export default DDdiscount