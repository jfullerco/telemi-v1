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
  const [selectedCompany, setSelectedCompany] = useState({
    id: "",
    Name: ""
  })
  
  useEffect(() => {
    fetchCompanies()
    
    console.log()
    userContext.setCurrentCompany()
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
      <div className="select is-rounded is-fullwidth">
        <select onChange={handleChange}>
          {(userCompanies != "" && loading != true) ? userCompanies.map(company => (
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
