import React from 'react';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      {/* 1. Hero Section */}
      <section className="privacy-hero">
        <div className="privacy-hero-content anim-fade-up">
          <h1 className="privacy-hero-title">Privacy Policy</h1>
          <p className="privacy-hero-subtitle">Last Updated: June 2026</p>
          <p className="privacy-hero-desc">
            At ReGenCare Africa Ltd., your privacy is very important to us. This Privacy Policy
            explains how we collect, use, store, and protect your personal information when you
            visit our website, use our services, or interact with our team.
          </p>
        </div>
      </section>

      {/* 2. Main Content Section */}
      <section className="privacy-content-section">
        <div className="privacy-content-container">
          
          <div className="privacy-section-block">
            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="privacy-list">
              <li><strong>Personal Information:</strong> Name, email, phone number, address, and date of birth.</li>
              <li><strong>Medical Information:</strong> Health history, test results, treatment records, and other details you provide during consultation or booking.</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device details, and cookies when you use our website.</li>
              <li><strong>Communication Records:</strong> Emails, chats, or messages exchanged with us.</li>
            </ul>
          </div>

          <div className="privacy-section-block">
            <h2>2. How We Use Your Information</h2>
            <p>Your information is used to:</p>
            <ul className="privacy-list">
              <li>Provide medical consultations, diagnostics, and treatments.</li>
              <li>Schedule and confirm appointments.</li>
              <li>Communicate with you about services, updates, and promotions (with consent).</li>
              <li>Maintain medical and legal records securely.</li>
              <li>Improve our services and website experience.</li>
            </ul>
          </div>

          <div className="privacy-section-block">
            <h2>3. Sharing of Information</h2>
            <p>We do not sell or rent your personal data. Information may only be shared with:</p>
            <ul className="privacy-list">
              <li>Licensed medical professionals within our clinic.</li>
              <li>Accredited laboratories or diagnostic partners (with your consent).</li>
              <li>Legal or regulatory authorities if required by law.</li>
              <li>Technology partners who help us manage bookings, payments, or secure storage (bound by confidentiality).</li>
            </ul>
          </div>

          <div className="privacy-section-block">
            <h2>4. Data Security</h2>
            <p>We implement strict measures to protect your data:</p>
            <ul className="privacy-list">
              <li>Secure servers and encrypted databases.</li>
              <li>Restricted access to sensitive health information.</li>
              <li>Regular system monitoring to prevent unauthorized access.</li>
            </ul>
          </div>

          <div className="privacy-section-block">
            <h2>5. Your Rights</h2>
            <p>Depending on applicable laws, you may have the right to:</p>
            <ul className="privacy-list">
              <li>Access your personal data.</li>
              <li>Request corrections or updates.</li>
              <li>Request deletion of your data (where legally permitted).</li>
              <li>Withdraw consent for marketing communications.</li>
            </ul>
          </div>

          <div className="privacy-section-block">
            <h2>6. Cookies Policy</h2>
            <p>
              Our website uses cookies to enhance browsing, analyze traffic, and personalize content.
              You can manage cookies through your browser settings.
            </p>
          </div>

          <div className="privacy-section-block">
            <h2>7. Third-Party Links</h2>
            <p>
              Our site may include links to third-party websites. We are not responsible for their privacy
              practices, and we encourage you to review their policies.
            </p>
          </div>

          <div className="privacy-section-block">
            <h2>8. Changes to Privacy Policy</h2>
            <p>
              We may update this policy from time to time. Any changes will be posted on this page with the
              updated date.
            </p>
          </div>

          <div className="privacy-section-block">
            <h2>9. Contact Us</h2>
            <p>For questions about this Privacy Policy or to exercise your data rights:</p>
            <ul className="privacy-list contact-list">
              <li>
                <span className="contact-icon-label">📍</span>
                <strong>Address:</strong> At Equity Hospital, 13 Ogbunike Street off Wole Olateju Street, Lekki Phase 1
              </li>
              <li>
                <span className="contact-icon-label">✉</span>
                <strong>Email:</strong> <a href="mailto:info@regencareafrica.com" className="privacy-link">info@regencareafrica.com</a>
              </li>
              <li>
                <span className="contact-icon-label">💬</span>
                <strong>WhatsApp:</strong> <a href="https://wa.me/2347060643156" target="_blank" rel="noopener noreferrer" className="privacy-link">07060643156</a>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
