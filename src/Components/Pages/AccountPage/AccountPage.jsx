import React, { useState, useEffect } from 'react'
import './AccountPage.css'

import ProfileSidebar from './Components/profileSidebar/ProfileSidebar';
import AccountSettings from './AccountSettings/AccountSettings';
import OrderDetails from './OrderDetails/OrderDetails';
import { userStore } from '../../../Store/UserStore';
import { getProfileInfo } from '../../../Api';

const AccountPage = () => {

  

  return (
    <div className='accountPage'>
      <div className="inner">
        <div className="profileContainer">

          <ProfileSidebar />

          <div className="profileMainContainer">
          
            <AccountSettings/>
            {/* <OrderDetails/> */}

          </div>

        </div>
      </div>
    </div>
  )
}

export default AccountPage