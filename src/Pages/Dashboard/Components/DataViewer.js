import React, {useState, useEffect, useContext, useRef} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {stateContext} from '../../../stateContext'
import {db} from '../../../firebase'

const DataViewer = (props) => {
  const userContext = useContext(stateContext)

  const [locations, setLocations] = useState()
  const [orders, setOrders] = useState()
  const [services, setServices] = useState()

  const currentCompany = userContext.userSession

  const fetchPageData = {

  }

  useEffect(() => {
    fetchLocations()
    fetchServices()
  }, [currentCompany])
  
  const fetchLocations = async() => {

    const locationsRef = await db.collection("Locations").where("CompanyID", "==", userContext.userSession.currentCompanyID).get()

    const locations = locationsRef.docs.map(doc => ({
      id: doc.id,
      ...doc.data()}))
    setLocations(locations)

  }

  const fetchOrders = async() => {

    const ordersRef = await db.collection("Orders").where("CompanyID", "==", userContext.userSession.currentCompanyID).get()

    const orders = ordersRef.docs.map(doc => ({
      id: doc.id,
      ...doc.data()}))
    setOrders(orders)

  }

  const fetchServices = async() => {

    const servicesRef = await db.collection("Services").where("CompanyID", "==", userContext.userSession.currentCompanyID).get()

    const services = servicesRef.docs.map(doc => ({
      id: doc.id,
      ...doc.data()}))
    setServices(services)

  }

return (
  <>
  <div className="title">Locations</div>
  <div className="table-container card">
  <nav className="level">
    <div className="table is-striped is-fullwidth">
      <thead>
        <th className="px-6">Location Name</th>
        <th className="px-6">Address</th>
        <th className="px-6">City</th>
        <th className="px-6">State</th>
      </thead>
      <tbody>
      {locations != undefined ? locations.map(location => (
        <tr>
          <td className="px-6">{location.Name}</td>
          <td className="px-6">{location.Address1} {location.Address2}</td>
          <td className="px-6">{location.City}</td>
          <td className="px-6">{location.State}</td>
          <td>edit</td>
        </tr>
      )) : "No locations to display"}
       

      </tbody>    
    </div>
    </nav>
  </div>
  <div className="title">Services</div>
  <div className="table-container card">
  <nav className="level">
    <div className="table is-striped is-fullwidth">
      <thead>
        <th className="px-6">Vendor</th>
        <th className="px-6">Type</th>
        <th className="px-6">Location</th>
        <th className="px-6">Asset ID</th>
      </thead>
      <tbody>
      {services != undefined ? services.map(service => (
        <tr>
          <td className="px-6">{service.Vendor}</td>
          <td className="px-6">{service.Type} {location.Address2}</td>
          <td className="px-6">{service.LocationName}</td>
          <td className="px-6">{service.AssetID}</td>
          <td>edit</td>
        </tr>
      )) : "No locations to display"}
       

      </tbody>    
    </div>
    </nav>
  </div>
  </>
)
}
export default DataViewer
