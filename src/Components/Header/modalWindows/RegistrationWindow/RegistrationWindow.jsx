import React, { useState } from 'react'
import './registrationWindow.css'
import InputMask from 'react-input-mask';

import { userStore } from '../../../../Store/UserStore.js';
import MWLogin from './Components/MWLogin';
import MWGetCode from './Components/MWGetCode';
import MWCorporateClients from './Components/MWCorporateClients';
import MWRegistration from './Components/MWRegistration';


const RegistrationWindow = ({ active, setActive }) => {
  // modal change
  const [contentType, setContentType] = useState("login")







  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>

      <div className="modalContent" onClick={e => e.stopPropagation()}>
        {
          (contentType === "login")
            ?
            <MWLogin setContentType={setContentType} setActive={setActive}/>
            : null
        }
        {
          (contentType === "getCode")
            ?
            <MWGetCode setContentType={setContentType} setActive={setActive}/>
            :null
        }
        {
          (contentType === "corporative")
          ?
          <MWCorporateClients setContentType={setContentType} setActive={setActive}/>
          :null
        }
        {
          (contentType === "registration")
          ?
          <MWRegistration  setContentType={setContentType} setActive={setActive}/>
          :null
        }
      </div>
    </div>
  )
}

export default RegistrationWindow