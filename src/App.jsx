import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      return stored ? stored === 'dark' : true;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    try {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
      }
    } catch (_) {}
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans`}>
      
      {/* Subtle Developer Background Matrix / Grid */}
      <div className="fixed inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0" />
      
      {/* Top Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-brand-500/10 dark:bg-brand-500/10 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Main Content Hierarchy */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>

    </div>
  );
}
