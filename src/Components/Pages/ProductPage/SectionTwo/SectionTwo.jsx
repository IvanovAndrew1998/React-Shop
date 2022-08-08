import React from 'react'
import FeedbackComments from './Feedback/FeedbackComments'
import RatingScore from './Rating/RatingScore'

const SectionTwo = () => {
  return (
    <section className="section-2">
                <div className="inner">
                    <div className="sec2-flexbox">
                        <FeedbackComments/>
                        <RatingScore/>
                    </div>
                </div>
            </section>
  )
}

export default SectionTwo