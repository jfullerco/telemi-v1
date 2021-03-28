import React, {useState, useEffect, useContext} from 'react'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'

import {StateProvider, stateContext} from './stateContext'
import Hello from './Pages/Hello'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import SiteList from './Pages/Sites/SiteList'
import SiteDetail from './Pages/Sites/SiteDetail'
import AddSite from './Pages/Sites/AddSite'

import LogoutButton from './Components/LogoutButton'
import {AuthProvider} from './Contexts/AuthContext'
import "./style.css"

export default function App() {
  
  const user = useContext(stateContext)
  
  return (
    <StateProvider>
    <AuthProvider>
      <Router>
      <div className="container is-max-desktop"> 
      <div className="column">
      <LogoutButton />
       
          <Switch>
            
            <Route exact path="/"  component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route exact path="/sites" component={SiteList} />
            <Route path="/sites/:id" component={SiteDetail} />
            <Route path="/addSite" component={AddSite} />
            

          </Switch>
        
        </div>  

      </div>
    </Router>
    </AuthProvider>
    </StateProvider>
  );
}
