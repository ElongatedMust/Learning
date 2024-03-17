import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import About from './About';
import './Header.css';


function Header() {
  return (
    <div>
     
      
      <nav>
        <ul className='headernav' >
          <li>
            <NavLink to="/" activeClassName="active" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" activeClassName="active" className="nav-link">
              About
            </NavLink>
          </li>
        </ul>
      </nav>

      
    </div>
  )
}

export default Header;
