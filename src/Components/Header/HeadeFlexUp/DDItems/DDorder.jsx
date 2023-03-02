import React from 'react'
import './DDorder.css'

const DDorder = ({result, orderDeleteCallBack}) => {

    function statusColor(result){
      let status = result.order_status;

      console.log(status)
    }


    return (
        <li>
            <img className='DDOimg' src="src/basketImage.svg" alt="" />

            <div className="DDOsingleOrder">
                <p>Заказ</p>
                <p className="DDOvendorCode">№{result.id}</p>
                <p className={``}>{result.order_status}</p>
                <img className='x' src="src/Xicon.svg" alt="" onClick={() => orderDeleteCallBack(result.id)}/>
            </div>
        </li>
    )
}

export default DDorder