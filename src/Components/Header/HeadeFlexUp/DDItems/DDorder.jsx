import React from 'react'

const DDorder = ({dataO, orderDeleteCallBack}) => {
    return (
        <li>
            <img className='DDOimg' src="src/basketImage.svg" alt="" />

            <div className="DDOsingleOrder">
                <p>Заказ</p>
                <p className="DDOvendorCode">№{dataO.vendorCode}</p>
                <p>Можно забрать</p>
                <img className='x' src="src/Xicon.svg" alt="" onClick={() => orderDeleteCallBack(dataO.id)}/>
            </div>
        </li>
    )
}

export default DDorder