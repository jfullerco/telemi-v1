import React, { useState, useEffect, useContext } from 'react'


import {useAuth} from '../../Contexts/AuthContext'

import {stateContext} from '../../stateContext'

import { db } from '../../firebase'

import AddCompany from './AddCompany'

const CompanyList = () => {

  const {currentUser} = useAuth()
  const userContext = useContext(stateContext)
  const {dataLoading} = userContext.userSession
  
  const [loading, setLoading] = useState(true)
  const [userCompanies, setUserCompanies] = useState([])
  const [selectedCompany, setSelectedCompany] = useState({
    id: "",
    Name: ""
  })
  const [addCompanyModalState, setAddCompanyModalState] = useState(false)
  
  useEffect(() => {
    fetchCompanies()
    userContext.setDataLoading(false)
  }, [])  
  
  const handleChange = (e) => {
    const id = e.target.value
    const name = e.target.options[e.target.selectedIndex].text
    
    userContext.setCurrentCompanyID(id)
    userContext.setCurrentCompany(name)

  }

  const fetchCompanies = async() => {
   
    const companiesRef = await db.collection("Companies").where("Users", "array-contains", "jonathan@jfuller.co").get()

    const initialCompanyRef = await db.collection("Companies").where("Users", "array-contains", "jonathan@jfuller.co").limit(1).get()

    const initialCompanyID = initialCompanyRef.docs.map(doc => ({id: doc.id, ...doc.data()}))
    userContext.setCurrentCompanyID(initialCompanyID[0].id)
    userContext.setCurrentCompany(initialCompanyID[0].Name)
    userContext.setDataLoading(false)

    const companies = companiesRef.docs.map(doc => ({id: doc.id, ...doc.data()}))
    setUserCompanies(companies)
    setLoading(false)

  }

  const toggleAddCompany = () => {
    userContext.setDataLoading(true)
    setAddCompanyModalState(!addCompanyModalState)
  }
  
  return (
    <>
    {addCompanyModalState != false ? <AddCompany /> : ""}
    <div className="field has-addons has-addons-centered">
    <div className="control is-expanded">
      <div className="select is-rounded is-fullwidth">
        <select onChange={handleChange}>
          {(userCompanies != "" && dataLoading != true) ? userCompanies.map(company => (
            <option key={company.id} value={company.id} name={company.Name}>
              {company.Name}
              {console.log(company)}
            </option>
          )) : (
            <option>Loading data...</option>
          )}
        </select>
      </div>
      </div>
        <div className="control">
        {
           
          <button className="button is-rounded is-info" onClick={toggleAddCompany}>  
            Add Company
          </button> 
         }
        </div>
    
    </div>
    </>
  )
}
export default CompanyList
