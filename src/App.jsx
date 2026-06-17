import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Treatment from './pages/Treatment';
import Services from './pages/Services';
import CellularTherapy from './pages/CellularTherapy';
import AestheticsAntiAging from './pages/AestheticsAntiAging';
import PainManagement from './pages/PainManagement';
import HormonalReplacement from './pages/HormonalReplacement';
import PeptideSenolytics from './pages/PeptideSenolytics';
import HairReplacement from './pages/HairReplacement';
import OtherTherapies from './pages/OtherTherapies';
import IVDrip from './pages/IVDrip';
import Diagnostics from './pages/Diagnostics';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PlaceholderPage from './pages/PlaceholderPage';

// ScrollToTop helper to ensure page resets scroll on routing
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* Main Top-Level Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/treatment" element={<Treatment />} />
          <Route path="/services" element={<Services />} />
          
          {/* Services Nested Routes */}
          <Route path="/services/cellular-therapy" element={<CellularTherapy />} />
          <Route path="/services/aesthetics-anti-aging" element={<AestheticsAntiAging />} />
          <Route path="/services/pain-management" element={<PainManagement />} />
          <Route path="/services/hormonal-replacement" element={<HormonalReplacement />} />
          <Route path="/services/peptide-senolytics" element={<PeptideSenolytics />} />
          <Route path="/services/hair-replacement" element={<HairReplacement />} />
          <Route path="/services/other-therapies" element={<OtherTherapies />} />
          <Route path="/services/iv-drip" element={<IVDrip />} />
          
          {/* Additional Top-Level Routes */}
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          
          {/* Fallback route */}
          <Route path="*" element={<PlaceholderPage title="404 Not Found" />} />
        </Routes>
      </Layout>
    </Router>
  );
}
