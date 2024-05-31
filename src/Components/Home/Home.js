import React from 'react';
import './Home.css';
import landingPageImage from '../Assets/Landing_Page.png'; // Import the image

const Home = () => {
  return (
    <div className='home-container'>
      <h3 className='home-title-small'>We Supply Fresh Fruits and Vegetables</h3>
      <h2 className='home-title-large'>Fresh From Our Farms</h2>
      <img src={landingPageImage} alt="Landing Page" className='home-image' />
      <div className='home-text'>
        <p>Dive into a world of farm-fresh goodness. From the fields straight to your table, discover the joy of locally sourced produce delivered right to your doorstep. Join us in supporting local farmers and savoring the taste of freshness, one bite at a time.</p>
        <button className='home-shop-now-btn'>Shop Now</button>
      </div>
      <div className='home-footer'>
        <h4>Get 25% Off on your first Purchase!</h4>
      </div>
    </div>
  );
}

export default Home;
