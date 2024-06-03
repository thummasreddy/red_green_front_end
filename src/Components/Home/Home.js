import React, { useEffect, useState } from 'react';
import { FaTruck, FaLeaf, FaMedal, FaHeadset, FaAppleAlt, FaCarrot, FaSeedling, FaUtensils, FaUserAlt, FaUserTie, FaUserSecret, FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Home.css'; // Import the CSS file
import landingPageImage from '../Assets/Landing_Page.png'; // Import the image
import landingPageBackground from '../Assets/Landing_Page_bg.png';
import fruitsImg from '../Assets/fruits.jpg'; // Update with your actual image paths
import juicesImg from '../Assets/juices.jpg';
import driedImg from '../Assets/dried-fruits.jpg';
import vegetablesImg from '../Assets/vegetables.jpg';
import lentilsImg from '../Assets/Lentils.jpg'; // Import the Lentils image
import dealimage from '../Assets/dealimage.jpg'; // Import the deal image

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 365,
    hours: 7,
    minutes: 3,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newTime = { ...prevTime };

        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              newTime.hours = 23;
              if (newTime.days > 0) {
                newTime.days--;
              }
            }
          }
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const showSlide = (index) => {
    const slides = document.getElementsByClassName("testimonial-slide");
    const dots = document.getElementsByClassName("dot");

    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].classList.remove("active");
    }

    slides[index].style.display = "flex";
    dots[index].classList.add("active");
  };

  const currentSlide = (index) => {
    setCurrentSlideIndex(index);
    showSlide(index);
  };

  useEffect(() => {
    showSlide(currentSlideIndex);
    const autoSlide = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % 3);
      showSlide((currentSlideIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(autoSlide);
  }, [currentSlideIndex]);

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

      <div className="deal-container">
        <div className="deal-image">
          <img src={dealimage} alt="Fresh Vegetables" />
        </div>
        <div className="deal-content">
          <span className="deal-subtitle">Best Price For You</span>
          <h1 className="deal-title">Deal of the day</h1>
          <p className="deal-description">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          <h2 className="deal-product">Spinach</h2>
          <p className="deal-price">$10 <span className="deal-discount">now $5 only</span></p>
          <div className="deal-timer">
            <div className="deal-timer-unit">
              <span id="days" className="deal-timer-value">{timeLeft.days}</span>
              <span className="deal-timer-label">DAYS</span>
            </div>
            <div className="deal-timer-unit">
              <span id="hours" className="deal-timer-value">{timeLeft.hours}</span>
              <span className="deal-timer-label">HOURS</span>
            </div>
            <div className="deal-timer-unit">
              <span id="minutes" className="deal-timer-value">{timeLeft.minutes}</span>
              <span className="deal-timer-label">MINUTES</span>
            </div>
            <div className="deal-timer-unit">
              <span id="seconds" className="deal-timer-value">{timeLeft.seconds}</span>
              <span className="deal-timer-label">SECONDS</span>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-section">
        <h3 className="testimonial-heading">Testimony</h3>
        <h2 className="testimonial-title">Our satisfied customer says</h2>
        <p className="testimonial-description">
        Hyderabad's heart beats with fresh, local produce. Find nature's bounty delivered straight from nearby farms.
        </p>

        <div className="testimonial-slider">
          <div className="testimonial-slide active">
            <FaUserAlt className="testimonial-icon" />
            <p className="testimonial-quote">
            Hyderabad's heart beats with fresh, local produce. Find nature's bounty delivered straight from nearby farms.
            </p>
            <h4 className="testimonial-name">Mary</h4>
            <p className="testimonial-role">Home Maker</p>
          </div>
          <div className="testimonial-slide">
            <FaUserTie className="testimonial-icon" />
            <p className="testimonial-quote">
            Hyderabad's heart beats with fresh, local produce. Find nature's bounty delivered straight from nearby farms.
            </p>
            <h4 className="testimonial-name">Reddy</h4>
            <p className="testimonial-role">Restaurant Owner</p>
          </div>
          <div className="testimonial-slide">
            <FaUserSecret className="testimonial-icon" />
            <p className="testimonial-quote">
            Hyderabad's heart beats with fresh, local produce. Find nature's bounty delivered straight from nearby farms.
            </p>
            <h4 className="testimonial-name">Aaradhya</h4>
            <p className="testimonial-role"></p>
          </div>
        </div>

        <div className="testimonial-dots">
          <span className="dot active" onClick={() => currentSlide(0)}></span>
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
        </div>

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

      </div>
    </div>

    
  );
};

export default Home;
