import React, {useEffect, useState} from "react"
import {db} from '../firebase'
import {useAuth} from '../Contexts/AuthContext'

const FirebaseTest = () => {
  const [user, setUser] = useState([])
  const {currentUser} = useAuth()
  useEffect(() => {
    
    fetchData()
    
  },[])
  
  const fetchData = async () => {
    
      const userRef = await db.collection("Users").where("UserEmail", "==", currentUser).get()
      const queryUser = userRef.docs.map(doc => doc.data())
      const companiesRef = await db.collection("Companies").get()
      const companies = companiesRef.docs.map(doc => doc.data())
      companies.map(c => console.log(c.id))
      console.log(companies)
    
  }


return (
  <div>
  </div>
)
}
export default FirebaseTest
