import React from 'react'
import './BasketCard.css'
import Ratings from 'react-ratings-declarative';

const BasketCard = () => {

  return (
    <div className="basketCard">
      <div className="top">
        <div className="titleBlock">
          <img src="src/basketImage.svg" alt="" />
          <div className="infoBlock">
            <p className='brandName'>Sokolov</p>
            <p className='productName'>Золотое кольцо обручальное с изумрудом</p>
            <div className="ratingBlock">
              <Ratings
                rating={2}
                widgetRatedColors="#FBB03B"
                svgIconPaths='M6.84996 6.05112L9 1.69466L11.15 6.05112C11.3321 6.42005 11.6841 6.67576 12.0912 6.73492L16.8988 7.43351L13.42 10.8245C13.1254 11.1117 12.991 11.5255 13.0605 11.931L13.8818 16.7192L9.58168 14.4585C9.21752 14.267 8.78248 14.267 8.41832 14.4585L4.11825 16.7192L4.93949 11.931C5.00904 11.5255 4.8746 11.1117 4.57999 10.8245L1.10116 7.43351L5.90879 6.73492C6.31593 6.67576 6.66788 6.42005 6.84996 6.05112Z'
                svgIconViewBoxes='0 0 22 22'
                widgetDimensions="26px"
                widgetSpacings="0px"

              >
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
              </Ratings>
              <a className='reviewQuantity'>322 отзыва</a>
            </div>
          </div>
        </div>

        <div className="priceBlock">
          <p className='discountValue'>-15%</p>
          <p className='currentPrice'>4 450 р</p>
          <p className='originalPrice'>6 420 р</p>
          <label class="container">
            <input type="checkbox" />
            <span class="mark"></span>
          </label>
        </div>
      </div>
      <div className="bottom">
        <div className="delete-buy">
          <img className='deleteButton' src="src/DeleteButton.svg" alt="" />
          <button className="buy">Купить</button>
          <img className='favourite' src="src/heart1.svg" alt="" />
        </div>
        {/* <div className="size-quantity">
          <div className="sizeButton">

            <img src="src/Pencil.svg" alt="" />
            <p>75.5 Размер</p>

          </div>
          <div className="quantityButton">

            <img src="src/Minus.svg" alt="" />
            <p>1</p>
            <img src="src/Plus.svg" alt="" />

          </div>
        </div> */}
        <div className='wholesalePanel'>

          <div className="singleSizeContainer">
            <div className="quantityWholesale">
              <p className='number'>0</p>
              <p>шт</p>
            </div>
            <div className="size">40</div>
          </div>
          <div className="singleSizeContainer">
            <div className="quantityWholesale">
              <p className='number'>0</p>
              <p>шт</p>
            </div>
            <div className="size">40</div>
          </div>
          <div className="singleSizeContainer">
            <div className="quantityWholesale">
              <p className='number'>0</p>
              <p>шт</p>
            </div>
            <div className="size">40</div>
          </div>
          <div className="singleSizeContainer">
            <div className="quantityWholesale">
              <p className='number'>0</p>
              <p>шт</p>
            </div>
            <div className="size">40</div>
          </div>
          <div className="singleSizeContainer">
            <div className="quantityWholesale">
              <p className='number'>0</p>
              <p>шт</p>
            </div>
            <div className="size">40</div>
          </div>
          <div className="singleSizeContainer">
            <div className="quantityWholesale">
              <p className='number'>0</p>
              <p>шт</p>
            </div>
            <div className="size">40</div>
          </div>
          <div className="singleSizeContainer">
            <div className="quantityWholesale">
              <p className='number'>0</p>
              <p>шт</p>
            </div>
            <div className="size">40</div>
          </div>
          <div className="singleSizeContainer">
            <div className="quantityWholesale">
              <p className='number'>0</p>
              <p>шт</p>
            </div>
            <div className="size">40</div>
          </div>
          <div className="singleSizeContainer">
            <div className="quantityWholesale">
              <p className='number'>0</p>
              <p>шт</p>
            </div>
            <div className="size">40</div>
          </div>
          <div className="singleSizeContainer">
            <div className="quantityWholesale">
              <p className='number'>0</p>
              <p>шт</p>
            </div>
            <div className="size">40</div>
          </div>
          <div className="singleSizeContainer">
            <div className="quantityWholesale">
              <p className='number'>0</p>
              <p>шт</p>
            </div>
            <div className="size">40</div>
          </div>
          <div className="singleSizeContainer">
            <div className="quantityWholesale">
              <p className='number'>0</p>
              <p>шт</p>
            </div>
            <div className="size">40</div>
          </div>
          <div className="singleSizeContainer">
            <div className="quantityWholesale">
              <p className='number'>0</p>
              <p>шт</p>
            </div>
            <div className="size">40</div>
          </div>
          <div className="singleSizeContainer">
            <div className="quantityWholesale">
              <p className='number'>0</p>
              <p>шт</p>
            </div>
            <div className="size">40</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BasketCard