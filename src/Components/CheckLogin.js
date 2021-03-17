import React from 'react'
import {useHistory} from 'react-router-dom'

const CheckLogin = () => {
  const history = useHistory()
  const loggedIn = localStorage.userID != null

  return !loggedIn ? history.push('/login') : history.push(`/dashboard/${localStorage.userID}`)
}
export default CheckLogin