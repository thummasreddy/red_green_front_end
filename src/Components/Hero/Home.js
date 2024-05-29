import React from 'react';
import './Home.css';
import landingPageImage from '../Assets/Landing_Page.png'; // Import the image

const Home = () => {
  return (
    <div className='home'>
      <div className='home-left'>
      </div>
      <div className='home-right'>
        <div className='hand-hand-icon'>
          </div>
        <h4>Get 25% Off on your first Purchase!</h4>
      </div>
      <div className='home-image'>
      <h3>We Supply Fresh Fruits and Vegetables</h3>
        <h2>Fresh From Our Farms</h2>
        <img src={landingPageImage} alt="Landing Page" />
        <p>Dive into a world of farm-fresh goodness. From the fields straight to your table, discover the joy of locally sourced produce delivered right to your doorstep. Join us in supporting local farmers and savoring the taste of freshness, one bite at a time.</p>
      </div>
    </div>
  );
}

export default Home;
