import React from 'react'
import GeoTag from './GeoTag'

const FlexDown = () => {
    return (
        <div className="header-flexdown">
            <GeoTag />

            <div className="flexdown-right">
                <nav>
                    <ul>
                        <li>
                            <a href="#">Кольца</a>
                        </li>
                        <li>
                            <a href="#">Подвески</a>
                        </li>
                        <li>
                            <a href="#">Серьги</a>
                        </li>
                        <li>
                            <a href="#">Часы</a>
                        </li>
                        <li>
                            <a href="#">Религия</a>
                        </li>
                        <li>
                            <a href="#">Свадьба</a>
                        </li>
                        <li>
                            <a href="#">Женщинам</a>
                        </li>
                        <li>
                            <a href="#">Мужчинам</a>
                        </li>
                    </ul>
                </nav>
                <img className="arrow" src="src/arrow.svg" alt=""/>
            </div>


        </div>
    )
}

export default FlexDown
