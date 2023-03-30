import React, { useState } from 'react'

const COCardQuantitySingle = () => {

    const [count, setCount] = useState(1)
    function decr() {
      if (count > 0) {
  
        setCount(count - 1)
  
      }
      else {
        count = 0;
      }
  
    }
    const [openCounter, setOpenCounter] = useState(false)

  return (
    <div className="singleSizeContainer">
      <div className="quantityWholesale">
        <p className={`number ${count > 0 ? 'quantityColored' : ''}`}>{count}</p>
        <p className={`${count > 0 ? 'quantityColored' : ''}`}>шт</p>
      </div>
      <div className={`size ${count > 0 ? 'sizeColored' : ''}`} >40</div>

      
    </div>
  )
}

export default COCardQuantitySingle