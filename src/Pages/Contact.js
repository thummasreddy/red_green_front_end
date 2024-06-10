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
          <p>198 West 21th Street, Suite 721 New York NY 10016</p>
        </div>
        <div className="contact-info-item-modern">
          <h4>Phone:</h4>
          <p>+ 1235 2355 98</p>
        </div>
        <div className="contact-info-item-modern">
          <h4>Email:</h4>
          <p>info@yoursite.com</p>
        </div>
        <div className="contact-info-item-modern">
          <h4>Website:</h4>
          <p>yoursite.com</p>
        </div>
      </div>
      <div className="contact-form-map-modern">
        <div className="contact-map-modern">
          <iframe
            title="Google Maps"
            className="google-map-modern"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7845062146216!2d-73.99332488428626!3d40.74296287932844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18b32717%3A0x1a045a2c1a8c5e7!2s198%20W%2021st%20St%2C%20New%20York%2C%20NY%2010011%2C%20USA!5e0!3m2!1sen!2sin!4v1614628843646!5m2!1sen!2sin"
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
