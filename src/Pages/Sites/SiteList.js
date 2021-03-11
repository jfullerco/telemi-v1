import React, {useState, useEffect, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {stateContext} from '../../stateContext'

import SiteListNav from '../../Components/Elements/SiteListNav'

const SiteList = () => {
  
  const userContext = useContext(stateContext)
  const {sessionData: {sites}} = userContext
    console.log(userContext.userSession.sites.length)
  return (
    <>
        <div className="block"> 
          <section className="hero is-info">
            <div className="hero-body">
              <p className="title">Sites</p>
            <div className="subtitle"></div>
            </div>
          </section>
        </div>
              
        <div className="block">
      
        <div className="block">
          <SiteListNav />
        </div>
      
        {sites != !sites ? sites.map(site => (
        <div className="block" key={site._id}>
          <span>
            <Link to={`/sites/${site._id}`}>
              <div className="button is-rounded">
                <div className="columns"> 
                  <div className="column is-one-quarter"> 
                    {site.site_name} 
                  </div>
                  <div className="columns is-three-quarters">
                  
                  </div>
                </div>
              </div>
            </Link>
          </span>
        </div>
        )
        ) : (
        <span>
          <div className="button is-rounded is-danger">
              No sites have been added
          </div>
        </span>
        )}
        </div>
    </>
  )
}
export default SiteList