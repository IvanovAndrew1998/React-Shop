import React from 'react'
import ProfileInfoForm from '../Components/InfoForm/ProfileInfoForm';
import ProfileStatePanel from '../Components/StatePanel/ProfileStatePanel';
import ProfileMyCards from '../Components/CreditCards/ProfileMyCards';
import ProfileMyAddresses from '../Components/MyAddresses/ProfileMyAddresses';
import ProfileOrders from '../Components/Orders/ProfileOrders';
import ProfileReviews from '../Components/ProfileReviews/ProfileReviews';
import { userStore } from '../../../../Store/UserStore';
import Loader from '../../ProductPage/Loader/Loader';
import { observer } from 'mobx-react-lite';

const AccountSettings = observer(() => {
    if(userStore.profileInfo == undefined) {
        return <Loader/>
    }


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
})

export default AccountSettings