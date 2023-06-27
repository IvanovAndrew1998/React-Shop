import { observer } from 'mobx-react-lite';
import React, { useState, useRef, useEffect } from 'react'
import CatalogueStore from '../../../../../Store/CatalogueStore';
import './AccordionModule.css'


const Accordion = observer(({ children, title, category }) => {
    const [opened, setOpened] = useState()
    
    useEffect(() => {
        setTimeout(() => setOpened(false), 500)
      }
   , [children])

    const panel = useRef(0);
    let height = opened ? 0 : panel.current.scrollHeight + 'px';



    return (
        <div className="sidebarAccordion">
            <div className={"h2-arrow"} >
                <h2 className="card-h2">{title}</h2>
                <img className={`animation ${opened ? "" : " " + 'rotated'}`} src="/src/arrow-gray.png" alt="" onClick={() => setOpened(!opened)}/>
                <img className='clearCategoryTagsButton' src="/src/X.svg" alt="" onClick={() => CatalogueStore.clearCategoryCashe(category)}/>
            </div>
            <div 
                
                ref = {panel}
                className='theAccordion'
                style={{maxHeight: height}}>
                    {children}
            </div>

        </div>
    )
})

export default Accordion