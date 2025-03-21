import React, { useState } from 'react';
import './ContactUs.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const getInTouch = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    if (!isChecked) {
      setErrorMessage('You must agree to the terms and conditions.');
      return;
    }

    setErrorMessage('');
    setLoading(true);

    try {
      const response = await fetch('https://zoella-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
          // window.location.href = '/';
        }, 60000);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
        setIsChecked(false);
      } else {
        setErrorMessage('Error submitting form. Try again.');
      }
    } catch (error) {
      setErrorMessage('Error submitting form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>Email, call, or complete the form to learn how we can help you.</p>
          <p><strong>Email:</strong> info@zoeindia.com</p>
          <p><strong>Phone:</strong> +91-9540918261</p>
        </div>

        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form onSubmit={getInTouch}>
            <div className="input-row">
              <input type="text" placeholder="First name" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
              <input type="text" placeholder="Last name" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
            </div>
            <div className="input-row">
              <input type="email" placeholder="Your email" name="email" value={formData.email} onChange={handleInputChange} required />
              <input type="tel" placeholder="Phone number" name="phone" value={formData.phone} onChange={handleInputChange} />
            </div>
            <textarea placeholder="How can we help?" rows="4" name="message" value={formData.message} onChange={handleInputChange} required></textarea>

            <div className="checkbox-row">
              <input type="checkbox" id="terms" checked={isChecked} onChange={handleCheckboxChange} />
              <label htmlFor="terms">
                By contacting us, you agree to our <a href="/terms">Terms of Service</a> & <a href="/privacy">Privacy Policy</a>.
              </label>
            </div>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner"></span> Submitting...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Success Message Modal */}
      {showToast && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Form Submitted</h3>
            <p>We have received your message and will get back to you shortly.</p>
            <button onClick={() => setShowToast(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
