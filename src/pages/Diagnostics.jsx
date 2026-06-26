import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import './Diagnostics.css';

export default function Diagnostics() {
  const mattersList = [
    'Detects health risks before symptoms appear.',
    'Provides a data-driven foundation for personalized therapies.',
    'Helps track treatment progress & optimize outcomes.',
    'Improves performance, recovery, and long-term health.'
  ];

  const whotsfor = [
    'Individuals seeking early detection & prevention.',
    'Athletes optimizing performance & recovery.',
    'Patients with chronic or unexplained conditions.',
    'Anyone curious about their true health age & genetic risks.'
  ];

  const whyChooseUs = [
    'World-class equipment & precision testing.',
    'Personalized reports explained in detail.',
    'Integrative approach combining diagnostics with regenerative therapies.',
    'Medical experts guiding every step.'
  ];

  return (
    <div className="diag-page">
      {/* 1. Hero Section */}
      <section className="diag-hero">
        <div className="diag-hero-container">
          <div className="diag-hero-content anim-fade-up">
            <span className="diag-hero-tag">KNOW YOUR BODY. PREDICT. PREVENT. PERFORM.</span>
            <h1 className="diag-hero-title">
              The Future Of Health Begins <br />With The Right Diagnosis.
            </h1>
            <p className="diag-hero-desc">
              At ReGen Care Africa, we believe in precision medicine. Our advanced diagnostics go
              beyond symptoms — uncovering the root cause of disease, predicting risks, and tracking
              health at a cellular and functional level.
            </p>
            <div className="diag-hero-actions">
              <Link to="/contact" className="btn btn-appointment">
                Book an Appointment
              </Link>
              <a href="https://wa.me/2347060643156" target="_blank" rel="noopener noreferrer" className="diag-phone-btn" aria-label="WhatsApp Us">
                <Phone size={22} fill="currentColor" />
              </a>
            </div>
          </div>
          <div className="diag-hero-image-col">
            <img src="/assets/13/Group 186.png" alt="Diagnostics laboratory testing machine and clinical interface" className="diag-hero-img" />
          </div>
        </div>
      </section>

      {/* 2. Our Diagnostic Services Section */}
      <section className="diag-services">
        <div className="diag-services-container">
          <div className="diag-services-header">
            <h2 className="diag-main-title">Our Diagnostic Services</h2>
          </div>

          <div className="diag-grid">
            {/* Row 1 */}
            <div className="diag-card bg-blue">
              <div className="diag-card-top">
                <h3 className="diag-card-title">Full Blood Work</h3>
                <p className="diag-card-text">
                  Comprehensive laboratory testing to evaluate hormone function, detect imbalances, and monitor overall health. From hormones to immune markers, we give you the complete picture of your health.
                </p>
              </div>
            </div>

            <div className="diag-image-card">
              <img src="/assets/13/Rectangle 17.png" alt="Patient undergoing clinical blood draw in chair" className="diag-card-img" />
            </div>

            <div className="diag-card bg-blue">
              <div className="diag-card-top">
                <h3 className="diag-card-title">DNA Disease Testing<br />(Genetic Testing)</h3>
                <p className="diag-card-text">
                  Unlock your genetic blueprint. Our DNA testing identifies predispositions to diseases, metabolic traits, and aging factors, empowering you to make proactive lifestyle and medical choices.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="diag-card bg-navy">
              <div className="diag-card-top">
                <h3 className="diag-card-title">Musculo–Skeletal<br />Assessment</h3>
                <p className="diag-card-text">
                  Specialized scans and functional testing to evaluate bone, joint, muscle, and spine health. Essential for athletes, individuals with chronic pain, and injury prevention.
                </p>
              </div>
            </div>

            <div className="diag-card bg-navy">
              <div className="diag-card-top">
                <h3 className="diag-card-title">Non-Invasive Scans</h3>
                <p className="diag-card-text">
                  Advanced imaging and body scans that provide deep insights without surgical intervention or radiation risk. Perfect for early detection and monitoring.
                </p>
              </div>
            </div>

            <div className="diag-image-card">
              <img src="/assets/13/Rectangle 17-1.png" alt="Nurse performing oral diagnostic swab test on patient" className="diag-card-img" />
            </div>

            {/* Row 3 */}
            <div className="diag-card bg-blue">
              <div className="diag-card-top">
                <h3 className="diag-card-title">PhysioAge Health<br />Analytics</h3>
                <p className="diag-card-text">
                  A revolutionary health analysis platform that compares your biological vs. chronological age using advanced biomarkers. Get actionable insights into how fast your body is aging — and how to slow it down.
                </p>
              </div>
            </div>

            <div className="diag-card bg-blue">
              <div className="diag-card-top">
                <h3 className="diag-card-title">VO2 Max Testing</h3>
                <p className="diag-card-text">
                  Measure your aerobic fitness, endurance, and cardiovascular efficiency. Ideal for athletes and anyone aiming to maximize physical performance and longevity.
                </p>
              </div>
            </div>

            <div className="diag-card bg-navy">
              <div className="diag-card-top">
                <h3 className="diag-card-title">EMG & BCV Testing</h3>
                <div className="diag-list-content">
                  <p className="diag-bullet">
                    <strong>EMG (Electromyography)</strong>: Assesses muscle and nerve function to diagnose neuromuscular conditions.
                  </p>
                  <p className="diag-bullet">
                    <strong>BCV (Brainstem Conductive Velocity)</strong>: Tests brain and nerve conduction speeds for neurological precision insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Advanced Diagnostics Matter Section */}
      <section className="diag-matter">
        <div className="diag-matter-container">
          <div className="diag-matter-left">
            <h2 className="diag-matter-title">Why Advanced Diagnostics Matter</h2>
            <Link to="/contact" className="btn btn-matter-contact">
              Contact Us
            </Link>
          </div>
          <div className="diag-matter-right">
            <div className="diag-matter-list">
              {mattersList.map((text, idx) => (
                <div key={idx} className="diag-matter-item">
                  <div className="diag-matter-badge">{idx + 1}</div>
                  <p className="diag-matter-text">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Who Is It For? & Why Choose ReGen Care Africa? Split Columns */}
      <section className="diag-split">
        <div className="split-benefits-col">
          <div className="split-col-inner">
            <h2 className="split-title color-dark">Who Is<br />It For?</h2>
            <div className="split-list">
              {whotsfor.map((text, idx) => (
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
              Why Choose<br />ReGen Care<br />Africa?
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

      {/* 5. CTA Section */}
      <section className="diag-cta">
        <div className="diag-cta-content">
          <h2 className="diag-cta-title">
            Don't guess about your health. Measure it.
          </h2>
          <Link to="/contact" className="btn btn-cta-blue">
            Book Your Diagnostics Today
          </Link>
        </div>
      </section>
    </div>
  );
}
