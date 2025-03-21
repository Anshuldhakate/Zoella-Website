import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import about from '../images/aboutus.jpg'
import contact from "../images/home/contact.jpg"
import {
  FaToolbox,
  FaLightbulb,
  FaGift,
  FaShieldAlt,
  FaBolt,
  FaWrench,
  FaDesktop,
  FaCut,
  FaTape,
  FaMicroscope,
} from "react-icons/fa";
import {
  FaBoxOpen,
  FaCogs,
  FaTags,
  FaHandshake,
} from "react-icons/fa";

import {
  FaStar,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";
import {
  FaMedal,
} from "react-icons/fa";


// Import brand logos
import amazon from "../images/home/amazon.jpg";
import google from "../images/home/google.jpg";
import samsung from "../images/home/Samsung-Logo.png";
import sony from "../images/home/sony.jpg";
import lg from "../images/home/lg.jpg";
import dell from "../images/home/Dell.jpg";
import apple from "../images/home/apple.jpg";
import lenovo from "../images/home/lenovo.jpg";

// Slick Slider Settings
const settings = {
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
  ],
};

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Zoella Marketing & Infra Solution</h1>
          <p>Your Trusted Partner for Industrial Solutions & Corporate Gifting</p>
          <Link to="/services" className="btnhome">Explore Services</Link>
        </div>
      </section>

      {/* About Zoella - Two Column Layout */}
<section className="about-preview">
  <div className="about-container">
    
    {/* Left Side - Image */}
    <div className="about-image">
      <img src={about} alt="About Zoella" />
    </div>

    {/* Right Side - Text Content */}
    <div className="about-content">
      <h2>Who We Are</h2>
      <p>
        Zoella Marketing & Infra Solution is a leading provider of **industrial supplies, 
        electricals, office essentials, and corporate gifting solutions**. We serve 
        multiple industries with high-quality, cost-effective products tailored to 
        their specific needs.
      </p>
      <p>
        With a wide range of products from **abrasives, adhesives, and fasteners** 
        to **solar solutions and safety gear**, we ensure smooth procurement for 
        manufacturers, offices, and retailers.
      </p>
      <Link to="/about" className="btn">Learn More</Link>
    </div>

  </div>
</section>


      {/* Services Overview */}
      <section className="services-overview">
      <div className="services-header">
        <h2>Explore Our Services</h2>
        <p>
          Discover our comprehensive range of products and solutions, tailored
          to meet all your industrial and corporate needs.
        </p>
      </div>

      <div className="service-grid">
        <div className="service-card abrassive">
          <div className="service-icon">
            <FaToolbox />
          </div>
          <h3>Abrasives</h3>
          <p>Premium quality abrasives for industrial applications.</p>
        </div>

        <div className="service-card tapes">
          <div className="service-icon">
            <FaTape />
          </div>
          <h3>Tapes, Adhesives & Sealants</h3>
          <p>Reliable sealing and bonding solutions for diverse needs.</p>
        </div>

        <div className="service-card safety">
          <div className="service-icon">
            <FaShieldAlt />
          </div>
          <h3>Safety</h3>
          <p>Comprehensive safety equipment to ensure protection.</p>
        </div>

        <div className="service-card fastners">
          <div className="service-icon">
            <FaBolt />
          </div>
          <h3>Fasteners</h3>
          <p>Strong and durable fasteners for every requirement.</p>
        </div>

        <div className="service-card ledLightning">
          <div className="service-icon">
            <FaLightbulb />
          </div>
          <h3>LED & Lighting</h3>
          <p>Energy-efficient lighting solutions for homes and offices.</p>
        </div>

        <div className="service-card measurement">
          <div className="service-icon">
            <FaMicroscope />
          </div>
          <h3>Power & Measurement Tools</h3>
          <p>Accurate and reliable tools for testing and measurement.</p>
        </div>

        <div className="service-card electricals">
          <div className="service-icon">
            <FaDesktop />
          </div>
          <h3>Electricals & Electronics</h3>
          <p>Modern electrical and electronic solutions for all needs.</p>
        </div>

        <div className="service-card cutting">
          <div className="service-icon">
            <FaCut />
          </div>
          <h3>Cutting Tools & Hand Tools</h3>
          <p>High-performance tools for precision and reliability.</p>
        </div>

        <div className="service-card itconsume">
          <div className="service-icon">
            <FaDesktop />
          </div>
          <h3>IT Consumables</h3>
          <p>Reliable IT products to support your technological needs.</p>
        </div>

      </div>

      <Link to="/services" className="view-all-btn">
        View All Services →
      </Link>
    </section>



    {/* Our Commitment Section */}
    <section className="commitment-section">
        <div className="commitment-container">
          <h2>Our Commitment to <span>Excellence</span></h2>
          <p className="commitment-intro">
            At Zoella, we stand for trust, innovation, and delivering exceptional value to our clients.  
          </p>
          <div className="commitment-grid">
            <div className="commitment-card">
              <FaStar className="commitment-icon" />
              <h3>Premium Quality</h3>
              <p>We ensure top-tier industrial and corporate solutions with a focus on reliability.</p>
            </div>
            <div className="commitment-card">
              <FaUsers className="commitment-icon" />
              <h3>Customer First</h3>
              <p>We prioritize client needs and customize our solutions accordingly.</p>
            </div>
            <div className="commitment-card">
              <FaShieldAlt className="commitment-icon" />
              <h3>Reliability & Trust</h3>
              <p>Decades of experience in delivering seamless procurement & gifting solutions.</p>
            </div>
            <div className="commitment-card">
              <FaGlobe className="commitment-icon" />
              <h3>Global Standards</h3>
              <p>Following industry best practices to bring you world-class service.</p>
            </div>
          </div>
          <Link to="/about" className="btn">Discover More</Link>
        </div>
      </section>

<hr className='line' />

      <section className="brands-section">
      <h2>Brands We Deal With</h2>
      <Slider {...settings} className="brands-carousel">
        {[amazon, google, samsung, sony, lg, dell, apple, lenovo].map((brand, index) => (
          <div className="brand-slide" key={index}>
            <img src={brand} alt={`Brand ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </section>


<hr className='line'/>


      {/* Our Values & Strengths Section */}
<section className="values-section">
        <div className="values-container">
          <div className="values-header">
            <h2>Our <span>Values & Strengths</span></h2>
            <p>
              We redefine excellence through our unwavering commitment to quality, innovation, and customer satisfaction.
            </p>
          </div>

          <div className="values-content">
            <div className="value-box one">
              <FaMedal className="value-icon" />
              <h3>Unmatched Quality</h3>
              <p>Only the finest materials and products for long-lasting performance.</p>
            </div>

            <div className="value-box two">
              <FaUsers className="value-icon" />
              <h3>Customer-Centric Approach</h3>
              <p>Your needs shape our solutions—tailored just for you.</p>
            </div>

            <div className="value-box three">
              <FaHandshake className="value-icon" />
              <h3>Strong Partnerships</h3>
              <p>We collaborate with top global brands for exceptional service.</p>
            </div>

            <div className="value-box four">
              <FaGlobe className="value-icon" />
              <h3>Global Reach</h3>
              <p>Expanding beyond boundaries to bring you the best solutions.</p>
            </div>
          </div>

          <div className="values-action">
            <Link to="/about" className="btn">Learn More</Link>
          </div>
        </div>
      </section>




     {/* Corporate Gifting Section */}
<section className="gifting-section">
  <div className="gifting-content">
    <h2>Exclusive Corporate Gifting</h2>
    <p>Discover a wide range of customizable gifting solutions for employees, clients, and partners.</p>
    <Link to="/corporate-gifting" className="btngift">Explore Gifting</Link>
  </div>
</section>







  {/* Why Choose Zoella Section */}
  <section className="why-choose">
        <div className="why-container">
          <div className="why-content">
            <h2>Why Choose <span>Zoella?</span></h2>
            <p>
              We provide high-quality, cost-effective industrial and corporate solutions tailored to your needs.
            </p>
            <div className="why-features">
              <div className="feature">
                <FaBoxOpen className="feature-icon" />
                <h3>200+ Products</h3>
                <p>Wide range of industrial supplies, office essentials, and gifting solutions.</p>
              </div>
              <div className="feature">
                <FaCogs className="feature-icon" />
                <h3>Customized Solutions</h3>
                <p>Tailored procurement and gifting options for businesses.</p>
              </div>
              <div className="feature">
                <FaTags className="feature-icon" />
                <h3>Best Market Price</h3>
                <p>We beat the competition with top-quality products at unbeatable prices.</p>
              </div>
              <div className="feature">
                <FaHandshake className="feature-icon" />
                <h3>Trusted Brands</h3>
                <p>Partnering with leading brands to bring you the best in every category.</p>
              </div>
            </div>
            <Link to="/about" className="btn">Learn More</Link>
          </div>
        </div>
      </section>


      

      {/* Contact Us Section */}
{/* <section className="contact-cta">
  <div className="contacts-container">

    <div className="contact-image">
      <img src={contact} alt="Contact Us" />
    </div>


    <div className="contact-forms">
      <h2>Get in Touch</h2>
      <p>Have a question? Need a customized solution? Contact us today by filling out the form below.</p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5" placeholder="Type your message" required></textarea>
        </div>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  </div>
</section> */}


<section className="home-cta">
      <h2>"Expert Services, Unmatched Customer Experience"</h2>
      <p>Your satisfaction is our mission—trust us to deliver excellence every time.</p>
      <Link to="/contact" className="btn-home">Get in Touch</Link>
    </section>




    </div>
  );
};

export default Home;
