import React, {useEffect, useState} from "react"
import {db} from '../firebase'

const FirebaseTest = () => {
  const [comp, setComp] = useState()
  useEffect(() => {
      const fetchData = async () => {
      const data = await db.collection('Companies').get();
      const companies = data.map(doc => doc.data())
      setComp(companies)
    }
  })
  

return (
  <div>{comp}</div>
)
}
export default FirebaseTest
