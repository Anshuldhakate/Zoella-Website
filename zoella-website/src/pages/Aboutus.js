import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Aboutus.css";
import {
  FaHistory,
  FaBullseye,
  FaUsers,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";

const About = () => {

    useEffect(() => {
        const timelineItems = document.querySelectorAll(".timeline-item");
    
        const handleScroll = () => {
          timelineItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
              item.classList.add("visible");
            }
          });
        };
    
        window.addEventListener("scroll", handleScroll);
        handleScroll();
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);




  return (
    <div className="about-page">

            {/* Hero Section */}
        <section className="about-hero">
        <div className="about-hero-content">
            <h1>About <span>Zoella</span></h1>
            <p>Delivering excellence in industrial solutions and corporate gifting since inception.</p>

            <p>
            At Zoella, we are committed to providing high-quality industrial supplies, electricals, 
            office essentials, and customized corporate gifting solutions. Our expertise lies in 
            ensuring seamless procurement processes for manufacturers, offices, and retailers, 
            helping businesses optimize their supply chain.
            </p>

        </div>
        </section>


      {/* Company Story Section */}
      <section className="company-story">
      <h2>Our Journey</h2>
      <div className="timeline">
        <div className="timeline-line"></div>

        <div className="timeline-item">
          <FaHistory className="timeline-icon" />
          <div className="timeline-content">
            <h3>Founded in 2015</h3>
            <p>Zoella was established with a mission to provide high-quality industrial solutions.</p>
          </div>
        </div>

        <div className="timeline-item">
          <FaBullseye className="timeline-icon" />
          <div className="timeline-content">
            <h3>Expansion & Growth</h3>
            <p>We expanded into multiple sectors, including corporate gifting & procurement.</p>
          </div>
        </div>

        <div className="timeline-item">
          <FaUsers className="timeline-icon" />
          <div className="timeline-content">
            <h3>1000+ Happy Clients</h3>
            <p>Our commitment to quality and customer service has earned us a loyal clientele.</p>
          </div>
        </div>
      </div>
    </section>




      {/* Core Values Section */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <FaLightbulb className="value-icon" />
            <h3>Innovation</h3>
            <p>We embrace new ideas to deliver top-notch solutions.</p>
          </div>
          <div className="value-card">
            <FaHandshake className="value-icon" />
            <h3>Integrity</h3>
            <p>Honesty and transparency define our business.</p>
          </div>
          <div className="value-card">
            <FaUsers className="value-icon" />
            <h3>Customer Focus</h3>
            <p>We prioritize customer satisfaction above everything.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="about-cta">
        <h2>Ready to Work With Us?</h2>
        <p>Join hands with Zoella and experience the best in industrial solutions and gifting.</p>
        <Link to="/contact" className="btnabout">Get in Touch</Link>
      </section>
    </div>
  );
};

export default About;
