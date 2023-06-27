import {useState} from 'react';
import sizeStore from '../../../../../../Store/ProductPageStore';

const ProductCorpSize = ({ size, originalPrice, discountedPrice, id }) => {
    
    const [count, setCount] = useState(0);
    const [openCounter, setOpenCounter] = useState(false)

    const handleIncrement = () => {
        sizeStore.updateProductSize(size, count + 1);
        setCount( count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            sizeStore.updateProductSize(size, count - 1);

            setCount(count - 1);
        }
    };


    return (
        <div className="singleSizeContainer">
            <div className="quantityWholesale">
                <p className={`number ${count > 0 ? 'quantityColored' : ''}`} >{count}</p>
                <p className={`${count > 0 ? 'quantityColored' : ''}`}>шт</p>
            </div>
            <div className={`size ${count > 0 ? 'sizeColored' : ''}`} onClick={() => setOpenCounter(!openCounter)}>{size}</div>

            <div className={`sizeCounter ${openCounter ? 'active' : 'inactive'}`} >

                <img src="/src/MinusWhite.svg" alt="" onClick={handleDecrement} />
                <input type='number' value={count}></input>
                <img src="/src/PlusWhite.svg" alt="" onClick={handleIncrement} />

            </div>
        </div>
    )
}

export default ProductCorpSize