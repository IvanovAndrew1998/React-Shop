import React from 'react'
import ProfileSidebar from '../AccountPage/Components/profileSidebar/ProfileSidebar';
import OrderDetails from '../OrdersPage/OrderDetails/OrderDetails';
import '../AccountPage/AccountPage.css'


const OrdersPage = () => {



  return (
    <div className='accountPage'>
      <div className="inner">
        <div className="profileContainer">

          <ProfileSidebar />

          <div className="profileMainContainer">
          
            <OrderDetails/>

          </div>

        </div>
      </div>
    </div>
  )
}

export default OrdersPage