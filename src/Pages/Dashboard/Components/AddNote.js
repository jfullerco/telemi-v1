import React, {useEffect, useState, useRef, useContext} from 'react'
import {useHistory} from 'react-router-dom'

import {db} from '../../firebase'
import {stateContext} from '../../stateContext'

const AddNote = () => {

  const userContext = useContext(stateContext)
  
  const [modalState, setModalState] = useState(true)
  const [addNoteError, setAddNoteError] = useState("")
  const [success, setSuccess] = useState(false)
  const [triggerClose, setTriggerClose] = useState()

  const [toggleQuestions, setToggleQuestions] = useState(1)
  
  const adminOnly = useRef("")
  const attachedID = useRef("")
  const attachedTo = useRef("")
  const noteAttached = useRef("")
  const noteDate = useRef("")
  const stickyNote = useRef("")

  useEffect(() => {
    
  },[])
  
  
  const handleSubmit = async(e) => {

    const data = {

      NoteDate: noteDate.current.value,
      Note: noteAttached.current.value,
      AttachedTo: attachedTo.current.value,
      AttachedID: attachedID.current.value,
      Sticky: stickyNote.current.value,
      CompanyID: userContext.userSession.currentCompanyID,
      CompanyName: userContext.userSession.currentCompany,
  
    }  
    console.log(data)
    const res = await db.collection("Notes").doc().set(data)
    autoClose()
  }

  const handleModalClose = () => {
    setModalState(false)
  }

  const autoClose = () => {
    setTimeout(() => {setModalState(false)}, 1000)
  }
  const handleChange = () => {
    attachedTo.current.value === ""
  }

  return (
    <div className={modalState === true ? "modal is-active" : "modal"}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <div className="modal-card-head">
        <div className="modal-card-title">
          Add Service
          </div>
        </div>
        <div className="modal-card-body">

          <form>
            {toggleQuestions === 1 ? 
            <>
            <div className="field">
              <label className="label">Service Location</label>
              <div className="control">
                <div className="select is-rounded is-fullwidth">
                  <select className="select" onChange={handleChange} ref={serviceLocationID}>
                  {locations != undefined ? locations.map(location => (
                    <option key={location.id} value={location.id} name={location.Name} >
                      {location.Name}
                    </option>
                  )) : "Add a location before adding a service"}
                  </select>
                </div>
              </div>
            </div>

            
{/** 
            <div className="field">
              <label className="label">Service Name</label>
              <div className="control">
                <input className="input is-rounded" type="text" ref={serviceName} />
              </div>
            </div>
*/}
            <div className="field">
              <div className="control">
              <label className="label">Vendor</label>
                <input className="input is-rounded" type="text" ref={serviceVendor} />
              </div>
            </div>
            
            <div className="field">            
            <label className="label">Type</label>
              <div className="control">
                <div className="select is-rounded is-fullwidth">
                <select type="select" ref={serviceType} >
                  <option> </option>
                  <option>Data Only</option>
                  <option>Voice/Data</option>
                  <option>Voice Only</option>
                  <option>Security</option>
                  <option>Hosting</option>
                  <option>Mobility</option>
                </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Asset ID</label>
              <div className="control">
                <input className="input is-rounded" type="text" ref={serviceAssetID} />
              </div>
            </div>

            <div className="field">
              <div className="control">
              <label className="label">Monthly Cost</label>
                <input className="input is-rounded" type="text" ref={serviceMRC} />
              </div>
            </div>

            </> : toggleQuestions === 2 ?
            <>
            <div className="field">
              <div className="control">
              <label className="label">Vendor Managed Router</label>
                <div className="select is-rounded is-fullwidth">
                  <select type="select" ref={serviceDetailsIPRange}>
                    <option> </option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <div className="control">
              <label className="label">Bandwidth</label>
                <input className="input is-rounded" type="text" ref={serviceDetailsBandwidth} />
              </div>
            </div>

            {/** Add Tooltip indicating to use /subnet size when entering. Have function to destructure subnet to provide usable range and gateway address.*/}  
            <div className="field">
              <div className="control">
              <label className="label">Public IP Range</label>
                <input className="input is-rounded" type="text" ref={serviceDetailsIPRange} />
              </div>
            </div>

            <div className="field">
              <div className="control">
              <label className="label">LAN Edge IP</label>
                <input className="input is-rounded" type="text" ref={serviceDetailsLANEdgeIP} />
              </div>
            </div>

            <div className="field">
              <div className="control">
              <label className="label">ASN</label>
                <input className="input is-rounded" type="text" ref={serviceDetailsASN} />
              </div>
            </div>

            </> : toggleQuestions === 3 ?
            <>

            <div className="field">
              <div className="control">
              <label className="label">Notes</label>
                <textarea className="textarea is-rounded" type="text" ref={serviceDetailsNotes} />
              </div>
            </div>

            </> : ""}
          </form>

        <div className="block">
          <div className="notification is-danger is-hidden">{addNoteError}</div>
         {success === true ?  <div className="notification is-success">Note Attached</div> : ""}
        </div>
        <div className="modal-card-foot">

          <button className="button level-item" type="submit" onClick={handleSubmit}>
            Attach Note
          </button>
        
        </div>

        <button className="modal-close is-large" aria-label="close" onClick={handleModalClose}></button>
          
        </div>
      </div>
    </div>
  )
}
export default AddNote