import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, Sparkles } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-xl mx-auto">
            Academic foundation bridging hardware consciousness with high-level software engineering at PICT Pune.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-10 border-l border-purple-500/30 space-y-8 sm:space-y-10">
          {educationData.map((edu, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-2 w-5 h-5 rounded-full bg-[#0a0b12] border-2 border-purple-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
                <div className={`w-2 h-2 rounded-full ${edu.current ? 'bg-purple-400 animate-ping' : 'bg-purple-400'}`} />
              </div>

              {/* Education Card */}
              <div className="bg-[#0f111a]/90 hover:bg-[#121422]/95 rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-xl shadow-black/40">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                  
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 font-medium">
                        {edu.badge}
                      </span>
                      {edu.current && (
                        <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Currently Pursuing
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {edu.institution}
                    </h3>
                    <p className="text-purple-300 font-medium text-sm sm:text-base mt-0.5">
                      {edu.degree}
                    </p>
                  </div>

                  {/* Period & Score Badges */}
                  <div className="flex flex-row md:flex-col items-start md:items-end gap-2 shrink-0">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-300 bg-white/5 border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span>{edu.period}</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>{edu.score}</span>
                    </div>
                  </div>

                </div>

                <p className="text-sm text-slate-400 leading-relaxed pt-3 border-t border-white/5">
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
