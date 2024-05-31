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
      <div className='navbar-logo'>
        <img src={logo} alt="Logo"/>
      </div>
      <ul className={`navbar-menu ${isMobileMenuOpen ? 'navbar-mobile-menu' : ''}`}>
        <li 
          className={`navbar-item ${activeMenu === "home" ? "navbar-active" : ""}`} 
          onClick={() => handleMenuClick("home")}
        >
          <Link to='/'>Home</Link>
        </li>
        <li 
          className={`navbar-item ${activeMenu === "shop" ? "navbar-active" : ""}`} 
          onClick={() => handleMenuClick("shop")}
        >
          <Link to='/shop'>Shop</Link>
        </li>
        <li 
          className={`navbar-item ${activeMenu === "about" ? "navbar-active" : ""}`} 
          onClick={() => handleMenuClick("about")}
        >
          <Link to='/about'>About</Link>
        </li>
        <li 
          className={`navbar-item ${activeMenu === "blog" ? "navbar-active" : ""}`} 
          onClick={() => handleMenuClick("blog")}
        >
          <Link to='/blog'>Blog</Link>
        </li>
        <li 
          className={`navbar-item ${activeMenu === "contact" ? "navbar-active" : ""}`} 
          onClick={() => handleMenuClick("contact")}
        >
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>

      <div className="navbar-search">
       
        <Link to="/login"> {/* Navigate to Login page */}
          <button className="navbar-btn-login" type="button">Login</button> {/* Login button */}
        </Link>
      </div>
      
      <button className="navbar-hamburger" onClick={toggleMobileMenu}>
        <div className="navbar-bar"></div>
        <div className="navbar-bar"></div>
        <div className="navbar-bar"></div>
      </button>
    </div>
  );
}

export default Navbar;
