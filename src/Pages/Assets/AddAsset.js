import React, {useState, useContext} from 'react'
import {stateContext} from '../../stateContext'
import siteServices from '../../Services/siteService'

const AddAsset = ({id}) => {
  const userContext = useContext(stateContext)
  const initialAssetState = {
    id: null,
    asset_ID: "",
    asset_Vendor: "",
    asset_Hostname: "",
    asset_Handoff: "",
    asset_voice_Handoff: "", 
    asset_Details: "",
    asset_Type: "",
    asset_Status: "",
    _parent_id: ""
  }

  const [asset, setAsset] = useState(initialAssetState)
  const [submitted, setSubmitted] = useState(false)

  const [toggleModal, setToggleModal] = useState(true)

  const toggleModalClose = () => {
    setToggleModal(false)
  }

  const handleInputChange = event => {
    const { name, value } = event.target
    setAsset({...asset, [name]: value})
  }

  const saveAsset = async () => {
    var data = {
      asset_ID: asset.asset_ID,
      asset_Vendor: asset.asset_Vendor,
      asset_Hostname: asset.asset_Hostname,
      asset_Bandwidth: asset.asset_Bandwidth,
      asset_Handoff: asset.asset_Handoff,
      asset_voice_Handoff: asset.asset_voice_Handoff,
      asset_Details: asset.asset_Details,
      asset_Type: asset.asset_Type,
      asset_Status: asset.asset_Status,
      _parent_id: id
      }
      
      await siteServices.addAsset(id, data)
    
      setSubmitted(true)
      console.log()
    
  }

const newSite = () => {
  setClient(initialSiteState)
  setSubmitted(false)
}

  return (
    <div className={toggleModal != true ? "modal" : "modal is-active"}>
                    <div className="modal-background"></div>
                      <div className="modal-content">
                        <div className="card">
                        <div className="card-header"><div className="card-header-title">Add Asset</div></div>
                          <div className="card-content">

                            <div className="label">Asset ID</div>
                            <input 
                              className="input is-small is-rounded" 
                              type="text"
                              name="asset_ID"
                              value={asset.asset_ID}
                              onChange={handleChange}
                              
                              />
                              <div className="label">Vendor</div>
                              <input 
                              className="input is-small is-rounded" 
                              type="text"
                              name="asset_vendor"
                              value={asset.asset_Vendor}
                              onChange={handleChange}
                              
                              />
                              <div className="label">Hostname</div>
                              <input 
                              className="input is-small is-rounded" 
                              type="text"
                              name="asset_Hostname"
                              value={asset.asset_Hostname}
                              onChange={handleChange}
                              
                              />
                              <div className="label">Bandwidth</div>
                              <input 
                              className="input is-small is-rounded" 
                              type="text"
                              name="asset_Bandwidth"
                              value={asset.asset_Bandwidth}
                              onChange={handleChange}
                              
                              />
                              <div className="label">Handoff</div>
                              <input 
                              className="input is-small is-rounded" 
                              type="text"
                              name="asset_Handoff"
                              value={asset.asset_Handoff}
                              onChange={handleChange}
                              
                              />
                              <div className="label">Voice Handoff</div>
                              <input 
                              className="input is-small is-rounded" 
                              type="text"
                              name="asset_voice_Handoff"
                              value={asset.asset_voice_Handoff}
                              onChange={handleChange}
                              
                              />
                              <div className="button is-info is-small is-rounded" onClick={addAsset}>Save</div>

                          </div>
                        </div>
                      </div>
                    <button className="modal-close is-large" aria-label="close" onClick={toggleModalClose}></button>
                  </div>
  )
}

export default AddAsset