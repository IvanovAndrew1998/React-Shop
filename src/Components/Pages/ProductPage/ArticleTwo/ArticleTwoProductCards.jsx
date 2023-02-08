import React from 'react'
import SimilarProductCard from './SimilarProductCard/SimilarProductCard'

const ArticleTwoProductCards = ({recommendations}) => {
    return (
        <article className="article-2">
            <div className="inner">
                <div className="article2-flexbox profile">
                    {recommendations.map( recommendations =>
                        <SimilarProductCard key={recommendations.originalPrice} recommendations={recommendations}/>
                    )}
                    
                </div>
            </div>
        </article>
    )
}

export default ArticleTwoProductCards