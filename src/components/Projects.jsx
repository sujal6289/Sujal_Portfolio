import React from 'react';
import { projectsData } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  Code, 
  Layers, 
  Workflow, 
  Sparkles,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference "My Recent Project" */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My Recent Project
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-xl mx-auto">
            Practical systems and software engineering projects solving real-world student workflows.
          </p>
        </div>

        {/* Project Cards Grid matching reference dark aesthetic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-[#0f111a]/90 hover:bg-[#121422]/95 rounded-3xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-2xl shadow-black/50 group"
            >
              
              {/* Card Header & Content */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Meta Bar */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 font-semibold">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Active Repo
                    </span>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/40 text-slate-300 hover:text-white transition-all"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-purple-400/90 mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* System Features Bullet Points */}
                <div className="space-y-2.5 pt-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-purple-400" />
                    <span>Key Engineering Highlights</span>
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Workflow Steps */}
                <div className="p-4 rounded-2xl bg-[#0a0b12] border border-white/5 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-purple-300">
                    <Workflow className="w-3.5 h-3.5" />
                    <span>Pipeline & Execution Workflow</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {project.workflow.map((w, wIdx) => (
                      <div key={wIdx} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-left">
                        <div className="text-[10px] font-mono text-purple-400 font-bold mb-1">
                          STEP {w.step}
                        </div>
                        <div className="text-xs font-semibold text-white">
                          {w.title}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                          {w.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer: Tech Stack Badges */}
              <div className="px-6 sm:px-8 py-4 bg-[#0a0b12]/80 border-t border-white/10 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono text-slate-400 mr-2">Built With:</span>
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/5 group-hover:border-purple-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
