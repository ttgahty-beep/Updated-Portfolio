import React from 'react';
import { Github, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-gray-50 border-t border-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright text */}
          <div className="text-center md:text-left">
            <p className="text-gray-600 text-sm">
              © 2026 <span className="text-[#18181B] font-bold">Ahtesham</span>. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
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
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:text-black hover:border-[#333333] transition-colors duration-200 text-sm font-medium shadow-2xs"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4 text-[#18181B]" />
              <span>GitHub</span>
            </a>

            {/* Back to Top */}
            <button
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white border border-gray-300 text-gray-600 hover:text-black hover:border-[#333333] transition-colors duration-200 shadow-2xs cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
