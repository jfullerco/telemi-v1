import React, {useState, useEffect, useContext} from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import {stateContext} from '../stateContext'

import getClient from '../Services/clientService'
import LogoutButton from '../Components/LogoutButton'
import ClientList from './Client/ClientList'

import Login from './Login'

const Dashboard = () => {
  
  const userContext = useContext(stateContext)
  
  const userID = localStorage.userID
  console.log(userContext)

  return (  
    <>  
      {(userContext.userSession.loggedIn === true) ? (  
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
        <p />
        <Switch>
          <span>
            <Link to="/sites">
              <div className="button is-rounded">
                Sites
              </div>
            </Link>
          </span>
        </Switch>
        </div>
      </>

      ) : (
        
        <Redirect to="/login" />
        
      )}
  </>
  )
}

export default Dashboard