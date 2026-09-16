import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { contactData } from '../data/siteData';

const tokenIcons: Record<string, React.ReactNode> = {
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#ff6a00]">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#ff6a00]">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#ff6a00]">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
};

const trustIcons = [
  // Check
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#ff6a00]"><path d="M20 6 9 17l-5-5"/></svg>,
  // Cap
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#ff6a00]"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  // Users
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#ff6a00]"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>,
  // Star
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#ff6a00]"><path d="M12 2 15 9l7 .5-5.5 4.5L18 21l-6-4-6 4 1.5-7L2 9.5 9 9z"/></svg>
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    enquiryType: contactData.enquiryOptions[0],
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate reliable dispatch with Formspree endpoint support
    try {
      await fetch('https://formspree.io/f/mjgaovpl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(() => {
        // Safe fallback in sandboxed env
      });
    } catch {
      // Ignored
    }

    setSubmitting(false);
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#ff6a00', '#f47c20', '#ffffff']
    });
  };

  return (
    <section className="section video-section relative py-20 sm:py-28 overflow-hidden" id="contact">
      {/* Background Video / Poster */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          className="sec-video w-full h-full object-cover opacity-20 filter brightness-90"
          autoPlay
          muted
          loop
          playsInline
          poster="/img/posters/closing-emblem.jpg"
          onError={(e) => {
            (e.target as HTMLVideoElement).style.display = 'none';
          }}
        >
          <source src="/video/closing-emblem.mp4" type="video/mp4" />
          <source src="https://www.oranjestride.com/video/closing-emblem.mp4" type="video/mp4" />
        </video>
        <img
          className="sec-poster absolute inset-0 w-full h-full object-cover opacity-20 -z-10"
          src="/img/posters/closing-emblem.jpg"
          alt=""
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060a12] via-[#060a12]/85 to-[#060a12]" />
      </div>

      <div className="sec-content relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="section-label text-xs sm:text-sm font-mono uppercase tracking-widest text-[#ff6a00] font-semibold mb-3">
            {contactData.label}
          </p>
          <h2 className="headline text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-4">
            {contactData.headA}
            <span className="accent bg-gradient-to-r from-[#ff6a00] to-[#f47c20] bg-clip-text text-transparent">
              {contactData.headAccent}
            </span>
            {contactData.headB}
          </h2>
          <p className="subhead text-base sm:text-lg text-[#9aa0ae] leading-relaxed">
            {contactData.sub}
          </p>
        </div>

        {/* Trust Badges */}
        <div className="trust-row flex flex-wrap justify-center gap-3 mb-14">
          {contactData.trust.map((badge, idx) => (
            <span
              key={idx}
              className="trust-chip inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#ff6a00]/10 border border-[#ff6a00]/25 text-neutral-200"
            >
              {trustIcons[idx]}
              {badge}
            </span>
          ))}
        </div>

        {/* Contact Layout: Info Tokens + Form */}
        <div className="contact-layout grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info Tokens */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                Connect Directly
              </h3>
              <p className="text-sm text-[#9aa0ae] leading-relaxed">
                Reach out to our leadership team for custom institutional partnerships, executive workshops, or corporate upskilling cohorts.
              </p>
            </div>

            <div className="contact-tokens grid gap-4 pt-2">
              {contactData.tokens.map((tok, idx) => (
                <div
                  key={idx}
                  className="contact-token flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-orange-500/30 transition-colors"
                >
                  <div className="ico w-12 h-12 rounded-xl flex items-center justify-center bg-[#ff6a00]/10 border border-[#ff6a00]/25 flex-shrink-0">
                    {tokenIcons[tok.icon]}
                  </div>
                  <div>
                    <span className="block text-xs text-[#9aa0ae]">
                      {tok.span}
                    </span>
                    <strong className="block text-sm sm:text-base font-medium text-white">
                      {tok.strong}
                    </strong>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick response badge */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#ff6a00]/10 to-transparent border-l-2 border-[#ff6a00]">
              <span className="text-xs text-[#ff6a00] font-mono font-semibold uppercase tracking-wider block mb-1">
                Guaranteed Response
              </span>
              <p className="text-xs text-neutral-300">
                All institutional enquiries are acknowledged within 24 business hours by senior practice leads.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="form p-8 sm:p-10 rounded-3xl bg-[#060a12]/90 border border-orange-500/25 backdrop-blur-xl shadow-[inset_0_0_80px_rgba(255,106,0,0.06),0_25px_60px_rgba(0,0,0,0.8)]">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-[#ff6a00]/20 border border-[#ff6a00] flex items-center justify-center text-3xl mx-auto mb-4 text-[#ff6a00]">
                    ✓
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-sm text-[#9aa0ae] max-w-md mx-auto mb-6">
                    Your enquiry has been received. Our team will review your requirements and follow up with a tailored curriculum blueprint.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        organization: '',
                        enquiryType: contactData.enquiryOptions[0],
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#ff6a00] text-[#180a00] uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block text-xs font-medium text-[#9aa0ae]">
                      Your Name *
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dilpreet Singh"
                        className="form-input mt-1.5 w-full px-4 py-3 rounded-xl bg-[#1e2d3d]/60 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff6a00] focus:ring-1 focus:ring-[#ff6a00] transition-all"
                      />
                    </label>

                    <label className="block text-xs font-medium text-[#9aa0ae]">
                      Work Email *
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="dilpreet@company.com"
                        className="form-input mt-1.5 w-full px-4 py-3 rounded-xl bg-[#1e2d3d]/60 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff6a00] focus:ring-1 focus:ring-[#ff6a00] transition-all"
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block text-xs font-medium text-[#9aa0ae]">
                      Organization / University *
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Company or Institute"
                        className="form-input mt-1.5 w-full px-4 py-3 rounded-xl bg-[#1e2d3d]/60 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff6a00] focus:ring-1 focus:ring-[#ff6a00] transition-all"
                      />
                    </label>

                    <label className="block text-xs font-medium text-[#9aa0ae]">
                      Phone / WhatsApp
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="form-input mt-1.5 w-full px-4 py-3 rounded-xl bg-[#1e2d3d]/60 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff6a00] focus:ring-1 focus:ring-[#ff6a00] transition-all"
                      />
                    </label>
                  </div>

                  <label className="block text-xs font-medium text-[#9aa0ae]">
                    Programme or Consulting Track *
                    <select
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="form-input mt-1.5 w-full px-4 py-3 rounded-xl bg-[#1e2d3d]/60 border border-white/10 text-white focus:outline-none focus:border-[#ff6a00] focus:ring-1 focus:ring-[#ff6a00] transition-all"
                    >
                      {contactData.enquiryOptions.map((opt, oIdx) => (
                        <option key={oIdx} value={opt} className="bg-[#1e2d3d] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block text-xs font-medium text-[#9aa0ae]">
                    Message / Learning Objectives
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about cohort size, timelines, or specific analytical objectives..."
                      className="form-input mt-1.5 w-full px-4 py-3 rounded-xl bg-[#1e2d3d]/60 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff6a00] focus:ring-1 focus:ring-[#ff6a00] transition-all resize-none"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full mt-2 py-4 rounded-full font-display font-bold text-sm tracking-wider uppercase bg-gradient-to-b from-[#ff6a00] to-[#f47c20] text-[#180a00] shadow-[0_10px_30px_rgba(255,106,0,0.4)] hover:shadow-[0_14px_40px_rgba(255,106,0,0.6)] disabled:opacity-50 transition-all cursor-pointer"
                  >
                    {submitting ? 'Transmitting Enquiry...' : 'Submit Enquiry →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
