import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav>
          <div className='menubar'>
          <Link to="/"className='nav-link'>Home</Link>
          <Link to="/blog"className='nav-link'>Todo App</Link>
          <Link to="/about"className='nav-link'>Cuntry App</Link>
          <Link to="/product"className='nav-link'>Product</Link>

          </div>
       
        </nav>
        )
}

export default Navbar