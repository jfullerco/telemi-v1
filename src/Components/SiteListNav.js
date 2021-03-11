import React from 'react'
import {Link, useHistory} from 'react-router-dom'

const SiteListNav = () => {
  return (
    <div className="columns">
      <div className="column">
        <button className="button is-small is-rounded">
          <Link to="/addSite">Add Site</Link>
        </button>
      </div>
      <div className="column">
        <button className="button is-small is-rounded">
          <Link to="/addSite">More</Link>
        </button>
      </div>
      <div className="column">
        <button className="button is-small is-rounded">
          <Link to="/addSite">More</Link>
        </button>
      </div>
    </div>
  )
}
export default SiteListNav