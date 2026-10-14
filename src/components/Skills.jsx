import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  ShieldCheck, 
  Cpu, 
  Sparkles,
  Zap,
  Monitor,
  Lightbulb,
  Layers,
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
  const [selectedCategory, setSelectedCategory] = useState('All');

  // The 4 Core Pillar Cards matching the reference image ("Fast", "Responsive", "Intuitive", "Dynamic")
  const featurePillars = [
    {
      title: "Fast",
      icon: Zap,
      gradient: "from-purple-500 to-indigo-500",
      desc: "Optimal algorithmic problem solving, fast execution, and mathematical complexity minimization across competitive platforms.",
      tags: ["C++", "Java", "Python", "SQL"]
    },
    {
      title: "Responsive",
      icon: Monitor,
      gradient: "from-pink-500 to-rose-500",
      desc: "High-throughput backend architectures, RESTful API endpoints, and scalable server-side systems with JWT authentication.",
      tags: ["Node.js", "Express.js", "REST APIs", "JWT"]
    },
    {
      title: "Intuitive",
      icon: Lightbulb,
      gradient: "from-amber-400 to-orange-500",
      desc: "Structured relational schema designs, query optimization in PostgreSQL & MySQL, and seamless cloud deployments.",
      tags: ["PostgreSQL", "MySQL", "pg", "AWS"]
    },
    {
      title: "Dynamic",
      icon: Layers,
      gradient: "from-cyan-400 to-blue-500",
      desc: "Comprehensive computer science fundamentals, network security, cryptographic protocols, data structures, and operating systems.",
      tags: ["DSA", "OOP", "DBMS", "OS", "Security"]
    }
  ];

  const categories = ['All', ...skillCategories.map(c => c.category)];

  const displayedCategories = selectedCategory === 'All' 
    ? skillCategories 
    : skillCategories.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference "My Skills and Development" */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My Skills and Development
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-xl mx-auto">
            A comprehensive overview of programming languages, backend systems, database engineering, and computer science foundations.
          </p>
        </div>

        {/* 4 Primary Feature Cards matching reference layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {featurePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-[#0f111a]/85 border border-white/10 hover:border-purple-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/40 group"
              >
                <div>
                  {/* Glowing Icon in circle matching reference design */}
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 group-hover:border-purple-500/40 transition-all">
                    <Icon className="w-5 h-5 text-purple-300 group-hover:text-purple-200" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-5">
                    {pillar.desc}
                  </p>
                </div>

                {/* Key Skills Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {pillar.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Filter Pills for Full Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30 font-semibold'
                  : 'bg-[#10121d] text-slate-400 hover:text-white border border-white/5 hover:border-white/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Detailed Categories Grid (100% Content Preserved) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat, idx) => {
            const Icon = iconMap[cat.iconName] || Terminal;
            return (
              <div
                key={idx}
                className="bg-[#0e1019]/80 hover:bg-[#121422]/90 rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/40"
              >
                <div>
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:scale-105 group-hover:bg-purple-500/20 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white text-lg group-hover:text-purple-300 transition-colors">
                        {cat.category}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium font-mono bg-white/[0.04] text-slate-200 border border-white/10 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>

                </div>

                <div className="pt-4 mt-5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{cat.skills.length} competencies</span>
                  <span className="text-purple-400 font-semibold">verified</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
