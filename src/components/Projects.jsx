import React from 'react';
import { projectsData } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  Code, 
  Layers, 
  Workflow, 
  CheckCircle2
} from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference "My Recent Project" */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-purple-600 dark:text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-3 font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My Recent Project
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3 max-w-xl mx-auto">
            Practical systems and software engineering projects solving real-world student workflows.
          </p>
        </div>

        {/* Project Cards Grid matching reference layout with dual-theme support */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-[#0f111a]/90 hover:bg-slate-50/60 dark:hover:bg-[#121422]/95 rounded-3xl border border-slate-200/80 dark:border-white/10 hover:border-purple-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/50 group"
            >
              
              {/* Card Header & Content */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Meta Bar */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30 font-semibold">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                      Active Repo
                    </span>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-slate-100 hover:bg-purple-50 dark:bg-white/5 dark:hover:bg-purple-500/20 border border-slate-200 dark:border-white/10 hover:border-purple-400/40 text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-white transition-all"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-purple-600 dark:text-purple-400/90 mt-1 font-medium">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* System Features Bullet Points */}
                <div className="space-y-2.5 pt-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-semibold">
                    <Layers className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span>Key Engineering Highlights</span>
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Workflow Steps */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0a0b12] border border-slate-200/80 dark:border-white/5 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-purple-700 dark:text-purple-300 font-semibold">
                    <Workflow className="w-3.5 h-3.5" />
                    <span>Pipeline & Execution Workflow</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {project.workflow.map((w, wIdx) => (
                      <div key={wIdx} className="p-2.5 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-left shadow-xs">
                        <div className="text-[10px] font-mono text-purple-600 dark:text-purple-400 font-bold mb-1">
                          STEP {w.step}
                        </div>
                        <div className="text-xs font-semibold text-slate-900 dark:text-white">
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
              <div className="px-6 sm:px-8 py-4 bg-slate-50/80 dark:bg-[#0a0b12]/80 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mr-2 font-medium">Built With:</span>
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5 group-hover:border-purple-500/30 transition-colors shadow-xs"
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
