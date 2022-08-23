import React, { useEffect, useState } from 'react'


const Sizes = ({sizeArr, setSize}) => {
    const [selectedSize, setSelectedSize] = useState(sizeArr[0][0]);

    return (
        <div className="sizes">
            {sizeArr.map(sizeEl =>  
            <button onClick={e=> {setSelectedSize(e.target.innerText);
            setSize(sizeEl)}}
            className = {
                selectedSize == sizeEl[0]
                ? "sizeButtonSelected"
                : ""
            }
            >
                {sizeEl[0]}
            </button>
            )
            }


        </div>
    )
}

export default Sizes