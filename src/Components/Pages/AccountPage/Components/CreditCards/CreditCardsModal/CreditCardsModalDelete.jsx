import React from 'react'
import { userStore } from '../../../../../../Store/UserStore';

const CreditCardsModalDelete = ({setModalCardDeleteActive, modalCardDeleteActive, currentId}) => {
  return (
    <div className={modalCardDeleteActive ? "modal active" : "modal"} onClick={() => setModalCardDeleteActive(false)}>

            <div className="modalContent" onClick={e => e.stopPropagation()}>

                <div className="addressDelete">

                    <p className='addressDeleteHeader'>Удалить адрес?</p>

                    <div className="addressDeletePanel">

                        <button className='pointer' onClick={() => {
                            userStore.deleteCreditCard(currentId);
                            setModalCardDeleteActive(false)
                        }}>
                            Да
                        </button>

                        <button className='pointer' onClick={() => setModalCardDeleteActive(false)}>
                            Нет
                        </button>

                    </div>

                </div>

            </div>

        </div >
  )
}

export default CreditCardsModalDelete