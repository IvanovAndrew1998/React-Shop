import React, { useEffect, useState } from 'react'


const Sizes = ({sizeArr, setSize}) => {
    const [selectedSize, setSelectedSize] = useState(sizeArr[0][0]);

    return (
        <div className="sizes">
            {sizeArr.map(sizeEl =>  
            <button key={sizeEl.size} onClick={e=> {setSelectedSize(e.target.innerText);
            setSize(sizeEl.size)}}
            className = {
                selectedSize == sizeEl.size
                ? "sizeButtonSelected"
                : ""
            }
            >
                {sizeEl.size}
            </button>
            )
            }


        </div>
    )
}

export default Sizes