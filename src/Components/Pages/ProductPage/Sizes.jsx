import React, { useEffect, useState } from 'react'
import { getSizeList } from '../../../Api';


const Sizes = (
    // Отправка данных о выбранном размере
    setSize
    ) => {
    const [sizeList, setSizeList] = useState([]);
    const [selectedSize, setSelectedSize] = useState ();


    useEffect(
        () => setSizeList(getSizeList)
        ,
        []
    );

    return (
        <div className="sizes">
            {sizeList.map(size =>  
            <button onClick={e=> setSelectedSize(e.target.innerText)}
            className = {
                selectedSize == size
                ? "sizeButtonSelected"
                : ""
            }
            >
                {size}
            </button>
            )
            }


        </div>
    )
}

export default Sizes