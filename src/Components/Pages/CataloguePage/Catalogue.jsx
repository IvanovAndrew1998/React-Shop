import React, { useState, useEffect } from 'react'
import CatalogueSidebar from './CatalogueSidebar/CatalogueSidebar'
import ProductList from './ProductList/ProductList'
import TagList from './Tags/TagList'
import './Catalogue.css'
import { getCatalogue } from '../../../Api'


const Catalogue = () => {
    const [tags, setTags] = useState(["Цепи","Оргия","Свадьба","Похороны"])

    const [count, setCount] = useState();
    const [next, setNext] = useState();
    const [previous, setPrevious] = useState();
    const [results, setResults] = useState();


    function fetchCatalogue() {
        getCatalogue(tags).then(res => {
            const { count, next, previous, results } = res;
            setCount(count);
            setNext(next);
            setPrevious(previous);
            setResults(results)


        })
    };
    useEffect(
        fetchCatalogue
        ,
        []
    );

    return (
        
        <div>
            <TagList tags={tags} setTags={setTags}/>
            <div class="inner">
                <div class="card-flexbox">
                    <CatalogueSidebar  tag={tags} setTags={setTags}/>
                    <ProductList count={count} results={results}/>
                </div>
            </div>
        </div >
    )
}

export default Catalogue