import React from 'react'

// importing my footer component in navbar componet 
import Footer from './footer'
const navbar = () => {
  return (
    <div>
      <ul>
        <li>Home </li>
        <li>About us </li>
        <li>Contact us</li>
      </ul>

       <Footer logotext="hey this is navbar footer which is gettting change using props" />

    </div>
  )
}

export default navbar
