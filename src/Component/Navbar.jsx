import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="nav-logo">Form App</h2>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Form</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
