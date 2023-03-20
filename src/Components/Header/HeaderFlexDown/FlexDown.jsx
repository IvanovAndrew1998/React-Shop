import React, { useState, useRef, useEffect } from 'react'

import styles from './Slider.module.css'
import { userStore } from '../../../Store/UserStore'
import { observer } from 'mobx-react-lite';
import CatalogueStore from '../../../Store/CatalogueStore';
import { Link } from 'react-router-dom';


const FlexDown = observer(() => {
    const [slided, setslided] = useState("")
    const [rotated, setRotated] = useState("")
    const [filled, setFilled] = useState(false);

    const panel = useRef(null);

    function isFilled() {
        if (panel.current && panel.current.clientWidth > 700) {
            setFilled(true);
        } else {
            setFilled(false);
        }
    }

    useEffect(() => {
        isFilled();
    }, []);


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

    if (userStore.headerTags === undefined) {
        return <div />
    }


    return (
        <div className="header-flexdown">

            {/* <GeoTag /> */}
            <div className="">
            Yerevan
            </div>

            <div className="flexdown-right">
                <nav className={styles.navSlider}>
                    <ul className={styles.slider + " " + slided} ref={panel}>
                        {userStore.headerTags.map(tag =>
                            <Link to='/catalogue'>
                                <li key={tag.name} onClick={() => {
                                    CatalogueStore.clearCatalogueCashe();
                                    CatalogueStore.toggleTag(tag.name)
                                }}>
                                    <a href="#">{tag.name}</a>
                                </li>
                            </Link>
                        )}



                    </ul>
                </nav>
                <div className={filled ? " " : styles.unfilled}

                >
                    <img className={"arrow" + " " + rotated + " " + styles.animation} src="src/arrow.svg" alt="" onClick={slide} />
                </div>
            </div>


        </div>
    )
})

export default FlexDown
