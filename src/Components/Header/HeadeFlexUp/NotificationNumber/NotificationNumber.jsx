import React from 'react';
import { observer } from 'mobx-react-lite';
import { userStore } from '../../../../Store/UserStore';
import MiniLoaderYellow from './MiniLoaderYellow';
import './NotificationNumber.css'




const NotificationNumber = observer(() => {

    if (userStore.headerNotificationsCount == undefined) {
        return <div className="notification-number">
            <MiniLoaderYellow></MiniLoaderYellow>
        </div>
    }


  return (
    <div className="notification-number">
            <p className='notificationP'>{userStore.headerNotificationsCount}</p>
        </div>
  )
})

export default NotificationNumber