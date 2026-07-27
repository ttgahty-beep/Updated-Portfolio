import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { ParticleWave } from './components/ParticleWave';

// Main Portfolio Single Page View
function PortfolioContent() {
  const [activeSection, setActiveSection] = useState('home');
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const handleNavigateToContact = () => {
    setActiveSection('contact');
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative text-[#18181B] min-h-screen flex flex-col font-sans selection:bg-[#333333] selection:text-white bg-white">
      {/* 3D Particle Wave Background Canvas */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleWave className="w-full h-full" />
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Header */}
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <HomeSection
            onOpenCVModal={() => setIsCVModalOpen(true)}
            onNavigateToContact={handleNavigateToContact}
          />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* App Footer */}
        <Footer />
      </div>

      {/* Curriculum Vitae Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PortfolioContent />} />
      </Routes>
    </Router>
  );
}
