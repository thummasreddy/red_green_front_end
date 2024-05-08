import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/r_g_logo_01.png';
import basket from '../Assets/Icons/basket.png';

const Navbar = () => {

  const [menu, setMenu] = useState ("shop")
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=""/>
      </div>
        <ul className="nav-menu">
          <li onClick={()=>{setMenu("home")}}>Home{menu==="home"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("about us")}}>About Us{menu==="about us"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("contact us")}}>Contact Us{menu==="contact us"?<hr/>:<></>}</li>
      </ul>

      <div className="search">
          <input type="text" placeholder="Search for products"/>
          <button className="btn btn-primary" type="button">Search</button>
        </div>

      <div className="nav-signup-basket">
        <button>SignUp</button>
        <img src= {basket} alt=""/>
        <div className="nav-basket-count">0</div>
      

      </div>
    </div>
  )
}

export default Navbar;
