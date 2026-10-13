import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  Code, 
  Layers, 
  Workflow, 
  ChevronRight, 
  Sparkles,
  CheckCircle2,
  Cpu,
  Server,
  FileCode2
} from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative border-t border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 bg-brand-500/10 border border-brand-500/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Projects & Systems Architecture
          </h2>
          <div className="w-12 h-1 bg-brand-500 dark:bg-brand-400 rounded-full mt-3" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-navy-900/70 hover:bg-slate-50 dark:hover:bg-navy-900 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-brand-500/40 dark:hover:border-brand-400/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg shadow-black/5 dark:shadow-black/20 group"
            >
              
              {/* Card Header & Content */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Meta Bar */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-brand-500/15 text-brand-700 dark:text-brand-300 border border-brand-500/30 font-semibold">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                      Active Repo
                    </span>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-100 hover:bg-brand-500/20 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-brand-500/40 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-300 transition-colors"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* System Features Bullet Points */}
                <div className="space-y-2.5 pt-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400" />
                    <span>Key Engineering Highlights</span>
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Workflow Steps */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950/70 border border-slate-200 dark:border-white/5 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-brand-700 dark:text-brand-300">
                    <Workflow className="w-3.5 h-3.5" />
                    <span>Pipeline & Execution Workflow</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {project.workflow.map((w, wIdx) => (
                      <div key={wIdx} className="p-2.5 rounded-lg bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-white/5 text-left shadow-xs">
                        <div className="text-[10px] font-mono text-brand-600 dark:text-brand-400 font-bold mb-1">
                          STEP {w.step}
                        </div>
                        <div className="text-xs font-semibold text-slate-900 dark:text-slate-200">
                          {w.title}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                          {w.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer: Tech Stack Badges */}
              <div className="px-6 sm:px-8 py-4 bg-slate-50 dark:bg-navy-950/60 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono text-slate-500 mr-2">Built With:</span>
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 group-hover:border-brand-500/30 transition-colors"
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
