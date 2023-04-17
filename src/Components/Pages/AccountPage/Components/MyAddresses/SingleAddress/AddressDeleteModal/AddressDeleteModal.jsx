import React from 'react'
import './AddressDeleteModal.css'
import { userStore } from '../../../../../../../Store/UserStore'

const AddressDeleteModal = ({ modalDeleteActive, setModalDeleteActive, currentId }) => {





    return (
        <div className={modalDeleteActive ? "modal active" : "modal"} onClick={() => setModalDeleteActive(false)}>

            <div className="modalContent" onClick={e => e.stopPropagation()}>

                <div className="addressDelete">

                    <p className='addressDeleteHeader'>Удалить адрес?</p>

                    <div className="addressDeletePanel">

                        <button className='pointer' onClick={() => {
                            // userStore.profileInfo.data.addresses.filter(address => address.id != currentId);
                            userStore.deleteAddress(currentId);
                            setModalDeleteActive(false)
                        }}>
                            Да
                        </button>

                        <button className='pointer' onClick={() => setModalDeleteActive(false)}>
                            Нет
                        </button>

                    </div>

                </div>

            </div>

        </div >
    )
}

export default AddressDeleteModal