import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/r_g_logo_01.png';
import basket from '../Assets/Icons/basket.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("shop"); // Using more descriptive state name

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="Logo"/>
      </div>
      <ul className="nav-menu">
        <li onClick={() => handleMenuClick("home")}><Link to='/'> Home</Link>{activeMenu === "home" && <hr/>}</li>
        <li onClick={() => handleMenuClick("shop")}><Link to='/shop'> Shop</Link>{activeMenu === "shop" && <hr/>}</li>
        <li onClick={() => handleMenuClick("vegetables")}><Link to='/vegetables'> Vegetables</Link>{activeMenu === "vegetables" && <hr/>}</li>
        <li onClick={() => handleMenuClick("fruits")}><Link to='/fruits'> Fruits</Link>{activeMenu === "fruits" && <hr/>}</li>
      </ul>

      <div className="search">
        <input type="text" placeholder="Search for products"/>
        <button className="btn btn-primary" type="button">Search</button>
      </div>

      <div className="nav-signup-basket">
        <Link to='/signup'><button>SignUp</button></Link> 
        <Link to='/cart'><img src={basket} alt="Basket"/></Link>
        <div className="nav-basket-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
