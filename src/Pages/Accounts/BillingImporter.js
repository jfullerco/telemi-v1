import React, {useState, useEffect} from 'react'
import Tesseract from 'tesseract.js'


const BillingImporter = () => {
  
  const getImage = () => {
    const billImport = new Image
    billImport.crossOrigin ="Anonymous"
    billImport.src = "https://tiems-d1ca.restdb.io/media/604a2da2f9c7885d00003ccb?key=124444446251511451854"
    return billImport
  }
  const bill = getImage()

  const processImage = () => {
    Tesseract.recognize(bill)
      .then(console.log())
  }
  useEffect(() => {
    processImage()
  })
  const [ocr, setOcr] = useState('Recognizing...')
  
  return (
    <div>
    
    </div>
  )
}
export default BillingImporter