import React, {useState, useContext} from 'react'
import {stateContext} from '../../../stateContext'

const AssetReport = () => {
  const userContext = useContext(stateContext)
  const {userSession: {sites}} = userContext
  
  const [toggleModal, setToggleModal] = useState(false)

  const toggleEditModal = () => {
    setToggleModal(!toggleModal)
  }
  
  return (
    <div>
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
  )
}