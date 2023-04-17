import React from 'react'
import { userStore } from '../../../../Store/UserStore';
import './DDorder.css'


const DDorder = ({result}) => {


    return (
        <li>
            <img className='DDOimg' src={result.product.image} alt="" />

            <div className="DDOsingleOrder">
                <p>Заказ</p>
                <p className="DDOvendorCode">№{result.product.vendor_code}</p>
                <p className={``}>{result.order_status}</p>
                <img className='x' src="src/Xicon.svg" alt="" onClick={() => userStore.deleteHeaderOrder(result.id)}/>
            </div>
        </li>
    )
}

export default DDorder