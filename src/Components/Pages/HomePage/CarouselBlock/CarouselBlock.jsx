import React from 'react'
import './carouselBlock.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';





const CarouselBlock = () => {
    return (
        <div>
            <section className="section-1-main">
           
                <div className="inner">
                    <Carousel showThumbs={false} showIndicators={false} showStatus={false} showArrows={true}  swipeable={true}
                        useKeyboardArrows
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
                                <button type="button" onClick={onClickHandler} title={label}  className="prevButtonSM">
                                  
                                </button>
                            )
                        }
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <button type="button" onClick={onClickHandler} title={label}  className="nextButtonSM">
                                  
                                </button>
                            )
                        }
                        >
                        <div>
                            <img className="sales-img" src="/src/sales.png" alt="" />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img className="sales-img" src="/src/sales.png" alt="" />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img className="sales-img" src="/src/sales.png" alt="" />
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>
                    {/* <div>
                        <img className="sales-img" src="/src/sales.png" alt="" />
                        <img className="mainimg-hidden" src="/src/mainimg-hidden.png" alt="" />
                    </div>
                    
                    <img className="mainarrow-right" src="/src/mainarrow-right.svg" alt="" /> */}
                </div>

            </section>
        </div>
    )
}

export default CarouselBlock