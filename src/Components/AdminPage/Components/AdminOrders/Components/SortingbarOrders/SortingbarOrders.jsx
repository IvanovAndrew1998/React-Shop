import React from 'react'
import './SortingbarOrders.css'
import CheckboxEmpty from '../../../List/Checkbox/CheckboxEmpty';
import CheckboxFilled from '../../../List/Checkbox/CheckboxFilled';
import { Checkbox } from '@mui/material';

const SortingbarOrders = () => {
    return (
        <div className="SortingbarOrders">
            <div className="SortingbarOrdersLeft">
                <div className="sortingbarOrdersOption ml-15">
                    <img src="/src/adminPage/sortingbar/star.svg" alt="" />
                    <div className="selectAll">
                        <Checkbox
                            icon={<CheckboxEmpty />}
                            checkedIcon={<CheckboxFilled />}
                            sx={{

                                marginLeft: -1,
                                color: "red",

                                '&.Mui-checked': {
                                    color: "red",
                                }

                            }}
                        />
                        <p>Все</p>
                        <p className='sortingbarQuantity'>2 шт</p>
                    </div>
                </div>
            </div>

            <div className="SortingbarOrdersRight">
                <div className="sortingbarOrdersOption">
                    <img src="/src/selectorIcon.svg" alt="" />
                    <p>Дата</p>
                </div>
                <div className="sortingbarOrdersOption">
                    <img src="/src/selectorIcon.svg" alt="" />
                    <p>Оплата</p>
                </div>
                <div className="sortingbarOrdersOption">
                    <img src="/src/selectorIcon.svg" alt="" />
                    <p>Статус</p>
                </div>
                <div className="sortingbarOrdersOption">
                    <img src="/src/selectorIcon.svg" alt="" />
                    <p>Цена</p>
                </div>
            </div>



        </div>
    )
}

export default SortingbarOrders