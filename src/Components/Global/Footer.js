// Footer.js
import React from 'react';
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../Global/Footer.css';


const Footer = () => {
  return (
    <footer>
      <div className="newsletter">
          <h2>Subscribe to our Newsletter</h2>
          <p>Get e-mail updates about our latest shops and special offers</p>
          <form>
              <input type="email" placeholder="Enter email address" />
              <button type="submit">Subscribe</button>
          </form>
      </div>

      <div className="footer-content">
          <div className="footer-section about">
              <h3>The Green Grocer</h3>
              <p>In the bustling heart of Hyderabad, India, amidst the vibrant energy and rich culture, lies a haven for fresh, local produce. Here, you'll find a bounty of nature's finest offerings, delivered straight from the farms that surround this dynamic city.</p>
              <div className="socials">
                  <a href="#"><FaTwitterSquare /></a>
                  <a href="#"><FaFacebookSquare /></a>
                  <a href="#"><FaInstagramSquare /></a>
              </div>
          </div>

          <div className="footer-section menu">
              <h3>Menu</h3>
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Shop</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
          </div>

          <div className="footer-section help">
              <h3>Help</h3>
              <ul>
                  <li><a href="#">Shipping Information</a></li>
                  <li><a href="#">Returns & Exchange</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
              </ul>
          </div>

          <div className="footer-section contact">
              <h3>Have a Question?</h3>
              <p><FaMapMarkerAlt />Hyderabad, Telangana, India</p>
              <p><FaPhoneAlt />+91 9999888899</p>
              <p><FaEnvelope />info@redandgreen.com</p>
          </div>
      </div>

      <div className="footer-bottom">
          <p>© 2024 All rights reserved | This template is made with <span>&hearts;</span> by Red And Green</p>
      </div>
    </footer>
  );
};

export default Footer;
