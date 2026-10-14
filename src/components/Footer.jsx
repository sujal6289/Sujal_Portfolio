import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0a0b12] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left: Branding & Tagline */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-white text-lg tracking-tight">
                {personalInfo.name}
              </span>
              <span className="text-xs font-mono text-purple-400">
                · PICT Pune
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Electronics & Computer Technology · Class of 2028
            </p>
          </div>

          {/* Center: Quick navigation links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <a href="#about" className="hover:text-purple-300 transition-colors">About</a>
            <span>•</span>
            <a href="#experience" className="hover:text-purple-300 transition-colors">Experience</a>
            <span>•</span>
            <a href="#skills" className="hover:text-purple-300 transition-colors">Skills</a>
            <span>•</span>
            <a href="#projects" className="hover:text-purple-300 transition-colors">Projects</a>
            <span>•</span>
            <a href="#education" className="hover:text-purple-300 transition-colors">Education</a>
            <span>•</span>
            <a href="#achievements" className="hover:text-purple-300 transition-colors">Achievements</a>
            <span>•</span>
            <a href="#contact" className="hover:text-purple-300 transition-colors">Contact</a>
          </div>

          {/* Right: Scroll to top */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              title="Back to top"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-purple-400/40 hover:-translate-y-0.5 transition-all shadow-md"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Sujal Anant Supekar. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 font-mono">
            <span>Built with React, Vite & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
