import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Open email client with pre-filled content
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 bg-brand-500/10 border border-brand-500/20 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Connect & Collaborate
          </h2>
          <div className="w-12 h-1 bg-brand-500 dark:bg-brand-400 rounded-full mt-3" />
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-4 max-w-xl">
            Currently open for software engineering internships, technical collaborations, and problem-solving opportunities. Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="bg-white dark:bg-navy-900/60 hover:bg-slate-50 dark:hover:bg-navy-900/90 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-white/10 hover:border-brand-500/40 dark:hover:border-brand-400/40 transition-all duration-200 shadow-md shadow-black/5 dark:shadow-black/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 hover:text-brand-600 dark:hover:text-brand-300 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  title="Copy email address"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedType === 'email' && (
                <p className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 mt-2 pl-12">
                  ✓ Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Phone Card */}
            <div className="bg-white dark:bg-navy-900/60 hover:bg-slate-50 dark:hover:bg-navy-900/90 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-white/10 hover:border-brand-500/40 dark:hover:border-brand-400/40 transition-all duration-200 shadow-md shadow-black/5 dark:shadow-black/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 hover:text-brand-600 dark:hover:text-brand-300 transition-colors"
                    >
                      {personalInfo.formattedPhone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  title="Copy phone number"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedType === 'phone' && (
                <p className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 mt-2 pl-12">
                  ✓ Phone number copied to clipboard!
                </p>
              )}
            </div>

            {/* Location Card */}
            <div className="bg-white dark:bg-navy-900/60 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-white/10 shadow-md shadow-black/5 dark:shadow-black/20">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Current Location
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* All Verified Socials Grid */}
            <div className="bg-slate-100/70 dark:bg-navy-900/40 rounded-2xl p-5 border border-slate-200 dark:border-white/5">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3">
                Quick Profile Navigation
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-300 flex items-center justify-between border border-slate-200 dark:border-white/5 transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-300 flex items-center justify-between border border-slate-200 dark:border-white/5 transition-colors"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-amber-500 flex items-center justify-between border border-slate-200 dark:border-white/5 transition-colors"
                >
                  <span>LeetCode</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={personalInfo.socials.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-amber-500 flex items-center justify-between border border-slate-200 dark:border-white/5 transition-colors"
                >
                  <span>CodeChef</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7 bg-white dark:bg-navy-900/70 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 backdrop-blur-sm shadow-xl shadow-black/5 dark:shadow-black/20">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
              Fill out the details below to trigger an email directly to Sujal's inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500 dark:focus:border-brand-400 focus:ring-1 focus:ring-brand-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500 dark:focus:border-brand-400 focus:ring-1 focus:ring-brand-500 text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Internship Opportunity / Project Inquiry"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500 dark:focus:border-brand-400 focus:ring-1 focus:ring-brand-500 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Sujal, I'd like to discuss an opportunity regarding..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500 dark:focus:border-brand-400 focus:ring-1 focus:ring-brand-500 text-sm transition-all resize-y min-h-[100px]"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-500 to-brand-600 dark:from-brand-400 dark:to-brand-500 hover:from-brand-400 hover:to-brand-500 text-white dark:text-navy-950 shadow-lg shadow-brand-500/25 transition-all duration-200"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-mono">
                  ✓ Message drafted! Opening your default email client to send to sujalsupekar6289@gmail.com.
                </div>
              )}
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
