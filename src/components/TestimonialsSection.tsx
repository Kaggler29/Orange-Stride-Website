import React from 'react';
import { testimonialsData } from '../data/siteData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="band relative py-20 sm:py-28 bg-[#060a12] border-t border-orange-500/10 overflow-hidden" id="testimonials">
      <div className="facet-bg absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true" />

      <div className="sec-content relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label text-xs sm:text-sm font-mono uppercase tracking-widest text-[#ff6a00] font-semibold mb-3">
            {testimonialsData.label}
          </p>
          <h2 className="headline text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            {testimonialsData.headA}
            <span className="accent bg-gradient-to-r from-[#ff6a00] to-[#f47c20] bg-clip-text text-transparent">
              {testimonialsData.headAccent}
            </span>
          </h2>
        </div>

        <div className="testi-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.items.map((item, idx) => (
            <div
              key={idx}
              className="testi p-8 rounded-2xl bg-gradient-to-b from-[#1e2d3d]/30 to-[#060a12]/80 border border-white/10 hover:border-orange-500/30 hover:shadow-[0_12px_36px_rgba(255,106,0,0.12)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="stars text-[#ff6a00] text-sm tracking-widest mb-4" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <blockquote className="text-sm sm:text-base text-neutral-200 leading-relaxed italic mb-8">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="testi-who flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="avatar w-11 h-11 rounded-full bg-gradient-to-br from-[#ff6a00] to-[#f47c20] text-[#180a00] font-display font-bold flex items-center justify-center text-base shadow-md flex-shrink-0">
                  {item.initial}
                </div>
                <div>
                  <strong className="block text-white font-display font-bold text-sm">
                    {item.name}
                  </strong>
                  <span className="text-xs text-[#9aa0ae]">
                    {item.org}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
