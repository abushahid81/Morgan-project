import React from 'react'
import { Link } from 'react-router-dom';



const Header = () => {
  return (
  <nav>
    <ul>
        <li>
            <Link to="/Home">Home</Link> 
        </li>
        <li>
            <Link to="/About">About</Link> 
        </li>
        <li>
            <Link to="/Blog">Blog</Link> 
        </li>
        <li>
            <Link to="/Contact">Contact</Link> 
        </li>
        <li>
            <Link to="/Service">Service</Link> 
        </li>
       
    </ul>
  </nav>
  )
}

export default Header
