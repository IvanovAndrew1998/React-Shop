import React, { useRef } from 'react'

const LittleProductCarouselImage = ({id, products}) => {

    const ref = useRef();


    const shiftLengthInc = 107;

    let current = 0;

    const cardAmount = products.length;

    function shiftBy(shiftLength) {
        const chld = Array.from(ref.current.products)

        chld.forEach(card => {
            card.style.left = shiftLength + 'px'

        });
    }

    function getShiftLength() {
        return current * shiftLengthInc
    }

    function inc() {

        if (current < 0) {
            current++;
            shiftBy(getShiftLength());
        }

    }

    function dec() {

        if (current > -cardAmount + 4) {
            current--;
            shiftBy(getShiftLength());
        }
    }

    return (

        <div className="littleProductCarousel">
            <span className='littleProductCarouselLeft' src="src/mainarrow-left.svg" alt="" onClick={inc} />
            <div className="littleProductCarouselTrack" id={id} ref={ref}>
                <div className="littleProductCarouselImage">
                    <img src="src/orderProductImage1.svg" alt="" />
                    <div className="orderProductQuantity">
                        <p>13</p>
                    </div>
                </div>
            </div>
            <span className='littleProductCarouselRight' src="src/mainarrow-right.svg" alt="" onClick={dec} />
        </div>
    )
}

export default LittleProductCarouselImage