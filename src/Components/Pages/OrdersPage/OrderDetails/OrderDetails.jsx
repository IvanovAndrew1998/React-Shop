import React from 'react'
import './OrderDetails.css'
import ODinfoPanel from './Components/ODinfoPanel/ODinfoPanel'
import ODupperPanel from './Components/ODupperPanel/ODupperPanel'
import ProductCard from '../../PRODUCTCARD/ProductCard';

import { userStore } from '../../../../Store/UserStore';
import Loader from '../../ProductPage/Loader/Loader';
import { observer } from 'mobx-react-lite';

const OrderDetails = observer(() => {

  if (userStore.ordersInfo === undefined) {
    return <Loader />
  }



  return (
    <div className='OrderDetails'>
      {userStore.ordersInfo.data.results.map(result =>
        <div className="OrderDetails">
          <ODupperPanel id='orderedProducts' 
          orderID={result.id}
          products={result.products}
          shipmentType={result.shipment_type}
          orderStatus={result.order_status}
          
          orderSum={result.order_sum}
          created={result.created}
          >
           
           
          </ODupperPanel>
          <ODinfoPanel 
          recieverName={result.reciever_name}
          recieverEmail={result.reciever_email}
          recieverPhone={result.reciever_phone}
          shippingAddress={result.shipping_address}
          />
          <div className="ODgrid">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>

      )}

    </div>
  )
})

export default OrderDetails