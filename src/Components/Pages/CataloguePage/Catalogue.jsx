import React from 'react'
import CatalogueSidebar from './CatalogueSidebar/CatalogueSidebar'
import ProductList from './ProductList/ProductList'
import TagList from './Tags/TagList'

const Catalogue = () => {
    return (
        <div>
            <TagList />
            <div class="inner">
                <div class="card-flexbox">
                    <CatalogueSidebar />
                    <ProductList/>
                </div>
            </div>
        </div >
    )
}

export default Catalogue