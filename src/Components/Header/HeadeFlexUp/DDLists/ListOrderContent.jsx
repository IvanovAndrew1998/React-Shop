import React, { useState } from 'react'
import DDorder from '../DDItems/DDorder';

const ListOrderContent = (ordersCards) => {

    const [listHeaderOrders, setListHeaderOrders] = useState(ordersCards);
    function removeOrderItem(id) {
        setListHeaderOrders(ordersCards.filter(result => result.id != id))
    }

  return (
    <div>
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
    </div>
  )
}

export default ListOrderContent