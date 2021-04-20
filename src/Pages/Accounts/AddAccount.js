import React, {useEffect, useState, useRef, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

import {db} from '../../firebase'
import {stateContext} from '../../stateContext'

const AddAccount = () => {

  const userContext = useContext(stateContext)
  
  const [modalState, setModalState] = useState(true)
  const [addAccountError, setAddAccountError] = useState("")
  const [success, setSuccess] = useState(false)
  const [triggerClose, setTriggerClose] = useState()

  const [accounts, setAccounts] = useState()

  const toggleQuestions = useRef(1)
  
  const accountAccountNum = useRef("")
  const accountVendor = useRef("")
  const accountPreTaxMRC = useRef("")
  const accountPostTaxMRC = useRef("")
  const accountParentAccountID = useRef("")
  const accountVendorBillType = useRef("")
  const accountGroupNum = useRef("")
  const accountInternalBillingCode = useRef("")
  const accountNotes = useRef("")
  const accountContractSignedDate = useRef("")
  const accountContractTerm = useRef("")
  const accountContractExpiresDate = useRef("")
  const accountContractBlob = useRef("")


  useEffect(() => {
    fetchAccounts()
  },[])

  const fetchAccounts = async() => {
   
    const accountsRef = await db.collection("Accounts").where("CompanyID", "==", userContext.userSession.currentCompanyID).get()

    const accounts = accountsRef.docs.map(doc => ({id: doc.id, ...doc.data()}))
    setAccounts(accounts)

  }
  
  const handleSubmit = async(e) => {
    const data = {
      AccountNum: accountAccountNum.current.value,
      CompanyID: userContext.userSession.currentCompanyID,
      CompanyName: userContext.userSession.currentCompany,
      Vendor: accountVendor.current.value,
      PreTaxMRC: accountPreTaxMRC.current.value,
      PostTaxMRC: accountPostTaxMRC.current.value,
      ParentAccountID: accountParentAccountID.current.value,
      ParentAccountNum: accountParentAccountID.current[accountParentAccountID.current.selectedIndex].text,
      VendorBillType: accountVendorBillType.current.value,
      GroupNum: accountGroupNum.current.value,
      InternalBillingCode: accountInternalBillingCode.current.value,
      Notes: accountNotes.current.value,
      ContractSignedDate: accountContractSignedDate.current.value,
      ContractTerm: accountContractTerm.current.value,
      ContractExpiresDate: accountContractExpiresDate.current.value,
      ContractBlob: accountContractBlob.current.value
      
      
    }  
    console.log(data)
    const res = await db.collection("Accounts").doc().set(data)
    autoClose()
  }

  const handleModalClose = () => {
    setModalState(false)
  }

  const autoClose = () => {
    setTimeout(() => {setModalState(false)}, 1000)
  }
  const handleToggle = (e) => {
    toggleQuestions.current = toggleQuestions.current + e
  }

  return (
    <div className={modalState === true ? "modal is-active" : "modal"}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <div className="modal-card-head">
        <div className="modal-card-title">
          Add Account
          </div>
        </div>
        <div className="modal-card-body">

          <form>
            
            <>
            <div className="field">
              <label className="label">Parent Account</label>
              <div className="control">
                <div className="select is-rounded is-fullwidth">
                  <select className="select" ref={accountParentAccountID}>
                  {accounts != undefined ? accounts.map(account => (
                    <option key={account.id} value={account.id} name={account.AccountNum} >
                      {account.AccountNum}
                    </option>
                  )) : "No other accounts added"}
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
              <label className="label">Account Number</label>
              <div className="control">
                <input className="input is-rounded" type="text" name="Account Number" ref={accountAccountNum} />
              </div>
            </div>

            <div className="field">
              <label className="label">Vendor</label>
              <div className="control">
                <input className="input is-rounded" type="text" ref={accountVendor} />
              </div>
            </div>

            <div className="field">
              <label className="label">Pre-Tax Cost</label>
              <p className="control has-icons-left">
                <input className="input is-rounded" type="text" ref={accountPreTaxMRC} />
                <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faDollarSign} />
                </span>
              </p>
            </div>

            <div className="field">
              <label className="label">Post-Tax Cost</label>
              <p className="control has-icons-left">
                <input className="input is-rounded" type="text" ref={accountPostTaxMRC} />
                <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faDollarSign} />
                </span>
              </p>
            </div>

            </> 
            <>

            <div className="field">
              <label className="label">Bill Group Number</label>
              <div className="control">
                <input className="input is-rounded" type="text" ref={accountGroupNum} />
              </div>
            </div>

            <div className="field">
              <label className="label">Internal Billing Code</label>
              <div className="control"> 
                <input className="input is-rounded" type="text" name="Internal Billing Code" ref={accountInternalBillingCode} />
              </div>
            </div>
 
            <div className="field">
              <label className="label">Contract Signed Date</label>
              <div className="control">
                <input className="input is-rounded" type="text" ref={accountContractSignedDate} />
              </div>
            </div>

            <div className="field">
            <label className="label">Contract Term</label>
              <div className="control">
                <input className="input is-rounded" type="text" ref={accountContractTerm} />
              </div>
            </div>

            <div className="field">
            <label className="label">Contract Expires</label>
              <div className="control">
                <input className="input is-rounded" type="text" ref={accountContractExpiresDate} />
              </div>
            </div>

            </> 
            <>

            <div className="field">
            <label className="label">Notes</label>
              <div className="control">
                <textarea className="textarea is-rounded" type="text" ref={accountNotes} />
              </div>
            </div>

            </> 
          </form>

        <div className="block">
          <div className="notification is-danger is-hidden">{addAccountError}</div>
         {success === true ?  <div className="notification is-success">Account Added</div> : ""}
        </div>
        <div className="modal-card-foot">
        {console.log(toggleQuestions)}
          
          {toggleQuestions.current < 3 ? 
          <button className="button level-item" onClick={() => handleToggle(1)}>Next</button> :
          ""}
          {toggleQuestions.current > 1 ? 
          <button className="button level-item" onClick={() => handleToggle(-1)}>Back</button> : ""}
          <button className="button level-item" type="submit" onClick={handleSubmit}>
            Finish
          </button>
        
        </div>

        <button className="modal-close is-large" aria-label="close" onClick={handleModalClose}></button>
          
        </div>
      </div>
    </div>
  )
}
export default AddAccount