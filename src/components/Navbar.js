import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <p><b>Note:</b> To best view the effect of lazy loading, go to developers tool-> Go to network tab-> And set throttling to <b>Slow 3G</b></p>
    </div>
  )
}

export default Navbar