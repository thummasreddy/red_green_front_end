import React from 'react';
import Footer from '../Components/Global/Footer';
import '../Components/Styles/Contact.css'; // Ensure the file name matches the case exactly
import contactBannerImage from '../Components/Assets/Products/Banners/Contact-Banner.jpg';

const Contact = () => {
  return (
    <div className="contact-container-modern">
      <div className="contact-banner-modern" style={{ backgroundImage: `url(${contactBannerImage})` }}>
        <div className="contact-banner-content-modern">
          <p>HOME / CONTACT US</p>
          <h1>CONTACT US</h1>
        </div>
      </div>
      <div className="contact-info-modern">
        <div className="contact-info-item-modern">
          <h4>Address:</h4>
          <p>Bala Nilayam, Hyderabad, 400058</p>
        </div>
        <div className="contact-info-item-modern">
          <h4>Phone:</h4>
          <p>+91 9876543210</p>
        </div>
        <div className="contact-info-item-modern">
          <h4>Email:</h4>
          <p>info@rg.com</p>
        </div>
        <div className="contact-info-item-modern">
          <h4>Website:</h4>
          <p>rg.com</p>
        </div>
      </div>
      <div className="contact-form-map-modern">
        <div className="contact-map-modern">
          <iframe
            title="Google Maps"
            className="google-map-modern"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0322148679047!2d78.37638671431962!3d17.4873409880178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb94236c94b7a1%3A0xc8a3f6f1b1a9a5bb!2sHyderabad%2C%20Telangana%20500048%2C%20India!5e0!3m2!1sen!2sin!4v1614628843646!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-form-modern">
          <input type="text" placeholder="Your Name" className="contact-input-modern" />
          <input type="email" placeholder="Your Email" className="contact-input-modern" />
          <input type="text" placeholder="Subject" className="contact-input-modern" />
          <textarea placeholder="Message" className="contact-textarea-modern"></textarea>
          <button className="contact-button-modern">Send Message</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
