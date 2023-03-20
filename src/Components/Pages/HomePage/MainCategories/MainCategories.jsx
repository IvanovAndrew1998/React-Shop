import React from 'react'
import './MainCategories.css'
import CatalogueStore from '../../../../Store/CatalogueStore'
import { Link } from 'react-router-dom'

const MainCategories = () => {
  return (
    <div>
      <article className="main-elements">
        <div className="inner">
          <Link to='/catalogue' className="main-element first">
            <div
              onClick={() => {
                CatalogueStore.clearCatalogueCashe();
                CatalogueStore.toggleTag('Кольца')
              }}
            >
              <h2>Кольца</h2>
            </div>
          </Link>
          <Link to='/catalogue' className="main-element second">
            <div
              onClick={() => {
                CatalogueStore.clearCatalogueCashe();
                CatalogueStore.toggleTag('Цепи')
              }}
            >
              <h2>Цепи</h2>
            </div>
          </Link>
          <Link to='/catalogue' className="main-element third">
            <div
              onClick={() => {
                CatalogueStore.clearCatalogueCashe();
                CatalogueStore.toggleTag('Серьги')
              }}
            >
              <h2>Серьги</h2>
            </div>
          </Link>
          <Link to='/catalogue' className="main-element fourth">
            <div
              onClick={() => {
                CatalogueStore.clearCatalogueCashe();
                CatalogueStore.toggleTag('Крестики')
              }}
            >
              <h2>Крестики</h2>
            </div>
          </Link>
        </div>
      </article>
    </div>
  )
}

export default MainCategories