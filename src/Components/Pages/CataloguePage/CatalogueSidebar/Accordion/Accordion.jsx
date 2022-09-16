import React, { useState } from 'react'
import styles from './Accordion.module.css'

const Accordion = ({ children, title }) => {
    const [opened, setOpened] = useState(false)


    const display = opened ? " " + styles.opened : "";

    return (
        <div className='theAccordion'>
            <div class="h2-arrow" onClick={() => setOpened(!opened)}>
                <h2 class="card-h2">{title}</h2>
                <img src="src/arrow-gray.png" alt="" />
            </div>
            <div className={styles.theAccordion} >
                {children}
            </div>

        </div>
    )
}

export default Accordion