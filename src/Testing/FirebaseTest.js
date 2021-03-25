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
    console.log(currentUser)
      const userRef = await db.collection("Users").where("UserEmail", "==", currentUser).get()
      const queryUser = userRef.docs.map(doc => doc.data())
      console.log(queryUser)
  }

console.log(user)
return (
  <div>
  </div>
)
}
export default FirebaseTest
