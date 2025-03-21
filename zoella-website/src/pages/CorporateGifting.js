import React, { useEffect, useState } from "react";
import "./CorporateGifting.css";
import giftImage from "../images/gifting/occasiongift.jpg";

import amazonpay from "../images/gifting/Amazon_Pay-Logo.wine.png"
import threeM from "../images/gifting/3M_wordmark.svg.png"
import voltas from "../images/gifting/voltas.jpg"
import bluestar from "../images/gifting/bluestar.png"
import samsung from "../images/gifting/Samsung_Logo.svg.png"
import lg from "../images/gifting/LG_symbol.svg.png"
import usha from "../images/gifting/USHA_Logo.pdf.jpg"
import google from "../images/gifting/google.png"
import amazon from "../images/gifting/amazon.png"
import haier from "../images/gifting/haeir.png"
import portronics from "../images/gifting/Portronics gadgets delhi.avif"
import hitachi from "../images/gifting/Hitachi-logo.jpg"

import bagpacks from "../images/gifting/bagpacks.jpg"
import dryfruit from "../images/gifting/dryfruits.jpg"
import keychain from "../images/gifting/keychains.jpg"
import powerbank from "../images/gifting/powerbank.jpg"
import sipper from "../images/gifting/sippers.jpg"
import pendrive from "../images/gifting/pendrives.jpg"
import stationery from "../images/gifting/pen.jpg"
import tshirt from "../images/gifting/tshirt.jpg"
import calender from "../images/gifting/diary.jpg"
import wearables from "../images/gifting/wearables.jpg"
import bluetooth from "../images/gifting/speakers.jpg"
import kitchen from "../images/gifting/kitchenutility.jpg"



const brands = [
  { logo: amazonpay, name: "Amazon Pay", description: "Gift Card for Purchase" },
  { logo: threeM, name: "3M", description: "Safety Kit" },
  { logo: voltas, name: "Voltas", description: "Air Conditioner, Water Dispenser" },
  { logo: bluestar, name: "Blue Star", description: "Air Conditioner, Water Dispenser" },
  { logo: samsung, name: "Samsung", description: "Phones, Tablets, LED TV" },
  { logo: lg, name: "LG", description: "Microwave Oven, Refrigerator, LED TV" },
  { logo: usha, name: "Usha", description: "Fans, Induction, Irons" },
  { logo: google, name: "Google", description: "Google Home Mini" },
  { logo: amazon, name: "Amazon", description: "Amazon Alexa" },
  { logo: haier, name: "Haier", description: "Air Conditioner, Refrigerator" },
  { logo: portronics, name: "Portronics", description: "Speaker, Power Banks, USB Cables" },
  { logo: hitachi, name: "Hitachi", description: "Air Conditioner" },
];


const CorporateGifting = () => {



  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = window.innerWidth >= 1024 ? 3 : 1; // 3 cards on web, 1 on mobile

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + cardsPerView) % brands.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [cardsPerView]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + cardsPerView) % brands.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - cardsPerView + brands.length) % brands.length);
  };







  return (
    <div>
      {/* Hero Section */}
      <div className="hero-container">
        <div className="hero-contents">
          {/* <img src="/images/zoella-logo.png" alt="Zoella Logo" className="logo" /> */}
          <h1>
            <span className="brand-name">Zo</span>ella
          </h1>
          <h2>Corporate Gifting Solution</h2>
          <div className="tagline">
            <p>The Perfect Gift for Every Occasion</p>
          </div>
          <button>Know More</button>
        </div>
      </div>






      <section className="gifting-container">
      <h2 className="gifting-title">
        Zoella Corporate Gifting Solution - GIFTING OCCASIONS
      </h2>
      <div className="gifting-text">
        <div className="gifting-image-container">
          <img src={giftImage} alt="Gifting Occasions" className="gifting-image" />
        </div>
        <div className="gifting-list">
          {/* Employee Gifting */}
          <div className="gifting-item">
            <span className="gifting-icon">👥</span>
            <div>
              <h3 className="gift-heading">Employee Gifting</h3>
              <p className="gift-description">Reward &amp; Recognition programs</p>
            </div>
          </div>
          {/* Channel Partner Gifting */}
          <div className="gifting-item" id="gift2">
            <span className="gifting-icon">🤝</span>
            <div>
              <h3 className="gift-heading">Channel Partner Gifting</h3>
              <p className="gift-description">Incentivize sellers &amp; Channel Partners</p>
            </div>
          </div>
          {/* Festive Gifting */}
          <div className="gifting-item">
            <span className="gifting-icon">🎄</span>
            <div>
              <h3 className="gift-heading">Festive Gifting</h3>
              <p className="gift-description">Festival &amp; annual gifting</p>
            </div>
          </div>
          {/* Customer Incentive */}
          <div className="gifting-item" id="gift4">
            <span className="gifting-icon">📢</span>
            <div>
              <h3 className="gift-heading">Customer Incentive</h3>
              <p className="gift-description">Promote products &amp; campaigns</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <div className="why-choose-us">
      <h2 className="heading">What Makes Us Unique?</h2>
      <div className="cards-container">
        <div className="card">Over 20L products available</div>
        <div className="card">Customizable solutions according to your needs</div>
        <div className="card">Best market price with ProcMart’s pricing</div>
        <div className="card">Flexible payment terms</div>
        <div className="card">Dedicated helpdesk for corporate clients</div>
      </div>
    </div>


    
    

    <div className="brands-section">
      <h2 className="brands-title">Brands We Deal With</h2>
      <div className="carousel-container">
        <button className="prev-btn" onClick={prevSlide}>&#10094;</button>
        
        <div className="brand-cards">
          {brands.slice(currentIndex, currentIndex + cardsPerView).map((brand, index) => (
            <div key={index} className="brand-card">
              <img src={brand.logo} alt={brand.name} className="brand-logo" />
              <h3 className="brandName">{brand.name}</h3>
              <p className="brand-description">{brand.description}</p>
            </div>
          ))}
        </div>

        <button className="next-btn" onClick={nextSlide}>&#10095;</button>
      </div>
    </div>




    <section className="custom-products-section">
      <h2 className="custom-title">Customizable Non-Branded Products</h2>
      <div className="custom-products-container">
        <div className="product-card">
          <img src={bagpacks} alt="Backpacks, Laptop Bags, Luggage Bags" className="product-image" />
          <p className="product-name">Backpacks, Laptop Bags, Luggage Bags</p>
        </div>
        <div className="product-card">
          <img src={dryfruit} alt="Dry Fruits, Sweets" className="product-image" />
          <p className="product-name">Dry Fruits, Sweets</p>
        </div>
        <div className="product-card">
          <img src={keychain} alt="KeyChains" className="product-image" />
          <p className="product-name">KeyChains</p>
        </div>
        <div className="product-card">
          <img src={powerbank} alt="Power Banks" className="product-image" />
          <p className="product-name">Power Banks</p>
        </div>
        <div className="product-card">
          <img src={sipper} alt="Sippers" className="product-image" />
          <p className="product-name">Sippers</p>
        </div>
        <div className="product-card">
          <img src={pendrive} alt="Pen Drives, Hard Drives" className="product-image" />
          <p className="product-name">Pen Drives, Hard Drives</p>
        </div>
        <div className="product-card">
          <img src={stationery} alt="Pens, Stationery" className="product-image" />
          <p className="product-name">Pens, Stationery</p>
        </div>
        <div className="product-card">
          <img src={tshirt} alt="T-Shirts" className="product-image" />
          <p className="product-name">T-Shirts</p>
        </div>
        <div className="product-card">
          <img src={calender} alt="Calendar, Diary" className="product-image" />
          <p className="product-name">Calendar, Diary</p>
        </div>
        <div className="product-card">
          <img src={wearables} alt="Wearables" className="product-image" />
          <p className="product-name">Wearables</p>
        </div>
        <div className="product-card">
          <img src={bluetooth} alt="Bluetooth Speakers" className="product-image" />
          <p className="product-name">Bluetooth Speakers</p>
        </div>
        <div className="product-card">
          <img src={kitchen} alt="Kitchen Utilities" className="product-image" />
          <p className="product-name">Kitchen Utilities</p>
        </div>
      </div>
    </section>






    <section className="value-proposition">
      <h2 className="vp-title">
        <span className="highlight">*</span> Value Proposition - Businesses
      </h2>
      <div className="vp-container">
        <div className="vp-card">
          <div className="vp-icon">🚚</div>
          <p className="vp-text">Instant delivery</p>
        </div>
        <div className="vp-card">
          <div className="vp-icon">✔️</div>
          <p className="vp-text">Quality Checks</p>
        </div>
        <div className="vp-card">
          <div className="vp-icon">🎁</div>
          <p className="vp-text">Customization of Gifting Solutions</p>
        </div>
        <div className="vp-card">
          <div className="vp-icon">🔘</div>
          <p className="vp-text">Freedom of choice</p>
        </div>
        <div className="vp-card">
          <div className="vp-icon">🔒</div>
          <p className="vp-text">Secure Process</p>
        </div>
        <div className="vp-card">
          <div className="vp-icon">📞</div>
          <p className="vp-text">Dedicated customer care number</p>
        </div>
        <div className="vp-card">
          <div className="vp-icon">🛍️</div>
          <p className="vp-text">Best Options in Market</p>
        </div>
        <div className="vp-card">
          <div className="vp-icon">📦</div>
          <p className="vp-text">Minimize procurement hassles</p>
        </div>
        <div className="vp-card">
          <div className="vp-icon">🛠️</div>
          <p className="vp-text">Product customization as per program</p>
        </div>
        <div className="vp-card">
          <div className="vp-icon">📩</div>
          <p className="vp-text">Easy access to tracking packages</p>
        </div>
      </div>
    </section>




    <section className="contact-section">
      <div className="contact-content">
        {/* Tagline */}
        <p className="contact-tagline">
          📢 "Let's Connect & Elevate Your Business – Reach Out Today!"
        </p>

  

        {/* CTA Button */}
        <button className="contact-btn">Get in Touch</button>
      </div>
    </section>
     
    </div>
  );
};

export default CorporateGifting;
