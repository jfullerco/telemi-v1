import React, {useEffect, useState, useRef, useContext} from 'react'
import {useHistory} from 'react-router-dom'

import {db} from '../../firebase'
import {stateContext} from '../../stateContext'

const AddService = () => {

  const userContext = useContext(stateContext)
  
  const [modalState, setModalState] = useState(true)
  const [addServiceError, setAddServiceError] = useState("")
  const [success, setSuccess] = useState(false)
  const [triggerClose, setTriggerClose] = useState()

  const [locations, setLocations] = useState()
  
  const serviceName = useRef("")
  const serviceVendor = useRef("")
  const serviceType = useRef("")
  const serviceLocationID = useRef("")
  const serviceLocationName = useRef("")
  const serviceAssetID = useRef("")
  const serviceCompanyID = useRef("")
  const serviceCompanyName = useRef("")
  const serviceMRC = useRef("")
  const serviceDetails = useRef({
    detailsBandwidth: "",
    detailsCallPaths: "",
    detailsPublicIPRange: "",
    detailsPrivateIPRange: "",
    detailsNotes: "",
  })
  const serviceOrderID = useRef("")
  const serviceOrderNum = useRef("")
  const serviceAccountID = useRef("")
  const serviceAccountNum = useRef("")
  const serviceSubAccountNum = useRef("")

  useEffect(() => {
    fetchLocations()
  },[])

  const fetchLocations = async() => {
   
    const locationsRef = await db.collection("Locations").where("CompanyID", "==", userContext.userSession.currentCompanyID).get()

    const locations = locationsRef.docs.map(doc => ({id: doc.id, ...doc.data()}))
    setUserLocations(locations)

  }
  
  const handleSubmit = async(e) => {
    const data = {
      Name: serviceName.current.value,
      Vendor: serviceVendor.current.value,
      Type: serviceType.current.value,
      LocationID: serviceLocationID.current.value,
      LocationName: serviceLocationID.current.value,
      CompanyID: userContext.userSession.currentCompanyID,
      CompanyName: userContext.userSession.currentCompany,
      Details: {
        Bandwidth: serviceDetails.current.detailsBandwidth
      },
      MRC: serviceMRC.current.value,
      
    }  
    console.log(data)
    const res = await db.collection("Services").doc().set(data)
    autoClose()
  }

  const handleModalClose = () => {
    setModalState(false)
  }

  const autoClose = () => {
    setTimeout(() => {setModalState(false)}, 1000)
  }
  

  return (
    <div className={modalState === true ? "modal is-active" : "modal"}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <div className="modal-card-head">Add Service</div>
        <div className="modal-card-body">
          <form>
          {/* Location Picker Goes Here! */}
            <label>Service Location</label>
            <select className="select" onChange={handleLocationChange}>
            {locations != undefined ? locations.map(location => (
              <option key={location.id} value={location.id} name={location.Name}>
                {location.Name}
              </option>
            )) : "Add a location before adding a service"}
            </select>
            <label>Service Name</label>
            <input className="input" type="text" ref={serviceName} />
            <label>Vendor</label>
            <input className="input" type="text" ref={serviceVendor} />
            <label>Type</label>
            <input className="input" type="text" ref={serviceType} />
            <label>Asset ID</label>
            <input className="input" type="text" ref={serviceAssetID} />
            <label>Monthly Cost</label>
            <input className="input" type="text" ref={serviceMRC} />
            <label>Details</label>
            <input className="input" type="text" ref={serviceDetails.detailsBandwidth} />
            {console.log(serviceDetails)}
          </form>
        <div className="block">
          <div className="notification is-danger is-hidden">{addServiceError}</div>
         {success === true ?  <div className="notification is-success">Service Added</div> : ""}
        </div>
        <div className="modal-card-foot">
          
          <button className="button level-item"
          type="submit" onClick={handleSubmit}
          >
            Add Service
          </button>
        
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={handleModalClose}></button>  
        </div>
      </div>
    </div>
  )
}
export default AddService