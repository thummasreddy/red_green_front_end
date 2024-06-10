import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/r_g_logo_01.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("shop");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt="Logo" />
      </div>
      <ul className={`navbar-menu ${isMobileMenuOpen ? 'navbar-mobile-menu' : ''}`}>
        {['home', 'shop', 'about', 'blog', 'contact'].map((menu) => (
          <li
            key={menu}
            className={`navbar-item ${activeMenu === menu ? 'navbar-active' : ''}`}
            onClick={() => handleMenuClick(menu)}
          >
            <Link to={`/${menu === 'home' ? '' : menu}`}>{menu.charAt(0).toUpperCase() + menu.slice(1)}</Link>
          </li>
        ))}
      </ul>
      <div className="navbar-search">
        <form action="/search" method="get">
          <label htmlFor="search" className="navbar-search-label"></label>
          <input
            type="text"
            id="search"
            name="search"
            value={searchQuery}
            onChange={handleSearchChange}
            autoComplete="off"
            className="navbar-search-input"
            placeholder="Search..."
          />
          <button type="submit" className="navbar-search-btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <ul id="suggestions" className="navbar-suggestions"></ul>
        </form>
        <Link to="/login">
          <button className="navbar-btn-login" type="button">Login</button>
        </Link>
      </div>
      <button className="navbar-hamburger" onClick={toggleMobileMenu} aria-label="Toggle menu">
        <div className="navbar-bar"></div>
        <div className="navbar-bar"></div>
        <div className="navbar-bar"></div>
      </button>
    </nav>
  );
};

export default Navbar;
