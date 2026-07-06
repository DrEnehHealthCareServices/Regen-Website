import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Check } from 'lucide-react';
import './OtherTherapies.css';

export default function OtherTherapies() {
  const benefits = [
    'Fast, non-invasive treatments.',
    'Enhanced recovery & peak performance.',
    'Immune-boosting & anti-inflammatory effects.',
    'Pain relief & accelerated healing.',
    'Holistic support for body & mind.'
  ];

  const whyChooseUs = [
    'Cutting-edge regenerative & functional therapies.',
    'Delivered by specialists with medical supervision.',
    'Personalized care tailored to health goals.',
    'Premium clinic experience with world-class standards.'
  ];

  return (
    <div className="other-page">
      {/* 1. Hero Section */}
      <section className="other-hero">
        <div className="other-hero-container">
          <div className="other-hero-content anim-fade-up">
            <span className="other-hero-tag">INNOVATIVE TREATMENTS FOR RECOVERY, REGENERATION, AND PEAK PERFORMANCE.</span>
            <h1 className="other-hero-title">
              Other Therapies
            </h1>
            <p className="other-hero-desc">
              At ReGen Care Africa, we offer world-class restorative and performance therapies
              designed to optimize recovery, enhance immunity, relieve pain, and support overall
              well-being. Whether you're seeking faster healing, cellular renewal, or total body
              reset — our therapies deliver real results.
            </p>
            <div className="other-hero-actions">
              <Link to="/contact" className="btn btn-appointment">
                Book an Appointment
              </Link>
              <a href="https://wa.me/2347060643156" target="_blank" rel="noopener noreferrer" className="other-phone-btn" aria-label="WhatsApp Us">
                <Phone size={22} fill="currentColor" />
              </a>
            </div>
          </div>
          <div className="other-hero-image-col">
            <img src="/assets/11/Group 89.png" alt="Oxygen chambers and lab equipment" className="other-hero-img" />
          </div>
        </div>
      </section>

      {/* 2. Our Therapies Section */}
      <section className="other-treatments">
        <div className="other-treatments-container">
          <div className="other-treatments-header">
            <h2 className="other-main-title">Our Therapies</h2>
            <p className="other-intro-text">
              Our suite of <strong>complementary and advanced medical therapies</strong> combines the latest in regenerative medicine, functional recovery, and holistic wellness. These non-invasive treatments help patients:
            </p>
            <p className="other-intro-subtext">
              Speed up healing and recovery. <strong>Boost cellular performance.</strong> Reduce inflammation and pain. <strong>Improve mental and physical resilience.</strong>
            </p>
          </div>

          <div className="other-grid">
            {/* Row 1 */}
            <div className="other-card bg-blue">
              <div className="other-card-top">
                <h3 className="other-card-title">Ozone Therapy</h3>
                <div className="other-list-content">
                  <p className="other-bullet">Delivers oxygen-enriched blood circulation.</p>
                  <p className="other-bullet">Enhances immune system function.</p>
                  <p className="other-bullet">Supports detoxification & chronic disease management.</p>
                </div>
              </div>
            </div>

            <div className="other-card bg-navy">
              <div className="other-card-top">
                <h3 className="other-card-title">Hyperbaric Oxygen<br />Therapy (HBOT)</h3>
                <div className="other-list-content">
                  <p className="other-bullet">Patients breathe pure oxygen in a pressurized chamber.</p>
                  <p className="other-bullet">Speeds up wound and injury recovery.</p>
                  <p className="other-bullet">Improves brain function and cellular healing.</p>
                </div>
              </div>
            </div>

            <div className="other-image-card">
              <img src="/assets/11/Rectangle 17.png" alt="Patient inside a hyperbaric oxygen chamber" className="other-card-img" />
            </div>

            {/* Row 2 */}
            <div className="other-card bg-navy">
              <div className="other-card-top">
                <h3 className="other-card-title">Cryotherapy</h3>
                <div className="other-list-content">
                  <p className="other-bullet">Exposes the body to ultra-low temperatures for a few minutes.</p>
                  <p className="other-bullet">Reduces inflammation and joint pain.</p>
                  <p className="other-bullet">Boosts energy, metabolism, and immune defense.</p>
                </div>
              </div>
            </div>

            <div className="other-image-card">
              <img src="/assets/11/Rectangle 17-1.png" alt="Patient in vertical cryotherapy chamber" className="other-card-img" />
            </div>

            <div className="other-card bg-blue">
              <div className="other-card-top">
                <h3 className="other-card-title">Flotation Therapy</h3>
                <div className="other-list-content">
                  <p className="other-bullet">Sensory-deprivation therapy in magnesium-enriched water.</p>
                  <p className="other-bullet">Reduces stress, anxiety, and muscle tension.</p>
                  <p className="other-bullet">Enhances mental clarity and creativity.</p>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="other-image-card">
              <img src="/assets/11/Rectangle 17-2.png" alt="Cold compression unit device screen" className="other-card-img" />
            </div>

            <div className="other-card bg-blue">
              <div className="other-card-top">
                <h3 className="other-card-title">Cold Compression<br />Therapy</h3>
                <div className="other-list-content">
                  <p className="other-bullet">Combines cold temperature with compression.</p>
                  <p className="other-bullet">Accelerates healing from sports injuries.</p>
                  <p className="other-bullet">Reduces swelling and promotes faster recovery.</p>
                </div>
              </div>
            </div>

            <div className="other-card bg-navy">
              <div className="other-card-top">
                <h3 className="other-card-title">Shock-Wave Therapy</h3>
                <div className="other-list-content">
                  <p className="other-bullet">Uses acoustic waves to stimulate blood flow and healing.</p>
                  <p className="other-bullet">Effective for chronic pain, tendonitis, and musculoskeletal issues.</p>
                  <p className="other-bullet">Non-invasive and drug-free alternative to surgery.</p>
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div className="other-card bg-blue other-span-2-cols">
              <div className="other-card-top">
                <h3 className="other-card-title">Laser Therapies</h3>
                <div className="other-double-col-wrapper">
                  <div className="other-sub-col">
                    <p className="other-bullet"><strong>Photo Biomodulation (LLLT)</strong>: Stimulates cellular repair & regeneration.</p>
                    <p className="other-bullet"><strong>MBST Therapy</strong>: Magnetic resonance therapy for bones, joints & cartilage.</p>
                    <p className="other-bullet"><strong>Fractional CO2 Laser</strong>: Resurfaces skin & reduces scars.</p>
                  </div>
                  <div className="other-sub-col">
                    <p className="other-bullet"><strong>Er:YAG Laser (2940)</strong>: Improves skin texture & tone.</p>
                    <p className="other-bullet"><strong>Diode Laser (800–980 nm)</strong>: Targets hair removal & vascular lesions.</p>
                    <p className="other-bullet"><strong>Nd:YAG Laser (1064 nm)</strong>: Treats deep tissue, vascular & pigmentation issues.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="other-image-card">
              <img src="/assets/11/Rectangle 17-3.png" alt="Doctor performing laser probe therapy" className="other-card-img" />
            </div>

            {/* Row 5 */}
            <div className="other-card bg-navy">
              <div className="other-card-top">
                <h3 className="other-card-title">Cool Sculpting</h3>
                <div className="other-list-content">
                  <p className="other-bullet">Non-surgical fat-freezing procedure.</p>
                  <p className="other-bullet">Eliminates stubborn fat cells permanently.</p>
                  <p className="other-bullet">Safe, effective body contouring with no downtime.</p>
                </div>
              </div>
            </div>

            <div className="other-image-card">
              <img src="/assets/11/Rectangle 17-4.png" alt="Patient undergoing Cool Sculpting session" className="other-card-img" />
            </div>

            <div className="other-card bg-blue">
              <div className="other-card-top">
                <h3 className="other-card-title">Total Plasma<br />Exchange (TPE)</h3>
                <div className="other-list-content">
                  <p className="other-bullet">Filters and purifies the blood to remove harmful systemic toxins.</p>
                  <p className="other-bullet">Clears inflammatory proteins and circulating metabolic waste.</p>
                  <p className="other-bullet">Resets the immune system to optimize foundational cellular health.</p>
                </div>
              </div>
            </div>

            {/* Row 6 */}
            <div className="other-image-card">
              <img src="/assets/11/Rectangle 17-5.png" alt="Patient sitting next to EBOO equipment unit" className="other-card-img" />
            </div>

            <div className="other-card bg-navy">
              <div className="other-card-top">
                <h3 className="other-card-title">Extracorporeal Blood<br />Oxygenation And Ozonation<br />Therapy (EBOO)</h3>
                <div className="other-list-content">
                  <p className="other-bullet">Delivers advanced extracorporeal blood oxygenation and ozonation.</p>
                  <p className="other-bullet">Neutralizes viral or bacterial loads within a closed-loop filtration system.</p>
                  <p className="other-bullet">Reduces oxidative stress and significantly boosts daily cellular energy.</p>
                </div>
              </div>
            </div>

            <div className="other-card bg-blue">
              <div className="other-card-top">
                <h3 className="other-card-title">Ultraviolet Blood<br />Irradiation (UBI)<br />Therapy</h3>
                <div className="other-list-content">
                  <p className="other-bullet">Exposes a portion of the blood to specific wavelengths of ultraviolet light.</p>
                  <p className="other-bullet">Acts as a natural antiviral agent to safely eliminate circulating pathogens.</p>
                  <p className="other-bullet">Improves microcirculation and elevates the body's innate immune response.</p>
                </div>
              </div>
            </div>

            {/* Row 7 */}
            <div className="other-card bg-blue">
              <div className="other-card-top">
                <h3 className="other-card-title">DEXA Scan</h3>
                <div className="other-list-content">
                  <p className="other-bullet">The gold standard for measuring precise bone mineral density and skeletal strength.</p>
                  <p className="other-bullet">Accurately maps total body composition by separating fat mass from lean muscle.</p>
                  <p className="other-bullet">Identifies hidden, high-risk visceral fat surrounding internal organs to optimize longevity.</p>
                </div>
              </div>
            </div>

            <div className="other-image-card other-span-2-cols">
              <img src="/assets/11/Rectangle 17-6.png" alt="DEXA bone density scanner unit and diagnostic screens" className="other-card-img" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Benefits & Why Choose Us Split Columns */}
      <section className="other-benefits-split">
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
              Why<br />Choose Us
            </h2>
            <div className="split-list">
              {whyChooseUs.map((text, idx) => (
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
      <section className="other-cta">
        <div className="other-cta-content">
          <h2 className="other-cta-title">
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
