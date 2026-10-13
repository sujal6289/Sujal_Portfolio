import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 relative border-t border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 bg-brand-500/10 border border-brand-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Qualifications
          </h2>
          <div className="w-12 h-1 bg-brand-500 dark:bg-brand-400 rounded-full mt-3" />
        </div>

        {/* Education Timeline / Cards */}
        <div className="relative pl-4 sm:pl-8 border-l-2 border-brand-500/30 space-y-10">
          {educationData.map((edu, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[25px] sm:-left-[41px] top-1.5 w-5 h-5 rounded-full bg-slate-50 dark:bg-navy-950 border-2 border-brand-500 dark:border-brand-400 flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
                <div className={`w-2 h-2 rounded-full ${edu.current ? 'bg-brand-500 dark:bg-brand-400 animate-ping' : 'bg-brand-500 dark:bg-brand-400'}`} />
              </div>

              {/* Education Card */}
              <div className="bg-white dark:bg-navy-900/70 hover:bg-slate-50 dark:hover:bg-navy-900 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-white/10 hover:border-brand-500/40 dark:hover:border-brand-400/40 transition-all duration-300 shadow-md shadow-black/5 dark:shadow-black/20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                  
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-brand-500/15 text-brand-700 dark:text-brand-300 border border-brand-500/30 font-medium">
                        {edu.badge}
                      </span>
                      {edu.current && (
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                          Currently Pursuing
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {edu.institution}
                    </h3>
                    <p className="text-brand-600 dark:text-brand-300 font-medium text-sm sm:text-base mt-0.5">
                      {edu.degree}
                    </p>
                  </div>

                  {/* Period & Score Badges */}
                  <div className="flex flex-row md:flex-col items-start md:items-end gap-2 shrink-0">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400" />
                      <span>{edu.period}</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/30">
                      <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>{edu.score}</span>
                    </div>
                  </div>

                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-200/80 dark:border-white/5">
                  {edu.details}
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
