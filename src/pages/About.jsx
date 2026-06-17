import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  const sciencePills = [
    'Restore cellular functions',
    'Reverse biological aging',
    'Optimize human performance'
  ];

  const whatWeDoCards = [
    { num: '1', text: 'Regenerative Therapy Programs (NAD+, Peptides, Stem Cells, etc.)' },
    { num: '2', text: '500+ Regenerative Biomarkers Assessments' },
    { num: '3', text: 'Personalized Nutrition & Wellness Services.' },
    { num: '4', text: 'Concierge & Mobile Health Services.' },
    { num: '5', text: 'Aesthetic & Anti-Aging Therapies.' },
    { num: '6', text: 'Longevity Retreats & Lifestyle Reset Programs.' },
    { num: '7', text: 'HealthTech & Digital Health Platforms for patient management.' },
    { num: '8', text: 'Product Development & Distribution.' },
    { num: '9', text: 'Research, Development & Innovation.' }
  ];

  const whyChooseUsCards = [
    { num: '1', text: 'Personalized medicine tailored to your biology.' },
    { num: '2', text: 'Concierge-level healthcare, available in-clinic or at home.' },
    { num: '3', text: 'Integration of regenerative, functional, and aesthetic medicine.' },
    { num: '4', text: 'Holistic programs combining nutrition, wellness, and science.' },
    { num: '5', text: 'Proprietary clinical & nutritional protocols.' },
    { num: '6', text: 'Strong partnerships with global medical innovators.' },
    { num: '7', text: 'Scalable digital platforms for seamless patient care.' },
    { num: '8', text: 'A highly skilled, multidisciplinary workforce' }
  ];

  const coreValues = [
    { title: 'Innovation', desc: 'Harnessing science & technology to redefine healthcare.', icon: '/assets/2/Group 25.png' },
    { title: 'Integrity', desc: 'Practicing transparency, ethics, and trust.', icon: '/assets/2/Group 176.png' },
    { title: 'Excellence', desc: 'Delivering premium, results-driven care with empathy', icon: '/assets/2/Group 29.png' },
    { title: 'Personalization', desc: 'Designing care tailored to each individual\'s biology.', icon: '/assets/2/Group 31.png' },
    { title: 'Vitality', desc: 'Promoting lifelong health, energy, and wellness.', icon: '/assets/2/Group 34.png' },
    { title: 'Compassion', desc: 'Caring for lives at both cellular & emotional levels.', icon: '/assets/2/Group 34-1.png' },
    { title: 'Collaboration', desc: 'Building strong partnerships for global impact.', icon: '/assets/2/Group 25-1.png' },
    { title: 'Sustainability', desc: 'Supporting regenerative practices for people & planet.', icon: '/assets/2/Group 27.png' }
  ];

  /* Checkerboard: on a 3-col grid, (row+col)%2 !== 0 → blue */
  const isBlueCard = (idx, cols) => {
    const row = Math.floor(idx / cols);
    const col = idx % cols;
    return (row + col) % 2 !== 0;
  };

  return (
    <div className="about-page">
      {/* Section 1: Hero */}
      <section className="about-hero">
        <div className="about-hero-content anim-fade-up">
          <h1 className="about-hero-title">About Us</h1>
          <p className="about-hero-desc">
            At <strong>ReGen Care Africa</strong>, we are redefining the future of healthcare in Africa and
            beyond. Based in Nigeria, we are a pioneering center for <strong>regenerative medicine</strong> and
            <strong> advanced aesthetics</strong>, committed to restoring vitality, extending longevity,
            and enhancing the quality of life.
          </p>
        </div>
      </section>

      {/* Section 2: Combined Science */}
      <section className="about-science-section">
        <div className="about-science-grid">
          <div className="science-left-card">
            <h2 className="science-left-title">
              We Combine <strong>Cutting Edge Science</strong>, Medically Supervised Therapies And <strong>Wellness Programs</strong> That:
            </h2>
          </div>
          <div className="science-right-card">
            <div className="science-pills">
              {sciencePills.map((pill, idx) => (
                <span key={idx} className="science-pill">
                  <img src="/assets/2/Group 35.png" alt="" className="science-pill-icon" />
                  {pill}
                </span>
              ))}
            </div>
            <p className="science-desc">
              Our unique approach blends regenerative medicine, functional diagnostics, concierge healthcare,
              and aesthetic therapies—<strong>tailored to individuals, families, executives, and organizations</strong> seeking
              transformation and peak health.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Vision & Mission */}
      <section className="about-vm-section">
        <div className="about-vm-grid">
          <div className="vm-card vision">
            <img src="/assets/2/Group 146.png" className="vm-image-badge" alt="Vision Icon" />
            <h3 className="vm-title">Vision</h3>
            <p className="vm-text">
              To be <strong>Africa's leading center of excellence in regenerative medicine</strong>,
              pioneering personalized, science-driven, and future-forward healthcare that
              <strong> restores vitality, extends longevity, and optimizes human performance</strong>.
            </p>
          </div>

          <div className="vm-card mission">
            <img src="/assets/2/Group 170.png" className="vm-image-badge" alt="Mission Icon" />
            <h3 className="vm-title">Mission</h3>
            <p className="vm-text">
              To deliver <strong>world-class concierge regenerative healthcare</strong> by integrating
              advanced therapeutics, diagnostics, personalized nutrition, and biotechnology.
              We empower individuals and organizations to achieve <strong>optimal health, slow biological
              aging, and thrive across all stages of life</strong>—through innovation, integrity,
              and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: What We Do */}
      <section className="about-wwd-section">
        <div className="wwd-header">
          <div className="wwd-header-title-row-1">
            What
            <img className="heading-inline-img" src="/assets/2/Group 9.png" alt="" />
          </div>
          <div className="wwd-header-title-row-2">
            We Do
          </div>
          <div className="wwd-subtitle-container">
            <div className="wwd-header-divider"></div>
            <p className="wwd-subtitle">We provide comprehensive services that bridge science and wellness:</p>
          </div>
        </div>

        <div className="wwd-grid">
          <div className="wwd-image-col">
            <img src="/assets/2/Mask group.png" alt="Clinical treatment" />
          </div>
          <div className="wwd-cards-grid">
            {whatWeDoCards.map((card, idx) => {
              const blue = isBlueCard(idx, 3);
              return (
                <div key={idx} className={`wwd-grid-card ${blue ? 'blue' : 'white'}`}>
                  <div className="wwd-card-num">{card.num}</div>
                  <p className="wwd-card-text">{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose Us */}
      <section className="about-wcu-section">
        <div className="wcu-header">
          <div className="wcu-header-title-row-1">
            Why
          </div>
          <div className="wcu-header-title-row-2">
            Choose Us
          </div>
          <div className="wcu-subtitle-container">
            <div className="wcu-header-divider"></div>
            <p className="wcu-subtitle">Choosing ReGen Care Africa means choosing a partner in your health journey:</p>
          </div>
        </div>

        <div className="wcu-grid">
          <div className="wcu-cards-grid">
            {whyChooseUsCards.map((card, idx) => {
              const blue = isBlueCard(idx, 3);
              return (
                <div key={idx} className={`wwd-grid-card ${blue ? 'blue' : 'white'}`}>
                  <div className="wwd-card-num">{card.num}</div>
                  <p className="wwd-card-text">{card.text}</p>
                </div>
              );
            })}
          </div>
          <div className="wcu-image-col">
            <img src="/assets/2/Mask group-1.png" alt="Patient consultation" />
          </div>
        </div>
      </section>

      {/* Section 6: Our Core Values */}
      <section className="about-values-section">
        <div className="values-header">
          <h2 className="values-title">Our Core<br />Values</h2>
        </div>

        <div className="values-grid">
          {coreValues.map((value, idx) => (
            <div key={idx} className="value-card">
              <div className="value-icon-circle">
                <img src={value.icon} alt={value.title} />
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-desc">{value.desc}</p>
            </div>
          ))}

          {/* 9th Card - Explore All Services CTA */}
          <div className="about-explore-card">
            <div className="about-explore-card-top">
              <h3 className="about-explore-title">Explore<br />All Services</h3>
              <p className="about-explore-subtext">Science-Driven Care for Every Stage of Life.</p>
            </div>
            <div className="about-explore-buttons">
              <Link to="/treatment" className="btn-about-explore dark">Treatment</Link>
              <Link to="/services" className="btn-about-explore light">Services</Link>
              <Link to="/diagnostics" className="btn-about-explore dark">Diagnostics</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
