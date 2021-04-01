import React, {useState, useContext} from 'react'
import {Link, Redirect, useHistory} from 'react-router-dom'
import {stateContext} from '../stateContext'

const LogoutButton = () => {
  const history = useHistory()
  const userContext = useContext(stateContext)
  const [isActive, setIsActive] = useState(false)
  const logOut = () => {
    userContext.setLoggedIn(false)
    history.push("/")
  }
console.log(userContext)
  return (
    <div className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">

      <div className="navbar-item"><Link to="/" className="has-text-black">TELEMI</Link></div>
    
    <a
          onClick={() => {
            setIsActive(!isActive)
          }}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='tiemsNavbar'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div 
        className={`navbar-menu ${isActive ? 'is-active' : ''}`}
        aria-label='menu' 
        id='tiemsNavbar'
      >

      <div className="navbar-end">
        {userContext.userSession ? (
          <>
          <Link to={`/dashboard/${userContext.userSession.userID}`} className="navbar-item">
            Dashboard
          </Link>
          <div onClick={logOut} className="navbar-item">
            Logout
          </div>
          </>
        ) : (
          <Link to="/login" className="navbar-item" >
            Login
          </Link>
        )}

      </div>
    </div>
  </div>
    
  )
}
export default LogoutButton