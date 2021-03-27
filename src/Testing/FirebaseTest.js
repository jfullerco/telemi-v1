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
    
      const userRef = await db.collection("Users").where("UserEmail", "==", "jonathan@jfuller.co").get()
      const queryUser = userRef.docs.map(doc => doc.data())
      const [{UserEmail}] = queryUser
      setUser(UserEmail)
  }

  const FetchCompanies = (user) => {
    const companiesRef = db.collection("Companies").where("Users", "array-contains", "jonathan@jfuller.co")
      
      const [companies] = useCollectionData(companiesRef, {idField: "id"})

      console.log(companies)
      return (
        <>{companies && companies.map(company => (<>{company.Name}</>))}</>
      )
  }
console.log(currentUser)

return (
  <div>
  <FetchCompanies />
  </div>
)
}
export default FirebaseTest
