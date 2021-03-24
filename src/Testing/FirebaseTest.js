import React from "react"
import {db} from '../firebase'

function FirebaseTest() {
  const data = db.collection("Companies").get()
  console.log(data)

return (
  <div>a</div>
)
}
export default FirebaseTest
