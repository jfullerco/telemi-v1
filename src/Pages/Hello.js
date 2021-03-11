import React from 'react'

const Hello = () => {

  const max = 53 - 8

  return (
    <div>
      <section className="hero is-info">
          <div className="hero-body">
            <p className="title">Telecom is hard... </p>
            <div className="subtitle">Managing it shouldn't be! {max}</div>
          </div>
        </section>
        
    </div>
  )
}
export default Hello