import React, {useState, useEffect, useContext} from 'react'
import {Link, Redirect, useParams} from 'react-router-dom'
//Data Services
import {stateContext} from '../../stateContext'
import siteService from '../../Services/siteService'
//Components
import LogoutButton from '../../Components/LogoutButton'
import DeleteSiteButton from '../../Components/DeleteSiteButton'
import AssetList from '../Assets/AssetList'
import EditSiteModal from './EditSiteModal'

const SiteDetail = () => {
  
  const {id} = useParams()

  const [toggleModal, setToggleModal] = useState(false)

  const toggleEditModal = () => {
    setToggleModal(!toggleModal)
  }

  const userContext = useContext(stateContext)
  
  const {sessionData: {sites}} = userContext
  
  const siteDetails = sites.find((site) => site._id === id) 
  
  console.log(siteDetails)
  
  
  return (
    <>
    <div className="block"> 
        <section className="hero is-info">
          <div className="hero-body">
            <p className="title">Site Information</p>
          <div className="subtitle"></div>
          </div>
        </section>
        </div>
        <div className="block is-full-width">
          {siteDetails ? (
            <>
              <table className="table is-striped is-fullwidth">
                <thead>
                  <tr>
                    <th>Site Name</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>{siteDetails.site_name}</td>
                  <td>
                   {siteDetails.site_add1}
                   {siteDetails.site_add2}<br />
                   {siteDetails.site_city} {siteDetails.site_state}, {siteDetails.site_zip} 
                  <div className="button is-rounded is-small" onClick={toggleEditModal}>edit</div>

                  <DeleteSiteButton id={id} />
                  
                    {toggleModal === true ? <EditSiteModal siteDetails={siteDetails} /> : ""}

                  </td>
                  </tr>
                </tbody>
              </table>
            <AssetList id={id} />
          </>
          ) : (
            <span>
            <div className="button is-rounded is-danger"> 
              Site details not available
            </div> 
            </span>
            
            )
          }
        </div>
    </>
  )
}
export default SiteDetail