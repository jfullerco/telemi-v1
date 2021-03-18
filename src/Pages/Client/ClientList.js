import React, {useState, useEffect, useContext} from 'react'
import {Link, Switch, useHistory, useParams} from 'react-router-dom'
import refreshData from '../../Services/refreshData'
import getClient from '../../Services/clientService'

import {stateContext} from '../../stateContext'

const ClientList = () => {

  const history = useHistory()
  const {u} = useParams()
  const user = u
  const userContext = useContext(stateContext)

  
  
  const [clientID, setClientID] = useState(localStorage.initialClientID)

  

  const [clientChanged, setClientChanged] = useState(false)

  const [loadingData, setLoadingData] = useState(false)
  const [clients, setClients] = useState("")
  
  
  useEffect(() => {
    setLoadingData(true)
    userContext.getSession(user)
    setClients(userContext.userSession.clients)
    console.log(userContext.userSession)
  }, [])  


  const getSession = async () => {
    
    const {data} = await getClient(clientID)
    console.log(data)
    userContext.setSites(data.sites)
    userContext.setAssets(data.assets)
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
    <>
    <div className="field has-addons has-addons-centered">
    <div className="control is-expanded">
      <div className="select is-rounded is-fullwidth" onChange={handleChange}>
        <select>
          {clients != "" ? clients.map(client => (
            <option value={client._id} key={client._id}>
              {client.client_name}
            </option>
          )) : (
            <option>Loading data...</option>
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
    </>
  )
}
export default ClientList
