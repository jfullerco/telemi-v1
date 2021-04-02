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
  const [addLocationError, setLocationError] = useState("")
  const [success, setSuccess] = useState(false)

  const locationName = useRef("")
  const locationAddress1 = useRef("")
  const locationAddress2 = useRef("")
  const locationCity = useRef("")
  const locationPhone = useRef("")
  const locationState = useRef("")
  const locationZip = useRef("")
  
  const toggleAddLocationModal = () => {
    setToggleModal(!toggleModal)
  }

  const [activeLocation, setActiveLocation] = useState("")
  
  useEffect(() => {
    console.log(userContext.userSession)
    fetchLocation()
  
  }, [])

  const fetchLocation = async() => {
   
    const locationRef = await db.collection("Locations").doc(userContext.userSession.currentLocation).get()
    
    const data = await locationRef.data()
    const id = await locationRef.id
    setActiveLocation(data)
    
  }

  const handleSubmit = () => {}

  const handleModalClose = () => {
    setModalState(false)
  }

  return (
    <div className={modalState === true ? "modal is-active" : "modal is-hidden"}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <div className="modal-card-head">
          <p className="title">{activeLocation.Name} Details</p>
        </div>
        <div className="modal-card-body">
          
          <form>
            <label>Location Name</label>
            <input className="input" type="text" ref={locationName} value={activeLocation.Name} />
            <label>Address 1</label>
            <input className="input" type="text" ref={locationAddress1} value={activeLocation.Address1} />
            <label>Address 2</label>
            <input className="input" type="text" ref={locationAddress2} value={activeLocation.Address2} />
            <label>City</label>
            <input className="input" type="text" ref={locationCity} value={activeLocation.City} />
            <label>State</label>
            <input className="input" type="text" ref={locationState} value={activeLocation.State} />
            <label>Zip</label>
            <input className="input" type="text" ref={locationZip} value={activeLocation.Zip}/>
            <label>Phone</label>
            <input className="input" type="text" ref={locationPhone} value={activeLocation.Phone} />
          </form>

        {/* Error Status Block */}
        <div className="block">
          <div className="notification is-danger is-hidden">{addLocationError}</div>
         {success === true ?  <div className="notification is-success">Location Added</div> : ""}
        </div>

        {/* Footer Buttons */}
        <div className="modal-card-foot">
          
          <button className="button level-item"
          type="submit" onClick={handleSubmit}
          >
            Save Changes
          </button>
        
        </div>

        {/* Close Modal */}
        <button className="modal-close is-large" aria-label="close" onClick={handleModalClose}></button>  

        </div>
      </div>
    </div>
  )
}
export default LocationDetail