import React, { useEffect, useState } from "react";
import "./CorporateGifting.css";
import giftImage from "../images/gifting/occasiongift.jpg";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";


const brands = [
  { logo: "amazon.png", name: "Amazon Pay", description: "Gift Card for Purchase" },
  { logo: "3m.png", name: "3M", description: "Safety Kit" },
  { logo: "voltas.png", name: "Voltas", description: "Air Conditioner, Water Dispenser" },
  { logo: "bluestar.png", name: "Blue Star", description: "Air Conditioner, Water Dispenser" },
  { logo: "samsung.png", name: "Samsung", description: "Phones, Tablets, LED TV" },
  { logo: "lg.png", name: "LG", description: "Microwave Oven, Refrigerator, LED TV" },
  { logo: "usha.png", name: "Usha", description: "Fans, Induction, Irons" },
  { logo: "google.png", name: "Google", description: "Google Home Mini" },
  { logo: "amazon-alexa.png", name: "Amazon", description: "Amazon Alexa" },
  { logo: "haier.png", name: "Haier", description: "Air Conditioner, Refrigerator" },
  { logo: "portronics.png", name: "Portronics", description: "Speaker, Power Banks, USB Cables" },
  { logo: "hitachi.png", name: "Hitachi", description: "Air Conditioner" },
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
              <img src={`/images/${brand.logo}`} alt={brand.name} className="brand-logo" />
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
          <img src="/images/backpack.png" alt="Backpacks, Laptop Bags, Luggage Bags" className="product-image" />
          <p className="product-name">Backpacks, Laptop Bags, Luggage Bags</p>
        </div>
        <div className="product-card">
          <img src="/images/dry-fruits.png" alt="Dry Fruits, Sweets" className="product-image" />
          <p className="product-name">Dry Fruits, Sweets</p>
        </div>
        <div className="product-card">
          <img src="/images/keychain.png" alt="KeyChains" className="product-image" />
          <p className="product-name">KeyChains</p>
        </div>
        <div className="product-card">
          <img src="/images/power-bank.png" alt="Power Banks" className="product-image" />
          <p className="product-name">Power Banks</p>
        </div>
        <div className="product-card">
          <img src="/images/sipper.png" alt="Sippers" className="product-image" />
          <p className="product-name">Sippers</p>
        </div>
        <div className="product-card">
          <img src="/images/pen-drive.png" alt="Pen Drives, Hard Drives" className="product-image" />
          <p className="product-name">Pen Drives, Hard Drives</p>
        </div>
        <div className="product-card">
          <img src="/images/stationery.png" alt="Pens, Stationery" className="product-image" />
          <p className="product-name">Pens, Stationery</p>
        </div>
        <div className="product-card">
          <img src="/images/tshirt.png" alt="T-Shirts" className="product-image" />
          <p className="product-name">T-Shirts</p>
        </div>
        <div className="product-card">
          <img src="/images/calendar.png" alt="Calendar, Diary" className="product-image" />
          <p className="product-name">Calendar, Diary</p>
        </div>
        <div className="product-card">
          <img src="/images/wearables.png" alt="Wearables" className="product-image" />
          <p className="product-name">Wearables</p>
        </div>
        <div className="product-card">
          <img src="/images/bluetooth.png" alt="Bluetooth Speakers" className="product-image" />
          <p className="product-name">Bluetooth Speakers</p>
        </div>
        <div className="product-card">
          <img src="/images/kitchen.png" alt="Kitchen Utilities" className="product-image" />
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
