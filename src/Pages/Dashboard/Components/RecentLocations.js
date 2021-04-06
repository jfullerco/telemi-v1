import React, {useContext, useState, useEffect} from 'react'
import {stateContext} from '../../../stateContext'
import {db} from '../../../firebase'

const RecentLocations = () => {
  const userContext = useContext(stateContext)
  const {currentCompanyID} = userContext
  const [recentLocations, setRecentLocations] = useState("")
console.log(userContext)
  useEffect(() => {
    fetchRecentLocations()
  }, [currentCompanyID])

  const fetchRecentLocations = () => {
    const locationsRef = db.collection("Locations").where("CompanyID", "==", currentCompanyID).get()
    const locations = locationsRef.docs.map(doc => ({id: doc.id, ...doc.data()}))
    setRecentLocations(snapShot)
    
  }


  return (
    <div className="card">
      {currentCompanyID != undefined ? recentLocations.map(location => (
        <button className="button is-rounded">{location.Name}</button>
      )) : (
        <div>No Recent Locations</div>
      )}
    </div>
  )
}
export default RecentLocations