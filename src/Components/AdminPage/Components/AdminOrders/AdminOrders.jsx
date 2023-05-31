import React from 'react'
import './AdminOrders.css'
import ACatalogueOrders from './Components/ACatalogueOrders/ACatalogueOrders'
import AOrderItem from './Components/AOrderItem/AOrderItem'
import SortingbarOrders from './Components/SortingbarOrders/SortingbarOrders'

const AdminOrders = () => {
    return (
        <div className='AdminOrders'>
            <ACatalogueOrders />

            <SortingbarOrders />


            <div className='AListOutter'>

                <div className="AListContainer">

                    <AOrderItem/>
                    <AOrderItem/>

                </div>

            </div>

        </div>
    )
}

export default AdminOrders