import { useState } from 'react'
import QRcode from './assets/image-qr-code.png'
import './App.css'

function App() {

  return (
    <div>
      <div className="container">
        <div className="qr-code">
          <img src={QRcode} alt="QR Code" />
        </div>
        <div className="card-content">
          <h1>Improve your front-end skills by building a projects</h1>
          <h5>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</h5>
        </div>
      </div>
    </div>
  )
}

export default App
