import React from 'react';
import { Download, Mail, ArrowDown, Code2, Terminal, Cpu, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HomeSectionProps {
  onOpenCVModal: () => void;
  onNavigateToContact: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onOpenCVModal, onNavigateToContact }) => {
  return (
    <section id="home" className="min-h-screen pt-28 pb-20 flex flex-col justify-center relative bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Text & Intro Details */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/90 backdrop-blur-md border border-gray-300 text-xs font-bold text-black uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <span>Software Engineering Student</span>
            </div>

            {/* Greeting & Name */}
            <div>
              <p className="text-gray-700 font-mono text-xs uppercase tracking-widest mb-1 font-bold">Portfolio & Overview</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight">
                Ahtesham
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-zinc-900 mt-2">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-gray-800 text-base sm:text-lg font-medium leading-relaxed max-w-2xl bg-white/70 backdrop-blur-xs p-4 rounded-xl border border-gray-200/80 shadow-2xs">
              {PERSONAL_INFO.shortBio}
            </p>

            {/* Key Technology Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-bold text-gray-800 uppercase tracking-wider mr-1">Stack:</span>
              {['Java', 'TypeScript', 'React', 'Express.js', 'SQL', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-lg bg-white/90 text-black border border-gray-300 font-bold shadow-2xs"
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
                className="bg-black hover:bg-zinc-800 text-white text-xs font-bold py-3.5 px-6 rounded-lg transition-colors flex items-center gap-2 uppercase tracking-wider shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD CV</span>
              </button>

              {/* Contact Button */}
              <button
                id="home-contact-btn"
                onClick={onNavigateToContact}
                className="border-2 border-black text-black hover:bg-black hover:text-white text-xs font-bold py-3.5 px-6 rounded-lg transition-colors flex items-center gap-2 uppercase tracking-wider bg-white/80 backdrop-blur-xs cursor-pointer shadow-xs"
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
                className="p-3.5 rounded-lg bg-white/90 border border-gray-300 text-black hover:bg-black hover:text-white transition-colors shadow-xs"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Profile Picture Placeholder Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-gray-300 shadow-md text-center flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full mb-6 flex items-center justify-center border-2 border-black shadow-xs">
                <span className="text-4xl text-black font-serif italic font-bold">A</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-1">Ahtesham</h3>
              <p className="text-black text-xs font-bold uppercase tracking-wider mb-4">
                Software Engineering Student
              </p>
              <p className="text-xs text-gray-800 font-medium leading-relaxed mb-6">
                Full-stack developer focused on building scalable Node.js applications and interactive React interfaces.
              </p>
              <div className="w-full grid grid-cols-2 gap-2 text-left pt-4 border-t border-gray-200 text-xs">
                <div>
                  <span className="text-gray-600 font-mono block text-[10px] font-bold uppercase">STATUS</span>
                  <span className="text-black font-bold">B.S. Software Eng.</span>
                </div>
                <div>
                  <span className="text-gray-600 font-mono block text-[10px] font-bold uppercase">LOCATION</span>
                  <span className="text-black font-bold">PK</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              const aboutSec = document.getElementById('about');
              if (aboutSec) aboutSec.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex flex-col items-center text-xs font-bold text-black hover:text-zinc-700 transition-colors gap-1 cursor-pointer bg-white/80 px-4 py-2 rounded-full border border-gray-300 shadow-2xs"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};
