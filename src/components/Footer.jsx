import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-navy-950/80 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left: Branding & Tagline */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 dark:text-slate-100 text-lg tracking-tight">
                {personalInfo.name}
              </span>
              <span className="text-xs font-mono text-brand-600 dark:text-brand-400">
                · PICT Pune
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Electronics & Computer Technology · Class of 2028
            </p>
          </div>

          {/* Center: Quick navigation links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors">About</a>
            <span>•</span>
            <a href="#education" className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors">Education</a>
            <span>•</span>
            <a href="#skills" className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors">Skills</a>
            <span>•</span>
            <a href="#projects" className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors">Projects</a>
            <span>•</span>
            <a href="#achievements" className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors">Achievements</a>
            <span>•</span>
            <a href="#contact" className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors">Contact</a>
          </div>

          {/* Right: Scroll to top */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              title="Back to top"
              className="p-2.5 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-300 hover:border-brand-500/40 hover:-translate-y-0.5 transition-all duration-200 shadow-xs"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
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
