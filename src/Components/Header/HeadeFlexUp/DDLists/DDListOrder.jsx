import React from 'react'
import { userStore } from '../../../../Store/UserStore';
import ListOrderContent from './ListOrderContent';


const DDListOrder = () => {


   
    if (userStore.headerNotificationsOrders == undefined) {
        return <div></div>
    }
    
    return (
        <ul className='DDActiveContent'>
           <ListOrderContent />
        </ul>
    )
}

export default DDListOrder