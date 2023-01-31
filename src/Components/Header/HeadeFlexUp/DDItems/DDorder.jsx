import React from 'react'

const DDorder = () => {
    return (
        <li>
            <img className='DDOimg' src="src/basketImage.svg" alt="" />

            <div className="DDOsingleOrder">
                <p>Заказ</p>
                <p className="DDOvendorCode">№345677898</p>
                <p>Можно забрать</p>
                <img className='x' src="src/Xicon.svg" alt="" />
            </div>
        </li>
    )
}

export default DDorder