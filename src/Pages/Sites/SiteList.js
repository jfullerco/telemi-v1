import React, {useState, useEffect, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {stateContext} from '../../stateContext'

import { db } from '../../firebase'

import SiteListNav from '../../Components/Elements/SiteListNav'
import AddLocation from './AddLocation'
import LocationDetail from './LocationDetail'

const SiteList = () => {
  
  const userContext = useContext(stateContext)
  const currentCompany = userContext

  const [toggleModal, setToggleModal] = useState(false)
  const [toggleDetailModal, setToggleDetailModal] = useState(false)
  
  const toggleAddLocationModal = () => {
    setToggleModal(!toggleModal)
  }

  const handleToggleDetailModal = (id) => {
    userContext.setCurrentLocation(id)
    setToggleDetailModal(!toggleModal)
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
        <div className="block">
          <span>
            
              <div className="button is-rounded" onClick={(id) => handleToggleDetailModal(location.id)} key={location.id}>
                
                  <div value={location.id}> {location.Name} </div>
      
              </div>
            {toggleDetailModal != false ? <LocationDetail /> : ""}
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