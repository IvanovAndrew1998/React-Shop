import { Checkbox, FormControlLabel, Slider, styled } from '@mui/material'
import React, { useState } from 'react'
import CatalogueStore from '../../../../Store/CatalogueStore';
import Accordion from './Accordion/Accordion';
import Checked from './Images/Checked';
import EmptyCheck from './Images/EmptyCheck';
import { observer } from 'mobx-react-lite';


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




const CatalogueSidebar = observer(({model}) => {


    const [priceRange, setPriceRange] = useState([0, 0]);

    const [minPriceRange, setMinPriceRange] = useState()
    const [maxPriceRange, setMaxPriceRange] = useState()

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    function toggleChange(tagValue) {
        CatalogueStore.toggleTag(tagValue)
    }

    return (
        <div className="cardflex-left">
            {
                model.attributes.map(
                    attributeCategory => (
                        <Accordion title={attributeCategory.display_name} key={attributeCategory.name}>
                            {(attributeCategory.items ?? []).map(attributeItem =>
                                <FormControlLabel
                                key={attributeItem.name}
                                    control={
                                        <Checkbox label={attributeItem.display_name}
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
                                            onChange={e => toggleChange(attributeItem.display_name)}
                                            checked={CatalogueStore.tags.includes(attributeItem.display_name)}
                                        />
                                    }
                                    label={attributeItem.display_name}
                                />


                            )}
                        </Accordion>
                    )
                )
            }




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
    
        </div>
    )
})

export default CatalogueSidebar