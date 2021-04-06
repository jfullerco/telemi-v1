import React, {useState, useEffect, useContext} from 'react'
import {Route, Link, Switch, Redirect, useParams} from 'react-router-dom'

import { stateContext } from '../stateContext'
import {useAuth} from '../Contexts/AuthContext'

import LogoutButton from '../Components/LogoutButton'
import CompanyList from './Companies/CompanyList'
import RecentLocations from './Dashboard/Components/RecentLocations'

const Dashboard = () => {
  
  const userContext = useContext(stateContext)
  const {dataLoading} = userContext.userSession
  const [toggleModal, setToggleModal] = useState(false)
  
  const toggleAssetModal = () => {
    setToggleModal(!toggleModal)
  }
  
  return (  
       
      <> 
       <div className="block"> 
        <section className="hero is-info">
          <div className="hero-body">
            <p className="title">Dashboard</p>
            <div className="subtitle"></div>
          </div>
        </section>
      </div>
      
      <div className="block">
        <CompanyList />
      </div>

      <div className="block">
        <div className="tile is-ancestor has-text-centered">
        
        <div className="tile is-parent ">
        <article className="tile is-child notification is-primary ">
        <p className="title is-5">
          <Link to="/locations">Locations</Link>
        </p>
         <RecentLocations />
        </article>
        </div>
        
        
        <div className="tile is-parent">
        <article className="tile is-child notification is-primary">
        <p className="title is-5">
          <Link to="/services">Services</Link></p>
        <p className="subtitle"></p>
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
      </div>
     

      
  </>
  )
}

export default Dashboard