import React from 'react'
import { userStore } from '../../../../Store/UserStore';
import ListDiscount from './ListDiscountContent';

const DDListDiscount = () => {


    if (userStore.headerNotificationsDiscounts == undefined) {
        return <div></div>
    }

    return (
        <div className='DDActiveContent'>
            <ListDiscount/>
        </div>
    )
}

export default DDListDiscount