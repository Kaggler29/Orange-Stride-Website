import React from 'react';
import { aboutData } from '../data/siteData';

export const AboutSection: React.FC = () => {
  return (
    <section className="section relative py-20 sm:py-28 overflow-hidden" id="about">
      <div className="facet-bg absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true" />

      <div className="sec-content relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="about-grid grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & 4 Principles */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <p className="section-label text-xs sm:text-sm font-mono uppercase tracking-widest text-[#ff6a00] font-semibold mb-3">
              {aboutData.label}
            </p>
            <h2 className="headline text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-8">
              {aboutData.headA}
              <span className="accent bg-gradient-to-r from-[#ff6a00] to-[#f47c20] bg-clip-text text-transparent">
                {aboutData.headAccent}
              </span>
            </h2>

            <div className="principles grid gap-6 w-full">
              {aboutData.principles.map((pr) => (
                <div
                  key={pr.n}
                  className="principle flex items-start gap-5 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-orange-500/30 hover:bg-[#1e2d3d]/30 transition-all duration-300"
                >
                  <span className="num font-display font-bold text-2xl text-[#ff6a00] px-3 py-1.5 rounded-lg bg-[#ff6a00]/10 border border-[#ff6a00]/20 flex-shrink-0">
                    {pr.n}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white mb-1.5">
                      {pr.h}
                    </h3>
                    <p className="text-sm text-[#9aa0ae] leading-relaxed">
                      {pr.p}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Framed Mascot Stage */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl bg-gradient-to-b from-[#1e2d3d]/40 to-[#060a12]/80 border border-orange-500/20 p-8 flex flex-col items-center justify-center overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] group">
              {/* Radial glow */}
              <div className="about-stage-glow absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,106,0,0.25)_0%,transparent_70%)] animate-pulse pointer-events-none" />

              <div className="relative z-10 w-64 max-w-full transform transition-transform duration-500 group-hover:scale-105">
                <img
                  src="/img/mascot/poses/idle.webp"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://www.oranjestride.com/img/mascot/poses/idle.webp';
                  }}
                  alt="Marut at OranjeStride Stage"
                  className="w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(255,106,0,0.3)]"
                />
              </div>

              <div className="relative z-10 mt-6 text-center">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-mono text-[#ff6a00] bg-[#ff6a00]/10 border border-[#ff6a00]/30 mb-1">
                  Practitioner-Engineered
                </div>
                <p className="text-xs text-neutral-400">
                  Real job roles · Live project execution
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
