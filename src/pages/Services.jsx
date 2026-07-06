import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import './Services.css';

export default function Services() {
  const serviceCards = [
    // Row 1
    {
      type: 'card',
      id: 'cellular-therapy',
      title: 'Cellular\nTherapy',
      bgType: 'navy',
      text: "Harness the body's own healing power with Stem Cell Therapy, Exosomes, PRP, NK Cells, and NAD+ to restore function, repair tissue, Muse Cells, RPA Therapies and slow aging.",
      path: '/services/cellular-therapy'
    },
    {
      type: 'image',
      src: '/assets/4/Rectangle 17.png',
      alt: 'Cellular Therapy Clinic Session'
    },
    {
      type: 'card',
      id: 'aesthetics-anti-aging',
      title: 'Aesthetics &\nAnti-Aging\nTherapy',
      bgType: 'blue',
      text: 'Look and feel your best with Botox, Fillers, HydraFacials, Micro-Needling, Skin Boosters, Acne Treatments, and more. Advanced treatments that restore confidence and youthfulness.',
      path: '/services/aesthetics-anti-aging'
    },
    // Row 2
    {
      type: 'card',
      id: 'pain-management',
      title: 'Pain\nManagement',
      bgType: 'blue',
      text: 'Effective, regenerative treatments for osteoarthritis, back pain, tendonitis, fibromyalgia, and sports injuries. Designed to reduce inflammation, restore mobility, and accelerate healing.',
      path: '/services/pain-management'
    },
    {
      type: 'card',
      id: 'hormonal-replacement',
      title: 'Hormonal\nReplacement\nTherapy',
      bgType: 'navy',
      text: 'Personalized hormone balancing programs for men and women. Solutions for menopause, andropause, low libido, fatigue, infertility, and more—helping restore balance and vitality.',
      path: '/services/hormonal-replacement'
    },
    {
      type: 'image',
      src: '/assets/4/Rectangle 17-1.png',
      alt: 'Hormonal Replacement consultation'
    },
    // Row 3
    {
      type: 'card',
      id: 'peptide-senolytics',
      title: 'Peptide\nTherapy &\nSenolytics',
      bgType: 'navy',
      text: "Advanced peptide protocols that support anti-aging, brain health, fat loss, immune function, and vitality. Designed to optimize your body's performance and longevity.",
      path: '/services/peptide-senolytics'
    },
    {
      type: 'image',
      src: '/assets/4/Rectangle 17-2.png',
      alt: 'Peptide therapy patient session'
    },
    {
      type: 'card',
      id: 'hair-replacement',
      title: 'Hair\nReplacement\nTherapy',
      bgType: 'blue',
      text: 'Cutting-edge treatments for baldness and hair loss, including G Cell Therapy, Exosome Hair Therapy, and Implants. Helping you restore confidence and natural growth.',
      path: '/services/hair-replacement'
    },
    // Row 4
    {
      type: 'card',
      id: 'other-therapies',
      title: 'Other Therapies',
      bgType: 'blue',
      text: 'Specialized recovery and wellness solutions, including Ozone Therapy, Hyperbaric Oxygen, Cryotherapy, Shockwave, Total Plasma Exchange (TPE), EBOO Therapy, UBI Therapy, Dexa Scan and Laser Therapies. Science-backed methods to accelerate healing and improve quality of life.',
      path: '/services/other-therapies'
    },
    {
      type: 'card',
      id: 'iv-drip',
      title: 'IV Drip Therapy',
      bgType: 'navy',
      text: 'Targeted IV drips for immunity, energy, beauty, detox, weight loss, recovery, and anti-aging. Customized infusions designed for rapid results.',
      path: '/services/iv-drip'
    },
    {
      type: 'image',
      src: '/assets/4/Rectangle 17-3.png',
      alt: 'IV Drip Therapy session'
    }
  ];

  return (
    <div className="services-page">
      {/* 1. Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content anim-fade-up">
          <h1 className="services-hero-title">
            Our Services: <br />Science, Care & <br />Personalization
          </h1>
          <p className="services-hero-desc">
            At ReGen Care Africa, we offer an extensive range of regenerative, functional, and
            aesthetic therapies designed to restore health, reverse aging, and optimize vitality.
            Whether you're seeking relief from chronic pain, revitalization, or preventative
            longevity solutions, our services are tailored to your unique biology.
          </p>
          <div className="services-hero-actions">
            <Link to="/contact" className="btn btn-appointment">
              Book an Appointment
            </Link>
            <a href="https://wa.me/2347060643156" target="_blank" rel="noopener noreferrer" className="services-phone-btn" aria-label="WhatsApp Us">
              <Phone size={22} fill="currentColor" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Explore Services Grid */}
      <section className="services-explore">
        <div className="services-grid-container">
          <div className="services-header-col">
            <h2 className="services-main-title">
              Explore<br />Services
            </h2>
          </div>

          <div className="services-grid">
            {(() => {
              let textCardCount = 0;
              return serviceCards.map((item, idx) => {
                if (item.type === 'image') {
                  return (
                    <div key={idx} className="services-image-card">
                      <img src={item.src} alt={item.alt} className="services-card-img" />
                    </div>
                  );
                }

                const bgClass = textCardCount % 2 === 0 ? 'navy' : 'blue';
                textCardCount++;

                return (
                  <div key={idx} className={`services-text-card bg-${bgClass}`}>
                    <h3 className="services-card-title">{item.title}</h3>
                    <p className="services-card-text">{item.text}</p>
                    <Link to={item.path} className="services-card-link">
                      Learn more ↗
                    </Link>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="services-cta">
        <div className="services-cta-container">
          <div className="services-cta-content">
            <h2 className="services-cta-title">
              Discover Which<br />Service Is Right<br />For You.
            </h2>
            <Link to="/contact" className="btn btn-cta-consult">
              Book a Consultation Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
