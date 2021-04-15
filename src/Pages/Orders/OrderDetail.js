import React, {useState} from 'react'

const OrderDetail = () => {
  const [modalState, setModalState] = useState(true)
  return(
    <div className={modalState === true ? "modal is-active" : "modal"}>
    Test
    </div>
  )
}
export default OrderDetail