import React, {useState, useEffect, useContext} from 'react'
import {Route, Link, Switch, Redirect, useParams} from 'react-router-dom'

import { stateContext } from '../stateContext'
import { useAuth } from '../Contexts/AuthContext'

import getClient from '../Services/clientService'
import LogoutButton from '../Components/LogoutButton'
import CompanyList from './Companies/CompanyList'
import SiteList from './Sites/SiteList'
import AssetReport from '../Components/Reports/AssetReport'

import Login from './Login'

const Dashboard = () => {
  
  const userContext = useContext(stateContext)
  
  const [toggleModal, setToggleModal] = useState(false)
  
  useEffect(() => {
    userContext.getSession(u)
  },[])

  const toggleAssetModal = () => {
    setToggleModal(!toggleModal)
  }

  const handleChange = (e) => {
    console.log(e.target.value)
  }
  
  console.log(localStorage)

  return (  
    <>  
      {(userContext.userSession.loggedIn === true || localStorage.userID != null ) ? (  
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
        <ClientList />
      </div>

      <div className="block">
        <div className="tile is-ancestor has-text-centered">
        
        <div className="tile is-parent ">
        <article className="tile is-child notification is-primary ">
        <p className="title">Sites</p>
        <p className="subtitle">{userContext.userSession.sites.length}</p>
        </article>
        </div>
        
        
        <div className="tile is-parent">
        <article className="tile is-child notification is-primary">
        <p className="title">
        Assets
        </p>
        <p className="subtitle">
        {userContext.userSession.assets.length}
        </p>
        </article>
        </div>
        
        <div className="tile is-parent">
        <article className="tile is-child notification is-primary ">
        <p className="title">Orders</p>
        <p className="subtitle is-small">...</p>
        </article>
        </div>
        <div className="tile is-parent">
        <article className="tile is-child notification is-primary ">
        <p className="title">Tickets</p>
        <p className="subtitle is-small">...</p>
        </article>
        </div>
        </div>
      </div>
      <div className="block">
        {toggleModal === true ? <AssetReport /> : ""}
          <button className="button is-rounded" onClick={toggleAssetModal}>
             Assets Report 
          </button>
          <button className="button is-rounded" onClick={toggleAssetModal}>
             Accounts Report 
          </button>
          <button className="button is-rounded" onClick={toggleAssetModal}>
             Admin Options 
          </button>
      </div>
      <div className="block">
        <SiteList />
      </div>
      </>

      ) : (
        
        <Redirect to="/login" />
        
      )}
  </>
  )
}

export default Dashboard