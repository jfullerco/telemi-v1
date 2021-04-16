import React, {useState, useEffect, useContext} from 'react'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'

import {StateProvider, stateContext} from './stateContext'
import Hello from './Pages/Hello'
import Dashboard from './Pages/Dashboard'
import CompanyProfile from './Pages/Companies/CompanyProfile'
import Login from './Pages/Login'
import LocationList from './Pages/Locations/LocationList'
import ServiceList from './Pages/Services/ServiceList'
import LogoutButton from './Components/LogoutButton'
import {AuthProvider} from './Contexts/AuthContext'
import DevTools from './Testing/DevTools'
import "./style.css"

export default function App() {
  
  const user = useContext(stateContext)
  
  return (
    <StateProvider>
    <AuthProvider>
      <Router>
      <LogoutButton />
      <div className="container is-max-desktop"> 
      <div className="column">
      
       
          <Switch>
            
            <Route exact path="/"  component={Hello} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route exact path="/locations" component={LocationList} />
            <Route exact path="/services" component={ServiceList} />
            <Route path="/companyProfile" component={CompanyProfile} />
          
          </Switch>
        
        </div>  
        <DevTools view="true" />
      <div className="footer">
      <div className="content has-text-right is-size-7">
        Telemi by J Fuller Co| Terms | Settings
      </div>
      </div>
      </div>
    </Router>
    </AuthProvider>
    </StateProvider>
  );
}
