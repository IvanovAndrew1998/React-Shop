import { Checkbox, FormControlLabel, Slider, styled } from '@mui/material'
import React, { useState } from 'react'
import CatalogueStore from '../../../../Store/CatalogueStore';
import Accordion from './Accordion/Accordion';
import Checked from './Images/Checked';
import EmptyCheck from './Images/EmptyCheck';
import { observer } from 'mobx-react-lite';
import Loader from '../../ProductPage/Loader/Loader';

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


const CatalogueSidebar = observer(() => {
    const [priceRange, setPriceRange] = useState([0, 300000]);
    const adresats = ['Женщинам', 'Мужчинам', 'Детям']




    function toggleChange(tagValue) {
        CatalogueStore.toggleTag(tagValue)
    }

    // Тип изделия
    const productTypes = new Set();
    CatalogueStore.catalogueCashe.forEach(result => {
        productTypes.add(result.characteristics.product_type);
    });
    const productTypeArray = Array.from(productTypes);
    // 

    // Материал
    const materials = new Set();
    CatalogueStore.catalogueCashe.forEach(result => {
        materials.add(result.characteristics.material);
    });
    const materialsArray = Array.from(materials);
    // 

    // Вставка
    const gemTypes = new Set();
    CatalogueStore.catalogueCashe.forEach(result => {
        gemTypes.add(result.characteristics.gem_type);
    });
    const gemTypesArray = Array.from(gemTypes);
    // 

    // Покрытие
    const coatings = new Set();
    CatalogueStore.catalogueCashe.forEach(result => {
        coatings.add(result.characteristics.coating);
    });
    const coatingArray = Array.from(coatings);
    // 

    // Тип проволоки
    const wireTypes = new Set();
    CatalogueStore.catalogueCashe.forEach(result => {
        wireTypes.add(result.characteristics.wire_type);
    });
    const wireTypesArray = Array.from(wireTypes);
    // 

    // Камень
    const gems = new Set();
    CatalogueStore.catalogueCashe.forEach(result => {
        gems.add(result.characteristics.gem);
    });
    const gemsArray = Array.from(gems);
    // 

    let maxOriginal = -Infinity;

    CatalogueStore.catalogueCashe.forEach(result => {
        if (result.price.original > maxOriginal) {
            maxOriginal = result.price.original;
        }
    });
    console.log(maxOriginal);

    if (CatalogueStore.catalogueCashe === undefined) {
        return <Loader />
    }

    return (
        <div className="cardflex-left">
            <Accordion title='Кому' category={adresats}>
                {adresats.map(adresat =>

                    <FormControlLabel
                        control={
                            <Checkbox label={adresat}
                                icon={<EmptyCheck />}
                                checkedIcon={<Checked />}
                                sx={{

                                    marginLeft: 1,
                                    color: "red",

                                    '&.Mui-checked': {
                                        color: "red",
                                    },
                                    '&.MuiButtonBase-root': {

                                    },
                                    '& .MuiSvgIcon-root': {


                                    }
                                }}
                                onChange={e => toggleChange(adresat)}
                                checked={CatalogueStore.tags.includes(adresat)}
                            />
                        }
                        label={adresat}
                    />


                )}

            </Accordion>
            <div className="product-type">
                <Accordion title='Тип изделия' category={productTypes}>
                    {productTypeArray.map(productType =>

                        <FormControlLabel
                            control={
                                <Checkbox label={productType}
                                    icon={<EmptyCheck />}
                                    checkedIcon={<Checked />}
                                    sx={{

                                        marginLeft: 1,
                                        color: "red",

                                        '&.Mui-checked': {
                                            color: "red",
                                        },
                                        '&.MuiButtonBase-root': {

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
                    {materialsArray.map(material =>
                        <FormControlLabel
                            control={
                                <Checkbox label={material}
                                    icon={<EmptyCheck />}
                                    checkedIcon={<Checked />}
                                    sx={{

                                        marginLeft: 1,
                                        color: "red",

                                        '&.Mui-checked': {
                                            color: "red",
                                        },
                                        '&.MuiButtonBase-root': {

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

                <Accordion title={'Покрытие'} category={coatings}>
                    {coatingArray.map(coating =>
                        <FormControlLabel
                            control={
                                <Checkbox label={coating}
                                    icon={<EmptyCheck />}
                                    checkedIcon={<Checked />}
                                    sx={{

                                        marginLeft: 1,
                                        color: "red",

                                        '&.Mui-checked': {
                                            color: "red",
                                        },
                                        '&.MuiButtonBase-root': {

                                        },
                                        '& .MuiSvgIcon-root': {


                                        }
                                    }}
                                    onChange={e => toggleChange(coating)}
                                    checked={CatalogueStore.tags.includes(coating)}
                                />
                            }
                            label={coating}
                        />
                    )}

                </Accordion>
            </div>
            <div className="product-type">

                <Accordion title={'Вставка'} category={gemTypes}>
                    {gemTypesArray.map(gemType =>
                        <FormControlLabel
                            control={
                                <Checkbox label={gemType}
                                    icon={<EmptyCheck />}
                                    checkedIcon={<Checked />}
                                    sx={{

                                        marginLeft: 1,
                                        color: "red",

                                        '&.Mui-checked': {
                                            color: "red",
                                        },
                                        '&.MuiButtonBase-root': {

                                        },
                                        '& .MuiSvgIcon-root': {


                                        }
                                    }}
                                    onChange={e => toggleChange(gemType)}
                                    checked={CatalogueStore.tags.includes(gemType)}
                                />
                            }
                            label={gemType}
                        />
                    )}

                </Accordion>
            </div>
            <div className="product-type">

                <Accordion title={'Проволока'} category={wireTypes}>
                    {wireTypesArray.map(wireType =>
                        <FormControlLabel
                            control={
                                <Checkbox label={wireType}
                                    icon={<EmptyCheck />}
                                    checkedIcon={<Checked />}
                                    sx={{

                                        marginLeft: 1,
                                        color: "red",

                                        '&.Mui-checked': {
                                            color: "red",
                                        },
                                        '&.MuiButtonBase-root': {

                                        },
                                        '& .MuiSvgIcon-root': {


                                        }
                                    }}
                                    onChange={e => toggleChange(wireType)}
                                    checked={CatalogueStore.tags.includes(wireType)}
                                />
                            }
                            label={wireType}
                        />
                    )}

                </Accordion>
            </div>
            <div className="product-type">

                <Accordion title={'Камень'} category={gems}>
                    {gemsArray.map(gem => {
                        gem == null
                            ?
                            <></>
                            :
                            <FormControlLabel
                                control={
                                    <Checkbox label={gem}
                                        icon={<EmptyCheck />}
                                        checkedIcon={<Checked />}
                                        sx={{

                                            marginLeft: 1,
                                            color: "red",

                                            '&.Mui-checked': {
                                                color: "red",
                                            },
                                            '&.MuiButtonBase-root': {

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
                    }
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
})

export default CatalogueSidebar