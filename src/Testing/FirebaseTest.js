import React, {useEffect, useState, useRef} from "react"
import {db} from '../firebase'
import {useAuth} from '../Contexts/AuthContext'

import {useCollectionData} from 'react-firebase-hooks/firestore'

const FirebaseTest = () => {
  const [user, setUser] = useState("jonathan@jfuller.co")
  const {currentUser} = useAuth()

  useEffect(() => {
    
    fetchUsers()
    
    
  },[])
  
  const fetchUsers = async () => {
    
      const userRef = await db.collection("Companies").where("Users", "array-contains", "jonathan@jfuller.co").get()
      const queryUser = await userRef.docs.map(doc => ({id: doc.id, ...doc.data()}))
      

      console.log(queryUser[0])
  }

  const FetchCompanies = (user) => {
    const companiesRef = db.collection("Companies").where("UsersAllowed", "array-contains", "jonathan@jfuller.co")
      
      const [companies] = useCollectionData(companiesRef, {idField: "id"})

      console.log(companies)
      return (
        <></>
      )
  }
console.log(currentUser)

return (
  <div>
  
  </div>
)
}
export default FirebaseTest
