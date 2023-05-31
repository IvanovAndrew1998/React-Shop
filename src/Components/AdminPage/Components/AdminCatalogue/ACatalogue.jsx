import React from 'react'
import './ACatalogue.css'

const ACatalogue = () => {
  return (
    <div className="ACatalogue">
          <div className="ACTopbar">

            <button className="refreshButton ATPanel pointer">
              <img src="/src/adminPage/refreshBlack.svg" alt="" />
            </button>

            <button className="filtersButton ATPanel pointer">
              Фильтры
            </button>

            <div className="adminSearchbar">
              <input className="adminSearch" type="search" id="site-search" placeholder="Поиск" />
              <button className='adminFind-button'>
                <p className='catalogue-link'>Найти</p>
              </button>
              <img className="searchIcon" src="/src/adminPage/searchBlack.svg"></img>
            </div>

            <button className="addButton ATPanel pointer">
              <img src="/src/adminPage/addGray.svg" alt="" />
              <p>Товар</p>
            </button>

            <button className="addButton ATPanel pointer">
              <img src="/src/adminPage/addGray.svg" alt="" />
              <p>Коллекция</p>
            </button>

          </div>
        </div>
  )
}

export default ACatalogue