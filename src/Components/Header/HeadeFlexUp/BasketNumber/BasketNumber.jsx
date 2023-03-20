import { observer } from 'mobx-react-lite';
import React from 'react'
import { userStore } from '../../../../Store/UserStore'
import MiniLoader from './MiniLoader';
import './BasketNumber.css'


const BasketNumber = observer(() => {

    if (userStore.headerBasket == undefined) {
        return <div className="backet-number">
            <MiniLoader></MiniLoader>
        </div>
    }

    return (
        <div className="backet-number">
            <p className='basketP'>{userStore.headerBasket}</p>
        </div>
    )
})

export default BasketNumber