import React, {useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'

import {stateContext} from '../stateContext'

const Register = () => {
  const userContext = useContext(stateContext)
  const data = {
    telemiUser: "",
    telemiPass: "",
    telemiUserLevel: "client",
    clients: {
      client_name: ""
    },
    telemiUserTheme: "light",
    telemiVerifyCode: "",
    telemiVerified: false
  }

  return (
    <div>
    
    </div>
  )
}