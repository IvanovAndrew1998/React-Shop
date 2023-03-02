import React, { useState } from 'react'
import DDdiscount from '../DDItems/DDdiscount';
import headerDiscounts from '../DDdiscountsBackPlaceholder';

const DDListDiscount = () => {

    const [listHeaderDiscounts, setListHeaderDiscounts] = useState(headerDiscounts);
    function removeItem(id) {
        setListHeaderDiscounts(listHeaderDiscounts.filter(data => data.id != id))
    }

    return (
        <ul className='DDActiveContent'>
            {
                listHeaderDiscounts.length !== 0
                    ?
                    <>
                        {listHeaderDiscounts.map(data => {
                            return (
                                <DDdiscount data={data} deleteCallBack={removeItem} />

                            )
                        })}
                        <button className='clearAllBtn' onClick={() => setListHeaderDiscounts([])} >Очистить список</button>
                    </>
                    :
                    <div className='EmptyList'>
                        <div className="EmptyListIcon">
                            <img src="src/guideSection/DiscountsBlue.svg" alt="" />
                        </div>
                        <h2>Узнать о снижении цены</h2>
                        <p className='EmptyListMargin'>Эту функцию можно найти на странице товара</p>
                    </div>
            }
        </ul>
    )
}

export default DDListDiscount