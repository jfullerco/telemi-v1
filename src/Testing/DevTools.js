import React, {useContext} from 'react'
import {stateContext} from '../stateContext'

const DevTools = () => {
  const userContext = useContext(stateContext)
  const {
    currentCompanyID,
    currentCompany,
    currentLocationID,
    currentLocationName,
    currentService,
    currentTicket,
    currentOrder,
    currentAccount
  } = userContext.userSession

  return (
    <div className="notification is-info">
      <p className="title is-4">conView</p>
      <div className="box">

        <p className="sub-title">
          currentCompanyID: <code>{currentCompanyID}</code>
        </p>

        <p className="sub-title">
          currentCompany: <code>{currentCompany}</code>
        </p>

        <p className="sub-title">
          currentLocationID: <code>{currentLocationID}</code>
        </p>

        <p className="sub-title">
          currentLocationName: <code>{currentLocationName}</code>
        </p>
        
      </div>
      
    </div>
  )
}
export default DevTools