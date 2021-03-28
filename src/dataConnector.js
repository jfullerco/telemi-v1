import React, {useState, useContext} from 'react'
import {db} from './firebase'
import {useAuth} from '../Contexts/AuthContext'
import {stateContext} from './stateContext'

const dataConnect = () => {
  
  const currentUser = useAuth()
  const userContext = useContext(stateContext)
  
  const companiesRef = (currentUser) => {
    const fetchUsers = db.collection("Companies").where("Users", "array-contains", currentUser).get()
    userContext.setClients()
  }
}
export {companiesRef}