import React from 'react';
import { personalInfo, stats } from '../data/portfolioData';
import { Code2, Server, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Server,
      title: "Backend Engineering",
      desc: "Architecting modular RESTful services with Node.js, Express.js, and relational schema designs in PostgreSQL and MySQL."
    },
    {
      icon: Code2,
      title: "Algorithmic Rigor",
      desc: "Demonstrated problem-solving depth with 1000+ problems solved across LeetCode, CodeChef (3-Star), and Codeforces (Pupil)."
    },
    {
      icon: Compass,
      title: "System Discipline",
      desc: "Electronics & Computer Technology foundation bridging hardware consciousness with high-level software engineering."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-purple-600 dark:text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-3 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Discipline</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Building reliable software with mathematical discipline.
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-3" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0f111a]/90 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl space-y-5 shadow-xl shadow-slate-200/40 dark:shadow-2xl dark:shadow-black/60">
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              I am an <strong className="text-slate-900 dark:text-white font-semibold">Electronics and Computer Technology undergraduate at PICT Pune</strong> (Class of 2028), driven by a strong focus on software engineering, backend systems, and competitive problem solving.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
              My engineering approach centers around building practical, scalable applications from the ground up. Whether it's architecting REST APIs with secure JWT authentication, designing relational schemas in PostgreSQL, or optimizing algorithmic runtime complexities, I enjoy turning abstract requirements into robust, high-performance software.
            </p>

            <div className="pt-4 border-t border-slate-100 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>PICT Pune · CGPA: <strong className="text-slate-900 dark:text-white font-semibold">8.83/10</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>Backend Engineering (Node.js, Express)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>Relational Databases (PostgreSQL, MySQL)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>Competitive Coding (CodeChef 3★, Codeforces Pupil)</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics & Pillars */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s, idx) => (
                <div 
                  key={idx}
                  className="bg-white dark:bg-[#0f111a]/90 rounded-2xl p-4 border border-slate-200/80 dark:border-white/10 hover:border-purple-500/40 transition-colors shadow-md shadow-slate-200/30 dark:shadow-black/40"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 font-mono">
                    {s.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                    {s.label}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Pillar list */}
            <div className="space-y-3">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-white/80 dark:bg-[#0f111a]/70 border border-slate-200/80 dark:border-white/5 hover:border-purple-500/30 flex items-start gap-3.5 transition-all shadow-xs"
                  >
                    <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-500/20 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
