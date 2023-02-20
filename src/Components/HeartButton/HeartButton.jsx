import React from 'react'
import { useState } from 'react'
import './HeartButton.css'

const HeartButton = () => {

    const [favourite, setFavourite] = useState(false)


  return (
    <div className={`heartButton ${favourite ? 'favourited' : ''}`} onClick={() => setFavourite(!favourite)}/>
  )
}

export default HeartButton