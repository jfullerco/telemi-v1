import React from 'react'
import RegisterNav from '../Components/RegisterNav'

const Hello = () => {

  return (
    <div>
      <section className="hero is-info">
          <div className="hero-body">
            <p className="title"><span className="tile has-text-weight-bold">Telecom is hard... </span></p>
            <div className="subtitle">
              <div className="columns">
                <div className="column">
                Managing it shouldn't be!
                </div>
                <div className="tile is-vertical"><RegisterNav /></div>
              </div> 
            </div>
          </div>
        </section>
        <div className="columns is-centered ">
          <div className="column">
            <div className="tile is-parent is-7 is-vertical">
              <p className="is-size-3-fullhd is-size-3-widescreen has-text-info">
                <span className="has-text-weight-bold is-uppercase">Think of this as your telecom passport</span>
              
              
              <div className="content is-size-6-fullhd is-size-6-widescreen has-text-black">
                Managing your sites and services across 100 different vendor portals is not a solution for today's business. 
              </div>
              </p>
              
            </div>
          </div>
        </div>
    </div>
  )
}
export default Hello