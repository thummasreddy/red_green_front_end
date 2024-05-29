import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/r_g_logo_01.png';
import basket from '../Assets/Icons/basket.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("shop");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsMobileMenuOpen(false); // Close mobile menu on item click
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
          onClick={toggleDropdown}
        >
          Shop by Category
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => handleMenuClick("category1")}>
                <Link to='/category1'>Category 1</Link>
              </li>
              <li onClick={() => handleMenuClick("category2")}>
                <Link to='/category2'>Category 2</Link>
              </li>
              <li onClick={() => handleMenuClick("category3")}>
                <Link to='/category3'>Category 3</Link>
              </li>
              <li onClick={() => handleMenuClick("category4")}>
                <Link to='/category4'>Category 4</Link>
              </li>
              <li onClick={() => handleMenuClick("category5")}>
                <Link to='/category5'>Category 5</Link>
              </li>
            </ul>
          )}
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
