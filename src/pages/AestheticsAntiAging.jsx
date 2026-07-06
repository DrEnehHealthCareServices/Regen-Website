import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Check } from 'lucide-react';
import './AestheticsAntiAging.css';

export default function AestheticsAntiAging() {
  const benefits = [
    'Smooths fine lines & wrinkles.',
    'Restores youthful skin texture & elasticity.',
    'Enhances natural beauty without surgery.',
    'Reduces scars, pigmentation, & acne.',
    'Supports collagen production & hydration.',
    'Improves confidence & self-esteem.',
    'Slows visible signs of aging.'
  ];

  const whotsfor = [
    'Look younger without invasive surgery.',
    'Address wrinkles, sagging, or volume loss.',
    'Rejuvenate dull, tired, or scarred skin.',
    'Maintain preventive anti-aging routines.',
    'Achieve natural facial harmony & beauty.'
  ];

  return (
    <div className="aesthetics-page">
      {/* 1. Hero Section */}
      <section className="aesthetics-hero">
        <div className="aesthetics-hero-container">
          <div className="aesthetics-hero-content anim-fade-up">
            <span className="aesthetics-hero-tag">LOOK YOUNGER. FEEL CONFIDENT. AGE GRACEFULLY.</span>
            <h1 className="aesthetics-hero-title">
              Aesthetics & Anti-Aging <br />Therapy – Redefine Beauty, <br />Restore Confidence
            </h1>
            <p className="aesthetics-hero-desc">
              At ReGen Care Africa, our Aesthetic & Anti-Aging Programs combine cutting-edge
              regenerative science with proven beauty treatments to rejuvenate your skin, restore
              balance, and slow visible signs of aging.
            </p>
            <div className="aesthetics-hero-actions">
              <Link to="/contact" className="btn btn-appointment">
                Book an Appointment
              </Link>
              <a href="https://wa.me/2347060643156" target="_blank" rel="noopener noreferrer" className="aesthetics-phone-btn" aria-label="WhatsApp Us">
                <Phone size={22} fill="currentColor" />
              </a>
            </div>
          </div>
          <div className="aesthetics-hero-image-col">
            <img src="/assets/6/Group 89.png" alt="Skin treatment patient consultation" className="aesthetics-hero-img" />
          </div>
        </div>
      </section>

      {/* 2. Our Aesthetics & Anti-Aging Treatments */}
      <section className="aesthetics-treatments">
        <div className="aesthetics-treatments-container">
          <div className="aesthetics-treatments-header">
            <h2 className="aesthetics-main-title">
              Our Aesthetics &<br />Anti-Aging Treatments
            </h2>
            <p className="aesthetics-intro-text">
              Aging is natural—but how you age is up to you. Our holistic <strong>anti-aging approach</strong> blends regenerative
              medicine with advanced aesthetic treatments that work at both the <strong>cellular and surface levels.</strong>
            </p>
            <p className="aesthetics-intro-subtext">
              Whether you're seeking <strong>youthful skin, natural facial harmony, or preventive beauty therapies</strong>, our
              team delivers safe, science-backed treatments tailored to your unique goals.
            </p>
          </div>

          <div className="aesthetics-grid">
            {/* Row 1 */}
            <div className="aesthetics-card bg-navy">
              <div className="aesthetics-card-top">
                <h3 className="aesthetics-card-title">Special<br />Regenerative<br />Treatments</h3>
                <div className="aesthetics-list-content">
                  <p className="aesthetics-bullet">
                    <strong>Placenta Extract Therapy</strong> – deeply rejuvenates skin, boosts collagen, and enhances elasticity.
                  </p>
                  <p className="aesthetics-bullet">
                    <strong>Salmon DNA Therapy</strong> – repairs damaged skin, smoothens texture, and improves hydration.
                  </p>
                </div>
              </div>
            </div>

            <div className="aesthetics-image-card">
              <img src="/assets/6/Rectangle 17.png" alt="Patient therapy session" className="aesthetics-card-img" />
            </div>

            <div className="aesthetics-card bg-blue">
              <div className="aesthetics-card-top">
                <h3 className="aesthetics-card-title">Injectables<br />& Facial<br />Rejuvenation</h3>
                <div className="aesthetics-list-content">
                  <p className="aesthetics-bullet">
                    <strong>Botox & Fillers</strong> – smooth fine lines, lift facial contours, and restore youthful volume.
                  </p>
                  <p className="aesthetics-bullet">
                    <strong>HydraFacial</strong> – deeply cleanses, hydrates, and nourishes skin for instant glow.
                  </p>
                  <p className="aesthetics-bullet">
                    <strong>Facial Harmonization</strong> – balance features for a natural, refreshed look.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="aesthetics-card bg-blue">
              <div className="aesthetics-card-top">
                <h3 className="aesthetics-card-title">Thread Lifting<br />& Tightening</h3>
                <p className="aesthetics-card-text">
                  Minimally invasive threads that lift sagging skin, stimulate collagen, and redefine facial contours.
                </p>
              </div>
            </div>

            <div className="aesthetics-card bg-navy">
              <div className="aesthetics-card-top">
                <h3 className="aesthetics-card-title">Micro–Needling<br />Programs</h3>
                <div className="aesthetics-list-content compact">
                  <p className="aesthetics-bullet-simple"><strong>PCI</strong> (Percutaneous Collagen Induction)</p>
                  <p className="aesthetics-bullet-simple"><strong>CIT</strong> (Collagen Induction Therapy)</p>
                  <p className="aesthetics-bullet-simple"><strong>SRT</strong> (Scar Rejuvenation Therapy)</p>
                  <p className="aesthetics-bullet">
                    <strong>Skin Needling</strong> – Stimulates collagen, fades scars, and improves skin texture.
                  </p>
                </div>
              </div>
            </div>

            <div className="aesthetics-image-card">
              <img src="/assets/6/Rectangle 17-1.png" alt="Treatment session with doctor" className="aesthetics-card-img" />
            </div>

            {/* Row 3 */}
            <div className="aesthetics-image-card">
              <img src="/assets/6/Rectangle 17-2.png" alt="Facial treatment session" className="aesthetics-card-img" />
            </div>

            <div className="aesthetics-card bg-blue">
              <div className="aesthetics-card-top">
                <h3 className="aesthetics-card-title">Skin Booster<br />Therapy</h3>
                <p className="aesthetics-card-text">
                  Deep hydration and cellular rejuvenation with specialized boosters.
                </p>
              </div>
            </div>

            <div className="aesthetics-card bg-navy">
              <div className="aesthetics-card-top">
                <h3 className="aesthetics-card-title">Exosome Skin<br />Therapy</h3>
                <p className="aesthetics-card-text">
                  Lyophilized exosomes restore skin health, enhance regeneration, and slow visible aging.
                </p>
              </div>
            </div>

            {/* Row 4 (Double-width card + single image card) */}
            <div className="aesthetics-card bg-blue span-2-cols">
              <div className="aesthetics-card-top">
                <h3 className="aesthetics-card-title">Advanced Skin<br />Treatments</h3>
                <div className="aesthetics-double-col-wrapper">
                  <div className="aesthetics-sub-col">
                    <p className="aesthetics-bullet">
                      <strong>Peels</strong> (brighten and even skin tone)
                    </p>
                    <p className="aesthetics-bullet">
                      <strong>Acne Treatments</strong> (target scars & breakouts)
                    </p>
                    <p className="aesthetics-bullet">
                      <strong>Carboxy Therapy</strong> (improves circulation & elasticity)
                    </p>
                  </div>
                  <div className="aesthetics-sub-col">
                    <p className="aesthetics-bullet">
                      <strong>Mesotherapy</strong> (nutrient-rich injections for glow)
                    </p>
                    <p className="aesthetics-bullet">
                      <strong>Kybella & Thermage</strong> (non-surgical fat reduction & tightening)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="aesthetics-image-card">
              <img src="/assets/6/Rectangle 17-3.png" alt="Clinical treatment recovery room" className="aesthetics-card-img" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Benefits & Who It's For Split Columns */}
      <section className="aesthetics-benefits-split">
        <div className="split-benefits-col">
          <div className="split-col-inner">
            <h2 className="split-title color-dark">Benefits</h2>
            <div className="split-list">
              {benefits.map((text, idx) => (
                <div key={idx} className="split-item border-dark">
                  <div className="split-badge bg-navy"><Check size={18} strokeWidth={3.5} /></div>
                  <p className="split-text color-dark">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="split-whotsfor-col">
          <div className="split-col-inner">
            <h2 className="split-title color-light">
              Who<br />It's For
            </h2>
            <p className="split-subtitle">
              Ideal for individuals who want to:
            </p>
            <div className="split-list">
              {whotsfor.map((text, idx) => (
                <div key={idx} className="split-item border-light">
                  <div className="split-badge bg-badge-light"><Check size={18} strokeWidth={3.5} /></div>
                  <p className="split-text color-light">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="aesthetics-cta">
        <div className="aesthetics-cta-content">
          <h2 className="aesthetics-cta-title">
            Aging doesn't have to mean losing your glow. At ReGen Care Africa, we help you look as young as you feel.
          </h2>
          <Link to="/contact" className="btn btn-cta-blue">
            Book Your Personalized Anti-Aging Consultation Today
          </Link>
        </div>
      </section>
    </div>
  );
}
