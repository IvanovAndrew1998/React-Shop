import React from 'react'
import './ProductEdit.css'
import { Checkbox } from '@mui/material'
import CheckboxEmpty from '../List/Checkbox/CheckboxEmpty';
import CheckboxFilled from '../List/Checkbox/CheckboxFilled';

const ProductEdit = () => {
    return (
        <div className='ProductEdit'>
            <div className="PEinner">
                <div className="ProductEditContainer">
                    <div className="PEDescriprion">
                        <div className="PEheader">
                            Описание
                        </div>

                        <div className="PEDImage">
                            <img src="/src/jew.jpg" alt="" />
                        </div>

                        <div className="PEDImagePanel">
                            <div className="imagePanelAddOption pointer">
                                <img src="/src/adminPage/Xblack.svg" alt="" />
                            </div>

                            <div className="imagePanelOption pointer">
                                <img src="/src/jew.jpg" alt="" />
                            </div>

                            <div className="imagePanelOption pointer">
                                <img src="/src/jew.jpg" alt="" />
                            </div>
                        </div>

                        <input placeholder='Артикул' type="number" className="PEDVendoCode" />

                        <textarea placeholder='Название продукта' type="text" className="PEDProductName" />

                        <textarea placeholder='Описание' type="text" className="PEDProductDescription" />

                        <div className="PEDButtons">
                            <button className="createBTN pointer">
                                Создать
                            </button>

                            <button className="cancelBTN pointer">
                                Отмена
                            </button>
                        </div>
                    </div>
                    <div className="PEInfo">
                        <div className="PEItop">
                            <div className="PEheader">
                                Данные
                            </div>
                            <div className="PESelectorContainer">
                                <select className='PESelector'>
                                    <option value="">Категория</option>
                                    <option value="">Здесь</option>
                                    <option value="">что-то</option>
                                    <option value="">будет</option>
                                </select>
                                <select className='PESelector'>
                                    <option value="">Бренд</option>
                                    <option value="">Здесь</option>
                                    <option value="">что-то</option>
                                    <option value="">будет</option>
                                </select>
                                <select className='PESelector'>
                                    <option value="">Коллекция</option>
                                    <option value="">Здесь</option>
                                    <option value="">что-то</option>
                                    <option value="">будет</option>
                                </select>
                                <select className='PESelector'>
                                    <option value="">Вставка</option>
                                    <option value="">Здесь</option>
                                    <option value="">что-то</option>
                                    <option value="">будет</option>
                                </select>
                                <select className='PESelector'>
                                    <option value="">Проба</option>
                                    <option value="">Здесь</option>
                                    <option value="">что-то</option>
                                    <option value="">будет</option>
                                </select>
                            </div>
                        </div>
                        <div className="PEIbottom">
                            <div className="PEheader">
                                Теги
                            </div>
                            <div className="tagInput">
                                <input type="text" placeholder='Впишите тег' />
                                <div className="plusImageHovered"></div>
                            </div>
                            <div className="tagList">
                                <div className="tagSingle">
                                    <p>Женщинам</p>
                                    <div className='tagX'></div>
                                </div>
                                <div className="tagSingle">
                                    <p>Мужчинам</p>
                                    <div className='tagX'></div>
                                </div>
                                <div className="tagSingle">
                                    <p>Детям</p>
                                    <div className='tagX'></div>
                                </div>
                                <div className="tagSingle">
                                    <p>Цепи</p>
                                    <div className='tagX'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="PESizes">
                        <div className="PEheader">
                            Размеры
                        </div>
                        <div className="PESizePanel">
                            <div className="SizePanelTop">
                                <input type="number" placeholder='Размер'/>
                                <input type="number" placeholder='Вес'/>
                                <div className="isInStock">
                                    <p>Наличие</p>
                                    <Checkbox

                                        icon={<CheckboxEmpty />}
                                        checkedIcon={<CheckboxFilled />}
                                        sx={{

                                            marginLeft: 0,
                                            padding: 0,
                                            color: "red",

                                            '&.Mui-checked': {
                                                color: "red",
                                            }

                                        }}
                                    />
                                </div>

                            </div>
                            <div className="SizePanelBottom">
                                <input type="number" placeholder='Цена'/>
                                <img src="/src/adminPage/Xgray.svg" alt="" />
                                <img src="/src/adminPage/SaveGray.svg" alt="" />
                            </div>
                        </div>
                        <button className="PESizesAdd pointer">Добавить</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductEdit