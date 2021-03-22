import React, { useContext, useState } from 'react'
import {auth} from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider() {

  const [currentUser, setCurrentUser] = useState()

  function Register(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  const value = {
    currentUser
  }

  return (
    <AuthContext.Provider value={value}>
    {props.children}
    </AuthContext.Provider>
  )
}