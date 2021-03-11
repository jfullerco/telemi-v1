import React, {useState, useContext} from 'react'
import {stateContext} from '../../stateContext'

const OrderList = ({id}) => {
  const userContext = useContext(stateContext)
  const {userSession: {siteOrders}} = userContext
  return (
    <table className="table is-striped is-fullwidth">
      <thead>
        <tr>
          <th>
          Order No.
          </th>
          <th>
          Vendor
          </th>
          <th>
          Type
          </th>
          <th>
          Date
          </th>
        </tr>
        </thead>
        <tbody>
        
        {siteOrders != !siteOrders ? siteOrders.map(order => (
          <tr key={order._id} className="content is-small">
            <td>{order.orderID}</td>
            <td>{order.orderVendor}</td>
            <td>{order.orderType}</td>
            <td>{order.orderDate}</td>
          </tr>
        )) : (
          <tr><td>Orders loading</td></tr>
        )}
        
        </tbody>
      
    </table>
  )
}
export default OrderList