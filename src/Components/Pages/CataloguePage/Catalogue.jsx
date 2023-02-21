import React, { useState, useEffect } from 'react'
import CatalogueSidebar from './CatalogueSidebar/CatalogueSidebar'
import ProductList from './ProductList/ProductList'
import TagList from './Tags/TagList'
import './Catalogue.css'
import { getCatalogue } from '../../../Api'
import CatalogueStore from '../../../Store/CatalogueStore'


const Catalogue = () => {
    // const [tags, setTags] = useState(["Цепи","Оргия","Свадьба","Похороны"])

    // const [count, setCount] = useState();
    // const [next, setNext] = useState();
    // const [previous, setPrevious] = useState();
    // const [results, setResults] = useState();

    

    // function fetchCatalogue() {
    //     getCatalogue(CatalogueStore.tags).then(res => {
    //         console.log(res)
    //         const { count, next, previous, results } = res;
    //         setResults(results)
    //     })
    // };
    // useEffect(
    //     fetchCatalogue
    //     ,
    //     []
    // );

    
    useEffect(
        () => CatalogueStore.updCatalugueCashe()
        ,
        []
    );


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