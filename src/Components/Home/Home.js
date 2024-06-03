import React from 'react';
import { FaTruck, FaLeaf, FaMedal, FaHeadset, FaAppleAlt, FaCarrot, FaSeedling, FaUtensils } from 'react-icons/fa';
import './Home.css'; // Import the CSS file
import landingPageImage from '../Assets/Landing_Page.png'; // Import the image
import landingPageBackground from '../Assets/Landing_Page_bg.png';
import fruitsImg from '../Assets/fruits.jpg'; // Update with your actual image paths
import juicesImg from '../Assets/juices.jpg';
import driedImg from '../Assets/dried-fruits.jpg';
import vegetablesImg from '../Assets/vegetables.jpg';
import lentilsImg from '../Assets/Lentils.jpg'; // Import the Lentils image

const Home = () => {
  return (
    <div>
      <div className='home-container'>
        <img src={landingPageBackground} alt="Background" className='home-background-image' />
        <h3 className='home-title-small'>We Supply Fresh Fruits and Vegetables</h3>
        <h2 className='home-title-large'>Fresh From Our Farms</h2>
        <img src={landingPageImage} alt="Landing Page" className='home-image' />
        <div className='home-text'>
          <p>Discover the joy of farm-fresh goodness, delivered straight to your table from local fields. Experience vibrant colors, crisp textures, and rich flavors in every bite. By choosing locally sourced produce, you support community farmers and contribute to a sustainable economy. Embrace the difference of truly fresh ingredients in your meals and feel good about nourishing your body and your community, one delicious bite at a time.</p>
          <button className='home-shop-now-btn'>Shop Now</button>
        </div>
        <div className='home-footer'>
          <h4>Get 25% Off on your first Purchase!</h4>
        </div>
      </div>

      <div className="features-container">
      <div className="feature">
        <FaTruck className="feature-icon" />
        <h3>FREE SHIPPING</h3>
        <p>ON ORDER OVER $100</p>
      </div>
      <div className="feature">
        <FaLeaf className="feature-icon" />
        <h3>ALWAYS FRESH</h3>
        <p>PRODUCT WELL PACKAGE</p>
      </div>
      <div className="feature">
        <FaMedal className="feature-icon" />
        <h3>SUPERIOR QUALITY</h3>
        <p>QUALITY PRODUCTS</p>
      </div>
      <div className="feature">
        <FaHeadset className="feature-icon" />
        <h3>SUPPORT</h3>
        <p>24/7 SUPPORT</p>
      </div>
    </div>

      <div className="produce-container">
        <div className="produce-header">
          <h2 className="produce-title">Healthy Harvest</h2>
          <p className="produce-subtitle">Protect the health of every home</p>
          
        </div>
        <div className="produce-grid">
          <div className="produce-item fruits">
            <img src={fruitsImg} alt="Fruits" className="produce-image" />
            <div className="produce-label">
              <FaAppleAlt />
              <span>Fruits</span>
            </div>
          </div>
          <div className="produce-item juices">
            <img src={juicesImg} alt="Juices" className="produce-image" />
            <div className="produce-label">
              <FaLeaf />
              <span>Juices</span>
            </div>
          </div>
          <div className="produce-item vegetables">
            <img src={vegetablesImg} alt="Vegetables" className="produce-image" />
            <div className="produce-label">
              <FaCarrot />
              <span>Vegetables</span>
            </div>
          </div>
          <div className="produce-item lentils">
            <img src={lentilsImg} alt="Lentils" className="produce-image" />
            <div className="produce-label">
              <FaUtensils />
              <span>Lentils</span>
            </div>
          </div>
          <div className="produce-item dried">
            <img src={driedImg} alt="Dried" className="produce-image" />
            <div className="produce-label">
              <FaSeedling />
              <span>Dried</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
