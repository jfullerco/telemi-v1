import React, {useEffect, useState, useRef, useContext} from 'react'
import {useHistory} from 'react-router-dom'

import {db} from '../../firebase'
import {stateContext} from '../../stateContext'

const AddAccount = () => {

  const userContext = useContext(stateContext)
  
  const [modalState, setModalState] = useState(true)
  const [addAccountError, setAddAccountError] = useState("")
  const [success, setSuccess] = useState(false)
  const [triggerClose, setTriggerClose] = useState()

  const [accounts, setAccounts] = useState()

  const [toggleQuestions, setToggleQuestions] = useState(1)
  
  const accountNum = useRef("")
  const accountCompanyID = useRef("")
  const accountCompanyName = useRef("")
  const accountVendor = useRef("")
  const accountPreTaxMRC = useRef("")
  const accountPostTaxMRC = useRef("")
  const accountIsSubAccount = useRef("")
  const accountParentAccountID = useRef("")
  const accountParentAccountNum = useRef("")
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
  
  const handleLocationChange = (e) => {
    serviceLocationID.current.value = e.target.value
    serviceLocationName.current.value = e.target.name
  }
  
  const handleSubmit = async(e) => {
    const data = {
      AccountNum: accountNum.current.value,
      CompanyID: userContext.userSession.currentCompanyID,
      CompanyName: userContext.userSession.currentCompany,
      Vendor: accountVendor.current.value,
      PreTaxMRC: accountPreTaxMRC.current.value,
      PostTaxMRC: accountPostTaxMRC.current.value,
      IsSubAccount: accountIsSubAccount.current.value,
      ParentAccountID: accountParentAccountID.current.value,
      ParentAccountNum: accountParentAccountNum.current.value,
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
  const handleChange = () => {
    console.log()
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
            {toggleQuestions === 1 ? 
            <>
            <div className="field">
              <label className="label">Parent Account</label>
              <div className="control">
                <div className="select is-rounded is-fullwidth">
                  <select className="select" onChange={handleChange} ref={accountParentAccountID}>
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
              <p className="control has-icons-left">
              <label className="label">Account Number</label>
                <input className="input is-rounded" type="text" ref={accountNum} />
                <span className="icon is-small is-left">
                <i className="fas fa-dollar-sign"></i>
                </span>
              </p>
            </div>

            <div className="field">
              <p className="control has-icons-left">
              <label className="label">Pre-Tax Cost</label>
                <input className="input is-rounded" type="text" ref={accountPreTaxMRC} />
                <span className="icon is-small is-left">
                <i className="fas fa-dollar-sign"></i>
                </span>
              </p>
            </div>

            <div className="field">
              <div className="control">
              <label className="label">Post-Tax Cost</label>
                <input className="input is-rounded" type="text" ref={accountPostTaxMRC} />
              </div>
            </div>

            </> : toggleQuestions === 2 ?
            <>

            {accountParentAccountID.current.value != "" ? 
            <div className="field">
              <label className="label">Bill Group Number</label>
              <div className="control">
                <input className="input is-rounded" type="text" ref={accountGroupNum} />
              </div>
            </div>
          : ""}

            <div className="field">
              <div className="control">
              <label className="label">Internal Billing Code</label>
                <input className="input is-rounded" type="text" ref={accountInternalBillingCode} />
              </div>
            </div>
 
            <div className="field">
              <div className="control">
              <label className="label">Contract Signed Date</label>
                <input className="input is-rounded" type="text" ref={accountContractSignedDate} />
              </div>
            </div>

            <div className="field">
              <div className="control">
              <label className="label">Contract Term</label>
                <input className="input is-rounded" type="text" ref={accountContractTerm} />
              </div>
            </div>

            <div className="field">
              <div className="control">
              <label className="label">Contract Expires</label>
                <input className="input is-rounded" type="text" ref={accountContractExpiresDate} />
              </div>
            </div>

            </> : toggleQuestions === 3 ?
            <>

            <div className="field">
              <div className="control">
              <label className="label">Notes</label>
                <textarea className="textarea is-rounded" type="text" ref={accountNotes} />
              </div>
            </div>

            </> : ""}
          </form>

        <div className="block">
          <div className="notification is-danger is-hidden">{addAccountError}</div>
         {success === true ?  <div className="notification is-success">Account Added</div> : ""}
        </div>
        <div className="modal-card-foot">

          
          {toggleQuestions < 3 ? 
          <button className="button level-item" onClick={() => setToggleQuestions(toggleQuestions + 1)}>Next</button> :
          ""}
          {toggleQuestions > 1 ? 
          <button className="button level-item" onClick={() => setToggleQuestions(toggleQuestions - 1)}>Back</button> : ""}
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