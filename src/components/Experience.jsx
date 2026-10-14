import React, { useState } from 'react';
import { experienceData } from '../data/portfolioData';
import { Building2, CheckCircle2, ChevronDown, Sparkles, Layers, Users, Calendar } from 'lucide-react';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="experience" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference "Engineering Success Stories" */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Campus Leadership & Impact</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering Success Stories
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-xl mx-auto">
            Proven institutional responsibility, student community leadership, and collaborative team coordination at PICT Pune.
          </p>
        </div>

        {/* Success Stories Accordion / Card List matching reference image */}
        <div className="max-w-5xl mx-auto space-y-4">
          {experienceData.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#10121d]/95 border-purple-500/40 shadow-2xl shadow-purple-950/30'
                    : 'bg-[#0e1019]/70 hover:bg-[#121422]/80 border-white/10 hover:border-white/20'
                }`}
              >
                {/* Header Bar: Click to Expand / Collapse */}
                <button
                  type="button"
                  onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                  className="w-full p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left transition-colors focus:outline-none"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                        {exp.role} <span className="text-purple-400 font-normal">· {exp.organization}</span>
                      </h3>
                    </div>
                    <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span>{exp.period}</span>
                    </p>
                  </div>

                  {/* Badges on Right matching reference layout */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {exp.type}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 text-purple-400 border-purple-500/30' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-5 sm:px-7 pb-7 pt-2 border-t border-white/5 animate-in fade-in duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                      
                      {/* Left: Mini Mockup / Metric Card matching reference UI preview */}
                      <div className="lg:col-span-5 bg-[#0a0b12] rounded-2xl p-4 sm:p-5 border border-white/10 space-y-3.5 shadow-inner">
                        <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-white/5 pb-2.5">
                          <span className="text-purple-400 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-purple-400" />
                            <span>Initiative Overview</span>
                          </span>
                          <span>PICT Pune</span>
                        </div>

                        {/* Interactive mini stat pills */}
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                            <div className="text-base font-bold font-mono text-white">70+</div>
                            <div className="text-[10px] text-slate-400">Students</div>
                          </div>
                          <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                            <div className="text-base font-bold font-mono text-purple-300">100%</div>
                            <div className="text-[10px] text-slate-400">Execution</div>
                          </div>
                          <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                            <div className="text-base font-bold font-mono text-pink-300">ECE</div>
                            <div className="text-[10px] text-slate-400">Dept</div>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-[11px] font-mono text-purple-300 flex items-center gap-2">
                          <Users className="w-3.5 h-3.5 shrink-0" />
                          <span>Active Departmental Contribution</span>
                        </div>
                      </div>

                      {/* Right: Narrative Description and Highlight Bullet Points */}
                      <div className="lg:col-span-7 space-y-4">
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="space-y-2 pt-1">
                          {exp.highlights.map((item, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
