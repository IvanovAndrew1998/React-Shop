import React from 'react'
import SimilarProductCard from './SimilarProductCard/SimilarProductCard'

const ArticleTwoProductCards = ({similar}) => {
    return (
        <article className="article-2">
            <div className="inner">
                <div className="article2-flexbox profile">
                    {similar.map( similarData =>
                        <SimilarProductCard key={similarData.originalPrice} productData={similarData}/>
                    )}
                    
                </div>
            </div>
        </article>
    )
}

export default ArticleTwoProductCards