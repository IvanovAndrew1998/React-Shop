import { Slider, styled } from '@mui/material'
import React, { useState } from 'react'
import Accordion from './Accordion/Accordion';

const MuySlider = styled(Slider)({
    color: '#FF8B66',
    '& .MuiSlider-thumb': {
        backgroundColor: '#DC2E07',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        }
    },


});


const CatalogueSidebar = () => {
    const [priceRange, setPriceRange] = useState([0, 300000]);

    return (
        <div class="cardflex-left">
            <Accordion title='Кому'>
                <label class="container">Женщинам
                    <input type="checkbox" />
                    <span class="mark"></span>
                </label>
                <label class="container">Мужчинам
                    <input type="checkbox" />
                    <span class="mark"></span>
                </label>
                <label class="container">Детям
                    <input type="checkbox" />
                    <span class="mark"></span>
                </label>

            </Accordion>
            <div class="product-type">
                <Accordion title='Тип изделия'>
                    <label class="container">Серьги
                        <input type="checkbox" />
                        <span class="mark"></span>
                    </label>
                    <label class="container">Кольца
                        <input type="checkbox" />
                        <span class="mark"></span>
                    </label>
                    <label class="container">Браслеты
                        <input type="checkbox" />
                        <span class="mark"></span>
                    </label>
                    <label class="container">Подвески
                        <input type="checkbox" />
                        <span class="mark"></span>
                    </label>
                    <label class="container">Цепи
                        <input type="checkbox" />
                        <span class="mark"></span>
                    </label>
                    <label class="container">Колье
                        <input type="checkbox" />
                        <span class="mark"></span>
                    </label>
                    <label class="container">Часы
                        <input type="checkbox" />
                        <span class="mark"></span>
                    </label>
                    <label class="container">Брошь
                        <input type="checkbox" />
                        <span class="mark"></span>
                    </label>
                </Accordion>
                {/* <div class="h2-arrow">
                    <h2 class="card-h2">Тип изделия</h2>
                    <img src="src/arrow-gray.png" alt="" />
                </div> */}

            </div>
            <div class="show-more">
                <a href="#">Показать еще</a>
                <img src="src/arrow-orange.svg" alt="" />
            </div>
            <div class="h2-arrow">
                <h2 class="card-h2">Цена</h2>
                <img src="src/arrow-gray.png" alt="" />
            </div>
            <div class="two-inputs">
                <div class="from">
                    <p>от</p>
                    <input type="text" value={priceRange[0]} />
                </div>
                <div class="to">
                    <p>от</p>
                    <input type="text" value={priceRange[1]} />
                </div>
            </div>

            <MuySlider
                value={priceRange}
                onChange={e => setPriceRange(e.target.value)}
                color="secondary"
                disableSwap
            />
            <div class="h2-arrow">
                <h2 class="material">Материал</h2>
                <img src="src/arrow-gray.png" alt="" />
            </div>
            <label class="container">Золото
                <input type="checkbox" />
                <span class="mark"></span>
            </label>
            <label class="container">Серебро
                <input type="checkbox" />
                <span class="mark"></span>
            </label>
            <label class="container">Ювелирная сталь
                <input type="checkbox" />
                <span class="mark"></span>
            </label>
            <label class="container">Розовое золото
                <input type="checkbox" />
                <span class="mark"></span>
            </label>
            <label class="container">Белое золото
                <input type="checkbox" />
                <span class="mark"></span>
            </label>
            <label class="container">Желтое золото
                <input type="checkbox" />
                <span class="mark"></span>
            </label>
            <div class="adding">
                <div class="h2-arrow">
                    <h2 >Вставка</h2>
                    <img src="src/arrow-gray.png" alt="" />
                </div>
            </div>
            <label class="container">Без вставки
                <input type="checkbox" />
                <span class="mark"></span>
            </label>
            <label class="container">Бриллиант
                <input type="checkbox" />
                <span class="mark"></span>
            </label>
            <label class="container">Фианит
                <input type="checkbox" />
                <span class="mark"></span>
            </label>
            <label class="container">Гранат
                <input type="checkbox" />
                <span class="mark"></span>
            </label>
            <label class="container">Топаз
                <input type="checkbox" />
                <span class="mark"></span>
            </label>
            <label class="container">Сапфир
                <input type="checkbox" />
                <span class="mark"></span>
            </label>
            <div class="show-more">
                <a href="#">Показать еще</a>
                <img src="src/arrow-orange.svg" alt="" />
            </div>
            <div class="h2-arrow">
                <h2 class="material">Количество
                    камней</h2>
                <img src="src/arrow-d.svg" alt="" />
            </div>
            <div class="h2-arrow">
                <h2 >Бренд</h2>
                <img src="src/arrow-d.svg" alt="" />
            </div>
            <div class="h2-arrow">
                <h2 >Бренд</h2>
                <img src="src/arrow-d.svg" alt="" />
            </div>
            <div class="h2-arrow">
                <h2 >Тип огранки</h2>
                <img src="src/arrow-d.svg" alt="" />
            </div>
            <div class="h2-arrow">
                <h2 >Проба</h2>
                <img src="src/arrow-d.svg" alt="" />
            </div>
        </div>
    )
}

export default CatalogueSidebar