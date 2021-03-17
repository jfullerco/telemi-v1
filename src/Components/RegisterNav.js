import React from 'react'

const RegisterNav = () => {
  return (
    <div className="column is-7 is-offset-two-fifths">
      <div className="pb-1">
      <input className="input is-rounded is-focused" placeholder="email" />
      </div>
      <div className="pb-2">
      <input className="input is-rounded is-focused" placeholder="password"/>
      </div>
      <button className="button is-small is-rounded">create your free account</button>
    </div>
  )
}

export default RegisterNav