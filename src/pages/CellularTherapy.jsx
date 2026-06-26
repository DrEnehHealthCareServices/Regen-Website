import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import './CellularTherapy.css';

export default function CellularTherapy() {
  const treatments = [
    {
      title: 'Stem Cell\nTherapy',
      text: 'Harnesses undifferentiated cells that repair and replace damaged tissues, accelerating healing and improving function.',
      src: '/assets/5/Mask group.png',
      alt: 'Stem Cell Therapy',
      bg: 'navy'
    },
    {
      title: 'Exosome\nTherapy',
      text: 'Tiny messengers that promote cell-to-cell communication, stimulate regeneration, and support recovery from inflammation and disease.',
      src: '/assets/5/Mask group-1.png',
      alt: 'Exosome Therapy',
      bg: 'blue'
    },
    {
      title: 'PRP (Platelet-\nRich Plasma)\nTherapy',
      text: 'Uses your own blood platelets to stimulate repair, reduce pain, and enhance healing in joints, muscles, and skin.',
      src: '/assets/5/Mask group-2.png',
      alt: 'PRP Therapy',
      bg: 'navy'
    },
    {
      title: 'GcMAF\nTherapy',
      text: "Supports immune system activation and strengthens the body's natural defense mechanisms.",
      src: '/assets/5/Mask group-3.png',
      alt: 'GcMAF Therapy',
      bg: 'blue'
    },
    {
      title: 'NK Cell\nTherapy',
      text: 'Natural Killer Cells target and destroy abnormal or harmful cells, supporting immunity and cancer-related treatments.',
      src: '/assets/5/Mask group-4.png',
      alt: 'NK Cell Therapy',
      bg: 'navy'
    },
    {
      title: 'NAD+ Therapy',
      text: 'Boosts cellular energy, improves brain function, combats fatigue, and slows the aging process.',
      src: '/assets/5/Mask group-5.png',
      alt: 'NAD+ Therapy',
      bg: 'blue'
    },
    {
      title: 'Muse Cells',
      text: 'Utilizes stress-enduring cells that target and repair damaged tissues. This advanced protocol accelerates deep systemic recovery and protects against cellular degeneration.',
      src: '/assets/5/Mask group-6.png',
      alt: 'Muse Cells',
      bg: 'navy'
    },
    {
      title: 'RPA Therapies',
      text: 'Employs precise Repair, Regenerate, and Renew protocols to rebuild worn tissues and joints, effectively reversing biological wear-and-tear to restore peak performance.',
      src: '/assets/5/Mask group-7.png',
      alt: 'RPA Therapies',
      bg: 'blue'
    }
  ];

  const benefits = [
    'Repairs damaged tissues at the root cause.',
    'Reduces chronic pain and inflammation.',
    'Supports faster recovery from injuries.',
    'Slows biological aging.',
    'Improves energy, focus, and vitality.',
    'Enhances immunity and resilience.'
  ];

  const whotsfor = [
    'Patients with chronic joint pain or arthritis',
    'Athletes recovering from acute injuries',
    'Individuals facing age-related degeneration',
    'Anyone dealing with chronic fatigue or brain fog',
    'Those looking to optimize their biological age',
    'Patients seeking advanced, non-surgical healing options'
  ];

  return (
    <div className="cellular-page">
      {/* 1. Hero Section */}
      <section className="cellular-hero">
        <div className="cellular-hero-container">
          <div className="cellular-hero-content anim-fade-up">
            <span className="cellular-hero-tag">RESTORE. REPAIR. REGENERATE.</span>
            <h1 className="cellular-hero-title">
              Cellular Therapy <br />Healing At The Source
            </h1>
            <p className="cellular-hero-desc">
              Harness your body's natural healing power through advanced cellular therapies
              that repair damaged tissues, slow aging, and restore vitality.
            </p>
            <div className="cellular-hero-actions">
              <Link to="/contact" className="btn btn-appointment">
                Book an Appointment
              </Link>
              <a href="https://wa.me/2347060643156" target="_blank" rel="noopener noreferrer" className="cellular-phone-btn" aria-label="WhatsApp Us">
                <Phone size={22} fill="currentColor" />
              </a>
            </div>
          </div>
          <div className="cellular-hero-image-col">
            <img src="/assets/5/Group 89.png" alt="Clinical Centrifuge Sample Tubes" className="cellular-hero-img" />
          </div>
        </div>
      </section>

      {/* 2. Our Cellular Therapy Treatments */}
      <section className="cellular-treatments">
        <div className="cellular-treatments-container">
          <div className="cellular-treatments-header">
            <h2 className="cellular-main-title">
              Our Cellular<br />Therapy Treatments
            </h2>
            <p className="cellular-intro-text">
              At <strong>ReGen Care Africa</strong>, our <strong>Cellular Therapy Programs</strong> are designed to unlock the body's
              regenerative potential. By using scientifically advanced treatments such as <strong>Stem Cells, Exosomes,
              PRP, and NAD+</strong>, we repair, restore, and optimize health at the cellular level.
            </p>
            <p className="cellular-intro-subtext">
              Our therapies are ideal for patients with chronic conditions, <strong>age-related degeneration, sports
              injuries, or those seeking preventative longevity solutions.</strong>
            </p>
          </div>

          <div className="cellular-grid">
            {treatments.map((t, idx) => (
              <div key={idx} className={`cellular-card bg-${t.bg}`}>
                <div className="cellular-card-top">
                  <h3 className="cellular-card-title">{t.title}</h3>
                  <p className="cellular-card-text">{t.text}</p>
                </div>
                <div className="cellular-card-image-wrapper">
                  <img src={t.src} alt={t.alt} className="cellular-card-img" />
                </div>
              </div>
            ))}
            {/* 9th Slot remains empty as per mockup design */}
            <div className="cellular-grid-empty-slot"></div>
          </div>
        </div>
      </section>

      {/* 3. Benefits & Who It's For Split Columns */}
      <section className="cellular-benefits-split">
        <div className="split-benefits-col">
          <div className="split-col-inner">
            <h2 className="split-title color-dark">
              Benefits<br />Of Cellular<br />Therapy
            </h2>
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
            <p className="split-subtitle">
              Cellular therapy is ideal for people suffering from:
            </p>
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
      <section className="cellular-cta">
        <div className="cellular-cta-content">
          <h2 className="cellular-cta-title">
            Take the first step toward healing from within. Our team of specialists will design a personalized treatment plan tailored to your biology.
          </h2>
          <Link to="/contact" className="btn btn-cta-blue">
            Book a Consultation Today
          </Link>
        </div>
      </section>
    </div>
  );
}
