import React, { useEffect } from 'react'
import COSidebar from './COSidebar/COSidebar'
import COPanel from './COPanel/COPanel';
import '../BasketPage/BasketPage.css'

const CorpOrder = () => {

  useEffect(() => {
    document.title = 'Заявка';
  }, []);

  return (
    <div>
        <div className="inner">
          <div className="container-flexbox">

            <div className="leftSection">
                <COPanel/>

            </div>
            <div className="rightSection">
                <COSidebar/>
            </div>

          </div>
        </div>
    </div>
  )
}

export default CorpOrder