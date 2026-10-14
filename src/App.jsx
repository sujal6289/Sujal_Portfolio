import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Education from './components/Education';
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
    <div className="min-h-screen bg-slate-50 dark:bg-[#07080e] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-purple-500/30 selection:text-purple-600 dark:selection:text-purple-300">
      
      {/* Subtle Developer Matrix / Grid Background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 dark:opacity-60 pointer-events-none z-0" />
      
      {/* Ambient Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/5 dark:bg-purple-600/10 blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="fixed top-1/3 right-0 w-[500px] h-[500px] bg-pink-600/5 dark:bg-pink-600/10 blur-[180px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-1/4 left-0 w-[500px] h-[500px] bg-amber-500/5 dark:bg-amber-500/5 blur-[180px] rounded-full pointer-events-none z-0" />

      {/* Main Content Hierarchy aligned with Reference Design */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <main className="flex-grow">
          {/* Hero Section (Photo + Circuits + "About Me" Base Card) */}
          <Hero />

          {/* Engineering Success Stories (Experience) */}
          <Experience />

          {/* My Skills and Development (Skills) */}
          <Skills />

          {/* My Recent Project (Projects) */}
          <Projects />

          {/* Deep Engineering Narrative & Pillars */}
          <About />

          {/* Academic Background */}
          <Education />

          {/* Honors & Recognitions */}
          <Achievements />

          {/* Certifications (Conditional) */}
          <Certifications />

          {/* Contact Section */}
          <Contact />
        </main>

        <Footer />
      </div>

    </div>
  );
}
