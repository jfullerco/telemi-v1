import React from 'react'
import {db} from './firebase'
import {useAuth} from '../Contexts/AuthContext'

const dataConnect = () => {
  
  const currentUser = useAuth()
  
  const companiesRef = (currentUser) => {
    db.collection("Companies").where("UsersAllowed", "==")
  }
}