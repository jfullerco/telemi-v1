import React, {useState} from 'react'



export const useStateStore = (initialStateStore) => {

  const [stateStore, setStateStore] = useState()

  const handleChange = (e) => {
          
           setStateStore({...stateStore, ...e})
      
      }
  
  return [stateStore, handleChange]
}


