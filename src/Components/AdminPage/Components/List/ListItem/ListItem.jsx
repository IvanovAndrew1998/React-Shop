import React, { useState } from 'react'
import './ListItem.css'
import Slider from '@mui/material/Slider';
import CheckboxEmpty from '../Checkbox/CheckboxEmpty'
import CheckboxFilled from '../Checkbox/CheckboxFilled'
import { Checkbox } from '@mui/material'


const ListItem = () => {

    const [sliderValue, setSliderValue] = useState(0)

    return (
        <div className='ListItem'>

            <div className="LILeft">
                <div className="LIInfo">
                    <img className='itemImage' src="/src/jew.jpg" alt="" />
                    <div className="LIInfoPanel">
                        <div className="LIInfoPanelTop">
                            <p>Арт: 404486027</p>
                            <p>114 шт</p>
                        </div>
                        <div className="LIInfoPanelBottom">
                            <Checkbox
                                icon={<CheckboxEmpty />}
                                checkedIcon={<CheckboxFilled />}
                                sx={{

                                    marginLeft: 0,
                                    padding: 0,
                                    color: "red",

                                    '&.Mui-checked': {
                                        color: "red",
                                    }

                                }}
                            />
                            <img className='pointer' src="/src/adminPage/sortingbar/star.svg" alt="" />
                            <img className='pointer' src="/src/adminPage/sortingbar/show.svg" alt="" />
                            <p>Ожерелье</p>
                        </div>
                    </div>
                </div>
                <div className="BrandDiscount">

                    <div className="BrandDiscountTop">
                        SOKOLOV
                    </div>
                    <div className="BrandDiscountBottom">
                        <img src="/src/selectorIcon.svg" alt="" />
                        <p>Осень 2022</p>
                    </div>

                </div>
            </div>

            <div className="LIRight">
                <div className="LIPriceTime">

                    <div className="LIPrice">
                        44 580 р / 68 679
                    </div>

                    <div className="LITime">
                        <img src="/src/selectorIcon.svg" alt="" />
                        <p>50 s</p>
                    </div>

                </div>
                <div className="LISlider">
                    <div className="sliderValue">

                        <input className="sliderInput"
                            type='number'
                            value={sliderValue}
                            onChange={(e) => {
                                if (e.target.value > 101) {
                                    setSliderValue(100)
                                }
                                else {
                                    setSliderValue(e.target.value)
                                }
                            }}
                        />
                        <p>%</p>
                    </div>
                    <Slider
                        value={sliderValue}
                        onChange={e => {
                            setSliderValue(e.target.value)
                        }}
                        focusVisible='off'
                        valueLabelDisplay='off'
                        size="small"
                        defaultValue={70}
                        aria-label="Small"
                    />
                </div>
            </div>

        </div>
    )
}

export default ListItem