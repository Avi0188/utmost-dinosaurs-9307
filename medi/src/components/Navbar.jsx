import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='link'>
        <h3>LifeLine</h3>
     <Link to="/">Home</Link>
     <Link to="/about">AboutUs</Link>
     <Link to="/services">Services</Link>
     <Link to="/pages">Pages</Link>
     <Link to="/cases">Cases</Link>
    </div>
  )
}

export default Navbar
