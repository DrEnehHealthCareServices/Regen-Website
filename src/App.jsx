import { useEffect } from 'react';
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
import { routeMeta } from './routeMeta';

// ScrollToTop helper to ensure page resets scroll on routing
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// SEOManager updates document titles and tags dynamically for in-app client-side navigation
function SEOManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const meta = routeMeta[pathname] || routeMeta['/'];
    if (meta) {
      // 1. Update Title
      document.title = meta.title;

      // 2. Update Description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', meta.description);

      // 3. Update Canonical Link
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', meta.canonical);
    }
  }, [pathname]);

  return null;
}

// AppRoutes contains the core routing and layouts, reusable by both Client and SSR Server
export function AppRoutes() {
  return (
    <Layout>
      <SEOManager />
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
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}
