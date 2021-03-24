import React, {useState, useEffect, useContext, useRef} from 'react'
import {useHistory} from 'react-router-dom'


export default function Login() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const [loading, setLoading] = useState(false)
  const [modalState, setModalState] = useState(true)


  const handleModalClose = () => {
    setModalState(false)
  }

  return(
    <div className={modalState === true ? "modal is-active" : "modal"}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <div className="modal-card-head">Login</div>
        <div className="modal-card-body">
          <form>
            <label>Email</label>
            <input className="input" type="email" ref={emailRef} />
            <label>Password</label>
            <input className="input" type="password" ref={passwordRef}/>
          </form>
        <div className="block">
          <div className="notification is-danger is-hidden">{signupError}</div>
        </div>
        <div className="modal-card-foot">
          
          <button className={loading !== true ? "button level-item" : "button is-loading"} 
          type="submit" disabled={loading} onClick={handleSubmit}
          >
            Login
          </button>
          
          <div className="content is-small">
            Create account 
          <Link to="/register">Register</Link></div>
        
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={handleModalClose}></button>  
        </div>
      </div>
    </div>
  )

}