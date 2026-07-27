import React from 'react';
import { Download, Mail, ArrowDown, Code2, Terminal, Cpu, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HomeSectionProps {
  onOpenCVModal: () => void;
  onNavigateToContact: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onOpenCVModal, onNavigateToContact }) => {
  return (
    <section id="home" className="min-h-screen pt-28 pb-20 flex flex-col justify-center relative bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Text & Intro Details */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 border border-gray-200 text-xs font-bold text-[#333333] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#333333]"></span>
              <span>Software Engineering Student</span>
            </div>

            {/* Greeting & Name */}
            <div>
              <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-1">Portfolio & Overview</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#18181B] tracking-tight">
                Ahtesham
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-[#333333] mt-2">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              {PERSONAL_INFO.shortBio}
            </p>

            {/* Key Technology Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-1">Stack:</span>
              {['Java', 'TypeScript', 'React', 'Express.js', 'SQL', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-lg bg-gray-100 text-[#18181B] border border-gray-200 font-medium"
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
                className="bg-[#18181B] hover:bg-[#333333] text-white text-xs font-bold py-3.5 px-6 rounded-lg transition-colors flex items-center gap-2 uppercase tracking-wider shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD CV</span>
              </button>

              {/* Contact Button */}
              <button
                id="home-contact-btn"
                onClick={onNavigateToContact}
                className="border border-[#333333] text-[#18181B] hover:bg-gray-100 text-xs font-bold py-3.5 px-6 rounded-lg transition-colors flex items-center gap-2 uppercase tracking-wider bg-transparent cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#333333]" />
                <span>CONTACT</span>
              </button>

              {/* GitHub Link Icon Button */}
              <a
                id="home-github-icon-btn"
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-lg bg-gray-100 border border-gray-200 text-[#18181B] hover:bg-gray-200 hover:border-[#333333] transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 text-[#18181B]" />
              </a>
            </div>
          </div>

          {/* Profile Picture Placeholder Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full mb-6 flex items-center justify-center border-2 border-[#333333] shadow-xs">
                <span className="text-4xl text-[#18181B] font-serif italic">A</span>
              </div>
              <h3 className="text-2xl font-bold text-[#18181B] mb-1">Ahtesham</h3>
              <p className="text-[#333333] text-xs font-bold uppercase tracking-wider mb-4">
                Software Engineering Student
              </p>
              <p className="text-xs text-gray-600 leading-relaxed mb-6">
                Full-stack developer focused on building scalable Node.js applications and interactive React interfaces.
              </p>
              <div className="w-full grid grid-cols-2 gap-2 text-left pt-4 border-t border-gray-100 text-xs">
                <div>
                  <span className="text-gray-400 font-mono block text-[10px] uppercase">STATUS</span>
                  <span className="text-[#18181B] font-semibold">B.S. Software Eng.</span>
                </div>
                <div>
                  <span className="text-gray-400 font-mono block text-[10px] uppercase">LOCATION</span>
                  <span className="text-[#333333] font-semibold">PK</span>
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
            className="inline-flex flex-col items-center text-xs text-gray-500 hover:text-[#18181B] transition-colors gap-1 cursor-pointer"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#333333]" />
          </button>
        </div>
      </div>
    </section>
  );
};
