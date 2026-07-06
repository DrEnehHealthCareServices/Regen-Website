import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const expertiseCards = [
    {
      title: 'Cellular Therapies',
      subtext: 'Stem Cells, Exosomes, PRP, NAD+.',
      image: '/assets/1/Group 150.png',
      path: '/services/cellular-therapy'
    },
    {
      title: 'Aesthetics & Anti-Aging',
      subtext: 'Botox, Facials, Thread Lifting, Skin Boosters.',
      image: '/assets/1/Group 150-1.png',
      path: '/services/aesthetics-anti-aging'
    },
    {
      title: 'Pain Management',
      subtext: 'Sports injuries, arthritis, spine & disc conditions.',
      image: '/assets/1/Group 164.png',
      path: '/services/pain-management'
    },
    {
      title: 'Hormone Balance',
      subtext: 'For men & women: energy, fertility, vitality.',
      image: '/assets/1/Group 152.png',
      path: '/services/hormonal-replacement'
    },
    {
      title: 'IV Drip Therapy',
      subtext: 'Immunity, energy, detox, beauty, recovery.',
      image: '/assets/1/Group 153.png',
      path: '/services/iv-drip'
    }
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="hero-content anim-fade-up">
          <h1 className="hero-title">
            Regenerative Medicine For A Healthier, Longer Life
          </h1>
          <p className="hero-description">
            We combine advanced science, personalized therapies, and compassionate
            care to help you heal, restore vitality, and thrive at every stage of life.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-consult">
              Book Free a Free Consult
            </Link>
            <a href="https://wa.me/2347060643156" target="_blank" rel="noopener noreferrer" className="phone-icon-btn" aria-label="WhatsApp Us">
              <Phone size={22} fill="currentColor" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Who We Are Section */}
      <section className="who-we-are-section">
        <div className="who-we-are-header">
          <h2 className="who-we-are-title">Who We Are</h2>
          <p className="who-we-are-subtitle">
            ReGen Care Africa is a pioneering regenerative medicine and aesthetics center
            in Nigeria, blending science and care to restore health at the cellular level.
          </p>
        </div>

        <div className="who-we-are-container">
          <div className="who-we-are-card">
            {/* The left side elements overlap the left-hand blue fade of Group 142.png */}
            <div className="who-we-are-overlay">
              <div className="bullet-card">
                <div className="bullet-num">1</div>
                <div className="bullet-text">Personalized, concierge-level healthcare.</div>
              </div>
              <div className="bullet-card">
                <div className="bullet-num">2</div>
                <div className="bullet-text">Cutting-edge regenerative & aesthetic therapies.</div>
              </div>
              <div className="bullet-card">
                <div className="bullet-num">3</div>
                <div className="bullet-text">Partnerships with global medical leaders.</div>
              </div>
              <div className="bullet-card">
                <div className="bullet-num">4</div>
                <div className="bullet-text">Multidisciplinary team of experts.</div>
              </div>
            </div>
            {/* Right side is intentionally empty because the background image (Group 142.png) 
                already contains the clinical photo in its right column. */}
            <div></div>
          </div>
        </div>
      </section>

      {/* 3. Our Areas Of Expertise Section */}
      <section className="expertise-section">
        <div className="expertise-header">
          <h2 className="expertise-title">Our Areas Of Expertise</h2>
        </div>

        <div className="expertise-grid">
          {expertiseCards.map((card, idx) => (
            <div 
              key={idx} 
              className="expertise-card image-card"
              style={{ backgroundImage: `url('${card.image}')` }}
              onClick={() => navigate(card.path)}
            >
              <div className="expertise-card-content">
                <h3 className="expertise-card-title">{card.title}</h3>
                <p className="expertise-card-subtext">{card.subtext}</p>
              </div>
            </div>
          ))}

          {/* 6th Card - Explore All Services */}
          <div className="explore-card">
            <div className="explore-card-inner">
              <div>
                <h3 className="explore-title">Explore<br />All Services</h3>
                <p className="explore-subtext">Science-Driven Care for Every Stage of Life.</p>
              </div>
              <div className="explore-buttons">
                <Link to="/treatment" className="btn-explore">Treatment</Link>
                <Link to="/services" className="btn-explore">Services</Link>
                <Link to="/diagnostics" className="btn-explore">Diagnostics</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA (Take Control Of Your Health Today) */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Take Control Of <br className="desktop-br" />Your Health Today</h2>
          <p className="cta-description">
            Your journey to vitality, healing, and longevity starts with one step.
            Don't wait—our specialists are ready to guide you.
          </p>
          <Link to="/contact" className="btn btn-cta">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
