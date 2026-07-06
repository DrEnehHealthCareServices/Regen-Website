import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Check } from 'lucide-react';
import './IVDrip.css';

export default function IVDrip() {
  const benefits = [
    'Immediate hydration & energy boost.',
    'Glowing skin & anti-aging effects.',
    'Enhanced immunity & illness protection.',
    'Detox & faster recovery after stress, illness, or exertion.',
    'Tailored blends for your unique needs.'
  ];

  const whotsfor = [
    'Busy professionals.',
    'Athletes & fitness enthusiasts.',
    'Patients recovering from illness or fatigue.',
    'Anyone seeking beauty, vitality, and total body balance.'
  ];

  return (
    <div className="iv-page">
      {/* 1. Hero Section */}
      <section className="iv-hero">
        <div className="iv-hero-container">
          <div className="iv-hero-content anim-fade-up">
            <span className="iv-hero-tag">REVITALIZE, REHYDRATE, AND REJUVENATE — FROM THE INSIDE OUT.</span>
            <h1 className="iv-hero-title">
              IV Drip Therapy
            </h1>
            <p className="iv-hero-desc">
              At ReGen Care Africa, our IV Drip Therapy delivers a powerful blend of vitamins,
              minerals, antioxidants, and amino acids directly into your bloodstream — for faster
              absorption, immediate effects, and long-lasting benefits.
            </p>
            <div className="iv-hero-actions">
              <Link to="/contact" className="btn btn-appointment">
                Book an Appointment
              </Link>
              <a href="https://wa.me/2347060643156" target="_blank" rel="noopener noreferrer" className="iv-phone-btn" aria-label="WhatsApp Us">
                <Phone size={22} fill="currentColor" />
              </a>
            </div>
          </div>
          <div className="iv-hero-image-col">
            <img src="/assets/12/Group 89.png" alt="Male patient receiving IV drip treatment" className="iv-hero-img" />
          </div>
        </div>
      </section>

      {/* 2. Our IV Drip Menu Section */}
      <section className="iv-treatments">
        <div className="iv-treatments-container">
          <div className="iv-treatments-header">
            <h2 className="iv-main-title">Our IV Drip Menu</h2>
            <p className="iv-intro-text">
              Unlike oral supplements, IV therapy bypasses digestion, ensuring <strong>100% nutrient absorption.</strong>
            </p>
            <p className="iv-intro-subtext">
              Whether you're seeking <strong>peak performance, glowing skin, stronger immunity, or fast recovery</strong>, our tailored IV drips help you look better, feel better, <strong>and live better.</strong>
            </p>
          </div>

          <div className="iv-grid">
            {/* Row 1 */}
            <div className="iv-card bg-navy">
              <div className="iv-card-top">
                <h3 className="iv-card-title">Immune Boost</h3>
                <p className="iv-card-text">
                  Strengthens your body's defenses against infections & illnesses.
                </p>
                
                <h3 className="iv-card-title iv-mt-lg">Energy Boost</h3>
                <p className="iv-card-text">
                  Recharge instantly with B vitamins & electrolytes for stamina and focus.
                </p>
              </div>
            </div>

            <div className="iv-card bg-blue">
              <div className="iv-card-top">
                <h3 className="iv-card-title">Beauty (Radiant) Drip</h3>
                <p className="iv-card-text">
                  Brightens skin, strengthens hair & nails, restores youthful glow.
                </p>

                <h3 className="iv-card-title iv-mt-lg">Whitening Drip</h3>
                <p className="iv-card-text">
                  Evens skin tone, reduces pigmentation, and enhances radiance.
                </p>
              </div>
            </div>

            <div className="iv-image-card">
              <img src="/assets/12/Rectangle 17.png" alt="IV infusion stand and patient arm" className="iv-card-img" />
            </div>

            {/* Row 2 */}
            <div className="iv-image-card">
              <img src="/assets/12/Rectangle 17-1.png" alt="Patient receiving IV fluids in a recliner chair" className="iv-card-img" />
            </div>

            <div className="iv-card bg-navy">
              <div className="iv-card-top">
                <h3 className="iv-card-title">Super Immune Boost</h3>
                <p className="iv-card-text">
                  High-dose vitamin C + antioxidants for maximum immune protection.
                </p>

                <h3 className="iv-card-title iv-mt-lg">Cocktails</h3>
                <p className="iv-card-text">
                  Custom-blended drips tailored to your wellness needs.
                </p>
              </div>
            </div>

            <div className="iv-card bg-blue">
              <div className="iv-card-top">
                <h3 className="iv-card-title">Slim (Weight Loss) Drip</h3>
                <p className="iv-card-text">
                  Boosts metabolism, burns fat, and supports weight management.
                </p>

                <h3 className="iv-card-title iv-mt-lg">Amplified Beauty<br />(Beauty + Anti-Aging)</h3>
                <p className="iv-card-text">
                  Combines skin brightening, hydration, and anti-aging nutrients.
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="iv-card bg-navy">
              <div className="iv-card-top">
                <h3 className="iv-card-title">Timeless Beauty –<br />Placenta</h3>
                <p className="iv-card-text">
                  Supports cellular renewal, collagen production & age reversal benefits.
                </p>

                <h3 className="iv-card-title iv-mt-lg">Super Detox Drip</h3>
                <p className="iv-card-text">
                  Flushes toxins, supports liver health, and restores vitality.
                </p>
              </div>
            </div>

            <div className="iv-card bg-blue">
              <div className="iv-card-top">
                <h3 className="iv-card-title">Recovery Drip</h3>
                <p className="iv-card-text">
                  Speeds up muscle recovery, reduces fatigue, and replenishes lost nutrients.
                </p>

                <h3 className="iv-card-title iv-mt-lg">Hangover Drip</h3>
                <p className="iv-card-text">
                  Instant relief for dehydration, headache, and fatigue after alcohol intake.
                </p>
              </div>
            </div>

            <div className="iv-image-card">
              <img src="/assets/12/Rectangle 17-2.png" alt="Female patient receiving IV drip hydration" className="iv-card-img" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Benefits & Who It's For Split Columns */}
      <section className="iv-benefits-split">
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
      <section className="iv-cta">
        <div className="iv-cta-content">
          <h2 className="iv-cta-title">
            Take charge of your energy, beauty, and health with personalized IV Drip Therapy.
          </h2>
          <Link to="/contact" className="btn btn-cta-blue">
            Book Your Drip Now
          </Link>
        </div>
      </section>
    </div>
  );
}
