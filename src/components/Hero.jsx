import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowDown, 
  FileDown, 
  MapPin, 
  GraduationCap, 
  Terminal, 
  ExternalLink,
  Code,
  Layers,
  Sparkles,
  Award
} from 'lucide-react';

function GitHubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function LinkedInIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
    </svg>
  );
}

function LeetCodeIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.21 3.489 5.277 5.277 0 0 0 1.21 3.489l5.05 5.4a5.36 5.36 0 0 0 3.844 1.696 5.38 5.38 0 0 0 3.844-1.696l4.636-4.957a1.374 1.374 0 0 0-.007-1.942 1.374 1.374 0 0 0-1.943-.007l-4.63 4.95a2.63 2.63 0 0 1-1.899.839 2.617 2.617 0 0 1-1.899-.839L4.264 15.38a2.536 2.536 0 0 1-.582-1.68 2.536 2.536 0 0 1 .582-1.68l3.855-4.125 4.41-4.717a1.375 1.375 0 0 0-.962-2.31zM16.5 10.75h6a1.25 1.25 0 0 1 0 2.5h-6a1.25 1.25 0 0 1 0-2.5z" />
    </svg>
  );
}

function CodeChefIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.5 2C6.8 2 3 5.8 3 10.5c0 3.2 1.8 6 4.4 7.4l-.8 2.6c-.2.5.2 1 .7 1h8.4c.5 0 .9-.5.7-1l-.8-2.6c2.6-1.4 4.4-4.2 4.4-7.4C20 5.8 16.2 2 11.5 2zm-3 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
    </svg>
  );
}

function CodeforcesIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="10" width="5" height="12" rx="1.5" fill="#3b82f6" />
      <rect x="9.5" y="4" width="5" height="18" rx="1.5" fill="#eab308" />
      <rect x="17" y="7" width="5" height="15" rx="1.5" fill="#ef4444" />
    </svg>
  );
}

export default function Hero() {
  const profileLinks = [
    { name: 'LeetCode', url: personalInfo.socials.leetcode, icon: LeetCodeIcon, color: 'hover:text-amber-500 hover:border-amber-500/40' },
    { name: 'CodeChef', url: personalInfo.socials.codechef, icon: CodeChefIcon, color: 'hover:text-amber-600 hover:border-amber-600/40' },
    { name: 'Codeforces', url: personalInfo.socials.codeforces, icon: CodeforcesIcon, color: 'hover:text-red-500 hover:border-red-500/40' },
    { name: 'LinkedIn', url: personalInfo.socials.linkedin, icon: LinkedInIcon, color: 'hover:text-blue-500 hover:border-blue-500/40' },
    { name: 'GitHub', url: personalInfo.socials.github, icon: GitHubIcon, color: 'hover:text-slate-900 dark:hover:text-white hover:border-slate-400' },
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/10 blur-[110px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Calls to Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                <span>Open for Opportunities</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-slate-200/60 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300">
                <GraduationCap className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                <span>PICT Pune · 2024–2028</span>
              </div>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-[2px] bg-brand-500 dark:bg-brand-400 rounded-full" />
                <span className="text-xs uppercase font-mono tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
                  Portfolio · Software Engineering
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 dark:from-brand-300 dark:via-brand-400 dark:to-indigo-300">{personalInfo.name}</span>
              </h1>

              <p className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-200 tracking-tight">
                "{personalInfo.headline}"
              </p>
            </div>

            {/* Supporting Intro */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Location & Academic Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-500 dark:text-brand-400" />
                <span>{personalInfo.location}</span>
              </div>
              <span className="text-slate-400 dark:text-slate-600 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 font-mono">
                <Award className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>CGPA: <strong className="text-slate-900 dark:text-slate-200 font-semibold">{personalInfo.cgpa}</strong></span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-500 to-brand-600 dark:from-brand-400 dark:to-brand-500 text-white dark:text-navy-950 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Sujal-Supekar-Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-100 hover:bg-slate-200 dark:bg-navy-900/90 dark:hover:bg-navy-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/15 hover:border-brand-500/50 hover:text-brand-600 dark:hover:text-white transition-all duration-200"
              >
                <FileDown className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Coding & Social Profile Links */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 w-full max-w-xl">
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                Coding Profiles & Network
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                {profileLinks.map((p) => {
                  const Icon = p.icon;
                  return (
                    <a
                      key={p.name}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-navy-900/80 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 transition-all duration-200 hover:-translate-y-0.5 ${p.color}`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{p.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-50" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Code & Architecture Terminal Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative card frame with neon glow */}
              <div className="rounded-2xl bg-gradient-to-br from-brand-500/20 via-slate-300/20 dark:via-white/5 to-indigo-500/10 p-[1px] shadow-2xl shadow-black/20 dark:shadow-black/40">
                <div className="rounded-2xl bg-slate-900 dark:bg-navy-900/90 backdrop-blur-xl border border-slate-800 dark:border-white/10 overflow-hidden text-slate-100">
                  
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 dark:bg-navy-950/90 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <Terminal className="w-3.5 h-3.5 text-brand-400" />
                      <span>sujal@pict: ~/systems</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">node v24</span>
                  </div>

                  {/* Terminal Code Snippet */}
                  <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 space-y-3 overflow-x-auto">
                    <div>
                      <span className="text-slate-500">// Attendance Engine & Algorithms</span>
                    </div>
                    <div className="text-brand-300">
                      <span className="text-indigo-400">const</span> engineer = {'{'}
                    </div>
                    <div className="pl-4 space-y-1">
                      <div>
                        <span className="text-slate-400">name:</span> <span className="text-emerald-300">"{personalInfo.name}"</span>,
                      </div>
                      <div>
                        <span className="text-slate-400">institution:</span> <span className="text-emerald-300">"PICT Pune"</span>,
                      </div>
                      <div>
                        <span className="text-slate-400">focus:</span> [<span className="text-amber-300">"Backend"</span>, <span className="text-amber-300">"DSA"</span>, <span className="text-amber-300">"APIs"</span>],
                      </div>
                      <div>
                        <span className="text-slate-400">cgpa:</span> <span className="text-cyan-300">8.83</span>,
                      </div>
                      <div>
                        <span className="text-slate-400">solved:</span> <span className="text-cyan-300">&gt; 1000</span>,
                      </div>
                      <div>
                        <span className="text-slate-400">stack:</span> [<span className="text-brand-300">"C++"</span>, <span className="text-brand-300">"Node.js"</span>, <span className="text-brand-300">"PostgreSQL"</span>]
                      </div>
                    </div>
                    <div className="text-brand-300">{'}'};</div>

                    <div className="pt-2 border-t border-white/5 space-y-1 text-slate-400">
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <span className="text-emerald-400">● POST /api/v1/forecast</span>
                        <span className="text-brand-400 font-mono">200 OK (14ms)</span>
                      </div>
                      <div className="text-xs text-slate-400 bg-black/40 p-2.5 rounded-lg font-mono">
                        <span className="text-brand-300">target:</span> <span className="text-amber-300">75%</span> | <span className="text-brand-300">recommendation:</span> <span className="text-emerald-300">"Safe to skip 2 lectures"</span>
                      </div>
                    </div>

                  </div>

                  {/* Terminal Footer status */}
                  <div className="px-4 py-2.5 bg-slate-950/70 dark:bg-navy-950/70 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-400" />
                      <span>Ready to deploy</span>
                    </span>
                    <span className="text-slate-400">UTF-8</span>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
