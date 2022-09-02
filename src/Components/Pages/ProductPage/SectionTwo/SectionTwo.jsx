import React from 'react'
import FeedbackComments from './Feedback/FeedbackComments'
import FeedbackForm from './FeedbackForm/FeedbackForm'
import RatingScore from './Rating/RatingScore'

const SectionTwo = ({ rating }) => {
  return (
    <div>
    <section className="section-2">
      <div className="inner">
        <div className="sec2-flexbox">
          <FeedbackComments />
          <RatingScore rating={rating} />
        </div>
      </div>
    </section>
    <FeedbackForm/>
    </div>
  )
}

export default SectionTwo