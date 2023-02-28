import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import CatalogueStore from '../../../../Store/CatalogueStore'

const TagList = () => {



    return (
        <article className="suggestions">
            <div className="inner">
                <div className="tagBar">
                    {CatalogueStore.tags.map((value, id) =>
                        <div className="sugg" key={value}>
                            <a>{value}</a>
                            <img src="src/out.svg" alt="" onClick={() => CatalogueStore.toggleTag(value)} />
                        </div>
                    )}

                    <div className="tagClearButton">
                        <img src="src/out.svg" alt="" onClick={() => CatalogueStore.clearCatalogueCashe(CatalogueStore.tags)}/>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default observer(TagList)