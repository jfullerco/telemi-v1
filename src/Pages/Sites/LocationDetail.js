import React, {useState, useEffect, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {stateContext} from '../../stateContext'

import { db } from '../../firebase'

import SiteListNav from '../../Components/Elements/SiteListNav'
import AddLocation from './AddLocation'

const LocationDetail = () => {
  
  const userContext = useContext(stateContext)
  const currentLocation = userContext

  const [toggleModal, setToggleModal] = useState(false)
  
  const toggleAddLocationModal = () => {
    setToggleModal(!toggleModal)
  }

  const [userLocation, setUserLocation] = useState("")
  
  useEffect(() => {
    
    fetchLocation()
  
  }, [])

  const fetchLocation = async() => {
   
    const locationRef = await db.collection("Locations").doc(userContext.userSession.currentLocation).get()

    const location = locationRef.docs.map(doc => ({id: doc.id, ...doc.data()}))
    setUserLocation(location)

  }

  console.log(userLocation)

  return (
    <>
        <div className="block"> 
          <section className="hero is-info is-small">
            <div className="hero-body">
              <p className="title">Location Details</p>
            <div className="subtitle"></div>
            </div>
          </section>
        </div>
              
        <div className="block">
      
        <div className="block">
          {toggleModal === true ? <AddLocation /> : ""}
          <SiteListNav /> <button onClick={toggleAddLocationModal}>Add Location</button>
        </div>
      
        {(userLocation != "") ? userLocation.map(location => (
        <div className="block" key={location.id}>
          <span>
            <Link to={`/locations/${location.id}`}>
              <div className="button is-rounded">
                
                    {location.Name} <br />
                    {location.Address1}
                    {location.City}
                    {location.State}
      
              </div>
            </Link>
          </span>
        </div>
        )
        ) : (
        <span>
          <div className="button is-rounded is-danger">
              No Location Details Found
          </div>
        </span>
        )}
        </div>
    </>
  )
}
export default LocationDetail