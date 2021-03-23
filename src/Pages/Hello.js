import React, {useState} from 'react'
import Register from './Register'
import FirebaseTest from '../Testing/FirebaseTest'

const Hello = () => {
  const [modalState, setModalState] = useState(false)
  const handleModalState = () => {
    setModalState(!modalState)
  }
  return (
    <div>
    <FirebaseTest />
      <section className="hero is-info">
          <div className="hero-body">
            <div className="columns">
                <div className="column">
                  <div className="title has-text-weight-bold"> Telecom is hard... </div>
                    <div className="subtitle">
                      Managing it shouldn't be!
                    </div></div>
                    <div className="level">
                      <div className="column level-right">
                        <button className="button is-small is-rounded" onClick={handleModalState}>
                          create your free account
                        </button>
                      </div>
                    </div>
               
            </div>
          </div>
        </section>
        {modalState === true ? <Register modalState={modalState} /> : ""}
        <div className="columns is-centered ">
          <div className="column">
            <div className="tile is-parent is-7 is-vertical">
              <p className="is-size-3-fullhd is-size-3-widescreen has-text-info">
                <span className="has-text-weight-bold is-uppercase">Think of this as your telecom passport</span>
              
              
              <div className="content is-size-6-fullhd is-size-6-widescreen has-text-black">
                Managing your sites and services across 100's of different vendor portals is not a solution for today's business. 
              </div>
              </p>
              
            </div>
          </div>
        </div>
    </div>
  )
}
export default Hello