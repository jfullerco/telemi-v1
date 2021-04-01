import React, {useState, useEffect, useContext, useRef} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {stateContext} from '../../stateContext'

import { db } from '../../firebase'

import SiteListNav from '../../Components/Elements/SiteListNav'
import AddLocation from './AddLocation'

const LocationDetail = () => {
  
  const userContext = useContext(stateContext)
  const currentLocation = userContext

  const [modalState, setModalState] = useState(true)
  const [addLocationError, setAddLocationError] = useState("")
  const [success, setSuccess] = useState(false)
  const [triggerClose, setTriggerClose] = useState()

  const locationName = useRef("")
  const locationAddress1 = useRef("")
  const locationAddress2 = useRef("")
  const locationCity = useRef("")
  const locationPhone = useRef("")
  const locationState = useRef("")
  const locationZip = useRef("")

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
    <div className={modalState === true ? "modal is-active" : "modal"}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <div className="modal-card-head">Add Location</div>
        <div className="modal-card-body">
          <form>
            <label>Location Name</label>
            <input className="input" type="text" ref={locationName} value={userLocation.Name} />
            <label>Address 1</label>
            <input className="input" type="text" ref={locationAddress1} />
            <label>Address 2</label>
            <input className="input" type="text" ref={locationAddress2} />
            <label>City</label>
            <input className="input" type="text" ref={locationCity} />
            <label>State</label>
            <input className="input" type="text" ref={locationState} />
            <label>Zip</label>
            <input className="input" type="text" ref={locationZip} />
            <label>Phone</label>
            <input className="input" type="text" ref={locationPhone} />
          </form>
        <div className="block">
          <div className="notification is-danger is-hidden">{addLocationError}</div>
         {success === true ?  <div className="notification is-success">Location Added</div> : ""}
        </div>
        <div className="modal-card-foot">
          
          <button className="button level-item"
          type="submit" onClick={handleSubmit}
          >
            Add Location
          </button>
        
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={handleModalClose}></button>  
        </div>
      </div>
    </div>
  )
}
export default LocationDetail