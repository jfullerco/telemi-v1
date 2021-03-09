import React, {useState, useEffect, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {stateContext} from '../../stateContext'

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

      <div className="button is-rounded is-small">
        <Link to="/addSite">Add Site</Link>
      </div>
      
    </div>
    
    {sites != !sites ? sites.map(site => (
       <div className="block" key={site._id}>
       <span>
        <Link to={`/sites/${site._id}`}>
        <div className="button is-rounded">
            {site.site_name}
        </div>
        </Link>
       </span>
       </div>
      )
    ) : (
      <span>
        <div className="button is-rounded is-danger is-loading">
            No sites found
        </div>
      </span>
    )}
    
    </div>
    </>
  )
}
export default SiteList