import React, { useState } from 'react'
import './CorpSpin.css'

const CorpSpin = () => {



  const [count, setCount] = useState(0)
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
      <div className={`size ${count > 0 ? 'sizeColored' : ''}`} onClick={() => setOpenCounter(!openCounter)}>40</div>

      <div className={`sizeCounter ${openCounter ? 'active' : 'inactive'}`} >

        <img src="src/MinusWhite.svg" alt="" onClick={decr} />
        <p>{count}</p>
        <img src="src/PlusWhite.svg" alt="" onClick={() => setCount(count + 1)} />

      </div>
    </div>
  )
}

export default CorpSpin