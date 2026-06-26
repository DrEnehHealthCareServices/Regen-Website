import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesList = [
    { name: 'Cellular Therapy', path: '/services/cellular-therapy' },
    { name: 'Aesthetics & Anti-Aging Therapy', path: '/services/aesthetics-anti-aging' },
    { name: 'Pain Management', path: '/services/pain-management' },
    { name: 'Hormonal Replacement Therapy', path: '/services/hormonal-replacement' },
    { name: 'Peptide Therapy & Senolytics', path: '/services/peptide-senolytics' },
    { name: 'Hair Replacement Therapy', path: '/services/hair-replacement' },
    { name: 'Other Therapies', path: '/services/other-therapies' },
    { name: 'IV Drip Therapy', path: '/services/iv-drip' }
  ];

  return (
    <footer className="site-footer">
      <div className="footer-top">
        {/* Left Column - Brand Info */}
        <div className="footer-left">
          <Link to="/" className="footer-logo">
            <img src="/assets/1/Group of 4 Objects.png" alt="ReGen Care Africa Logo" />
          </Link>
          <p className="footer-desc">
            Personalized. Confidential. Compassionate care at every step.
          </p>
        </div>

        {/* Right Column - Navigation Links (3 Columns) */}
        <div className="footer-right">
          {/* Main Links */}
          <div className="footer-nav-col">
            <h4>Menu</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About us</Link></li>
              <li><Link to="/treatment" className="footer-link">Treatment</Link></li>
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
            </ul>
          </div>
          
          {/* Services Nested Links */}
          <div className="footer-nav-col">
            <h4>Services</h4>
            <ul className="footer-links">
              {servicesList.map((service, idx) => (
                <li key={idx}>
                  <Link to={service.path} className="footer-link">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Pages */}
          <div className="footer-nav-col">
            <h4>Diagnostics & Contact</h4>
            <ul className="footer-links">
              <li><Link to="/diagnostics" className="footer-link">Diagnostics</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <span>Copyright ©{currentYear} ReGenCare Africa Ltd. All rights reserved.</span>
          <Link to="/privacy-policy" className="footer-policy-link">Privacy Policies</Link>
        </div>

        {/* Social Icons (Temporarily disabled to prevent placeholder links from leaking into SEO scans) */}
        {/*
        <div className="footer-socials">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
        </div>
        */}
      </div>
    </footer>
  );
}
