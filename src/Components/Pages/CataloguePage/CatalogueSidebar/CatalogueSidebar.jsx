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
    const productTypes = ["Серьги", "Кольца", "Браслеты", "Цепи", "Подвески", "Колье", "Часы", "Брошь"]
    const materials = ["Золото", "Серебро", "Ювелирная сталь", "Розовое золото", "Белое золото", "Желтое золото"]
    const gems = ["Без вставки", "Бриллиант", "Фианит", "Гранат", "Топаз", "Сапфир"]

    function toggleChange(tagValue) {
        CatalogueStore.toggleTag(tagValue)
    }



    return (
        <div className="cardflex-left">
            <Accordion title='Кому' category={adresats}>
                {adresats.map(value =>

                    <FormControlLabel
                        control={
                            <Checkbox label={value}
                                sx={{

                                    marginLeft: 1,
                                    color: "red",
                                    // transform:'scale(1)',

                                    '&.Mui-checked': {
                                        color: "red",
                                    },
                                    '&.MuiButtonBase-root': {
                                        padding: 0,
                                    },
                                    '& .MuiSvgIcon-root': {


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
                <Accordion title='Тип изделия' category={productTypes}>
                    {productTypes.map(productType =>

                        <FormControlLabel
                            control={
                                <Checkbox label={productType}
                                    sx={{

                                        marginLeft: 1,
                                        color: "red",


                                        '&.Mui-checked': {
                                            color: "red",
                                        },
                                        '&.MuiButtonBase-root': {
                                            padding: 0,
                                        },
                                        '& .MuiSvgIcon-root': {


                                        }
                                    }}
                                    onChange={e => toggleChange(productType)}
                                    checked={CatalogueStore.tags.includes(productType)}
                                />
                            }
                            label={productType}
                        />

                    )}
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

                <Accordion title={'Материал'} category={materials}>
                    {materials.map(material =>
                        <FormControlLabel
                            control={
                                <Checkbox label={material}
                                    sx={{

                                        marginLeft: 1,
                                        color: "red",


                                        '&.Mui-checked': {
                                            color: "red",
                                        },
                                        '&.MuiButtonBase-root': {
                                            padding: 0,
                                        },
                                        '& .MuiSvgIcon-root': {


                                        }
                                    }}
                                    onChange={e => toggleChange(material)}
                                    checked={CatalogueStore.tags.includes(material)}
                                />
                            }
                            label={material}
                        />
                    )}

                </Accordion>

            </div>
            <div className="product-type">

                <Accordion title={'Вставка'} category={gems}>
                    {gems.map(gem => 
                           <FormControlLabel
                           control={
                               <Checkbox label={gem}
                                   sx={{
   
                                       marginLeft: 1,
                                       color: "red",
                                      
   
                                       '&.Mui-checked': {
                                           color: "red",
                                       },
                                       '&.MuiButtonBase-root': {
                                           padding: 0,
                                       },
                                       '& .MuiSvgIcon-root': {
   
   
                                       }
                                   }}
                                   onChange={e => toggleChange(gem)}
                                   checked={CatalogueStore.tags.includes(gem)}
                               />
                           }
                           label={gem}
                       /> 
                            )}

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