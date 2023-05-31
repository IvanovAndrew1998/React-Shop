import React from 'react'
import './AList.css'
import Sortingbar from './Sortingbar/Sortingbar'
import AListContainer from './AListContainer/AListContainer';
import Pagebar from './Pagebar/Pagebar';

const AList = () => {
  return (
    <div className='AList'>
      <Sortingbar/>
      <AListContainer/>
      <Pagebar/>
    </div>
  )
}

export default AList