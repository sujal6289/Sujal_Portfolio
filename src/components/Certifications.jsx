import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  // If no certification data is present (truth from resume), hide the section
  // to avoid rendering fake or placeholder credentials.
  if (!certificationsData || certificationsData.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-brand-400 bg-brand-500/10 border border-brand-500/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Licenses & Certifications
          </h2>
          <div className="w-12 h-1 bg-brand-400 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="bg-navy-900/60 rounded-2xl p-6 border border-white/10 hover:border-brand-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm font-mono text-brand-300">
                  {cert.issuer}
                </p>
                <p className="text-xs text-slate-400 mt-2">
                  Issued: {cert.issueDate}
                </p>
              </div>

              {cert.credentialUrl && (
                <div className="pt-4 mt-4 border-t border-white/5">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-400 hover:text-brand-300 font-semibold"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
