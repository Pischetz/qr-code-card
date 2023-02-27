import { useState } from 'react'
import QRcode from './assets/image-qr-code.png'
import './App.css'

function App() {

  return (
    <div className="main">
      <div className='container'>
        <img src={QRcode} alt="QR Code" />
        <div className="card-content">
          <h1>Improve your front-end skills by building projects</h1>
          <h5>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</h5>
        </div>
      </div>
    </div>
  )
}

export default App
