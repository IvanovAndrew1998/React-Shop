import React, { useEffect } from 'react'

import OrderDetails from '../OrdersPage/OrderDetails/OrderDetails';
import './OrdersPage.css'


const OrdersPage = () => {

  useEffect(() => {
    document.title = 'Заказы';
  }, []);

  return (
    <div className='accountPage'>
      <div className="inner">

            <OrderDetails/>

      </div>
    </div>
  )
}

export default OrdersPage