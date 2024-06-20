import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import { createBrowserRouter } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="src/pic/logo.png" className='logo' alt="" />
      </div>
      
      <ul className='lin'>
       <NavLink className={(e)=>{ return e.isActive?"isRed" : ""}}   to="/"> <li>Home</li></NavLink>
       <NavLink  className={(e)=>{ return e.isActive?"isRed" : ""}} to="/Shop"> <li>Shop</li></NavLink>
       <NavLink className={(e)=>{ return e.isActive?"isRed" : ""}}  to="/g"> <li>Blog</li></NavLink>
       <NavLink  className={(e)=>{ return e.isActive?"isRed" : ""}} to="/Contact"> <li>Contact Us</li></NavLink>
      </ul> 
      <div><button>
        sd
      </button></div>
    </nav>
    
  )
}

export default Navbar
