import React, { useState } from 'react'
import CatalogueSidebar from './CatalogueSidebar/CatalogueSidebar'
import ProductList from './ProductList/ProductList'
import TagList from './Tags/TagList'
import './Catalogue.css'


const Catalogue = () => {
    const [tags, setTags] = useState([])

    return (
        
        <div>
            <TagList tags={tags} setTags={setTags}/>
            <div class="inner">
                <div class="card-flexbox">
                    <CatalogueSidebar  tag={tags} setTags={setTags}/>
                    <ProductList/>
                </div>
            </div>
        </div >
    )
}

export default Catalogue