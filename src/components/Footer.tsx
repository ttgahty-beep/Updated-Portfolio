import React from 'react';
import { Github, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-card/95 backdrop-blur-md border-t border-border py-10 z-10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright text */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm font-semibold">
              © 2026 <span className="text-foreground font-extrabold">Ahtesham</span>. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs font-medium mt-1">
              Built with React, TypeScript, Tailwind CSS & Node.js
            </p>
          </div>

          {/* Links & Actions */}
          <div className="flex items-center gap-4">
            {/* GitHub Link */}
            <a
              id="footer-github-link"
              href="https://github.com/ttgahty-beep"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 text-sm font-bold shadow-xs"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4 text-primary" />
              <span>GitHub</span>
            </a>

            {/* Back to Top */}
            <button
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-secondary border border-border text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-xs cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 text-primary hover:text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
