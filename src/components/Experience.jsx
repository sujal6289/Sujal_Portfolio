import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Users, Building2, CheckCircle2, Award, Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 bg-brand-500/10 border border-brand-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Responsibility & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & Campus Leadership
          </h2>
          <div className="w-12 h-1 bg-brand-500 dark:bg-brand-400 rounded-full mt-3" />
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-navy-900/60 hover:bg-slate-50 dark:hover:bg-navy-900/90 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-white/10 hover:border-brand-500/40 dark:hover:border-brand-400/40 transition-all duration-300 flex flex-col justify-between shadow-md shadow-black/5 dark:shadow-black/20 group"
            >
              <div>
                
                {/* Badge & Org */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-brand-500/15 text-brand-700 dark:text-brand-300 border border-brand-500/30 font-medium">
                    {exp.type}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {exp.period}
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                  {exp.role}
                </h3>
                
                {/* Org */}
                <p className="text-xs font-mono text-brand-600 dark:text-brand-400/90 mt-1 mb-4 flex items-center gap-1.5 font-medium">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{exp.organization}</span>
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/5 space-y-2">
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
