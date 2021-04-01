import React, {useEffect, useState, useRef, useContext} from 'react'
import {useHistory} from 'react-router-dom'

import {db} from '../../firebase'
import {stateContext} from '../../stateContext'

const AddLocation = () => {

  const userContext = useContext(stateContext)

  const [modalState, setModalState] = useState(true)
  const [addLocationError, setAddLocationError] = useState("")
  const [fields, setFields] = useRef({
    Address1: "",
    Address2: "",
    City: "",
    CompanyID: userContext.userSession.currentCompanyID,
    CompanyName: userContext.userSession.currentCompany,
    Name: "",
    Phone: "",
    State: "",
    Zip: ""
  })

  const handleSubmit = (fields) => {

  }

  return (
    <div className={modalState === true ? "modal is-active" : "modal"}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <div className="modal-card-head">Login</div>
        <div className="modal-card-body">
          <form>
            <label>Location Name</label>
            <input className="input" type="text" ref={fields.Name} />
            <label>Address 1</label>
            <input className="input" type="text" ref={fields.Address1}/>
          </form>
        <div className="block">
          <div className="notification is-danger is-hidden">{addLocationError}</div>
        </div>
        <div className="modal-card-foot">
          
          <button className="button level-item"
          type="submit" onClick={handleSubmit}
          >
            Add Location
          </button>
          
          <div className="content is-small">
            Create account 
          <Link to="/register">Register</Link></div>
        
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={handleModalClose}></button>  
        </div>
      </div>
    </div>
  )
}
export default AddLocation