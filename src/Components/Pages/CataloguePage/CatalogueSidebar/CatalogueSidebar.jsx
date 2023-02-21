import { Checkbox, FormControlLabel, Slider, styled } from '@mui/material'
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react'
import CatalogueStore from '../../../../Store/CatalogueStore';
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
    const adresats = ['Женщинам', 'Мужчинам', 'Детям']
    const [activeTag, setActiveTag] = useState();
    

    function toggleChange(tagValue) {
        CatalogueStore.toggleTag(tagValue)
    }

    

    return (
        <div className="cardflex-left">
            <Accordion title='Кому'>
                {adresats.map(value =>
                    // <label className="container" key={value}>{value}
                    //     <input type="checkbox" onClick={e => toggleChange(value)} />
                    //     <span className="mark"></span>
                    // </label>

                    <FormControlLabel
                        control={
                            <Checkbox label={value}
                                sx={{
                                    color: "red",
                                    borderRadius: 1,
                                    '&.Mui-checked': {
                                    color: "red",
                                    }
                                }}
                                onChange={e => toggleChange(value)}
                                checked={CatalogueStore.tags.includes(value)}
                            />
                        }
                        label={value}
                    />
                    
                    
                )}

            </Accordion>
            <div className="product-type">
                <Accordion title='Тип изделия'>
                    <label className="container" >Серьги
                        <input type="checkbox" />
                        <span className="mark"></span>
                    </label>
                    <label className="container">Кольца
                        <input type="checkbox" />
                        <span className="mark"></span>
                    </label>
                    <label className="container">Браслеты
                        <input type="checkbox" />
                        <span className="mark"></span>
                    </label>
                    <label className="container">Подвески
                        <input type="checkbox" />
                        <span className="mark"></span>
                    </label>
                    <label className="container">Цепи
                        <input type="checkbox" />
                        <span className="mark"></span>
                    </label>
                    <label className="container">Колье
                        <input type="checkbox" />
                        <span className="mark"></span>
                    </label>
                    <label className="container">Часы
                        <input type="checkbox" />
                        <span className="mark"></span>
                    </label>
                    <label className="container">Брошь
                        <input type="checkbox" />
                        <span className="mark"></span>
                    </label>
                </Accordion>


            </div>
            <div className="show-more">
                <a href="#">Показать еще</a>
                <img src="src/arrow-orange.svg" alt="" />
            </div>
            <div className="h2-arrow">
                <h2 className="card-h2">Цена</h2>
                <img src="src/arrow-gray.png" alt="" />
            </div>
            <div className="two-inputs">
                <div className="from">
                    <p>от</p>
                    <input type="text" value={priceRange[0]} />
                </div>
                <div className="to">
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
            <div className="product-type">

                <Accordion title={'Материал'}>
                    <label className="container">Золото
                        <input type="checkbox" />
                        <span className="mark"></span>
                    </label>
                    <label className="container">Серебро
                        <input type="checkbox" />
                        <span className="mark"></span>
                    </label>
                    <label className="container">Ювелирная сталь
                        <input type="checkbox" />
                        <span className="mark"></span>
                    </label>
                    <label className="container">Розовое золото
                        <input type="checkbox" />
                        <span className="mark"></span>
                    </label>
                    <label className="container">Белое золото
                        <input type="checkbox" />
                        <span className="mark"></span>
                    </label>
                    <label className="container">Желтое золото
                        <input type="checkbox" />
                        <span className="mark"></span>
                    </label>
                </Accordion>

            </div>
            <div className="product-type">

                <Accordion title={'Вставка'}>

                    <label className="container">Без вставки
                        <input type="checkbox" />
                        <span className="mark"></span>
                    </label>
                    <label className="container">Бриллиант
                        <input type="checkbox" />
                        <span className="mark"></span>
                    </label>
                    <label className="container">Фианит
                        <input type="checkbox" />
                        <span className="mark"></span>
                    </label>
                    <label className="container">Гранат
                        <input type="checkbox" />
                        <span className="mark"></span>
                    </label>
                    <label className="container">Топаз
                        <input type="checkbox" />
                        <span className="mark"></span>
                    </label>
                    <label className="container">Сапфир
                        <input type="checkbox" />
                        <span className="mark"></span>
                    </label>
                </Accordion>
            </div>
            <div className="show-more">
                <a href="#">Показать еще</a>
                <img src="src/arrow-orange.svg" alt="" />
            </div>
            <div className="h2-arrow">
                <h2 className="material">Количество
                    камней</h2>
                <img src="src/arrow-d.svg" alt="" />
            </div>
            <div className="h2-arrow">
                <h2 >Бренд</h2>
                <img src="src/arrow-d.svg" alt="" />
            </div>
            <div className="h2-arrow">
                <h2 >Бренд</h2>
                <img src="src/arrow-d.svg" alt="" />
            </div>
            <div className="h2-arrow">
                <h2 >Тип огранки</h2>
                <img src="src/arrow-d.svg" alt="" />
            </div>
            <div className="h2-arrow">
                <h2 >Проба</h2>
                <img src="src/arrow-d.svg" alt="" />
            </div>
        </div>
    )
}

export default observer(CatalogueSidebar)