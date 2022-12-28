import React, { useState } from 'react'

const TagList = ({tags, setTags}) => {    

  return (
        <article class="suggestions">
                <div class="inner">
                    {tags.map( (value, id) => 
                                        <div class="sugg" >
                                        <a>{value}</a>
                                        <img src="src/out.svg" alt="" onClick={() => setTags(tags.filter(value => value != tags[id]))}/>
                                    </div>
                    )}

                </div>
            </article>
  )
}

export default TagList