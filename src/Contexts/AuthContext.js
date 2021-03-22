import React, { useContext, useState, useEffect } from 'react'
import {auth} from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider() {

  const [currentUser, setCurrentUser] = useState()

  function RegisterUser(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
    return unsubscribe
  },[])

  const value = {
    currentUser,
    RegisterUser
  }

  return (
    <AuthContext.Provider value={value}>
    {props.children}
    </AuthContext.Provider>
  )
}