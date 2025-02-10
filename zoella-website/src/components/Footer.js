import React from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebook, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram,
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt 
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Company Info */}
        <div className="footer-section company-info">
          <h2>Zoella Marketing & Infra Solution</h2>
          {/* <p>Delivering excellence in industrial solutions, corporate gifting, and procurement services.</p> */}
          <p><FaMapMarkerAlt /> C-195, Sector 37, Greater Noida, UP-201308</p>
          <p><FaEnvelope /> <a href="mailto:info@zoeindia.com">info@zoeindia.com</a></p>
          <p><FaPhoneAlt /> <a href="tel:+919540918261">+91-9540918261</a></p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/corporate-gifting">Corporate Gifting</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

       

        {/* Social Media */}
<div className="footer-section">
  <h3>Follow Us</h3>
  <div className="social-icons">
    <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
    <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a> {/* Instagram Added */}
  </div>
</div>



         {/* Newsletter */}
         <div className="footer-section">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get updates on our latest offers, services, and corporate solutions.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Zoella Marketing & Infra Solution. All rights reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
