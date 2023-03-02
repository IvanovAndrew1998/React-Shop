import React, { useState } from 'react'

import DDorder from '../DDItems/DDorder';
import { observer } from 'mobx-react-lite';
import { userStore } from '../../../../Store/UserStore';
import Loader from '../../../Pages/ProductPage/Loader/Loader';

const DDListOrder = observer(() => {


    const [listHeaderOrders, setListHeaderOrders] = useState();
    function removeOrderItem(id) {
        setListHeaderOrders(userStore.ordersInfo.data.results.filter(result => result.id != id))
    }
    if (userStore.ordersInfo === undefined) {
        return <Loader />
    }

    return (
        <ul className='DDActiveContent'>
            {
                listHeaderOrders.length !== 0
                    ?
                    <>
                        {listHeaderOrders.map(result => {
                            return (
                                <DDorder result={result} key={result.id} orderDeleteCallBack={removeOrderItem} />
                            )
                        })}
                        <button className='clearAllBtn' onClick={() => setListHeaderOrders([])} >Очистить список</button>
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
        </ul>
    )
})

export default DDListOrder