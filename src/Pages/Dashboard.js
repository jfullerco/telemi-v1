import React, {useState, useEffect, useContext} from 'react'
import {Route, Link, Switch, Redirect, useParams} from 'react-router-dom'

import { stateContext } from '../stateContext'
import {useAuth} from '../Contexts/AuthContext'

import LogoutButton from '../Components/LogoutButton'
import CompanyList from './Companies/CompanyList'
import TotalLocations from './Dashboard/Components/TotalLocations'

const Dashboard = () => {
  
  const userContext = useContext(stateContext)
  const {dataLoading} = userContext.userSession
  const [toggleModal, setToggleModal] = useState(false)
  
  const toggleAssetModal = () => {
    setToggleModal(!toggleModal)
  }
  
  return (  
       
      <> 
       <div className="block" id="dashboardHero"> 
        <section className="hero is-info is-small">
          <div className="hero-body">
            <p className="title">Dashboard</p>
          </div>
          
        </section>
      </div>
      
      <div className="block" id="companyList">
        <CompanyList />
      </div>

      <div className="block">
        <div className="tile is-ancestor has-text-centered">
        
        <div className="tile is-parent ">
        <article className="tile box is-child notification has-background-info-lighter">
        <p className="title is-7 has-text-weight-bold">
          LOCATIONS
        </p>
        <p className="button is-rounded is-large has-text-weight-bold">
          <TotalLocations />
        </p>
        </article>
        </div>
        
        <div className="tile is-parent">
        <article className="tile is-child notification is-primary">
        <p className="title is-5">
          <div className="block">Total Services</div>
          <Link to="/services">#</Link>
        </p>
        </article>
        </div>
        
        <div className="tile is-parent">
        <article className="tile is-child notification is-primary ">
        <p className="title is-5">Orders</p>
        <p className="subtitle is-small">...</p>
        </article>
        </div>

        <div className="tile is-parent">
        <article className="tile is-child notification is-primary ">
        <p className="title is-5">Tickets</p>
        <p className="subtitle is-small">...</p>
        </article>
        </div>
        </div>

        <div className="notification is-info" id="quickLook">
          <div className="tabs">
          <Link to="/locations" className="button is-rounded">
            Locations
          </Link>
          <Link to="/services" className="button is-rounded">
            Services
          </Link>
          <Link to="/orders" className="button is-rounded">
            Orders
          </Link>
          <Link to="/tickets" className="button is-rounded">
            Tickets
          </Link>
          </div>
        </div>

      </div>
     

      
  </>
  )
}

export default Dashboard