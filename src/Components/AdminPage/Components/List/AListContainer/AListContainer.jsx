
import React from 'react'
import './AListContainer.css'
import ListItem from '../ListItem/ListItem';
import ListFolder from '../ListFolder/ListFolder';

const AListContainer = () => {
  return (
    <div className='AListOutter'>
        
        <div className="AListContainer">

            <ListItem/>
            <ListItem/>
            <ListFolder/>

        </div>

    </div>
  )
}

export default AListContainer