import React, {useState, useEffect, useContext, useRef} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {stateContext} from '../../stateContext'

import { db } from '../../firebase'

const ServiceDetail = () => {
  
  const userContext = useContext(stateContext)
  const currentLocationID = userContext
  const history = useHistory()
  
  const [success, setSuccess] = useState(false)

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

  const [modalState, setModalState] = useState(true)

  const [activeService, setActiveService] = useState("")
  
  useEffect(() => {
    
    fetchService()
  
  }, [])

  const fetchService = async() => {
   
    const serviceRef = await db.collection("Services").doc(userContext.userSession.currentServiceID).get()
    
    const data = await serviceRef.data()
    const id = await serviceRef.id
    setActiveService(data)
    
  }

  const handleSubmit = async(e) => {
    const data = {
      Name: serviceName.current.value,
      Vendor: serviceVendor.current.value,
      Type: serviceType.current.value,
      LocationID: userContext.userSession.currentLocationID,
      LocationName: userContext.userSession.currentLocationName,
      CompanyID: userContext.userSession.currentCompanyID,
      CompanyName: userContext.userSession.currentCompany,
      Details: {
        Bandwidth: serviceDetails.current.detailsBandwidth
      },
      MRC: serviceMRC.current.value,
      
    }  
    console.log(data)
    const res = await db.collection("Services").doc(userContext.userSession.currentServiceID).set(data)
    autoClose()
  }

  const handleModalClose = () => {
    setModalState(!modalState)
  }

  return (
    <div className={modalState === true ? "modal is-active is-info" : "modal is-hidden"}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <div className="modal-card-head">
          <p className="modal-card-title">{activeLocation.Name} Details</p>
        </div>
        <section className="modal-card-body">
          
          <form>
            <label className="label">Location Name</label>
            <input className="input" type="text" ref={locationName} defaultValue={activeLocation.Name} />
            <label className="label">Address 1</label>
            <input className="input" type="text" ref={locationAddress1} defaultValue={activeLocation.Address1} />
            <label className="label">Address 2</label>
            <input className="input" type="text" ref={locationAddress2} defaultValue={activeLocation.Address2} />
            <label className="label">City</label>
            <input className="input" type="text" ref={locationCity} defaulValue={activeLocation.City} />
            <label className="label">State</label>
            <input className="input" type="text" ref={locationState} defaultValue={activeLocation.State} />
            <label className="label">Zip</label>
            <input className="input" type="text" ref={locationZip} defaultValue={activeLocation.Zip}/>
            <label className="label">Phone</label>
            <input className="input" type="text" ref={locationPhone} defaultValue={activeLocation.Phone} />
          </form>

        {/* Error Status Block */}
        <div className="block">
          <div className="notification is-danger is-hidden"></div>
        </div>

        {/* Footer Buttons */}
        <div className="modal-card-foot">
          
          <button className="button is-rounded"
          type="submit" onClick={handleSubmit}
          >
            Save Changes
          </button>

          {addServiceModalState != false ? <AddService /> : ""}
          <button className="button is-rounded" onClick={toggleAddServiceModal}>
            Add Service
          </button>
          
        </div>

        {/* Close Modal */}
        <button className="modal-close is-large" aria-label="close" onClick={handleModalClose}></button>  

        </section>
      </div>
    </div>
  )
}
export default ServiceDetail