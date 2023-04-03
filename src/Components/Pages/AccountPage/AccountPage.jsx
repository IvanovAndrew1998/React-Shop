import React, { useEffect } from 'react'
import './AccountPage.css'

import ProfileSidebar from './Components/profileSidebar/ProfileSidebar';
import AccountSettings from './AccountSettings/AccountSettings';



const AccountPage = () => {

  useEffect(() => {
    document.title = 'Профиль';
  }, []);

  return (
    <div className='accountPage'>
      <div className="inner">
        <div className="profileContainer">

          <ProfileSidebar />

          <div className="profileMainContainer">
          
            <AccountSettings/>

          </div>

        </div>
      </div>
    </div>
  )
}

export default AccountPage