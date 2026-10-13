import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  ShieldCheck, 
  Cpu, 
  Sparkles,
  Terminal,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Server: Server,
  Database: Database,
  Cloud: Cloud,
  ShieldCheck: ShieldCheck,
  Cpu: Cpu,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 bg-brand-500/10 border border-brand-500/20 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Core Competencies
          </h2>
          <div className="w-12 h-1 bg-brand-500 dark:bg-brand-400 rounded-full mt-3" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = iconMap[cat.iconName] || Terminal;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-navy-900/60 hover:bg-slate-50 dark:hover:bg-navy-900/90 rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:border-brand-500/40 dark:hover:border-brand-400/40 transition-all duration-300 flex flex-col justify-between group shadow-md shadow-black/5 dark:shadow-black/20"
              >
                <div>
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 group-hover:scale-110 group-hover:bg-brand-500/20 transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                        {cat.category}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium font-mono bg-slate-100 dark:bg-navy-950/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:border-brand-500/50 hover:text-brand-600 dark:hover:text-brand-300 hover:bg-brand-500/10 transition-all duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 dark:bg-brand-400/80" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>

                </div>

                <div className="pt-4 mt-5 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{cat.skills.length} competencies</span>
                  <span className="text-brand-600 dark:text-brand-400/80 font-semibold group-hover:text-brand-500 transition-colors">verified</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
