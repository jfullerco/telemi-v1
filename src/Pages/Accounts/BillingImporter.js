import React, {useState, useEffect} from 'react'
import Tesseract from 'tesseract.js'


const BillingImporter = () => {
  
  Tesseract.recognize('./billImage.pdf')
  .then(({data: {text}}) => {
    console.log(text)
  })
  const [ocr, setOcr] = useState('Recognizing...')
  
  return (
    <div>
    
    </div>
  )
}
export default BillingImporter