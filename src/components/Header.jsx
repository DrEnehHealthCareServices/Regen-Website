import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const servicesList = [
    { name: 'Cellular Therapy', path: '/services/cellular-therapy' },
    { name: 'Aesthetics & Anti-Aging Therapy', path: '/services/aesthetics-anti-aging' },
    { name: 'Pain Management', path: '/services/pain-management' },
    { name: 'Hormonal Replacement Therapy', path: '/services/hormonal-replacement' },
    { name: 'Peptide Therapy & Senolytics', path: '/services/peptide-senolytics' },
    { name: 'Hair Replacement Therapy', path: '/services/hair-replacement' },
    { name: 'Other Therapies', path: '/services/other-therapies' },
    { name: 'IV Drip Therapy', path: '/services/iv-drip' }
  ];

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Left Side Links */}
        <nav className="nav-menu left">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About us
          </NavLink>
          <NavLink to="/treatment" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Treatment
          </NavLink>
        </nav>

        {/* Center Logo */}
        <Link to="/" className="header-logo" aria-label="ReGen Care Africa Home">
          <img src="/assets/1/Group of 4 Objects.png" alt="ReGen Care Africa Logo" />
        </Link>

        {/* Right Side Links */}
        <nav className="nav-menu right">
          <div className="nav-item">
            <Link to="/services" className={`nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`}>
              Services <ChevronDown size={14} />
            </Link>
            <div className="dropdown-menu">
              {servicesList.map((service, idx) => (
                <Link key={idx} to={service.path} className="dropdown-link">
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          <NavLink to="/diagnostics" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Diagnostics
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Blog
          </NavLink>
          <NavLink to="/contact" className="nav-link nav-btn">
            Contact
          </NavLink>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          About us
        </NavLink>
        <NavLink to="/treatment" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          Treatment
        </NavLink>
        
        {/* Mobile Dropdown Toggler */}
        <div className="nav-item-mobile">
          <div 
            className="nav-link" 
            style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', paddingRight: 0 }}
          >
            <Link to="/services" onClick={() => setMobileMenuOpen(false)} style={{ flexGrow: 1 }}>
              Services
            </Link>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setMobileServicesOpen(!mobileServicesOpen);
              }}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'inherit',
                padding: '12px 20px', 
                cursor: 'pointer', 
                display: 'flex', 
                alignItems: 'center' 
              }}
              aria-label="Toggle services menu"
            >
              <ChevronDown size={18} style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
            </button>
          </div>
          {mobileServicesOpen && (
            <div className="dropdown-links-mobile">
              {servicesList.map((service, idx) => (
                <Link key={idx} to={service.path} className="dropdown-link">
                  {service.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <NavLink to="/diagnostics" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          Diagnostics
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          Blog
        </NavLink>
        <NavLink to="/contact" className="nav-btn" style={{ textAlign: 'center', marginTop: '16px' }}>
          Contact
        </NavLink>
      </div>
    </header>
  );
}
