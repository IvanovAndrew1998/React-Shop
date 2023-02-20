import React from 'react'
import BasketPanel from './BasketPanel/BasketPanel'
import BasketSidebar from './BasketSidebar/BasketSidebar';
import './BasketPage.css'
import Payment from './Payment/Payment';

const BasketPage = () => {
  return (
    <div>
        <div className="inner">
          <div className="container-flexbox">

            <div className="leftSection">
                <BasketPanel/>
                {/* <Payment/> */}
            </div>
            <div className="rightSection">
                <BasketSidebar/>
            </div>

          </div>
        </div>
    </div>
  )
}

export default BasketPage