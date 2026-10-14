import React from 'react';
import { achievementsData } from '../data/portfolioData';
import { Trophy, ExternalLink, Sparkles, Award } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Recognitions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Key Achievements & Milestones
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-xl mx-auto">
            Competitive programming ratings, national hackathons, algorithmic contest victories, and athletic representations.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0f111a]/85 hover:bg-[#121422]/95 rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/40 group hover:-translate-y-1"
            >
              <div>
                
                {/* Badge & Category Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 font-medium">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    {item.highlight}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>

              </div>

              {/* External Profile Link or badge footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  {item.badge}
                </span>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 hover:text-purple-300 font-semibold group/link"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 font-semibold">
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
