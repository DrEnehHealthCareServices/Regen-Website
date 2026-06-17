import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import './Treatment.css';

export default function Treatment() {
  const treatmentAreas = [
    {
      id: 'autoimmune',
      title: 'Autoimmune &\nImmune Health',
      bgType: 'navy',
      image: '/assets/3/Rectangle 17-1.png',
      pills: ['Autoimmune Conditions', 'Immunotherapy Supports', 'Lupus']
    },
    {
      id: 'neurology',
      title: 'Neurology &\nBrain Health',
      bgType: 'blue',
      image: '/assets/3/Rectangle 17.png',
      pills: [
        'Neurodegenerative Conditions',
        'Multiple Sclerosis',
        'Autism',
        'Traumatic Brain Injury (TBI)',
        'Post-Stroke Management'
      ]
    },
    {
      id: 'orthopedic',
      title: 'Orthopedic &\nMusculoskeletal',
      bgType: 'navy',
      pills: [
        'Spine & Disc Conditions\n/ Back Pain',
        'Osteoarthritis',
        'Rheumatoid Arthritis',
        'Sports Injuries',
        'Orthopedic & Spinal\nCord Injuries'
      ]
    },
    {
      id: 'mens-health',
      title: "Men's\nHealth",
      bgType: 'blue',
      image: '/assets/3/Rectangle 17-2.png',
      pills: ['Erectile Dysfunction', 'Hormonal & Vitality Support']
    },
    {
      id: 'chronic',
      title: 'Chronic &\nMetabolic\nConditions',
      bgType: 'navy',
      pills: [
        'Diabetic Complications',
        'Weight Management',
        'Metabolic Dysfunction',
        'COPD (Chronic Obstructive\nPulmonary Disease)'
      ]
    }
  ];

  const differences = [
    {
      num: 1,
      text: 'Root-cause, cellular-level healing (not just symptom relief)'
    },
    {
      num: 2,
      text: 'Integrative approach combining regenerative medicine, diagnostics, and nutrition.'
    },
    {
      num: 3,
      text: 'Concierge care — delivered in-clinic or at home.'
    },
    {
      num: 4,
      text: 'Programs tailored to your biology and lifestyle.'
    }
  ];

  return (
    <div className="treatment-page">
      {/* 1. Hero Section */}
      <section className="treatment-hero">
        <div className="treatment-hero-content anim-fade-up">
          <h1 className="treatment-hero-title">Treatments</h1>
          <p className="treatment-hero-desc">
            At <strong>ReGen Care Africa</strong>, we provide advanced regenerative and functional medicine treatments
            designed to heal at the cellular level, manage chronic conditions, and restore vitality. Our
            programs are personalized, medically supervised, and results-driven.
          </p>
          <div className="treatment-hero-actions">
            <Link to="/contact" className="btn btn-appointment">
              Book an Appointment
            </Link>
            <a href="https://wa.me/2347060643156" target="_blank" rel="noopener noreferrer" className="treatment-phone-btn" aria-label="WhatsApp Us">
              <Phone size={22} fill="currentColor" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Key Treatment Areas Grid */}
      <section className="treatment-key-areas">
        <div className="treatment-grid-container">
          <div className="treatment-header-col">
            <h2 className="treatment-main-title">
              Our Key<br />Treatment Areas
            </h2>
          </div>

          <div className="treatment-grid">
            {/* Card 1 */}
            <div className="treatment-card bg-navy">
              <h3 className="treatment-card-title">Autoimmune &<br />Immune Health</h3>
              <div className="treatment-card-image-wrapper">
                <img src="/assets/3/Rectangle 17-1.png" alt="Autoimmune & Immune Health" className="treatment-card-img" />
              </div>
              <div className="treatment-card-pills">
                <span className="treatment-pill">Autoimmune Conditions</span>
                <span className="treatment-pill">Immunotherapy Supports</span>
                <span className="treatment-pill">Lupus</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="treatment-card bg-blue">
              <h3 className="treatment-card-title">Neurology &<br />Brain Health</h3>
              <div className="treatment-card-image-wrapper">
                <img src="/assets/3/Rectangle 17.png" alt="Neurology & Brain Health" className="treatment-card-img" />
              </div>
              <div className="treatment-card-pills">
                <span className="treatment-pill">Neurodegenerative Conditions</span>
                <span className="treatment-pill">Multiple Sclerosis</span>
                <span className="treatment-pill">Autism</span>
                <span className="treatment-pill">Traumatic Brain Injury (TBI)</span>
                <span className="treatment-pill">Post-Stroke Management</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="treatment-card bg-navy no-img-card">
              <h3 className="treatment-card-title">Orthopedic &<br />Musculoskeletal</h3>
              <div className="treatment-card-pills">
                <span className="treatment-pill text-wrap">Spine & Disc Conditions<br />/ Back Pain</span>
                <span className="treatment-pill">Osteoarthritis</span>
                <span className="treatment-pill">Rheumatoid Arthritis</span>
                <span className="treatment-pill">Sports Injuries</span>
                <span className="treatment-pill text-wrap">Orthopedic & Spinal<br />Cord Injuries</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="treatment-card bg-blue">
              <h3 className="treatment-card-title">Men's<br />Health</h3>
              <div className="treatment-card-image-wrapper">
                <img src="/assets/3/Rectangle 17-2.png" alt="Men's Health" className="treatment-card-img" />
              </div>
              <div className="treatment-card-pills">
                <span className="treatment-pill">Erectile Dysfunction</span>
                <span className="treatment-pill">Hormonal & Vitality Support</span>
              </div>
            </div>

            {/* Card 5 */}
            <div className="treatment-card bg-navy no-img-card">
              <h3 className="treatment-card-title">Chronic &<br />Metabolic<br />Conditions</h3>
              <div className="treatment-card-pills">
                <span className="treatment-pill">Diabetic Complications</span>
                <span className="treatment-pill">Weight Management</span>
                <span className="treatment-pill">Metabolic Dysfunction</span>
                <span className="treatment-pill text-wrap">COPD (Chronic Obstructive<br />Pulmonary Disease)</span>
              </div>
            </div>

            {/* Card 6 (CTA Image & White Card Combo) */}
            <div className="treatment-cta-card-combo">
              <div className="treatment-cta-image-wrapper">
                <img src="/assets/3/Rectangle 17-3.png" alt="Science-Driven Care" className="treatment-cta-img" />
              </div>
              <div className="treatment-cta-text-card">
                <p className="treatment-cta-text">
                  Science-Driven<br />Care For Every<br />Stage Of Life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Our Treatments Are Different */}
      <section className="treatment-why-different">
        <div className="why-diff-container">
          <div className="why-diff-left">
            <h2 className="why-diff-title">
              Why Our<br />Treatments<br />Are Different
            </h2>
            <Link to="/contact" className="btn btn-contact-us">
              Contact Us
            </Link>
          </div>
          <div className="why-diff-right">
            <div className="why-diff-list">
              {differences.map((diff) => (
                <div key={diff.num} className="why-diff-item">
                  <div className="why-diff-badge">{diff.num}</div>
                  <p className="why-diff-text">{diff.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
