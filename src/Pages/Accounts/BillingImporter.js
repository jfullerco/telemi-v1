import React, {useState, useEffect} from 'react'
import {createWorker} from 'tesseract.js'
import {PDFtoIMG} from 'react-pdf-to-image'

const BillingImporter = () => {
  const worker = createWorker({
    logger: m => console.log(m)
  })
  const doOCR = async () => {
    await worker.load()
    await worker.loadLanguage('eng')
    await worker.initialize('eng')
    const {data: {text}} = await worker.recognize('https://tiems-d1ca.restdb.io/media/604a2da2f9c7885d00003ccb')
    setOcr(text)
  }
  const [ocr, setOcr] = useState('Recognizing...')
  useEffect(() => {
    doOCR()
  })
  return (
    <div>
    {ocr}
    </div>
  )
}
export default BillingImporter