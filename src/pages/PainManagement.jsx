import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import './PainManagement.css';

export default function PainManagement() {
  const benefits = [
    'Long-term pain relief without heavy medications.',
    'Reduced inflammation & tissue degeneration.',
    'Faster recovery from injuries & surgery.',
    'Improved joint & spine function.',
    'Improves energy, focus, and vitality.',
    'Enhanced mobility, flexibility & strength.',
    'Restored quality of life.'
  ];

  const whotsfor = [
    'Patients with chronic joint, spine, or muscle pain.',
    'Individuals struggling with injury recovery.',
    'Athletes seeking safe and fast return to sport.',
    'Anyone with arthritis, tendonitis, or degenerative pain conditions.'
  ];

  return (
    <div className="pain-page">
      {/* 1. Hero Section */}
      <section className="pain-hero">
        <div className="pain-hero-container">
          <div className="pain-hero-content anim-fade-up">
            <span className="pain-hero-tag">DON'T JUST MANAGE PAIN — TREAT ITS ROOT CAUSE.</span>
            <h1 className="pain-hero-title">
              Pain Management – <br />Restore Movement, <br />Relieve Pain, Regain Life
            </h1>
            <p className="pain-hero-desc">
              At ReGen Care Africa, we go beyond temporary relief. Using cellular therapies,
              regenerative medicine, and advanced pain protocols, we help you heal naturally
              and regain your quality of life.
            </p>
            <div className="pain-hero-actions">
              <Link to="/contact" className="btn btn-appointment">
                Book an Appointment
              </Link>
              <a href="https://wa.me/2347060643156" target="_blank" rel="noopener noreferrer" className="pain-phone-btn" aria-label="WhatsApp Us">
                <Phone size={22} fill="currentColor" />
              </a>
            </div>
          </div>
          <div className="pain-hero-image-col">
            <img src="/assets/7/Group 89.png" alt="Clinical therapy session" className="pain-hero-img" />
          </div>
        </div>
      </section>

      {/* 2. Conditions We Treat Section */}
      <section className="pain-conditions">
        <div className="pain-conditions-container">
          <div className="pain-conditions-header">
            <h2 className="pain-main-title">Conditions We Treat</h2>
            <p className="pain-intro-text">
              Chronic pain doesn't just affect the body — it impacts <strong>mobility, mood, work, and daily living.</strong>
            </p>
            <p className="pain-intro-subtext">
              Our <strong>Pain Management Program</strong> combines <strong>stem cell therapy, PRP, exosomes, and advanced non-invasive techniques</strong> to repair tissues, restore function, and provide long-term relief without dependency on painkillers.
            </p>
            <p className="pain-intro-subtext">
              Whether your pain comes from injury, <strong>wear-and-tear, or degenerative disease</strong>, our specialists tailor treatments that target both the symptoms and root cause.
            </p>
          </div>

          <div className="pain-grid">
            {/* Row 1 */}
            <div className="pain-card bg-blue">
              <div className="pain-card-top">
                <h3 className="pain-card-title">Osteoarthritis</h3>
                <p className="pain-card-text">
                  Regenerate joint cartilage, reduce inflammation, and restore mobility.
                </p>
              </div>
            </div>

            <div className="pain-card bg-navy">
              <div className="pain-card-top">
                <h3 className="pain-card-title">Lumbar Pathology<br />(Lower Back Pain)</h3>
                <p className="pain-card-text">
                  Target disc issues, herniation, or degeneration with cellular repair therapies.
                </p>
              </div>
            </div>

            <div className="pain-image-card">
              <img src="/assets/7/Rectangle 17.png" alt="Doctor performing back treatment on patient" className="pain-card-img" />
            </div>

            {/* Row 2 */}
            <div className="pain-image-card">
              <img src="/assets/7/Rectangle 17-1.png" alt="Patient receiving knee therapy session" className="pain-card-img" />
            </div>

            <div className="pain-card bg-blue">
              <div className="pain-card-top">
                <h3 className="pain-card-title">Sports Injuries</h3>
                <p className="pain-card-text">
                  Accelerated recovery from ligament tears, muscle damage, and overuse injuries.
                </p>
              </div>
            </div>

            <div className="pain-card bg-navy">
              <div className="pain-card-top">
                <h3 className="pain-card-title">Tendonitis</h3>
                <p className="pain-card-text">
                  Reduce swelling and repair tendon tissue naturally.
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="pain-card bg-blue">
              <div className="pain-card-top">
                <h3 className="pain-card-title">Plantar Fasciitis</h3>
                <p className="pain-card-text">
                  Regenerative therapy for chronic heel and foot pain.
                </p>
              </div>
            </div>

            <div className="pain-image-card">
              <img src="/assets/7/Rectangle 17-2.png" alt="Doctor examining patient's foot" className="pain-card-img" />
            </div>

            <div className="pain-card bg-navy">
              <div className="pain-card-top">
                <h3 className="pain-card-title">Fibromyalgia</h3>
                <p className="pain-card-text">
                  Cellular and integrative therapies to reduce widespread pain and fatigue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Benefits & Who It's For Split Columns */}
      <section className="pain-benefits-split">
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
      <section className="pain-cta">
        <div className="pain-cta-content">
          <h2 className="pain-cta-title">
            Pain doesn't have to control your life. With advanced regenerative therapies, you can heal, move, and live fully again.
          </h2>
          <Link to="/contact" className="btn btn-cta-blue">
            Schedule Your Pain Relief Consultation Today
          </Link>
        </div>
      </section>
    </div>
  );
}
