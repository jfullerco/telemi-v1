import React, {useState, useEffect, useContext} from 'react'
import {stateContext} from '../stateContext'

const useEffectTest = () => {
  const userContext = useContext(stateContext)

  useEffect(() => {
     
     getSession(clientID)
     
  }, [])

  const getSession = async (clientID) => {
    
    const {data} = await getClient(clientID)
    userContext.setSessionData({
      client_name: data.client_name,
      sites: data.sites,
      _id: data._id
    })
    
  }
  return (
    <>
    <button onClick={getSession}>test</button>
    </>
  )
}
export default useEffectContext