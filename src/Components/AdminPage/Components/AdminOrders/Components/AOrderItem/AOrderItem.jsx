import React from 'react'
import './AOrderItem.css'
import CheckboxFilled from '../../../List/Checkbox/CheckboxFilled';
import CheckboxEmpty from '../../../List/Checkbox/CheckboxEmpty';
import { Checkbox } from '@mui/material';

const AOrderItem = () => {
    return (
        <div className='ListItem '>
            <div className="ListItemOrderLeft">
                <div className="ListItemOrderOption">
                    <img src="/src/adminPage/sortingbar/star.svg" alt="" />
                    <div className="selectAll">
                        <Checkbox
                            icon={<CheckboxEmpty />}
                            checkedIcon={<CheckboxFilled />}
                            sx={{
                                padding: 0,
                                marginLeft: 0,
                                color: "red",

                                '&.Mui-checked': {
                                    color: "red",
                                }

                            }}
                        />


                    </div>
                    <img className='ListItemOrderOptionProductImage' src="/src/jew.jpg" alt="" />
                    <p>№ 345476-9876</p>
                </div>
            </div>

            <div className="ListItemOrderRight">
                <div className="ListItemOrderOption pGray">
                    <p>12.12.24</p>
                </div>
                <div className="ListItemOrderOption">
                    <div className="statusCheck">
                        Оплачен
                    </div>
                </div>
                <div className="ListItemOrderOption">
                    <div className="statusCheck">
                        В доставке
                    </div>
                </div>
                <div className="ListItemOrderOption">
                    <p>444 480 p</p>
                </div>

            </div>

        </div>
    )
}

export default AOrderItem