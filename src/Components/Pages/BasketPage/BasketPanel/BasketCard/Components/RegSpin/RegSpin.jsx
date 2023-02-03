import React, { useState } from 'react'

const RegSpin = () => {

    const [count, setCount] = useState(0)
    function decr() {
        if (count > 0) {
            setCount(count - 1)
        }
        else { count = 0 }
    }


    return (
        <div className="size-quantity">
            <div className="sizeButton">

                <img src="src/Pencil.svg" alt="" />
                <p>75.5 Размер</p>

            </div>
            <div className="quantityButton">

                <img src="src/Minus.svg" alt="" onClick={() => decr()}/>
                <p>{count}</p>
                <img src="src/Plus.svg" alt="" onClick={() => setCount(count + 1)}/>

            </div>
        </div>
    )
}

export default RegSpin