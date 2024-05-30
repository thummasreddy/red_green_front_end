import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/r_g_logo_01.png';
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
          className={`nav-item ${activeMenu === "about" ? "active" : ""}`} 
          onClick={() => handleMenuClick("about")}
        >
          <Link to='/about'>About</Link>
        </li>
        <li 
          className={`nav-item ${activeMenu === "blog" ? "active" : ""}`} 
          onClick={() => handleMenuClick("blog")}
        >
          <Link to='/blog'>Blog</Link>
        </li>

        <li 
          className={`nav-item ${activeMenu === "contact" ? "active" : ""}`} 
          onClick={() => handleMenuClick("contact")}
        >
          <Link to='/contact'>Contact</Link>
        </li>

        </ul>

      <div className="search">
        <input type="text" placeholder="Search for products"/>
        <button className="btn btn-primary" type="button">Search</button>
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
