import React, {useState, useEffect} from 'react'
import siteService from '../../Services/siteService'

const OrderList = ({id}) => {
  console.log(id)
  const [siteOrders, setSiteOrders] = useState([])

  useEffect(() => {
    getOrders(id)
  }, [])

  const getAssets = async (id) => {
    const {data: {site_orders}} = await siteService.getSite(id)
    setSiteOrders(site_orders)
console.log()
  }
  console.log(siteOrders)
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
          <tr key={order._id}>
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