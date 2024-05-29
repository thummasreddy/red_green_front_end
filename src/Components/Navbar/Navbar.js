import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/r_g_logo_01.png';
import basket from '../Assets/Icons/basket.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("shop");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsMobileMenuOpen(false); // Close mobile menu on item click
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="Logo"/>
      </div>
      <ul className={`nav-menu ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
        <li 
          className={`nav-item ${activeMenu === "home" ? "active" : ""}`} 
          onClick={() => handleMenuClick("home")}
        >
          <Link to='/'>Home</Link>
        </li>
        <li 
          className={`nav-item ${activeMenu === "shop" ? "active" : ""}`} 
          onClick={() => handleMenuClick("shop")}
        >
          <Link to='/shop'>Shop</Link>
        </li>
        <li 
          className={`nav-item ${activeMenu === "vegetables" ? "active" : ""}`} 
          onClick={() => handleMenuClick("vegetables")}
        >
          <Link to='/vegetables'>Vegetables</Link>
        </li>
        <li 
          className={`nav-item ${activeMenu === "fruits" ? "active" : ""}`} 
          onClick={() => handleMenuClick("fruits")}
        >
          <Link to='/fruits'>Fruits</Link>
        </li>
      </ul>

      <div className="search">
        <input type="text" placeholder="Search for products"/>
        <button className="btn btn-primary" type="button">Search</button>
      </div>

      <div className="nav-signup-basket">
        <Link to='/signup'><button className="btn">Sign Up</button></Link> 
        <Link to='/cart'><img src={basket} alt="Basket" className="basket-icon"/></Link>
        <div className="nav-basket-count">0</div>
      </div>

      <button className="hamburger" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
    </div>
  );
}

export default Navbar;
