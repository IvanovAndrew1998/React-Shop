import React from 'react'
import './MapSearchbar.css'


const MapSearchbar = () => {
  return (
    <div className='MapSearchbar'>
        <div className="MSearchbar">
            <img src="src/Search-grey.svg" alt="" />
            <input type="text" placeholder='123' />
            <img src="src/CheckIcon.svg" alt="" />
        </div>
        <div className="MSearchbarPanel">
            <div className="MSPOption OptionActive">Ювелирный мир</div>
            <div className="MSPOption">Почта России</div>
            <div className="MSPOption">СДЭК</div>
        </div>
    </div>
  )
}

export default MapSearchbar