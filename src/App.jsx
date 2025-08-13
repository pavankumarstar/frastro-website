import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Location from './pages/Location';

// Services
import LoveMarriage from './pages/services/LoveMarriage';
import LoveProblem from './pages/services/LoveProblem';
import PalmReading from './pages/services/PalmReading';
import EvilEye from './pages/services/EvilEye';
import BlackMagic from './pages/services/BlackMagic';
import HealthProblem from './pages/services/HealthProblem';
import FamilyProblems from './pages/services/FamilyProblems';
import Negativeenergy from './pages/services/Negativeenergy';
import Tarot from './pages/services/TarotReading';
import Business from './pages/services/Business';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

import FloatingButtons from './components/FloatingButtons';
import ScrollToTop from './components/ScrollToTop';
import Banner from './components/Banner';
import AstroAlert from './components/AstroAlert';

function App() {
  const [showAlert, setShowAlert] = useState(true);
  const [highlight, setHighlight] = useState("");


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Banner />

      {/* Show AstroAlert only if true */}
      {showAlert && <AstroAlert onClose={() => setShowAlert(false)} />}
        <Header/>

      <main className="min-h-screen bg-black text-white p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />

          {/* Services */}
          <Route path="/services/love-marriage" element={<LoveMarriage />} />
          <Route path="/services/love-problem" element={<LoveProblem />} />
          <Route path="/services/palm-reading" element={<PalmReading />} />
          <Route path="/services/evil-eye" element={<EvilEye />} />
          <Route path="/services/black-magic" element={<BlackMagic />} />
          <Route path="/services/health-problem" element={<HealthProblem />} />
          <Route path="/services/family-problems" element={<FamilyProblems />} />
          <Route path="/services/negative-energy" element={<Negativeenergy />} />
          <Route path="/services/business-problems" element={<Business />} />
          <Route path="/services/tarot-reading" element={<Tarot />} />
        </Routes>
      </main>

      <FloatingButtons />
      <Footer />
    </Router>
  );
}

export default App;
