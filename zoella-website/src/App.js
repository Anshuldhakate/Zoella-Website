import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/Aboutus';
import CorporateGifting from './pages/CorporateGifting';
import Services from './pages/Services';
import Contact from './pages/ContactUs';
import "./App.css"
import ScrollToTop from "./components/ScrollToTop"


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/corporate-gifting" element={<CorporateGifting />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
