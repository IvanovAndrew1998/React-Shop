import React, { useState } from 'react'
import DDorder from '../DDItems/DDorder';
import { userStore } from '../../../../Store/UserStore';
import { observer } from 'mobx-react-lite';

const ListOrderContent = observer(() => {
   

  return (
    <div className='DDActiveContent'>
         {
                userStore.headerNotificationsOrders.length !== 0
                    ?
                    <>
                        {userStore.headerNotificationsOrders.map(result => {
                            return (
                                <DDorder result={result} key={result.id}  />
                            )
                        })}
                        <button className='clearAllBtn'  onClick={() => userStore.clearHeaderOrders()}>Очистить список</button>
                    </>
                    :
                    <div className='EmptyList'>
                        <div className="EmptyListIcon">
                            <img src="src/guideSection/DiscountsBlue.svg" alt="" />
                        </div>
                        <h2>У вас пока нет заказов</h2>
                        <p>Найдите то, что вам нравится в каталоге или вопользуйтесь поиском</p>
                    </div>
            }
    </div>
  )
})

export default ListOrderContent