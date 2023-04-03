import React, { useEffect } from 'react'
import BasketPanel from './BasketPanel/BasketPanel'
import BasketSidebar from './BasketSidebar/BasketSidebar';
import './BasketPage.css'
import Payment from './Payment/Payment';
import BasketStore from '../../../Store/BasketStore.ts';

const BasketPage = () => {

  useEffect(() => {
    document.title = 'Корзина';
  }, []);

  const basket = new BasketStore();

  return (
    <div>
        <div className="inner">
          <div className="container-flexbox">

            <div className="leftSection">
                <BasketPanel basket={basket}/>
                {/* <Payment/> */}
            </div>
            <div className="rightSection">
                <BasketSidebar basket={basket}/>
            </div>

          </div>
        </div>
    </div>
  )
}

export default BasketPage