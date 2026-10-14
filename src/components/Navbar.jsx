import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, Sun, Moon, FileDown, MessageSquare } from 'lucide-react';

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'education', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 140;

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
    { name: 'About Me', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <div className="w-full max-w-6xl pointer-events-auto">
        <div className={`transition-all duration-300 rounded-full px-3.5 sm:px-5 py-2.5 flex items-center justify-between border ${
          isScrolled
            ? 'bg-[#0d0f18]/90 dark:bg-[#0d0f18]/90 backdrop-blur-2xl border-white/15 shadow-2xl shadow-black/80'
            : 'bg-[#101320]/80 dark:bg-[#101320]/80 backdrop-blur-xl border-white/10 shadow-xl shadow-black/50'
        }`}>
          
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-full p-1"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 p-[1.5px] shadow-sm shadow-purple-500/30 group-hover:scale-105 transition-all">
              <div className="w-full h-full rounded-full bg-[#0d0f18] flex items-center justify-center font-display font-bold text-xs text-white">
                SS
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-purple-300 transition-colors">
                {personalInfo.name.split(' ')[0]} {personalInfo.name.split(' ')[2] || personalInfo.name.split(' ')[1]}
              </span>
              <span className="text-[10px] font-mono text-purple-300/80 tracking-wider uppercase -mt-0.5">
                PICT Pune
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.04] px-3 py-1 rounded-full border border-white/5">
            {navLinks.map((link) => {
              const targetId = link.href.substring(1);
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/10 shadow-xs border border-white/10 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-purple-400/40 transition-all duration-200"
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 text-purple-300" />}
            </button>

            {/* Resume Button */}
            <a
              href={personalInfo.resumePath}
              download="Sujal-Supekar-Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200 bg-white/5 border border-white/10 hover:border-purple-400/40 hover:text-white transition-all duration-200"
            >
              <FileDown className="w-3.5 h-3.5 text-purple-400" />
              <span>Resume</span>
            </a>

            {/* Glowing Gradient "Contact Me" Button matching reference image */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-xs font-semibold bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Contact Me</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Buttons */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full border border-white/10 bg-white/5 text-slate-300"
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 text-purple-300" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open mobile navigation"
              className="p-2 rounded-full border border-white/10 bg-white/5 text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-2 rounded-3xl bg-[#0d0f18]/95 border border-white/15 p-4 space-y-2 backdrop-blur-2xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 text-white shadow-md shadow-purple-500/30"
              >
                <span>Contact Me</span>
              </a>
              <a
                href={personalInfo.resumePath}
                download="Sujal-Supekar-Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-xs font-semibold bg-white/10 text-slate-200 border border-white/10"
              >
                <FileDown className="w-3.5 h-3.5 text-purple-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
