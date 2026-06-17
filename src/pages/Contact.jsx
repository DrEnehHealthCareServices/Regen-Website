import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Form is valid - process submission
      console.log('Form data submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        email: '',
        phone: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="contact-page">
      {/* 1. Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content anim-fade-up">
          <h1 className="contact-hero-title">We’re Here for You.</h1>
          <p className="contact-hero-desc">
            Questions, bookings, or consultations — our team is ready to help you on
            your journey to better health.
          </p>
        </div>
      </section>

      {/* 2. Contact Container (Form + Info Card) */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Left Form Card */}
          <div className="contact-form-card">
            <h2 className="form-card-title">
              Send us a message we will get back to you.
            </h2>
            
            {isSubmitted ? (
              <div className="form-success-message">
                <div className="success-icon-circle">✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>
                  Thank you for reaching out to ReGen Care Africa. We have received your message and will get back to you shortly.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="btn btn-reset">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Input first name"
                    className={`form-input ${errors.firstName ? 'input-error' : ''}`}
                  />
                  {errors.firstName && <span className="error-text">{errors.firstName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Input email here"
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Input phone number here"
                    className={`form-input ${errors.phone ? 'input-error' : ''}`}
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type message here..."
                    rows={5}
                    className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                  />
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-send">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right Info Card */}
          <div className="contact-info-card">
            <div className="info-card-image-col">
              <img
                src="/assets/14/Mask group.png"
                alt="Smiling elderly man making heart gesture with hands"
                className="info-card-img"
              />
            </div>
            <div className="info-card-details">
              <h2 className="info-card-title">
                Instant support for appointments and inquiries.
              </h2>
              
              <div className="info-contact-rows">
                <div className="info-contact-row">
                  <svg className="info-icon-svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span className="info-link info-address">At Equity Hospital, 13 Ogbunike Street off Wole Olateju Street, Lekki Phase 1</span>
                </div>

                <div className="info-contact-row">
                  <img src="/assets/14/Group 122.png" alt="WhatsApp icon" className="info-icon" />
                  <a href="https://wa.me/2347060643156" target="_blank" rel="noopener noreferrer" className="info-link">07060643156 (WhatsApp)</a>
                </div>
                
                <div className="info-contact-row">
                  <img src="/assets/14/Group 122-1.png" alt="Envelope email icon" className="info-icon" />
                  <a href="mailto:info@regencareafrica.com" className="info-link">info@regencareafrica.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="contact-bottom-cta">
        <div className="contact-cta-content">
          <h2 className="contact-cta-title">
            Your health journey starts with one step — reach out today.
          </h2>
          <Link to="/contact" className="btn btn-cta-blue">
            Book Your Consult Today
          </Link>
        </div>
      </section>
    </div>
  );
}
