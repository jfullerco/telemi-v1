import React, {useEffect, useState} from "react"
import {db} from '../firebase'
import {useAuth} from '../Contexts/AuthContext'

const FirebaseTest = () => {
  const [user, setUser] = useState([])
  const {currentUser} = useAuth()
  useEffect(() => {
      const fetchData = async () => {
      const data = await db.collection("Users").get()
      setUser(data.docs.map(doc => doc.data.UserEmail == currentUser.data.email))
    }
    fetchData()
  },[])
  

return (
  <div>
  </div>
)
}
export default FirebaseTest
