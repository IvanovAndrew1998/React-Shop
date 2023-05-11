import React from 'react'
import { userStore } from '../../../../Store/UserStore';
import DDdiscount from '../DDItems/DDdiscount';
import { observer } from 'mobx-react-lite';

const ListDiscount = observer(() => {
    return (
        <ul className='DDActiveContent'>
            {
                userStore.headerNotificationsDiscounts.length !== 0
                    ?
                    <>
                        {userStore.headerNotificationsDiscounts.map(result => {
                            return (
                                <DDdiscount result={result} key={result.id} />

                            )
                        })}
                        <button className='clearAllBtn' onClick={() => userStore.clearHeaderDiscounts()}>Очистить список</button>
                    </>
                    :
                    <div className='EmptyList'>
                        <div className="EmptyListIcon">
                            <img src="/src/guideSection/DiscountsBlue.svg" alt="" />
                        </div>
                        <h2>Узнать о снижении цены</h2>
                        <p className='EmptyListMargin'>Эту функцию можно найти на странице товара</p>
                    </div>
            }
        </ul>
    )
})

export default ListDiscount