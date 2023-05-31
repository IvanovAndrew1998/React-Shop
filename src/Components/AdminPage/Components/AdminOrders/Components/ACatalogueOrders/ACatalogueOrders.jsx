import React from 'react'
import './ACatalogueOrders.css'

const ACatalogueOrders = () => {
  return (
    <div className="ACatalogue">
                <div className="ACTopbar">

                    <button className="refreshButton ATPanel pointer">
                        <img src="/src/adminPage/refreshBlack.svg" alt="" />
                    </button>

                    <button className="filtersButton ATPanel pointer">
                        Фильтры
                    </button>

                    <div className="adminSearchbarWide">
                        <input className="adminSearchWide" type="search" id="site-search" placeholder="Поиск" />
                        <button className='adminFind-button'>
                            <p className='catalogue-link'>Найти</p>
                        </button>
                        <img className="searchIconWide" src="/src/adminPage/searchBlack.svg"></img>
                    </div>

                </div>

            </div>
  )
}

export default ACatalogueOrders