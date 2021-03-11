import React from 'react'
import {Link, useHistory} from 'react-router-dom'

const SiteDetailNav = () => {
  return (
    <div className="columns">
      <div className="column is-10"></div>
      <div className="column">
        <button className="button is-small is-rounded">
          <Link to="/addSite">Add Site</Link>
        </button>
      </div>
    </div>
  )
}
export default SiteListNav