import React from 'react';
import './Navbar.css';
import logo from '../Assets/r_g_logo_01.png'
import basket from '../Assets/Icons/basket.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=""/>
      </div>
      <div className="nav-menu">
        <div className="search">
          <input type="text" placeholder="Search for products"/>
          <button className="btn btn-primary" type="button">Search</button>
        </div>
      </div>
      <div className="nav-account">
        <button>Login</button>
        <button>SignUp</button>
        <div className="basket-box">
          <img src={basket} alt="Basket"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
