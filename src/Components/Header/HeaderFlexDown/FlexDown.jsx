import React, { useState } from 'react'
import GeoTag from './GeoTag'
import styles from './Slider.module.css'

const FlexDown = () => {
    const [slided, setslided] = useState("")
    const [rotated, setRotated] = useState("")

    function slide() {
        if (slided === "") {
            setslided(styles.slided);
            setRotated(styles.rotated);
        }

        else {
            setslided('');
            setRotated('');
        }
    }

    return (
        <div className="header-flexdown">

            <GeoTag />

            <div className="flexdown-right">
                <nav className={styles.navSlider}>
                    <ul className={styles.slider + " " + slided}>
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
                <img className={"arrow" + " " + rotated + " " + styles.animation} src="src/arrow.svg" alt="" onClick={slide} />
            </div>


        </div>
    )
}

export default FlexDown
