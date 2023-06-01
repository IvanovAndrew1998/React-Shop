import React, { useState, useEffect } from 'react'
import Sizes from './Sizes'
import Ratings from 'react-ratings-declarative';
import RatingStar from '../../../../RatingStar';
import './rightPanel.css'
import HeartButton from '../../../../HeartButton/HeartButton';
import { userStore } from '../../../../../Store/UserStore';
import CorpSpinPanel from '../../../BasketPage/BasketPanel/BasketCard/Components/CorpSpin/CorpSpinPanel';
import ProductCorpSizePanel from './CorpSizePanel/ProductCorpSizePanel';




const RightPanel = ({ productInfo, rating, userInfo }) => {
    const [productRating, setProductRating] = useState(3);
    console.log(productInfo.price.sizesWeightsPrices);
    const sizeArr = productInfo.price.sizesWeightsPrices;
    const [currentSize, setCurrentSize] = useState(sizeArr[0].size);


    function characteristicsRender(characteristic) {
        if (characteristic.slice(0, 3) === "NO_")
            return "noData"
        else return ""
    }

    // function sizeConverter(sizesObj) {
    //     let sizeArr = [];
    //     for (const key in sizesObj) {
    //         sizeArr = sizeArr.concat([[
    //             key,
    //             ...sizesObj[key]
    //         ]]);
    //     }
    //     return sizeArr;
    //     console.log(sizeArr)
    // }

    useEffect(() => {
        document.title = `${productInfo.name}`;
    }, []);
    console.log(sizeArr);
    return (
        <div className="sec1-right">
            <p className="article-num">Артикул: {productInfo.vendorCode}</p>
            <h2>{productInfo.name}</h2>
            <div className="feedback">
                <Ratings
                    rating={+rating.value}
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
                {/* <a href="#"><img src="/src/stars.svg" alt="" /></a> */}
                <a href="#feedbackLink">{rating.quantity} отзывов</a>
                <a href="#feedbackLink"><img src="/src/arrow-down.svg" alt="" /></a>
                <p className='quantity'>118 шт</p>

            </div>
            <p className="percantage">-{productInfo.price.discount}%</p>
            <div className="discount">
                {/* <p className="price-now">{currentSize[3]} р</p>
                <p className="price-then">{currentSize[2]} р</p> */}
            </div>

            <div className="add-buy">
                <button className="buy">Купить</button>
                <button className="add">Добавить в корзину</button>
                <HeartButton />
            </div>
            <div className="clock-click">
                <img src="/src/clock-click.svg" alt="" />
                <a className="drop-price" href="#">Узнать о снижении цены</a>
            </div>
            <div className="">
                {/* {
                    userInfo.data.userData.is_corporate == true
                    ?
                    <CorpSpinPanel/>
                    :
                    <Sizes sizeArr={sizeArr} setSize={setCurrentSize} />
                } */}
                    <ProductCorpSizePanel sizeArr={sizeArr}/>
                    {/* <Sizes sizeArr={sizeArr} setSize={setCurrentSize} /> */}
            </div>

            <p className="choose-size">
                Выберите размер изделия
            </p>
            <div className="learn-size">
                <img src="/src/question.svg" alt="" />
                <a href="#">Как узнать размер?</a>
            </div>
            <p className="description">Характеристики</p>
            <div className="description-det">
                <p>
                    Материал ............................ <span>{productInfo.characteristics.material}</span>
                </p>
                <p>
                    Бренд .................................... <span>{productInfo.manufacturer.name}</span>
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
                    {/* Вес изделия: ..................... <span>{currentSize[1]} г</span> */}
                </p>
            </div>
            <h2 className='description'>Описание</h2>
            <p className='descriptionText'>{productInfo.characteristics.description}</p>
            <h2 className="sokolov">{productInfo.manufacturer.name}</h2>
            <p className="rare-cases">В редких случаях изделие может иметь отличие от представленного на фото и в описании</p>
        </div>
    )
}

export default RightPanel