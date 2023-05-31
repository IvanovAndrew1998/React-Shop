import React, { useState } from 'react'
import './ListFolder.css'
import Slider from '@mui/material/Slider';
import CheckboxEmpty from '../Checkbox/CheckboxEmpty'
import CheckboxFilled from '../Checkbox/CheckboxFilled'
import { Checkbox } from '@mui/material'

const ListFolder = () => {

  const [sliderValue, setSliderValue] = useState(0)


  return (
    <div className='ListFolder'>

      <div className="LFLeft">
        <div className="LFPanel">
          <div className="LFPanelImages">
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
          </div>
          <p>Облачная коллекция</p>
        </div>
        <div className="LFQuantityPromotion">
          <div className="LFQuantity">
            4 444 шт
          </div>
          <div className="LFPromotion">
            <img src="/src/selectorIcon.svg" alt="" />
            <p>Без акции</p>
          </div>
        </div>
      </div>

      <div className="LFRight">

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
      </div>

    </div>
  )
}

export default ListFolder