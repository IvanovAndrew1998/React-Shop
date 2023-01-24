import React from 'react'
import ProfileInfoForm from '../Components/InfoForm/ProfileInfoForm';
import ProfileStatePanel from '../Components/StatePanel/ProfileStatePanel';
import ProfileMyCards from '../Components/CreditCards/ProfileMyCards';
import ProfileMyAddresses from '../Components/MyAddresses/ProfileMyAddresses';
import ProfileOrders from '../Components/Orders/ProfileOrders';
import ProfileReviews from '../Components/ProfileReviews/ProfileReviews';

const AccountSettings = () => {
    return (
        <div>
            <ProfileInfoForm />

            <ProfileStatePanel />

            <ProfileMyCards />

            <ProfileMyAddresses />

            <ProfileOrders />

            <ProfileReviews />
        </div>
    )
}

export default AccountSettings