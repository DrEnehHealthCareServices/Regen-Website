import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import './HairReplacement.css';

export default function HairReplacement() {
  const benefits = [
    'Natural-looking results without scars.',
    'Boost in self-esteem and confidence.',
    'Revitalized scalp & healthier hair follicles.',
    'Minimally invasive, low downtime.',
    'Long-term solution with ongoing support.'
  ];

  const whyChooseUs = [
    'Cutting-edge cellular & regenerative technology.',
    'Personalized treatment plans tailored to your condition.',
    'Experienced specialists in restorative medicine & aesthetics.',
    'Holistic approach combining nutrition, hormonal balance & scalp health.'
  ];

  return (
    <div className="hair-page">
      {/* 1. Hero Section */}
      <section className="hair-hero">
        <div className="hair-hero-container">
          <div className="hair-hero-content anim-fade-up">
            <span className="hair-hero-tag">SAY GOODBYE TO HAIR LOSS AND HELLO TO A FULLER, HEALTHIER YOU.</span>
            <h1 className="hair-hero-title">
              Hair Replacement <br />Therapy
            </h1>
            <p className="hair-hero-desc">
              At ReGen Care Africa, we use advanced cellular and regenerative hair therapies to combat
              hair thinning, baldness, and scalp issues — helping men and women regain their natural look and confidence.
            </p>
            <div className="hair-hero-actions">
              <Link to="/contact" className="btn btn-appointment">
                Book an Appointment
              </Link>
              <a href="https://wa.me/2347060643156" target="_blank" rel="noopener noreferrer" className="hair-phone-btn" aria-label="WhatsApp Us">
                <Phone size={22} fill="currentColor" />
              </a>
            </div>
          </div>
          <div className="hair-hero-image-col">
            <img src="/assets/10/Group 89.png" alt="Clinical analysis of patient hair" className="hair-hero-img" />
          </div>
        </div>
      </section>

      {/* 2. Our Treatments Section */}
      <section className="hair-treatments">
        <div className="hair-treatments-container">
          <div className="hair-treatments-header">
            <h2 className="hair-main-title">Our Treatments</h2>
            <p className="hair-intro-text">
              Hair loss affects millions worldwide, impacting <strong>confidence, self-esteem, and appearance.</strong>
            </p>
            <p className="hair-intro-subtext">
              Unlike quick fixes, our <strong>regenerative hair solutions</strong> address hair loss at the <strong>root cause</strong>, stimulating growth, restoring density, and preventing further thinning.
            </p>
          </div>

          <div className="hair-grid">
            {/* Row 1 */}
            <div className="hair-card bg-blue">
              <div className="hair-card-top">
                <h3 className="hair-card-title">Baldness &<br />Thinning Hair</h3>
                <div className="hair-list-content">
                  <p className="hair-bullet">Customized solutions for both men and women.</p>
                  <p className="hair-bullet">Targets genetic, hormonal, and stress-related hair loss.</p>
                  <p className="hair-bullet">Encourages natural regrowth and slows down hair fall.</p>
                </div>
              </div>
            </div>

            <div className="hair-card bg-navy">
              <div className="hair-card-top">
                <h3 className="hair-card-title">G–Cell<br />Therapy</h3>
                <div className="hair-list-content">
                  <p className="hair-bullet">Harnesses growth factors & regenerative cells.</p>
                  <p className="hair-bullet">Stimulates dormant follicles to revive natural hair growth.</p>
                  <p className="hair-bullet">Improves scalp health and blood supply.</p>
                </div>
              </div>
            </div>

            <div className="hair-image-card">
              <img src="/assets/10/Rectangle 17.png" alt="Doctor examining patient scalp" className="hair-card-img" />
            </div>

            {/* Row 2 */}
            <div className="hair-image-card">
              <img src="/assets/10/Rectangle 17-1.png" alt="Patient undergoing hair revitalization session" className="hair-card-img" />
            </div>

            <div className="hair-card bg-blue">
              <div className="hair-card-top">
                <h3 className="hair-card-title">Exosome<br />Hair Therapy</h3>
                <div className="hair-list-content">
                  <p className="hair-bullet">Cutting-edge regenerative treatment.</p>
                  <p className="hair-bullet">Delivers nano-sized healing signals to the scalp.</p>
                  <p className="hair-bullet">Promotes thicker, stronger, healthier hair.</p>
                </div>
              </div>
            </div>

            <div className="hair-card bg-navy">
              <div className="hair-card-top">
                <h3 className="hair-card-title">Hair Implants</h3>
                <div className="hair-list-content">
                  <p className="hair-bullet">For advanced or permanent hair loss.</p>
                  <p className="hair-bullet">Provides long-lasting, natural-looking results.</p>
                  <p className="hair-bullet">Performed by skilled specialists for seamless integration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Benefits & Why Choose Us Split Columns */}
      <section className="hair-benefits-split">
        <div className="split-benefits-col">
          <div className="split-col-inner">
            <h2 className="split-title color-dark">Benefits</h2>
            <div className="split-list">
              {benefits.map((text, idx) => (
                <div key={idx} className="split-item border-dark">
                  <div className="split-badge bg-navy">{idx + 1}</div>
                  <p className="split-text color-dark">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="split-whotsfor-col">
          <div className="split-col-inner">
            <h2 className="split-title color-light">
              Why<br />Choose Us
            </h2>
            <div className="split-list">
              {whyChooseUs.map((text, idx) => (
                <div key={idx} className="split-item border-light">
                  <div className="split-badge bg-badge-light">{idx + 1}</div>
                  <p className="split-text color-light">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="hair-cta">
        <div className="hair-cta-content">
          <h2 className="hair-cta-title">
            Don't let thinning hair or baldness define you. With our Hair Replacement Therapies, you can restore your youthful look, confidence, and vitality.
          </h2>
          <Link to="/contact" className="btn btn-cta-blue">
            Book Your Hair Consultation Today
          </Link>
        </div>
      </section>
    </div>
  );
}
