import React, {useEffect, useState} from "react"
import {db} from '../firebase'

const FirebaseTest = () => {
  const [comp, setComp] = useState([])
  useEffect(() => {
      const fetchData = async () => {
      const data = await db.collection("Companies").get();
      setComp(data.docs.map(doc => doc.data()))
    }
    fetchData()
  })
  

return (
  <div>{comp.map(c => (
    <>{c.Name}</>
  ))}</div>
)
}
export default FirebaseTest
