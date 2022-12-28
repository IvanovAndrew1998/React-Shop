import React from 'react'
import './CollectionBlockTwo.css'

const CollectionBlockTwo = () => {
  return (
    <div>
        <section className="section3-main">
        <div className="inner">
          <div className="sec3-img1">
            <div className="sec3-absolute">
              <p>На каждый день</p>
              <div className="sec3main-elements">
                <a href="#">В офис</a>
                <a href="#">Мужчине</a>
                <a href="#">Женщине</a>
              </div>
            </div>
          </div>
          <div className="sec3-img2">
            <div className="sec3-absolute">
              <img className="arrow-lateral" src="src/arrow-lateral.png" alt="" />
              <p>Свадьба</p>
              <div className="sec3main-elements">
                <a href="#">Невесте</a>
                <a href="#">Жениху</a>
                <a href="#">Родителям</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CollectionBlockTwo