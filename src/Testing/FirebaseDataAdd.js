import React, {useState, useEffect} from 'react'
import {useAuth} from '../Contexts/AuthContext'
import {db} from '../firebase'

const FirebaseDataAdd = () => {

  const companyRef = db.collection("Companies")
  const [changeData, setChangeData] = useState("")

  const handleChange = (e) => {
    const companyNameRef = e.target.value
    setChangeData(companyNameRef)
  }
console.log(changeData)
  return (
    <div>
    <input type="text" onChange={handleChange} name="Name" />
    </div>
  )
}
