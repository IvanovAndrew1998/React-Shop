import React from 'react'
import './Pagebar.css'

const Pagebar = () => {
    return (
        <div className='Pagebar'>
            <div className="pagebarPanel">
                <div className="pagebarPanelSide">

                    <input type="number" className='pagebarManual' />

                    <div className="pagebarIcon pointer">
                        <img src="/src/adminPage/searchBlack.svg" />
                    </div>

                </div>

                <div className="pagebarPanelMid">

                    <p>Из 444</p>

                </div>

                <div className="pagebarPanelSide">

                    <div className="pagebarIcon pointer">
                        <img src="/src/adminPage/Pagebar/ar-left.svg" alt="" />
                    </div>
                    <div className="pagebarIcon pointer ">
                        <img src="/src/adminPage/Pagebar/ar-right.svg" alt="" />
                    </div>

                </div>
            </div>
            <div className="scrollUp">
                <img src="/src/adminPage/Pagebar/ar-up.svg" alt="" />
            </div>
        </div>
    )
}

export default Pagebar