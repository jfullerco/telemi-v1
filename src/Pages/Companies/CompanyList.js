import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import {useAuth} from '../../Contexts/AuthContext'

import {stateContext} from '../../stateContext'

import { db } from '../../firebase'

const CompanyList = () => {

  const history = useHistory()
  const {currentUser} = useAuth()
  const userContext = useContext(stateContext)
  
  const [loading, setLoading] = useState(true)
  const [userCompanies, setUserCompanies] = useState([])
  
  useEffect(() => {
    fetchCompanies()
    
    console.log()
    userContext.setCurrentCompany()
  }, [])  
  
  const handleChange = (e) => {
    
    userContext.setCurrentCompany(e.target.value)
  }

  const fetchCompanies = async() => {
   
    const companiesRef = await db.collection("Companies").where("Users", "array-contains", "jonathan@jfuller.co").get()

    const initialCompanyRef = await db.collection("Companies").where("Users", "array-contains", "jonathan@jfuller.co").limit(1).get()

    const initialCompanyID = initialCompanyRef.docs.map(doc => ({id: doc.id, ...doc.data()}))
    userContext.setCurrentCompanyID(initialCompanyID[0].id)
    userContext.setCurrentCompany(initialCompanyID[0].Name)


    const companies = companiesRef.docs.map(doc => ({id: doc.id, ...doc.data()}))
    setUserCompanies(companies)
    setLoading(false)

  }

  const handleSubmit = () => {
    history.push("/companyProfile")
  }
  
  return (
    <>
    <div className="field has-addons has-addons-centered">
    <div className="control is-expanded">
      <div className="select is-rounded is-fullwidth" onChange={handleChange}>
        <select>
          {(userCompanies != "" && loading != true) ? userCompanies.map(company => (
            <option value={company.id} key={company.id}>
              {company.Name}
              {console.log()}
            </option>
          )) : (
            <option>Loading data...</option>
          )}
        </select>
      </div>
      </div>
        <div className="control">
        {
           
          <button className="button is-rounded is-info" onClick={handleSubmit}>  
            choose
          </button> 
         }
        </div>
    
    </div>
    </>
  )
}
export default CompanyList
