import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'
export const NavBar = () => {

  return (
    
      <nav className='nav-bar'>
        <div className='container'>
          <div className='nav-bar-inner'>
            <h1>
              Company Logo
            </h1>
            <div>
              <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='products'>Products</NavLink></li>
                <li><NavLink to='about'>About</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default NavBar;