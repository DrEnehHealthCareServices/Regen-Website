import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import './PeptideSenolytics.css';

export default function PeptideSenolytics() {
  const benefits = [
    'Delays aging & enhances longevity.',
    'Improves cellular repair & regeneration.',
    'Boosts immunity & disease resistance.',
    'Increases strength, vitality & mental clarity.',
    'Targets root causes of inflammation & degeneration.'
  ];

  const whotsfor = [
    'Men & women seeking anti-aging & longevity solutions.',
    'Patients with neurodegenerative conditions.',
    'Athletes needing faster recovery & endurance.',
    'Individuals with metabolic or immune challenges.',
    'Anyone wanting to optimize health & slow aging.'
  ];

  return (
    <div className="peptide-page">
      {/* 1. Hero Section */}
      <section className="peptide-hero">
        <div className="peptide-hero-container">
          <div className="peptide-hero-content anim-fade-up">
            <span className="peptide-hero-tag">CUTTING-EDGE THERAPIES FOR LONGEVITY, VITALITY, AND REGENERATION.</span>
            <h1 className="peptide-hero-title">
              Peptide Therapy <br /> & Senolytics
            </h1>
            <p className="peptide-hero-desc">
              At ReGen Care Africa, our Peptide & Senolytic Therapies harness the body's natural
              healing ability to restore function, enhance vitality, and slow down the aging process.
              With safe, science-backed treatments, we help you optimize your health from the inside out.
            </p>
            <div className="peptide-hero-actions">
              <Link to="/contact" className="btn btn-appointment">
                Book an Appointment
              </Link>
              <a href="https://wa.me/2347060643156" target="_blank" rel="noopener noreferrer" className="peptide-phone-btn" aria-label="WhatsApp Us">
                <Phone size={22} fill="currentColor" />
              </a>
            </div>
          </div>
          <div className="peptide-hero-image-col">
            <img src="/assets/9/Group 89.png" alt="Doctor demonstrating knee joint scan to male patient" className="peptide-hero-img" />
          </div>
        </div>
      </section>

      {/* 2. Our Peptide & Senolytic Therapies Section */}
      <section className="peptide-treatments">
        <div className="peptide-treatments-container">
          <div className="peptide-treatments-header">
            <h2 className="peptide-main-title">Our Peptide & Senolytic Therapies</h2>
            <p className="peptide-intro-text">
              Peptides are small chains of amino acids that act as messengers in the body, signaling cells to <strong>repair, regenerate, and optimize performance.</strong>
            </p>
            <p className="peptide-intro-subtext">
              Senolytics are therapies that target and eliminate damaged "senescent" cells that cause <strong>inflammation, aging, and disease progression.</strong>
            </p>
            <p className="peptide-intro-subtext">
              Together, these therapies <strong>restore balance, fight aging, and improve overall well-being.</strong>
            </p>
          </div>

          <div className="peptide-grid">
            {/* Row 1 */}
            <div className="peptide-card bg-blue">
              <div className="peptide-card-top">
                <h3 className="peptide-card-title">Regenerative<br />& Anti–Aging</h3>
                <p className="peptide-card-text">
                  Supports tissue repair, collagen production, and slows cellular aging.
                </p>
              </div>
            </div>

            <div className="peptide-card bg-navy">
              <div className="peptide-card-top">
                <h3 className="peptide-card-title">Brain Health</h3>
                <p className="peptide-card-text">
                  Enhances memory, focus, and neuroprotection against degenerative conditions.
                </p>
              </div>
            </div>

            <div className="peptide-image-card">
              <img src="/assets/9/Rectangle 17.png" alt="Doctor applying blue light headband to female patient" className="peptide-card-img" />
            </div>

            {/* Row 2 */}
            <div className="peptide-card bg-blue">
              <div className="peptide-card-top">
                <h3 className="peptide-card-title">Fat Loss</h3>
                <p className="peptide-card-text">
                  Boosts metabolism, reduces stubborn fat, and supports lean muscle growth.
                </p>
              </div>
            </div>

            <div className="peptide-image-card">
              <img src="/assets/9/Rectangle 17-1.png" alt="Patient undergoing leg muscle wraps treatment" className="peptide-card-img" />
            </div>

            <div className="peptide-card bg-navy">
              <div className="peptide-card-top">
                <h3 className="peptide-card-title">Vitality</h3>
                <p className="peptide-card-text">
                  Increases stamina, endurance, and recovery for peak performance.
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="peptide-image-card">
              <img src="/assets/9/Rectangle 17-2.png" alt="Male patient receiving muscle stimulation therapy" className="peptide-card-img" />
            </div>

            <div className="peptide-card bg-blue">
              <div className="peptide-card-top">
                <h3 className="peptide-card-title">Immune<br />Enhancement</h3>
                <p className="peptide-card-text">
                  Strengthens immune response and reduces inflammation.
                </p>
              </div>
            </div>

            <div className="peptide-card bg-navy">
              <div className="peptide-card-top">
                <h3 className="peptide-card-title">Digestive Health</h3>
                <p className="peptide-card-text">
                  Restores gut balance, enhances nutrient absorption, and reduces inflammation.
                </p>
              </div>
            </div>

            {/* Row 4 */}
            <div className="peptide-card bg-navy">
              <div className="peptide-card-top">
                <h3 className="peptide-card-title">Sexual Health</h3>
                <p className="peptide-card-text">
                  Improves libido, erectile function, and reproductive health.
                </p>
              </div>
            </div>

            <div className="peptide-image-card peptide-span-2-cols">
              <img src="/assets/9/Rectangle 17-3.png" alt="Doctor consulting male patient in clinic" className="peptide-card-img" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Benefits & Who It's For Split Columns */}
      <section className="peptide-benefits-split">
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
              Who<br />It's For
            </h2>
            <div className="split-list">
              {whotsfor.map((text, idx) => (
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
      <section className="peptide-cta">
        <div className="peptide-cta-content">
          <h2 className="peptide-cta-title">
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
