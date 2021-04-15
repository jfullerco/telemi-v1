import React, {useState, useEffect, useContext, useRef} from 'react'
import {Link, useHistory} from 'react-router-dom'

import {stateContext} from '../../../stateContext'
import {db} from '../../../firebase'

import ServiceDetail from '../../Services/ServiceDetail'
import AddService from '../../Services/AddService'
import LocationDetail from '../../Locations/LocationDetail'
import AddLocation from '../../Locations/AddLocation'
import OrderDetail from '../../Orders/OrderDetail'
import AddOrder from '../../Orders/AddOrder'
import TicketDetail from '../../Tickets/TicketDetail'
import AddTicket from '../../Tickets/AddTicket'

const DataViewer = (props) => {
  const userContext = useContext(stateContext)
  const currentCompany = userContext.userSession

  const [locations, setLocations] = useState()
  const [orders, setOrders] = useState()
  const [services, setServices] = useState()
  const [tickets, setTickets] = useState()
  const [users, setUsers] = useState()

  const [toggleServicesDetailModal, setToggleServicesDetailModal] = useState(false)

  const [toggleServicesAddModal, setToggleServicesAddModal] = useState(false)

  const [toggleServicesView, setToggleServicesView] = useState(false)

  const [toggleLocationDetailModal, setToggleLocationDetailModal] = useState(false)

  const [toggleLocationAddModal, setToggleLocationAddModal] = useState(false)

  const [toggleLocationView, setToggleLocationView] = useState(false)

  const [toggleOrderDetailModal, setToggleOrderDetailModal] = useState(false)

  const [toggleOrderAddModal, setToggleOrderAddModal] = useState(false)
  
  const [toggleOrderView, setToggleOrderView] = useState(false)

  const [toggleTicketAddModal, setToggleTicketAddModal] = useState(false)

  const [toggleTicketDetailModal, setToggleTicketDetailModal] = useState(false)
  
  const [toggleTicketView, setToggleTicketView] = useState(false)

  const handleToggleServicesAddModal = () => {
    setToggleServicesAddModal(!toggleServicesAddModal)
  }

  const handleToggleServicesDetailModal = (id) => {
    
    userContext.setCurrentServiceID(id)
    setToggleServicesDetailModal(!toggleServicesDetailModal)
  }

  const handleToggleServicesView = () => {
    setToggleServicesView(!toggleServicesView)
  }
  
  const handleToggleLocationDetailModal = (id) => {
    
    userContext.setCurrentLocationID(id)
    setToggleLocationDetailModal(!toggleLocationDetailModal)
  }

  const handleToggleLocationAddModal = () => {
    setToggleLocationAddModal(!toggleLocationAddModal)
  }

  const handleToggleLocationView = () => {
    setToggleLocationView(!toggleLocationView)
  }

  const handleToggleOrderDetailModal = () => {
    setToggleOrderDetailModal(!toggleOrderDetailModal)
  }

  const handleToggleOrderAddModal = () => {
    setToggleOrderAddModal(!toggleOrderAddModal)
  }

  const handleToggleOrderView = () => {
    setToggleOrderView(!toggleOrderView)
  }

  const handleToggleTicketDetailModal = () => {
    setToggleTicketDetailModal(!toggleTicketDetailModal)
  }

  const handleToggleTicketAddModal = () => {
    setToggleTicketAddModal(!toggleTicketAddModal)
  }

  const handleToggleTicketView = () => {
    setToggleTicketView(!toggleTicketView)
  }

  useEffect(() => {
    fetchLocations()
    fetchServices()
    fetchOrders()
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

  const fetchTickets = async() => {

    const ticketsRef = await db.collection("Tickets").where("CompanyID", "==", userContext.userSession.currentCompanyID).get()

    const tickets = ticketsRef.docs.map(doc => ({
      id: doc.id,
      ...doc.data()}))
    setTickets(tickets)

  }


return (
  <>
    {toggleServicesDetailModal != false ? <ServiceDetail /> : ""}
    {toggleServicesAddModal != false ? <AddService /> : ""}
    
    
    <div className="title">
      <button className="button is-large is-info is-rounded is-fullwidth" onClick={handleToggleServicesView}>
        Services
      </button>
    </div>

    {toggleServicesView != false ? 
      <div className="table-container">
      <nav className="level">
        <div className="table is-striped is-fullwidth">
          <thead>
            <th className="px-6">Vendor</th>
            <th className="px-6">Type</th>
            <th className="px-6">Location</th>
            <th className="px-6">Asset ID</th>
            <th><button className="button is-rounded is-small" onClick={handleToggleServicesAddModal}>add</button></th>
          </thead>
          <tbody>
          {services != undefined ? services.map(service => (
            <tr key={service.id}>
              <td className="px-6">{service.Vendor}</td>
              <td className="px-6">{service.Type} {location.Address2}</td>
              <td className="px-6">{service.LocationName}</td>
              <td className="px-6">{service.AssetID}</td>
              <td><button className="button is-rounded is-small" onClick={()=>handleToggleServicesDetailModal(service.id)}>edit</button></td>
            </tr>
          )) : "No services added"}
          

          </tbody>    
        </div>
        </nav>
      </div>
    : ""}

    {toggleLocationDetailModal != false ? <LocationDetail /> : ""}
    {toggleLocationAddModal != false ? <AddLocation /> : ""}

    <div className="title">
      <button className="button is-large is-info is-rounded is-fullwidth" onClick={handleToggleLocationView}>
      Locations 
      <span className="is-size-6">
        {locations != undefined ? `[${locations.length}]` : ""}
      </span>
      </button>
    </div>
    {toggleLocationView != false ? 
    <div className="table-container">
    <nav className="level">
      <div className="table is-striped is-fullwidth">
        <thead>
          <tr>  
            <th className="px-6">Location Name</th>
            <th className="px-6">Address</th>
            <th className="px-6">City</th>
            <th className="px-6">State</th>
            <th><button className="button is-rounded is-small" onClick={handleToggleLocationAddModal}>add</button></th>
          </tr>
        </thead>
        <tbody>
        {locations != undefined ? locations.map(location => (
          <tr key={location.id}>
            <td className="px-6">{location.Name}</td>
            <td className="px-6">{location.Address1} {location.Address2}</td>
            <td className="px-6">{location.City}</td>
            <td className="px-6">{location.State}</td>
            <td><button className="button is-rounded is-small" onClick={()=>handleToggleLocationDetailModal(location.id)}>edit</button></td>
          </tr>
        )) : "No locations to display"}
        

        </tbody>    
      </div>
      </nav>
    </div> : "" }

    {toggleOrderDetailModal != false ? <OrderDetail /> : ""}
    {toggleOrderAddModal != false ? <AddOrder /> : ""}

    <div className="title">
      <button className="button is-large is-info is-rounded is-fullwidth" onClick={handleToggleOrderView}>
        Orders 
      <span className="is-size-6">
      {orders != undefined ? `[${orders.length}]` : ""}
      </span>
      </button>
      
    </div>
    {toggleOrderView != false ? 
    <div className="table-container">
    <nav className="level">
      <div className="table is-striped is-fullwidth">
        <thead>
        <tr>
          <th className="px-6">Vendor</th>
          <th className="px-6">Order Num</th>
          <th className="px-6">Date</th>
          <th className="px-6">Location</th>
          <th><button className="button is-rounded is-small" onClick={handleToggleOrderAddModal}>add</button></th>
        </tr>
        </thead>
        <tbody>
        {orders != undefined ? orders.map(order => (
          <tr key={order.id}>
            <td className="px-6">
              {order.OrderVendor}
            </td>
            <td className="px-6">
              {order.OrderNum}
            </td>
            <td className="px-6">
              {order.OrderDate}
            </td>
            <td className="px-6">
              {order.LocationName}
            </td>
            <td>
              <button className="button is-rounded is-small" onClick={()=>handleToggleOrderDetailModal(order.id)}>edit</button>
            </td>
          </tr>
        )) : "No orders added"}
        

        </tbody>    
      </div>
      </nav>
    </div> : ""}

    {toggleTicketDetailModal != false ? <TicketDetail /> : ""}
    {toggleTicketAddModal != false ? <AddTicket /> : ""}
    <div className="title">
      <button className="button is-large is-info is-rounded is-fullwidth" onClick={handleToggleTicketView}>
      Tickets
      <span className="is-size-6">
      {tickets != undefined ? `"[" ${tickets.length} "]"` : ""}
      </span>
      </button>
      
    </div>
    
    {toggleTicketView != false ? 
    <div className="table-container">
    <nav className="level">
      <div className="table is-striped is-fullwidth">
        <thead>
          <th className="px-6">Vendor</th>
          <th className="px-6">Ticket Number</th>
          <th className="px-6">Date</th>
          <th className="px-6">Location</th>
          <th><button className="button is-rounded is-small" onClick={handleToggleOrderAddModal}>add</button></th>
        </thead>
        <tbody>
        {tickets != undefined ? orders.map(order => (
          <tr key={order.id}>
            <td className="px-6">
              {order.OrderVendor}
            </td>
            <td className="px-6">
              {order.OrderNum}
            </td>
            <td className="px-6">
              {order.OrderDate}
            </td>
            <td className="px-6">
              {order.LocationName}
            </td>
            <td>
              <button className="button is-rounded is-small" onClick={()=>handleToggleLocationDetailModal(location.id)}>edit</button>
            </td>
          </tr>
        )) : "No tickets added"}
        

        </tbody>    
      </div>
      </nav>
    </div> : ""}

    {toggleLocationDetailModal != false ? <OrderDetail /> : ""}
    {toggleOrderAddModal != false ? <AddOrder /> : ""}
    <div className="title">Users</div>
    <div className="table-container">
    <nav className="level">
      <div className="table is-striped is-fullwidth">
        <thead>
          <th className="px-6">Email</th>
          <th><button className="button is-rounded is-small" onClick={handleToggleOrderAddModal}>add</button></th>
        </thead>
        <tbody>
        {users != undefined ? orders.map(order => (
          <tr key={order.id}>
            <td className="px-6">
              {order.OrderVendor}
            </td>
            <td>
              <button className="button is-rounded is-small" onClick={()=>handleToggleLocationDetailModal(location.id)}>edit</button>
            </td>
          </tr>
        )) : "No Users added"}
        

        </tbody>    
      </div>
      </nav>
    </div>
  
  </>
)
}
export default DataViewer
