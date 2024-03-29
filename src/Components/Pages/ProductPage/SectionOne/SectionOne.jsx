import React from 'react'
import LeftPanel from './LeftPanel/LeftPanel'
import RightPanel from './RightPanel/RightPanel'
import { userStore } from '../../../../Store/UserStore'


const SectionOne = ({productInfo, images, rating}) => {



  return (

    <section className="section-1">
      <div className="inner">
        <div className="sec1-container">
          <LeftPanel images={images}/>
          <RightPanel productInfo={productInfo} rating={rating} userInfo={userStore.profileInfo}/>
        </div>
      </div>
    </section>
  )
}

export default SectionOne