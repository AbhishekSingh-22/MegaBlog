import React from 'react'
import logo from '../assets/brieflyFull.png'  // adjust path as needed

function Logo({ width = '100px' }) {
  return (
    <div>
      <img src={logo} alt="Logo" style={{ width }} />
    </div>
  )
}

export default Logo
