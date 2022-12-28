import React, { useState, useRef } from 'react'
import styles from './Accordion.module.css'

const Accordion = ({ children, title }) => {
    const [opened, setOpened] = useState(false)
    

    const rotated = opened ? "" : " " + styles.rotated;
    const panel = useRef(0);
    let height = opened ? 0 : panel.current.scrollHeight + 'px';

    return (
        <div className="">
            <div className={"h2-arrow" +  " " + styles.accordionName} onClick={() => setOpened(!opened)}>
                <h2 className="card-h2">{title}</h2>
                <img className={styles.animation + rotated} src="src/arrow-gray.png" alt="" />
            </div>
            <div 
                ref = {panel}
                className={styles.theAccordion} 
                style={{maxHeight: height}}>
                    {children}
            </div>

        </div>
    )
}

export default Accordion