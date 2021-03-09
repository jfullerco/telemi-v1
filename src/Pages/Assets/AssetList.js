import React, {useState, useEffect} from 'react'
import siteService from '../../Services/siteService'

const AssetList = ({id}) => {
  console.log(id)
  const [siteAssets, setSiteAssets] = useState([])

  useEffect(() => {
    getAssets(id)
  }, [])

  const getAssets = async (id) => {
    const {data: {site_assets}} = await siteService.getSite(id)
    setSiteAssets(site_assets)
console.log()
  }
  console.log(siteAssets)
  return (
    <table className="table is-striped is-fullwidth">
      <thead>
        <tr>
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
        
        {siteAssets != !siteAssets ? siteAssets.map(asset => (
          <tr key={asset._id}>
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