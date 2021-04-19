import React, {useState, useEffect, useContext} from 'react'

import {stateContext} from '../../stateContext'
import {db} from '../../firebase'

const SiteCard = () => {
  const userContext = useContext(stateContext)

  const [locations, setLocations] = useState()
  const [services, setServices] = useState()
  const [orders, setOrders] = useState()
  const [accounts, setAccounts] = useState()
  const [tickets, setTickets] = useState()

  
  
  return(
    <>
    <div className="card">

      <div className="card-header">
        <p className="card-header-title">Location Name</p>
      </div>

      <div className="card-image">
        <figure className="image is-4by3">
        <img>{/**Location Image from Google will go here */}</img>
        </figure>
      </div>

      <div className="card-content">
      {/**Location data will go here */}
      </div>

    </div>
    
    </>
  )
}
export default SiteCard