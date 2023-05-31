import React from 'react'
import { Checkbox } from '@mui/material'
import './Sortingbar.css'
import CheckboxEmpty from '../Checkbox/CheckboxEmpty'
import CheckboxFilled from '../Checkbox/CheckboxFilled'

const Sortingbar = () => {
  return (
    <div className="Sortingbar">
      <div className="sortingbarLeft">
        <img src="/src/adminPage/sortingbar/back.svg" alt="" />
        <img src="/src/adminPage/sortingbar/star.svg" alt="" />
        <img src="/src/adminPage/sortingbar/show.svg" alt="" />
        <div className="selectAll">
          <Checkbox
            icon={<CheckboxEmpty/>}
            checkedIcon={<CheckboxFilled/>}
            sx={{

              marginLeft: -1,
              color: "red",

              '&.Mui-checked': {
                color: "red",
              }
              
            }}
          />
          <p>Выбрать все</p>
          <p className='sortingbarQuantity'>2 шт</p>
        </div>
      </div>
      <div className="sortingbarRight">

        <div className="SROcancelButton pointer">
          <img src="/src/adminPage/Pagebar/X.svg" alt="" />
          <p>Отмена</p>
        </div>
        <div className="SROacceptButton pointer">
          <img src="/src/adminPage/Pagebar/CheckedWhite.svg" alt="" />
          <p>Готово</p>
        </div>

        <div className="SROption pointer">
          <img src="/src/adminPage/sortingbar/delete.svg" alt="" />
          <p>Удалить</p>
        </div>

      </div>
    </div>
  )
}

export default Sortingbar