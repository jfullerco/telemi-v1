import React, {useContext, useRef} from 'react'
import {Link, useHistory} from 'react-router-dom'

import {stateContext} from '../stateContext'

const Register = () => {
  const userContext = useContext(stateContext)
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  return (
    <div className="modal is-active">
    <div className="modal-background"></div>
    <div className="modal-card">
    <div className="modal-card-head">Register</div>
    <div className="modal-card-body">
        <form>
          <label>user</label>
          <input className="input" type="email" ref={emailRef} />
          <label>pass</label>
          <input className="input" type="password" ref={passwordRef}/>
          <label>confirm pass</label>
          <input className="input" type="password" ref={confirmPasswordRef} />
        </form>
      <div className="modal-card-foot">
        <button className="button" type="submit">Register</button>
        <button className="button">Login</button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Register