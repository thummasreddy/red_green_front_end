import React from 'react';
import './Home.css';
import landingPageImage from '../Assets/Landing_Page.png'; // Import the image

const Home = () => {
  return (
    <div className='home'>
      <img src={landingPageImage} alt="Landing Page" />
      <div>
        <h3>We Supply Fresh Fruits and Vegetables</h3>
        <h2>Fresh From Our Farms</h2>
        <p>Dive into a world of farm-fresh goodness. From the fields straight to your table, discover the joy of locally sourced produce delivered right to your doorstep. Join us in supporting local farmers and savoring the taste of freshness, one bite at a time.</p>
        <button className='shop-now-btn'>Shop Now</button>
      </div>
      <div className='home-footer'>
        <h4>Get 25% Off on your first Purchase!</h4>
      </div>
    </div>
  );
}

export default Home;
