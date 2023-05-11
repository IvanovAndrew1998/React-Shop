import React, { useState } from 'react'
import ProfileInfoForm from '../Components/InfoForm/ProfileInfoForm';
import ProfileStatePanel from '../Components/StatePanel/ProfileStatePanel';
import ProfileMyCards from '../Components/CreditCards/ProfileMyCards';
import ProfileMyAddresses from '../Components/MyAddresses/ProfileMyAddresses';
import ProfileOrders from '../Components/Orders/ProfileOrders';
import ProfileReviews from '../Components/ProfileReviews/ProfileReviews';
import { userStore } from '../../../../Store/UserStore';
import Loader from '../../ProductPage/Loader/Loader';
import { observer } from 'mobx-react-lite';
import SingleAddress from '../Components/MyAddresses/SingleAddress/SingleAddress';
import SingleCreditCard from '../Components/CreditCards/SingleCreditCard';
import AddressDeleteModal from '../Components/MyAddresses/SingleAddress/AddressDeleteModal/AddressDeleteModal';
import CreditCardsModalDelete from '../Components/CreditCards/CreditCardsModal/CreditCardsModalDelete';
import Modal from '../../../Modal/Modal';


const AccountSettings = observer(() => {

    const [modalDeleteActive, setModalDeleteActive] = useState(false);
    const [modalCardDeleteActive, setModalCardDeleteActive] = useState(false)
    const [addressId, setAddressId] = useState();
    const [creditCardId, setCreditCardId] = useState();

    if (userStore.profileInfo === undefined) {
        return <Loader />
    }

    function modalAppear(id) {
        setModalDeleteActive(true)
        setAddressId(id)
    }

    function modalCardsAppear(id) {
        setModalCardDeleteActive(true)
        setCreditCardId(id)
    }

    return (
        <div>
            <ProfileInfoForm />

            <ProfileStatePanel />

            <ProfileMyCards 
                setModalCardDeleteActive = {setModalCardDeleteActive}
                modalCardDeleteActive = {modalCardDeleteActive}
            >

                {userStore.profileInfo.data.plasticCards.map(chld =>
                    <SingleCreditCard paymentSystem={chld.paymentSystem} 
                    setModalCardDeleteActive = {setModalCardDeleteActive}
                    modalAppear={() => modalCardsAppear(chld.id)}
                    />
                )}
                <div className="profileSingleCard pointer">
                    <p className='profileSingleCardBankName'>Добавить карту</p>
                    <img className='profileSingleCardButton' src="/src/Plus.svg" alt="" />

                </div>
            </ProfileMyCards>
            <CreditCardsModalDelete 
                setModalCardDeleteActive = {setModalCardDeleteActive} 
                modalCardDeleteActive = {modalCardDeleteActive} 
                currentId={creditCardId}
            />

            <ProfileMyAddresses
                addresses={userStore.profileInfo.data.addresses}
                modalDeleteActive={modalDeleteActive}
                setModalDeleteActive={setModalDeleteActive}
                >

                {userStore.profileInfo.data.addresses.map(address =>
                    <SingleAddress
                        address={address}
                        key={address.id}
                        modalDeleteActive={modalDeleteActive}
                        setModalDeleteActive={setModalDeleteActive}
                        modalAppear={() => modalAppear(address.id)}
                        />
                )}
                <div className="addNewAddress pointer">
                    <p>Добавить адрес</p>
                    <img className='profileSingleCardButton' src="/src/Plus.svg" alt="" />
                </div>

            </ProfileMyAddresses>
            <AddressDeleteModal 
                modalDeleteActive={modalDeleteActive} 
                setModalDeleteActive={setModalDeleteActive} 
                currentId={addressId}
            />
            <Modal/>


            <ProfileOrders orders={userStore.profileInfo.data.orders} />

            <ProfileReviews />
        </div>
    )
})

export default AccountSettings