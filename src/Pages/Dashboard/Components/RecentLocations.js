import React, {useContext, useState, useEffect} from 'react'
import {stateContext} from '../../../stateContext'
import {db} from '../../../firebase'

const RecentLocations = () => {
  const userContext = useContext(stateContext)
  const {currentCompanyID, dataLoading} = userContext.userSession
  
  const [recentLocations, setRecentLocations] = useState()

  useEffect(() => {
    fetchRecentLocations()
  }, [currentCompanyID])

  const fetchRecentLocations = async() => {
    const locationsRef = await db.collection("Locations").where("CompanyID", "==", currentCompanyID).get()
    const locations = await locationsRef.docs.map(doc => ({id: doc.id, ...doc.data()}))
    console.log(locationsRef)
    setRecentLocations(locations)
    
  }

console.log(currentCompanyID)
console.log(dataLoading)
  return (
    <div className="card">
      {dataLoading != true && recentLocations != undefined ? recentLocations.map(location => (
        <ul>{location.Name}</ul>
      )) : (
        <div>No Recent Locations</div>
      )}
    </div>
  )
}
export default RecentLocations