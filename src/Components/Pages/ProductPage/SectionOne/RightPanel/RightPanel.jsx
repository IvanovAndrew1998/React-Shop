import React, { useState } from 'react'
import Sizes from './Sizes'
import Ratings from 'react-ratings-declarative';
import RatingStar from '../../../../RatingStar';


const RightPanel = ({productInfo}) => {
const [rating, setRating] = useState(3);
const sizeArr = sizeConverter(productInfo.price.sizesWeightsPrices);
const [currentSize, setCurrentSize] = useState(sizeArr[0]);

function materialConvert (material){
    if (material === "AG")
        return "Серебро"
    else if (material === "AU")
        return "Золото"
    else return "Material"
}

function characteristicsRender (characteristic){
    if (characteristic.slice(0,3) === "NO_")
        return "noData"
    else return ""
}

function sizeConverter(sizesObj) {
    let sizeArr = [];
    for (const key in sizesObj) {
        sizeArr = sizeArr.concat([[
            key,
            ...sizesObj[key]
        ]]);
    }
    return sizeArr;
}


    return (
        <div className="sec1-right">
            <p className="article-num">Артикул: {productInfo.vendorCode}</p>
            <h2>{productInfo.name}</h2>
            <div className="feedback">
                <Ratings 
                rating={productInfo.rating.value}
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
                {/* <a href="#"><img src="src/stars.svg" alt="" /></a> */}
                <a href="#feedbackLink">{productInfo.rating.quantity} отзывов</a>
                <a href="#feedbackLink"><img src="src/arrow-down.svg" alt="" /></a>

            </div>
            <p className="percantage">-{productInfo.price.discount}%</p>
            <div className="discount">
                <p className="price-now">{currentSize[3]} р</p>
                <p className="price-then">{currentSize[2]} р</p>
            </div>
            {/* <div className="partial-payment">
                <a href="#">14 583 р / мес на 6 месяцев</a>
                <img src="src/arrow-down2.svg" alt="" />
            </div> */}
            <div className="add-buy">
                <button className="add">Добавить в корзину</button>
                <button className="buy">Купить</button>
                <img src="src/heart1.svg" alt="" />
            </div>
            <div className="clock-click">
                <img src="src/clock-click.svg" alt="" />
                <a className="drop-price" href="#">Узнать о снижении цены</a>
            </div>
            <p className="choose-size">
                Выберите размер
            </p>
            <Sizes sizeArr={sizeArr} setSize={setCurrentSize}/>
            <div className="learn-size">
                <a href="#">Как узнать размер</a>
                <img src="src/arrow-side.svg" alt="" />
            </div>
            <p className="description">Описание</p>
            <div className="description-det">
                <p>
                    Материал ............................ <span>{materialConvert(productInfo.characteristics.material.split("_")[0])}</span>
                </p>
                <p>
                    Проба .................................... <span>{productInfo.characteristics.material.split("_")[1]} пробы</span>
                </p>
                <p>
                    Бренд .................................... <span>{productInfo.characteristics.manufacturer.name}</span>
                </p>
                <p className={characteristicsRender(productInfo.characteristics.coating)}>
                    Покрытие ........................... <span>{productInfo.characteristics.coating}</span>
                </p>
                <p className={characteristicsRender(productInfo.characteristics.wireType)}>
                    Вид цепи ............................. <span>{productInfo.characteristics.wireType}</span>
                </p>
                <p className={characteristicsRender(productInfo.characteristics.gemType)}>
                    Вставка ................................. <span>{productInfo.characteristics.gemType}</span>
                </p>
                <p>
                    Вес изделия: ..................... <span>{currentSize[1]} г</span>
                </p>
            </div>
            <h2 className="sokolov">SOKOLOV</h2>
            <p className="rare-cases">В редких случаях изделие может иметь отличие от представленного на фото и в описании</p>
        </div>
    )
}

export default RightPanel