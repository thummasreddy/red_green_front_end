import React from 'react';
import './Home.css'; // Import the CSS file
import landingPageImage from '../Assets/Landing_Page.png'; // Import the image
import landingPageBackground from '../Assets/Landing_Page_bg.png';

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
    </div>
  );
}

export default Home;
