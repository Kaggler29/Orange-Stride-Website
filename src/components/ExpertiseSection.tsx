import React from 'react';
import { expertiseData } from '../data/siteData';

const gemIcons: Record<string, React.ReactNode> = {
  brain: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 text-[#ff6a00]">
      <path d="M24 6c-4 0-7 3-7 6 0 1-2 1-2 4s2 3 2 5c0 4 3 7 7 7s7-3 7-7c0-2 2-2 2-5s-2-3-2-4c0-3-3-6-7-6z" />
    </svg>
  ),
  chip: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 text-[#ff6a00]">
      <rect x="14" y="14" width="20" height="20" rx="2" />
      <path d="M24 8v6M24 34v6M8 24h6M34 24h6" />
    </svg>
  ),
  gem: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 text-[#ff6a00]">
      <path d="M24 6 40 20 24 42 8 20z" />
      <path d="M8 20h32M24 6v36" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 text-[#ff6a00]">
      <path d="M8 40V22M18 40V12M28 40V26M38 40V16" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 text-[#ff6a00]">
      <path d="M8 34 20 22l8 6L40 12" />
      <path d="M40 22V12H30" />
    </svg>
  ),
  node: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 text-[#ff6a00]">
      <circle cx="24" cy="24" r="6" />
      <circle cx="10" cy="12" r="3" />
      <circle cx="38" cy="12" r="3" />
      <circle cx="12" cy="38" r="3" />
      <path d="M13 14l8 7M35 14l-8 7M15 36l6-8" />
    </svg>
  )
};

export const ExpertiseSection: React.FC = () => {
  return (
    <section className="section video-section relative py-20 sm:py-28 overflow-hidden" id="expertise">
      {/* Background Video / Poster */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          className="sec-video w-full h-full object-cover opacity-20 filter brightness-90"
          autoPlay
          muted
          loop
          playsInline
          poster="/img/posters/expertise-array.jpg"
          onError={(e) => {
            (e.target as HTMLVideoElement).style.display = 'none';
          }}
        >
          <source src="/video/expertise-array.mp4" type="video/mp4" />
          <source src="https://www.oranjestride.com/video/expertise-array.mp4" type="video/mp4" />
        </video>
        <img
          className="sec-poster absolute inset-0 w-full h-full object-cover opacity-20 -z-10"
          src="/img/posters/expertise-array.jpg"
          alt=""
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060a12] via-[#060a12]/80 to-[#060a12]" />
      </div>

      <div className="sec-content relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label text-xs sm:text-sm font-mono uppercase tracking-widest text-[#ff6a00] font-semibold mb-3">
            {expertiseData.label}
          </p>
          <h2 className="headline text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
            {expertiseData.headA}
            <span className="accent bg-gradient-to-r from-[#ff6a00] to-[#f47c20] bg-clip-text text-transparent">
              {expertiseData.headAccent}
            </span>
          </h2>
          <p className="subhead text-base sm:text-lg text-[#9aa0ae] leading-relaxed">
            {expertiseData.sub}
          </p>
        </div>

        {/* 6 Gem Cards Grid */}
        <div className="grid-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {expertiseData.cards.map((card, idx) => (
            <article
              key={idx}
              className="gem-card group relative p-7 rounded-2xl bg-gradient-to-br from-[#1e2d3d]/50 via-[#17314a]/30 to-[#060a12]/90 border border-orange-500/20 backdrop-blur-md hover:border-orange-500/50 hover:shadow-[0_16px_40px_rgba(255,106,0,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative z-10">
                <div className="gem-icon mb-5 p-3 w-fit rounded-xl bg-[#ff6a00]/10 border border-[#ff6a00]/25 group-hover:bg-[#ff6a00]/20 group-hover:scale-105 transition-all">
                  {gemIcons[card.prop] || gemIcons.gem}
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3 tracking-tight group-hover:text-[#ff6a00] transition-colors">
                  {card.h}
                </h3>
                <p className="text-sm text-[#9aa0ae] leading-relaxed mb-6">
                  {card.p}
                </p>
              </div>

              <div className="tags flex flex-wrap gap-2 pt-4 border-t border-white/5 relative z-10">
                {card.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="tag px-2.5 py-1 rounded-full text-xs font-mono font-medium text-neutral-300 bg-white/5 border border-white/10 group-hover:border-orange-500/30 group-hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
