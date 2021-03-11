import React, {useState, useContext} from 'react'

import {stateContext} from '../../stateContext'

const AssetList = ({id}) => {
  const userContext = useContext(stateContext)
  const {userSession: {siteAssets}} = userContext
  console.log(siteAssets)
  return (
    <table className="table is-striped is-fullwidth">
      <thead>
        <tr>
          <th>
          Assets:
          </th>
          <th>
          Service ID
          </th>
          <th>
          Vendor
          </th>
          <th>
          Type
          </th>
          <th>
          Status
          </th>
        </tr>
        </thead>
        <tbody>
        
        {siteAssets != undefined ? siteAssets.map(asset => (
          <tr key={asset._id} className="content is-small">
            <td></td>
            <td>{asset.asset_ID}</td>
            <td>{asset.asset_Vendor}</td>
            <td>{asset.asset_Type}</td>
            <td>{asset.asset_Status}</td>
          </tr>
        )) : (
          <tr><td>Assets loading</td></tr>
        )}
        
        </tbody>
      
    </table>
  )
}
export default AssetList