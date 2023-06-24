import React, { useState } from 'react'
import sizeStore from '../../../../../../Store/ProductPageStore';

const ProductCorpSize = ({ size, originalPrice, discountedPrice, id }) => {
    sizeStore.addProduct(id);
    // const [count, setCount] = useState(0);

    // const handleInputChange = (e) => {

    //     const value = e.target.value;
    //     if (value === '' || isNaN(value)) {
    //         setCount(0)

    //     }
    //     else {
    //         setCount(Number(value));

    //     }
    // }



    // const handleIncrement = () => {
    //     setCount((prevValue) => prevValue + 1);



    // }

    // const handleDecrement = () => {
    //     if (count > 0) {

    //         setCount((prevValue) => prevValue - 1);

    //     }
    //     else {
    //         count = 0;

    //     }

    // }

    const product = sizeStore.products.find((p) => p.id === id);
    const count = product?.sizes[size] || 0;

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value === '' || isNaN(value)) {
            sizeStore.updateProductSize(id, size, 0);
        } else {
            sizeStore.updateProductSize(id, size, Number(value));
        }
    };

    const handleIncrement = () => {
        sizeStore.updateProductSize(id, size, count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            sizeStore.updateProductSize(id, size, count - 1);
        }
    };

    const [openCounter, setOpenCounter] = useState(false)
    const jsonOutput = JSON.stringify(sizeStore.products);
    console.log(jsonOutput);

    return (
        <div className="singleSizeContainer">
            <div className="quantityWholesale">
                <p className={`number ${count > 0 ? 'quantityColored' : ''}`} onChange={handleInputChange} >{count}</p>
                <p className={`${count > 0 ? 'quantityColored' : ''}`}>шт</p>
            </div>
            <div className={`size ${count > 0 ? 'sizeColored' : ''}`} onClick={() => setOpenCounter(!openCounter)}>{size}</div>

            <div className={`sizeCounter ${openCounter ? 'active' : 'inactive'}`} >

                <img src="/src/MinusWhite.svg" alt="" onClick={handleDecrement} />
                <input type='number' onChange={handleInputChange} value={count}></input>
                <img src="/src/PlusWhite.svg" alt="" onClick={handleIncrement} />

            </div>
        </div>
    )
}

export default ProductCorpSize