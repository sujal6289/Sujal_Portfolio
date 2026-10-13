import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, Sun, Moon, FileDown, ExternalLink } from 'lucide-react';

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'experience', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-navy-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 shadow-lg shadow-black/5'
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/30 border border-brand-500/40 dark:border-brand-400/40 flex items-center justify-center font-mono font-bold text-brand-600 dark:text-brand-400 group-hover:scale-105 group-hover:border-brand-500 transition-all duration-300 shadow-sm shadow-brand-400/20">
              SS
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-brand-500 dark:group-hover:text-brand-300 transition-colors">
                Sujal Supekar
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 tracking-wider uppercase -mt-0.5">
                PICT Pune
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-100/90 dark:bg-navy-900/60 px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-brand-600 dark:text-brand-300 bg-brand-500/15 font-semibold shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-navy-900/60 text-slate-700 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-300 hover:border-brand-400/40 transition-all duration-200"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Resume Download Action */}
            <a
              href={personalInfo.resumePath}
              download="Sujal-Supekar-Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-navy-950 shadow-md shadow-brand-500/20 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Buttons */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-navy-900/60 text-slate-700 dark:text-slate-300"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open mobile navigation"
              className="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-navy-900/60 text-slate-700 dark:text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 dark:bg-navy-950/95 border-b border-slate-200 dark:border-white/10 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-300 hover:bg-black/5 dark:hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
            <a
              href={personalInfo.resumePath}
              download="Sujal-Supekar-Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold bg-brand-500 text-navy-950"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
