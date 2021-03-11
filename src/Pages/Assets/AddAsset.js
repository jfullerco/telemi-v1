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
                        <div className="card-header"><div className="card-header-title">Update Site Details</div></div>
                          <div className="card-content">

                            <div className="label">Site Name</div>
                            <input 
                              className="input is-small is-rounded" 
                              type="text"
                              name="site_name"
                              value={site.site_name}
                              onChange={handleChange}
                              
                              />
                              <div className="label">Address 1</div>
                              <input 
                              className="input is-small is-rounded" 
                              type="text"
                              name="site_add1"
                              value={site.site_add1}
                              onChange={handleChange}
                              
                              />
                              <div className="label">Address 2</div>
                              <input 
                              className="input is-small is-rounded" 
                              type="text"
                              name="site_add2"
                              value={site.site_add2}
                              onChange={handleChange}
                              
                              />
                              <div className="label">City</div>
                              <input 
                              className="input is-small is-rounded" 
                              type="text"
                              name="site_city"
                              value={site.site_city}
                              onChange={handleChange}
                              
                              />
                              <div className="label">State</div>
                              <input 
                              className="input is-small is-rounded" 
                              type="text"
                              name="site_state"
                              value={site.site_state}
                              onChange={handleChange}
                              
                              />
                              <div className="label">Zip</div>
                              <input 
                              className="input is-small is-rounded" 
                              type="text"
                              name="site_zip"
                              value={site.site_zip}
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