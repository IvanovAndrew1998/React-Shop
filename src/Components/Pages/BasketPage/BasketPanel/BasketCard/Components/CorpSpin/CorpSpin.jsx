import React, { useState } from 'react'
import './CorpSpin.css'
import { Navigate } from "react-router-dom";
import { userStore } from '../../../../../../../Store/UserStore';

const CorpSpin = ({size, weight, originalPrice, discountedPrice, basket, id}) => {

  const [count, setCount] = useState(0);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === '' || isNaN(value)) {
      setCount(0)
      basket.setSizeCount(id, size, 0) 
    }
    else {
      setCount(Number(value));
      basket.setSizeCount(id, size, Number(value)) 
    }
  }



  const handleIncrement = () => {
    setCount((prevValue) => prevValue + 1);
    basket.setSizeCount(id, size, count + 1) 

    
  }

  const handleDecrement = () => {
    if (count > 0) {

      setCount((prevValue) => prevValue - 1);
      basket.setSizeCount(id, size, count - 1) 
    }
    else {
      count = 0;
      basket.setSizeCount(id, size, 0) 
    }

  }

  const [openCounter, setOpenCounter] = useState(false)

  // if (userStore.loggedIn == false) {
  //   return <Navigate to="/" replace />;
  // }
  
  return (
    
    <div className="singleSizeContainer">
      <div className="quantityWholesale">
        <p className={`number ${count > 0 ? 'quantityColored' : ''}`} onChange={handleInputChange} >{count}</p>
        <p className={`${count > 0 ? 'quantityColored' : ''}`}>шт</p>
      </div>
      <div className={`size ${count > 0 ? 'sizeColored' : ''}`} onClick={() => setOpenCounter(!openCounter)}>{size}</div>
      
      <div className={`sizeCounter ${openCounter ? 'active' : 'inactive'}`} >

        <img src="src/MinusWhite.svg" alt="" onClick={handleDecrement} />
        <input type='number' onChange={handleInputChange} value={count}></input>
        <img src="src/PlusWhite.svg" alt="" onClick={handleIncrement} />

      </div>
    </div>
  )
}

export default CorpSpin