import React, { useState } from 'react'
import ModalChangeSize from './ModalChangeSize/ModalChangeSize';


const RegSpin = () => {
    const [modalSizeActive, setModalSizeActive] = useState(false);
    const [currentSize, setCurrentSize] = useState();


    const [count, setCount] = useState(0)
    function decr() {
        if (count > 0) {
            setCount(count - 1)
        }
        else { count = 0 }
    }


    return (
        <div className="size-quantity">
            <div className="sizeButton" onClick={() => setModalSizeActive(true)}>

                <img src="src/Pencil.svg" alt="" />
                <p>75.5 Размер</p>

            </div>
            <div className="quantityButton">

                <img src="src/Minus.svg" alt="" onClick={() => decr()}/>
                <p>{count}</p>
                <img src="src/Plus.svg" alt="" onClick={() => setCount(count + 1)}/>

            </div>
            <ModalChangeSize modalSizeActive={modalSizeActive} setModalSizeActive={setModalSizeActive} count={count} setCount={setCount} decr={decr}/>
        </div>
    )
}

export default RegSpin