import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { useAuth } from '../Contexts/AuthContext'

import {stateContext} from '../../stateContext'

import { companiesRef } from '../dataConnector'

const CompanyList = () => {

  const history = useHistory()

  const userContext = useContext(stateContext)
  
  const [company, setCompany] = useState("")
  const [userCompanies, setUserCompanies] = useState()
  
  useEffect(() => {
    const companies = companiesRef.docs.map(doc => ({id: doc.id, ...doc.data()}))
    setUserCompanies(companies)
  }, [])  
  
  const handleChange = (e) => {
    setClientID(e.target.value)
    const id = e.target.value
    userContext.setClientID(id)
    setClientChanged(!clientChanged)
    setLoadingData(true)
  }
  
  useEffect(() => {
      getSession(clientID)
      userContext.setCurrClient(clientID)
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
          {(clients != "") ? clients.map(client => (
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
export default CompanyList
