import React, { useContext, useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider(props) {

  const [currentUser, setCurrentUser] = useState("")

  function signup(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  }
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setCurrentUser(user)
    })
    return unsubscribe
  },[])

  const value = {
    currentUser,
    signup
  }

  return (
    <AuthContext.Provider value={value}>
    {props.children}
    </AuthContext.Provider>
  )
}