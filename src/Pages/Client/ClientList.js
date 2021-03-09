import React, {useState, useEffect, useContext} from 'react'
import {Link, Switch, useHistory} from 'react-router-dom'
import getClient from '../../Services/clientService'

import {stateContext} from '../../stateContext'

const ClientList = () => {

  const history = useHistory()

  const userContext = useContext(stateContext)

  const {userSession: {clients}} = userContext

  const initialClient = userContext.userSession.clients[0]._id
  
  const [clientID, setClientID] = useState(initialClient)

  const [clientChanged, setClientChanged] = useState(false)

  const [loadingData, setLoadingData] = useState(false)
  
  useEffect(() => {
    getSession(clientID)
  }, [])  
  
  const getSession = async () => {
    const {data} = await getClient(clientID)
    userContext.setSessionData({
      client_name: data.client_name,
      sites: data.sites,
      _id: data._id
    })
    userContext.userSession.setSites(data.sites)
    setLoadingData(false)
  }

  const handleChange = (e) => {
    setClientID(e.target.value)
    const id = e.target.value
    userContext.setClientID(id)
    setClientChanged(!clientChanged)
    setLoadingData(true)
  }
  
  useEffect(() => {
      getSession(clientID)
  }, [clientChanged])

  const handleSubmit = () => {
    history.push("/sites")
  }

  return (
    <div className="field has-addons has-addons-centered">
    <div className="control is-expanded">
      <div className="select is-rounded is-fullwidth" onChange={handleChange}>
        <select>
          {clients != undefined ? clients.map(client => (
            <option value={client._id} key={client._id}>
              {client.client_name}
            </option>
          )) : (
            "No Clients Assigned"
          )}
        </select>
      </div>
      </div>
        <div className="control">
        {
          loadingData != false ? 
          <button className="button is-rounded is-info is-loading" onClick={handleSubmit}>  
            choose
          </button> 
          : 
          <button className="button is-rounded is-info" onClick={handleSubmit}> 
            choose
          </button>}
        </div>
    
    </div>
  )
}
export default ClientList
