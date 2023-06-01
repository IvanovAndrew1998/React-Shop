import React, { useEffect } from 'react'
import CatalogueSidebar from './CatalogueSidebar/CatalogueSidebar'
import ProductList from './ProductList/ProductList'
import TagList from './Tags/TagList'
import './Catalogue.css'
import CatalogueStore from '../../../Store/CatalogueStore'


const Catalogue = () => {
  


    useEffect(
        () => CatalogueStore.updCatalogueCashe()
        ,
        []
    );

    useEffect(() => {
        document.title = 'Каталог';
      }, []);

    return (
        
        <div>
            <TagList/>
            <div className="inner">
                <div className="card-flexbox">
                    <CatalogueSidebar />
                    <ProductList />
                </div>
            </div>
        </div >
    )
}

export default Catalogue