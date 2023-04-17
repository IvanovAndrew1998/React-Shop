import React, { useEffect, useState } from 'react'
import BasketPanel from './BasketPanel/BasketPanel'
import BasketSidebar from './BasketSidebar/BasketSidebar';
import './BasketPage.css'
import Payment from './Payment/Payment';
import BasketStore from '../../../Store/BasketStore.ts';
import { observer } from 'mobx-react-lite';
import { userStore } from '../../../Store/UserStore';
import { autorun } from 'mobx';

const BasketPage = () => {

  useEffect(() => {
    document.title = 'Корзина';
  }, []);

  
  const basket = new BasketStore();
  
  autorun(() => {
    console.log(userStore.loggedIn)
    basket.loadData(userStore.accessToken)
})
  const [corpClient, setCorpClient] = useState(true);


  return (
    <div>
        <div className="inner">
          <div className="container-flexbox">

            <div className="leftSection">
                <BasketPanel basket={basket} corpClient={corpClient}/>
                {/* <Payment/> */}
            </div>
            <div className="rightSection">
                <BasketSidebar basket={basket} corpClient={corpClient}/>
            </div>

          </div>
        </div>
    </div>
  )
}

export default BasketPage