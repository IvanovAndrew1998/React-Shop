
import FlexUp from './HeadeFlexUp/FlexUp'
import FlexDown from './HeaderFlexDown/FlexDown'
import React from 'react'


const Header = () => {



  return (
    <header className="header">
                <div className="inner">
                    <FlexUp/>
                    <FlexDown/>
                   
                </div>
            </header >
  )
}

export default Header