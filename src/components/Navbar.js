import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">My App</h1>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              end
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/salary" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Salary
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/jokes" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Jokes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/task" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Tasks
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 