import React, {useContext, useState, useEffect} from 'react'
import {stateContext} from '../../../stateContext'
import {db} from '../../../firebase'

const TotalLocations = () => {
  const userContext = useContext(stateContext)
  const {currentCompanyID, dataLoading} = userContext.userSession
  
  const [totalLocations, setTotalLocations] = useState()

  useEffect(() => {
    fetchTotalLocations()
  }, [currentCompanyID])

  const fetchTotalLocations = async() => {
    const locationsRef = await db.collection("Locations").where("CompanyID", "==", currentCompanyID).get()
    const locations = await locationsRef.docs.map(doc => ({id: doc.id, ...doc.data()}))
    console.log(locationsRef)
    setTotalLocations(locations)
    
  }

console.log(currentCompanyID)
console.log(dataLoading)
  return (
    <div>
      {dataLoading != true && totalLocations != undefined ? totalLocations.length
       : "0"
      }
    </div>
  )
}
export default TotalLocations