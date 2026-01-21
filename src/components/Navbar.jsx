import React from 'react'
import './styles/navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='navbar-left'>
        <h3>
          My Navbar
        </h3>
      </div>

      <div className="navbar-right">
        <Link to="/" >
          Accordion
        </Link>
        <Link to="/modal" >
          Modal
        </Link>
      </div>
    </nav>
  )
}

export default Navbar