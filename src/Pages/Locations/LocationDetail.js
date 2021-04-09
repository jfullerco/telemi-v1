import React, {useState, useEffect, useContext, useRef} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {stateContext} from '../../stateContext'

import { db } from '../../firebase'

import SiteListNav from '../../Components/Elements/SiteListNav'
import AddService from '../Services/AddService'

const LocationDetail = () => {
  
  const userContext = useContext(stateContext)
  const currentLocationID = userContext
  const history = useHistory()
  
  const [success, setSuccess] = useState(false)

  const locationName = useRef("")
  const locationAddress1 = useRef("")
  const locationAddress2 = useRef("")
  const locationCity = useRef("")
  const locationPhone = useRef("")
  const locationState = useRef("")
  const locationZip = useRef("")

  const [modalState, setModalState] = useState(true)
  const [addServiceModalState, setAddServiceModalState] = useState(false)

  const toggleAddServiceModal = () => {
    setAddServiceModalState(!addServiceModalState)
  }

  const [activeLocation, setActiveLocation] = useState("")
  
  useEffect(() => {
    
    fetchLocation()
  
  }, [])

  const fetchLocation = async() => {
   
    const locationRef = await db.collection("Locations").doc(userContext.userSession.currentLocationID).get()
    
    const data = await locationRef.data()
    const id = await locationRef.id
    setActiveLocation(data)
    
  }

  const handleSubmit = () => {}

  const handleModalClose = () => {
    setModalState(false)
  }

  return (
    <div className={modalState === true ? "modal is-active is-info" : "modal is-hidden"}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <div className="modal-card-head">
          <p className="modal-card-title">{activeLocation.Name} Details</p>
        </div>
        <div className="modal-card-body">
          
          <form>
            <label className="label">Location Name</label>
            <input className="input" type="text" ref={locationName} defaultValue={activeLocation.Name} />
            <label className="label">Address 1</label>
            <input className="input" type="text" ref={locationAddress1} defaultValue={activeLocation.Address1} />
            <label>Address 2</label>
            <input className="input" type="text" ref={locationAddress2} defaultValue={activeLocation.Address2} />
            <label>City</label>
            <input className="input" type="text" ref={locationCity} defaulValue={activeLocation.City} />
            <label>State</label>
            <input className="input" type="text" ref={locationState} defaultValue={activeLocation.State} />
            <label>Zip</label>
            <input className="input" type="text" ref={locationZip} defaultValue={activeLocation.Zip}/>
            <label>Phone</label>
            <input className="input" type="text" ref={locationPhone} defaultValue={activeLocation.Phone} />
          </form>

        {/* Error Status Block */}
        <div className="block">
          <div className="notification is-danger is-hidden"></div>
        </div>

        {/* Footer Buttons */}
        <div className="modal-card-foot">
          
          <button className="button level-item"
          type="submit" onClick={handleSubmit}
          >
            Save Changes
          </button>

          {addServiceModalState != false ? <AddService /> : ""}
          <button onClick={toggleAddServiceModal}>
            Add Service
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