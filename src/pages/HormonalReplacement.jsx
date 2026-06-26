import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import './HormonalReplacement.css';

export default function HormonalReplacement() {
  const whyChooseUs = [
    'Personalized, lab-based hormone evaluation.',
    'Safe & natural bioidentical hormone options.',
    'Holistic integration with nutrition, lifestyle & cellular therapies.',
    'Continuous monitoring & medical guidance.',
    'Discreet, patient-centered care.'
  ];

  return (
    <div className="hrt-page">
      {/* 1. Hero Section */}
      <section className="hrt-hero">
        <div className="hrt-hero-container">
          <div className="hrt-hero-content anim-fade-up">
            <span className="hrt-hero-tag">DON'T LET HORMONAL IMBALANCE CONTROL YOUR LIFE — TAKE CHARGE NATURALLY.</span>
            <h1 className="hrt-hero-title">
              Hormonal Replacement <br />Therapy (HRT)
            </h1>
            <p className="hrt-hero-desc">
              At ReGen Care Africa, our personalized Hormonal Replacement Therapy programs
              restore balance for both women and men, addressing fatigue, mood swings,
              low libido, and age-related hormonal decline.
            </p>
            <div className="hrt-hero-actions">
              <Link to="/contact" className="btn btn-appointment">
                Book an Appointment
              </Link>
              <a href="https://wa.me/2347060643156" target="_blank" rel="noopener noreferrer" className="hrt-phone-btn" aria-label="WhatsApp Us">
                <Phone size={22} fill="currentColor" />
              </a>
            </div>
          </div>
          <div className="hrt-hero-image-col">
            <img src="/assets/8/Group 89.png" alt="Clinical analysis of hormones" className="hrt-hero-img" />
          </div>
        </div>
      </section>

      {/* 2. Our Hormonal Replacement Therapy Section */}
      <section className="hrt-treatments">
        <div className="hrt-treatments-container">
          <div className="hrt-treatments-header">
            <h2 className="hrt-main-title">Our Hormonal Replacement Therapy</h2>
            <p className="hrt-intro-text">
              Hormones play a critical role in your <strong>energy, mood, metabolism, and sexual health.</strong> As we age—or due to medical conditions—hormones can become imbalanced, leading to <strong>physical and emotional challenges.</strong>
            </p>
            <p className="hrt-intro-subtext">
              Our <strong>tailored bioidentical hormone therapies</strong> help restore optimal function, improve longevity, and support overall well-being for women and men.
            </p>
          </div>

          {/* Women's Block */}
          <div className="hrt-gender-block">
            {/* Left Card: Spans 2 rows */}
            <div className="hrt-card bg-blue hrt-span-2-rows">
              <div className="hrt-card-top">
                <h3 className="hrt-card-title">HRT For Women</h3>
                <h4 className="hrt-card-subtitle">Common Conditions We Treat:</h4>
                <div className="hrt-list-content">
                  <p className="hrt-bullet">
                    <strong>Menopause, Feminopause & Post–Menopause</strong> – hot flashes, mood swings, night sweats.
                  </p>
                  <p className="hrt-bullet">
                    <strong>Premenstrual Syndrome (PMS) & PCOS</strong> – hormonal fluctuations, irregular cycles.
                  </p>
                  <p className="hrt-bullet">
                    <strong>Low Libido, Vaginal Dryness & Depression</strong> – restore intimacy & emotional balance.
                  </p>
                  <p className="hrt-bullet">
                    <strong>Osteoporosis & Hair Loss</strong> – strengthen bones and enhance appearance.
                  </p>
                  <p className="hrt-bullet">
                    <strong>Infertility & Fertility Work–Up</strong> – support conception naturally.
                  </p>
                  <p className="hrt-bullet">
                    <strong>Chronic Fatigue Syndrome</strong> – boost energy and vitality.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card 1: Benefits */}
            <div className="hrt-card bg-navy">
              <div className="hrt-card-top">
                <h3 className="hrt-card-title">Benefits For Women</h3>
                <div className="hrt-list-content compact">
                  <p className="hrt-bullet-simple">• Balanced mood and improved sleep.</p>
                  <p className="hrt-bullet-simple">• Restored feminine vitality & confidence.</p>
                  <p className="hrt-bullet-simple">• Reduced menopause & PMS symptoms.</p>
                  <p className="hrt-bullet-simple">• Stronger bones and better metabolism.</p>
                  <p className="hrt-bullet-simple">• Renewed sexual health and fertility support.</p>
                </div>
              </div>
            </div>

            {/* Right Card 2: Image */}
            <div className="hrt-image-card">
              <img src="/assets/8/Rectangle 17.png" alt="Doctor consulting female patient" className="hrt-card-img" />
            </div>
          </div>

          {/* Men's Block */}
          <div className="hrt-gender-block">
            {/* Left Card: Spans 2 rows */}
            <div className="hrt-card bg-navy hrt-span-2-rows">
              <div className="hrt-card-top">
                <h3 className="hrt-card-title">HRT For Men</h3>
                <h4 className="hrt-card-subtitle">Common Conditions We Treat:</h4>
                <div className="hrt-list-content">
                  <p className="hrt-bullet">
                    <strong>Andropause (Male Menopause)</strong> – fatigue, mood decline, muscle loss.
                  </p>
                  <p className="hrt-bullet">
                    <strong>Erectile Dysfunction & Low Libido</strong> – restore confidence & intimacy.
                  </p>
                  <p className="hrt-bullet">
                    <strong>Thyroid & Adrenal Disorders</strong> – stabilize energy, stress & metabolism.
                  </p>
                  <p className="hrt-bullet">
                    <strong>Insomnia, Anxiety & Memory Loss</strong> – improve cognitive health.
                  </p>
                  <p className="hrt-bullet">
                    <strong>Reduced Muscle Strength</strong> – restore vitality & performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card 1: Benefits */}
            <div className="hrt-card bg-blue">
              <div className="hrt-card-top">
                <h3 className="hrt-card-title">Benefits For Men</h3>
                <div className="hrt-list-content compact">
                  <p className="hrt-bullet-simple">• Boosted energy and endurance.</p>
                  <p className="hrt-bullet-simple">• Improved sexual performance & libido.</p>
                  <p className="hrt-bullet-simple">• Greater muscle tone & physical strength.</p>
                  <p className="hrt-bullet-simple">• Sharper memory and mental clarity.</p>
                  <p className="hrt-bullet-simple">• Reduced stress, better sleep & overall vitality.</p>
                </div>
              </div>
            </div>

            {/* Right Card 2: Image */}
            <div className="hrt-image-card">
              <img src="/assets/8/Rectangle 17-1.png" alt="Doctor consulting male patient" className="hrt-card-img" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us Split columns */}
      <section className="hrt-why-choose-us">
        <div className="hrt-wcu-container">
          <div className="hrt-wcu-image-col">
            <img src="/assets/8/Rectangle 42.png" alt="Doctor holding patient's wrist" className="hrt-wcu-img" />
          </div>
          <div className="hrt-wcu-content-col">
            <div className="hrt-wcu-inner">
              <h2 className="hrt-wcu-title">Why Choose Us?</h2>
              <div className="hrt-wcu-list">
                {whyChooseUs.map((text, idx) => (
                  <div key={idx} className="hrt-wcu-item">
                    <div className="hrt-wcu-badge">{idx + 1}</div>
                    <p className="hrt-wcu-text">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="hrt-cta">
        <div className="hrt-cta-content">
          <h2 className="hrt-cta-title">
            Don't accept fatigue, mood swings, or low vitality as "normal aging." With Hormonal Replacement Therapy, you can reclaim your energy, health, and confidence.
          </h2>
          <Link to="/contact" className="btn btn-cta-blue">
            Book Your Hormone Balance Consultation Now
          </Link>
        </div>
      </section>
    </div>
  );
}
