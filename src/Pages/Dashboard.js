import React, {useState, useEffect, useContext} from 'react'
import {Route, Link, Switch, Redirect, useParams} from 'react-router-dom'

import {stateContext} from '../stateContext'

import getClient from '../Services/clientService'
import LogoutButton from '../Components/LogoutButton'
import ClientList from './Client/ClientList'
import SiteList from './Sites/SiteList'
import AssetReport from '../Components/Reports/AssetReport'

import Login from './Login'

const Dashboard = () => {
  
  const userContext = useContext(stateContext)
  const {u} = useParams()
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
        
          {toggleModal === true ? <AssetReport /> : ""}
          <button className="button is-rounded" onClick={toggleAssetModal}>
             Asset Report 
          </button>

      </div>

      <div className="block">
        <p />
        <div className="tabs is-centered">
        <div className="tile is-info">1</div>
        <div className="tile is-info">2</div>
        <div className="tile is-info">3</div>
        <div className="tile is-info">4</div>
        </div>
      </div>
      </>

      ) : (
        
        <Redirect to="/login" />
        
      )}
  </>
  )
}

export default Dashboard