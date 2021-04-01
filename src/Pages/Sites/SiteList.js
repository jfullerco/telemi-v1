import React, {useState, useEffect, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {stateContext} from '../../stateContext'

import { db } from '../../firebase'

import SiteListNav from '../../Components/Elements/SiteListNav'
import AddLocation from './AddLocation'

const SiteList = () => {
  
  const userContext = useContext(stateContext)
  const currentCompany = userContext

  const [toggleModal, setToggleModal] = useState(false)
  
  const toggleAddLocationModal = () => {
    setToggleModal(!toggleModal)
  }

  const [userLocations, setUserLocations] = useState("")
  
  useEffect(() => {
    
    fetchLocations()
  
  }, [])

  const fetchLocations = async() => {
   
    const locationsRef = await db.collection("Locations").where("CompanyID", "==", userContext.userSession.currentCompanyID).get()

    const locations = locationsRef.docs.map(doc => ({id: doc.id, ...doc.data()}))
    setUserLocations(locations)

  }

  console.log(userLocations)

  return (
    <>
        <div className="block"> 
          <section className="hero is-info is-small">
            <div className="hero-body">
              <p className="title">Locations</p>
            <div className="subtitle"></div>
            </div>
          </section>
        </div>
              
        <div className="block">
      
        <div className="block">
          {toggleModal === true ? <AddLocation /> : ""}
          <SiteListNav /> <button onClick={toggleAddLocationModal}>Add Location</button>
        </div>
      
        {(userLocations != "") ? userLocations.map(location => (
        <div className="block" key={location.id}>
          <span>
            <Link to={`/locations/${location.id}`}>
              <div className="button is-rounded">
                
                    {location.Name} 
      
              </div>
            </Link>
          </span>
        </div>
        )
        ) : (
        <span>
          <div className="button is-rounded is-danger">
              No sites have been added
          </div>
        </span>
        )}
        </div>
    </>
  )
}
export default SiteList