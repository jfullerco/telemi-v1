import React, {useContext} from 'react'
import {stateContext} from '../stateContext'

const DevTools = () => {
  const userContext = useContext(stateContext)
  const {
    currentCompanyID,
    currentCompany,
    currentLocation,
    currentService,
    currentTicket,
    currentOrder,
    currentAccount
  } = userContext.userSession

  return (
    <div className="notification is-info">
      <p className="title is-4">contextView</p>
      <div className="box">

        <p className="sub-title">
          currentCompanyID: <code>{currentCompanyID}</code>
        </p>

        <p className="sub-title">
          currentCompany: <code>{currentCompany}</code>
        </p>
        
      </div>
      
    </div>
  )
}
export default DevTools