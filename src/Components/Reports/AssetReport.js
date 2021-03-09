import React, {useState, useContext} from 'react'
import {stateContext} from '../../../stateContext'

const AssetReport = () => {
  const userContext = useContext(stateContext)
  const {userSession: {sites}} = userContext
  
  const [toggleModal, setToggleModal] = useState(false)

  const toggleModalClose = () => {
    setToggleModal(false)
  }
  
  return (
    <div className={toggleModal != true ? "modal" : "modal is-active"}>
      <div className="modal-background"></div>
        <div className="modal-content">
          <div className="card">
            <div className="card-header">
              <div className="card-header-title">
                Asset Report
              </div>
            </div>
          <div className="card-content">
            {sites != !sites ? sites.map(site => (
            <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>
                Site Name
                </th>
              </tr>
            </thead>
            <tbody>
              <tr key={asset._id}>
                <td>{site.site_name}</td> 
              </tr>
            </tbody>
          </table>
          )) : (
            <div>No Assets added</div>
          )}
          </div>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={toggleModalClose}></button>
    </div>
  )
}

export default AssetReport