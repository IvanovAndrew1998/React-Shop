import React from 'react'
import './OrderDetails.css'
import { userStore } from '../../../../Store/UserStore';
import Loader from '../../ProductPage/Loader/Loader';
import { observer } from 'mobx-react-lite';
import OrderSingle from '../OrderSingle';

const OrderDetails = observer(() => {
 
  if (userStore.ordersInfo === undefined) {
    return <Loader />
  }

  return (
    <div className='orderRoot'>
      {userStore.ordersInfo.data.results.map(result =>
        <OrderSingle result={result}/>
      )}

    </div>
  )
})

export default OrderDetails