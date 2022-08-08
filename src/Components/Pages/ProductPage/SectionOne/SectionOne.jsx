import React from 'react'
import LeftPanel from './LeftPanel/LeftPanel'
import RightPanel from './RightPanel/RightPanel'


const SectionOne = () => {
  return (
    <section className="section-1">
      <div className="inner">
        <div className="sec1-container">
          <LeftPanel />
          <RightPanel />
        </div>
      </div>
    </section>
  )
}

export default SectionOne