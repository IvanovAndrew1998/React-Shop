import { Checkbox, FormControlLabel, Slider, styled } from '@mui/material'
import React, { useState, useEffect } from 'react'
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
    const [priceRange, setPriceRange] = useState([0, 0]);
    const adresats = ['Женщинам', 'Мужчинам', 'Детям'];

    const [minPriceRange, setMinPriceRange] = useState()
    const [maxPriceRange, setMaxPriceRange] = useState()

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    useEffect(() => {
        let maxOriginal = 0;

        CatalogueStore.catalogueCashe.forEach(result => {
            if (result.price.original > maxOriginal) {
                maxOriginal = result.price.original;
            }
        });
        setMaxPrice(maxOriginal);

        setMaxPriceRange(maxOriginal)


    }, [CatalogueStore.catalogueCashe])


    function toggleChange(tagValue) {
        CatalogueStore.toggleTag(tagValue)
    }

    const productTypes = new Set();
    const materials = new Set();
    const gemTypes = new Set();
    const coatings = new Set();
    const wireTypes = new Set();
    const gems = new Set();

    CatalogueStore.catalogueCashe.forEach(result => {
        productTypes.add(result.characteristics.product_type);
        materials.add(result.characteristics.material);
        gemTypes.add(result.characteristics.gem_type);
        coatings.add(result.characteristics.coating);
        wireTypes.add(result.characteristics.wire_type);
        gems.add(result.characteristics.gem);
    });
    const productTypeArray = Array.from(productTypes);
    const materialsArray = Array.from(materials);
    const gemTypesArray = Array.from(gemTypes);
    const coatingArray = Array.from(coatings);
    const wireTypesArray = Array.from(wireTypes);
    const gemsArray = Array.from(gems);





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
                    <input type="number" value={minPriceRange} 
                    onChange={(e) => {
                        if (maxPrice <= e.target.value) {
                            setMinPriceRange(maxPrice)
                        } else {
                            setMinPriceRange(e.target.value)
                        }

                    }} 

                    />
                </div>
                <div className="to">
                    <p>от</p>
                    <input type="number" value={maxPriceRange}
                        onChange={(e) => {
                            if (maxPrice <= e.target.value) {
                                setMaxPriceRange(maxPrice)
                            } else {
                                setMaxPriceRange(e.target.value)
                            }

                        }} />
                </div>
            </div>

            <MuySlider
                value={[minPriceRange, maxPriceRange]}
                onChange={e => {
                    setMinPriceRange(e.target.value[0]);
                    setMaxPriceRange(e.target.value[1]);
                }}
                color="secondary"
                disableSwap

                min={minPrice}
                max={maxPrice}
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
                <img src="/src/arrow-orange.svg" alt="" />
            </div>
            <div className="h2-arrow">
                <h2 className="material">Количество
                    камней</h2>
                <img src="/src/arrow-d.svg" alt="" />
            </div>
            <div className="h2-arrow">
                <h2 >Бренд</h2>
                <img src="/src/arrow-d.svg" alt="" />
            </div>
            <div className="h2-arrow">
                <h2 >Бренд</h2>
                <img src="/src/arrow-d.svg" alt="" />
            </div>
            <div className="h2-arrow">
                <h2 >Тип огранки</h2>
                <img src="/src/arrow-d.svg" alt="" />
            </div>
            <div className="h2-arrow">
                <h2 >Проба</h2>
                <img src="/src/arrow-d.svg" alt="" />
            </div>
        </div>
    )
})

export default CatalogueSidebar