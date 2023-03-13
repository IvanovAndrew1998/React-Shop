import React, { useState } from 'react'


import { observer } from 'mobx-react-lite';
import { userStore } from '../../../../Store/UserStore';
import ListOrderContent from './ListOrderContent';


const DDListOrder = observer(() => {


   
    if (userStore.headerInfo === undefined) {
        return <div></div>
    }
    console.log(userStore.headerInfo);
    return (
        <ul className='DDActiveContent'>
           <ListOrderContent ordersCards={userStore.headerInfo.notifications.orders}/>
        </ul>
    )
})

export default DDListOrder