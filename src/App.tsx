import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import KineticGrid from './components/KineticGrid';

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
    <KineticGrid globalColor="monochrome">
      <div className="relative text-foreground min-h-screen flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
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

        {/* Curriculum Vitae Modal */}
        <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
      </div>
    </KineticGrid>
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

