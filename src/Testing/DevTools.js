import React, {useContext} from 'react'
import {stateContext} from '../stateContext'

const DevTools = () => {
  const userContext = useContext(stateContext)

  return (
    <div className="tile">
      <div className="code">test</div>
    </div>
  )
}
export default DevTools