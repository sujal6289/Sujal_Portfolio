import React from 'react';
import { personalInfo, stats } from '../data/portfolioData';
import { 
  ArrowDown, 
  FileDown, 
  MapPin, 
  GraduationCap, 
  ArrowUpRight,
  Server,
  Award,
  ExternalLink,
  Code2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

function GitHubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
    </svg>
  );
}

function LeetCodeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.21 3.489 5.277 5.277 0 0 0 1.21 3.489l5.05 5.4a5.36 5.36 0 0 0 3.844 1.696 5.38 5.38 0 0 0 3.844-1.696l4.636-4.957a1.374 1.374 0 0 0-.007-1.942 1.374 1.374 0 0 0-1.943-.007l-4.63 4.95a2.63 2.63 0 0 1-1.899.839 2.617 2.617 0 0 1-1.899-.839L4.264 15.38a2.536 2.536 0 0 1-.582-1.68 2.536 2.536 0 0 1 .582-1.68l3.855-4.125 4.41-4.717a1.375 1.375 0 0 0-.962-2.31zM16.5 10.75h6a1.25 1.25 0 0 1 0 2.5h-6a1.25 1.25 0 0 1 0-2.5z" />
    </svg>
  );
}

function CodeChefIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.5 2C6.8 2 3 5.8 3 10.5c0 3.2 1.8 6 4.4 7.4l-.8 2.6c-.2.5.2 1 .7 1h8.4c.5 0 .9-.5.7-1l-.8-2.6c2.6-1.4 4.4-4.2 4.4-7.4C20 5.8 16.2 2 11.5 2zm-3 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
    </svg>
  );
}

function CodeforcesIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="10" width="5" height="12" rx="1.5" fill="#3b82f6" />
      <rect x="9.5" y="4" width="5" height="18" rx="1.5" fill="#eab308" />
      <rect x="17" y="7" width="5" height="15" rx="1.5" fill="#ef4444" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      
      {/* Background Glowing Aurora Waves matching reference */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/15 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-pink-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-10 w-[350px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full" />

        {/* Dynamic Curved Flowing Neon Wave Lines */}
        <svg
          className="absolute top-12 left-0 w-full h-[650px] opacity-40 neon-glow-purple"
          viewBox="0 0 1440 650"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 220 C 300 120, 600 380, 950 200 C 1200 80, 1400 320, 1600 240"
            stroke="url(#purpleWave)"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          <path
            d="M-50 280 C 350 180, 650 440, 1000 260 C 1250 140, 1450 380, 1650 300"
            stroke="url(#amberWave)"
            strokeWidth="1.2"
          />
          <path
            d="M0 360 C 400 240, 700 500, 1100 320 C 1350 200, 1500 420, 1700 350"
            stroke="url(#purpleWave)"
            strokeWidth="1"
            strokeOpacity="0.6"
          />
          <defs>
            <linearGradient id="purpleWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#c084fc" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="amberWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.1" />
              <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Grid: Left Bio & Circuit | Center Photo | Right Name & Circuit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 sm:pt-8">
          
          {/* Left Column: Hello & Circuit Pointer Tags */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-5 text-left order-2 lg:order-1">
            
            {/* "Hello," Heading matching reference */}
            <div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none">
                Hello,
              </h1>
              <p className="text-sm sm:text-base text-slate-300/90 mt-3 max-w-sm leading-relaxed">
                {personalInfo.headline} Delivering efficient, scalable solutions to transform technical ideas into reality.
              </p>
            </div>

            {/* Circuit Line Branching to 3 Tags matching reference image */}
            <div className="w-full pt-2">
              <div className="relative pl-6 space-y-3.5">
                {/* SVG Connecting Circuit Line */}
                <svg
                  className="absolute left-0 top-2 w-6 h-32 text-purple-400/60 pointer-events-none"
                  viewBox="0 0 24 130"
                  fill="none"
                >
                  {/* Origin Circle */}
                  <circle cx="4" cy="4" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="#0d0f18" />
                  {/* Line down and branching */}
                  <path d="M4 8 V115" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
                  {/* Branch to Tag 1 */}
                  <path d="M4 14 H20" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="20" cy="14" r="2" fill="currentColor" />
                  {/* Branch to Tag 2 */}
                  <path d="M4 62 H20" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="20" cy="62" r="2" fill="currentColor" />
                  {/* Branch to Tag 3 */}
                  <path d="M4 110 H20" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="20" cy="110" r="2" fill="currentColor" />
                </svg>

                {/* Tag 1: IT Engineer / Undergrad */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#12141f]/90 border border-white/10 text-xs sm:text-sm font-medium text-slate-200 hover:border-purple-400/50 hover:bg-[#16192a] transition-all shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>IT Engineer (PICT Undergrad)</span>
                </div>

                {/* Tag 2: Web / Backend Dev */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#12141f]/90 border border-white/10 text-xs sm:text-sm font-medium text-slate-200 hover:border-purple-400/50 hover:bg-[#16192a] transition-all shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  <span>Backend & Systems Dev</span>
                </div>

                {/* Tag 3: Competitive Programmer / Data */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#12141f]/90 border border-white/10 text-xs sm:text-sm font-medium text-slate-200 hover:border-purple-400/50 hover:bg-[#16192a] transition-all shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Competitive Programmer (1000+ DSA)</span>
                </div>
              </div>
            </div>

            {/* Quick Status Pill */}
            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open for Engineering Roles & Internships</span>
            </div>

          </div>

          {/* Center Column: User Personal Photo */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] mx-auto group">
              
              {/* Backlight Aura Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 via-pink-500/20 to-amber-500/10 blur-2xl rounded-full scale-95 group-hover:scale-105 transition-all duration-500 -z-10" />

              {/* Glowing Framed Photo Container matching reference */}
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-white/10 via-transparent to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xs">
                
                {/* User's Actual Photo */}
                <div className="w-full h-[400px] sm:h-[450px] overflow-hidden flex items-start justify-center bg-[#0d0f18]/60">
                  <img
                    src="/sujal-photo.png"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] group-hover:scale-[1.03] transition-transform duration-500"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                    }}
                  />
                </div>

                {/* Sleek Bottom Vignette Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b0d14] via-[#0b0d14]/70 to-transparent pointer-events-none" />

                {/* Subtle Floating Verified Pill at base of photo */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0e101a]/90 border border-white/15 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span className="text-[11px] font-mono text-slate-200 font-medium">PICT Pune · 2024–2028</span>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Social Nodes Circuit & "I am Sujal Supekar" */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right space-y-6 order-3">
            
            {/* Social Icons Circuit matching reference nodes */}
            <div className="w-full flex lg:justify-end">
              <div className="relative flex items-center gap-2 sm:gap-3 bg-[#11131c]/90 border border-white/10 rounded-2xl p-2 sm:p-2.5 backdrop-blur-md shadow-xl shadow-black/40">
                {/* Circuit node: GitHub */}
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400 hover:bg-purple-500/20 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
                  title="GitHub"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>

                {/* Circuit node: LinkedIn */}
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400 hover:bg-purple-500/20 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
                  title="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>

                {/* Circuit node: LeetCode */}
                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400 hover:bg-amber-500/20 text-slate-300 hover:text-amber-400 flex items-center justify-center transition-all duration-200 hover:scale-105"
                  title="LeetCode"
                >
                  <LeetCodeIcon className="w-4 h-4" />
                </a>

                {/* Circuit node: CodeChef */}
                <a
                  href={personalInfo.socials.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CodeChef Profile"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400 hover:bg-amber-500/20 text-slate-300 hover:text-amber-400 flex items-center justify-center transition-all duration-200 hover:scale-105"
                  title="CodeChef"
                >
                  <CodeChefIcon className="w-4 h-4" />
                </a>

                {/* Circuit node: Codeforces */}
                <a
                  href={personalInfo.socials.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Codeforces Profile"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 hover:border-red-400 hover:bg-red-500/20 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
                  title="Codeforces"
                >
                  <CodeforcesIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* "I am Sujal Supekar" Headline matching reference */}
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl text-slate-300 font-light block tracking-tight">
                I am
              </span>
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight block">
                Sujal
              </span>
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 tracking-tight block">
                Supekar
              </span>
            </div>

            {/* Academic Credential & Location */}
            <div className="flex flex-col items-start lg:items-end text-xs font-mono text-slate-400 space-y-1">
              <span className="text-slate-300 font-semibold">{personalInfo.degree}</span>
              <span>{personalInfo.college}</span>
              <span className="text-amber-300 font-bold">Current CGPA: {personalInfo.cgpa}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-purple-600/30 hover:scale-105 transition-all duration-200"
              >
                <span>Recent Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Sujal-Supekar-Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 hover:border-purple-400/50 hover:text-white transition-all duration-200"
              >
                <FileDown className="w-3.5 h-3.5 text-purple-400" />
                <span>Resume</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Hero Card: "About Me" matching reference design */}
        <div id="about-card" className="mt-12 sm:mt-16 rounded-3xl bg-[#0f111a]/95 border border-white/10 p-6 sm:p-8 lg:p-10 backdrop-blur-2xl shadow-2xl shadow-black/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: About Me Bio */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  About Me
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {personalInfo.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>PICT Pune · CGPA: <strong className="text-white">{personalInfo.cgpa}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Backend & API Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>PostgreSQL & Relational Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>CodeChef 3★ & Codeforces Pupil</span>
                </div>
              </div>
            </div>

            {/* Right Column: Feature Highlights matching reference cards */}
            <div className="lg:col-span-6 space-y-3.5">
              
              {/* Feature 1: Backend Systems */}
              <a
                href="#projects"
                className="group p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex items-center justify-between gap-4 shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-[1.5px] shrink-0 shadow-md shadow-purple-500/20">
                    <div className="w-full h-full rounded-[10px] bg-[#12141f] flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                      <Server className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                      Backend Systems & REST APIs
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Node.js, Express.js, PostgreSQL, JWT Authentication, and relational schema optimization.
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover:bg-purple-500 group-hover:border-purple-400 group-hover:text-white flex items-center justify-center text-slate-400 transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>

              {/* Feature 2: Algorithmic Problem Solving */}
              <a
                href="#achievements"
                className="group p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex items-center justify-between gap-4 shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-amber-500 p-[1.5px] shrink-0 shadow-md shadow-amber-500/20">
                    <div className="w-full h-full rounded-[10px] bg-[#12141f] flex items-center justify-center text-amber-300 group-hover:scale-105 transition-transform">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      Competitive Problem Solving & DSA
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      1000+ problems solved across LeetCode, CodeChef (3-Star), and Codeforces (Pupil).
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:text-white flex items-center justify-center text-slate-400 transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                {stats.map((s, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                    <div className="text-base sm:text-lg font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                      {s.value}
                    </div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
