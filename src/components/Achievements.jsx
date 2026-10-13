import React from 'react';
import { achievementsData } from '../data/portfolioData';
import { Trophy, Medal, ExternalLink, Sparkles, Award, Target, Flame } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative border-t border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 bg-brand-500/10 border border-brand-500/20 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Recognitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key Achievements & Competitive Milestones
          </h2>
          <div className="w-12 h-1 bg-brand-500 dark:bg-brand-400 rounded-full mt-3" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-navy-900/60 hover:bg-slate-50 dark:hover:bg-navy-900/95 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-white/10 hover:border-brand-500/40 dark:hover:border-brand-400/40 transition-all duration-300 flex flex-col justify-between shadow-md shadow-black/5 dark:shadow-black/20 group"
            >
              <div>
                
                {/* Badge & Category Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-brand-500/15 text-brand-700 dark:text-brand-300 border border-brand-500/30 font-medium">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                    {item.highlight}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

              </div>

              {/* External Profile Link (if CP profile) or badge footer */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {item.badge}
                </span>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-600 dark:text-brand-400 hover:text-brand-500 dark:hover:text-brand-300 font-semibold group/link"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                    <Award className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
