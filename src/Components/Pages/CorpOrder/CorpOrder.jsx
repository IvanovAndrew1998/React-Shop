import React, { useEffect } from 'react'
import COSidebar from './COSidebar/COSidebar'
import COPanel from './COPanel/COPanel';
import '../BasketPage/BasketPage.css'
import { useLocation } from 'react-router-dom';



const CorpOrder = () => {

  const location = useLocation();
  const data = location.state?.data;

  

  useEffect(() => {
    document.title = 'Заявка';
  }, []);

  return (
    <div>
        <div className="inner">
          <div className="container-flexbox">

            <div className="leftSection">
                <COPanel basketCards={data.basketCard}/>

            </div>
            <div className="rightSection">
                <COSidebar overAllPrice={data.overAllPrice}/>
            </div>

          </div>
        </div>
    </div>
  )
}

export default CorpOrder