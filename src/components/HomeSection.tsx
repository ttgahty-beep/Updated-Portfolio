import React from 'react';
import { Download, Mail, ArrowDown, Github, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TechCube3D } from './TechCube3D';
import { Card3D } from './Card3D';

interface HomeSectionProps {
  onOpenCVModal: () => void;
  onNavigateToContact: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onOpenCVModal, onNavigateToContact }) => {
  return (
    <section id="home" className="min-h-screen pt-28 pb-20 flex flex-col justify-center relative bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Text & Intro Details */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-card/90 backdrop-blur-md border border-border text-xs font-extrabold text-foreground dark:text-white uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-foreground dark:bg-white animate-ping"></span>
              <span className="font-extrabold text-foreground dark:text-white">Software Engineering Student</span>
              <Sparkles className="w-3.5 h-3.5 text-foreground dark:text-white ml-1" />
            </div>

            {/* Greeting & Name */}
            <div>
              <p className="text-foreground dark:text-white font-mono text-xs uppercase tracking-widest mb-1.5 font-extrabold">Portfolio & Overview</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground dark:text-white tracking-tight">
                Ahtesham
              </h1>
              <p className="text-xl sm:text-2xl font-extrabold text-foreground dark:text-white mt-2">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Short Introduction in 3D Card */}
            <Card3D depth={8} glowColor="rgba(66, 146, 103, 0.2)">
              <div className="bg-card/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-border shadow-md">
                <p className="text-foreground text-base sm:text-lg font-medium leading-relaxed">
                  {PERSONAL_INFO.shortBio}
                </p>
              </div>
            </Card3D>

            {/* Key Technology Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mr-1">Stack:</span>
              {['Java', 'TypeScript', 'React', 'Express.js', 'SQL', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-lg bg-secondary text-secondary-foreground border border-border font-bold shadow-2xs hover:border-primary/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              {/* Download CV Button */}
              <button
                id="home-download-cv-btn"
                onClick={onOpenCVModal}
                className="bg-primary hover:opacity-90 text-primary-foreground text-xs font-bold py-3.5 px-6 rounded-lg transition-all flex items-center gap-2 uppercase tracking-wider shadow-md hover:shadow-primary/30 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD CV</span>
              </button>

              {/* Contact Button */}
              <button
                id="home-contact-btn"
                onClick={onNavigateToContact}
                className="border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground text-xs font-bold py-3.5 px-6 rounded-lg transition-all flex items-center gap-2 uppercase tracking-wider bg-card/80 backdrop-blur-xs cursor-pointer shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>CONTACT</span>
              </button>

              {/* GitHub Link Icon Button */}
              <a
                id="home-github-icon-btn"
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground border border-border text-foreground transition-all shadow-xs"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive 3D Cyber Visualizer & Holographic Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <TechCube3D onOpenCVModal={onOpenCVModal} />
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              const aboutSec = document.getElementById('about');
              if (aboutSec) aboutSec.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex flex-col items-center text-xs font-bold text-foreground hover:text-primary transition-colors gap-1 cursor-pointer bg-card/90 px-4 py-2 rounded-full border border-border shadow-2xs hover:border-primary"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

