import React from 'react';
import { consultingData } from '../data/siteData';

const consultIcons: Record<string, React.ReactNode> = {
  chart: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#ff6a00]">
      <path d="M8 40V22M18 40V12M28 40V26M38 40V16" />
    </svg>
  ),
  chip: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#ff6a00]">
      <rect x="14" y="14" width="20" height="20" rx="2" />
      <path d="M24 8v6M24 34v6M8 24h6M34 24h6" />
    </svg>
  ),
  node: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#ff6a00]">
      <circle cx="24" cy="24" r="6" />
      <circle cx="10" cy="12" r="3" />
      <circle cx="38" cy="12" r="3" />
      <circle cx="12" cy="38" r="3" />
      <path d="M13 14l8 7M35 14l-8 7M15 36l6-8" />
    </svg>
  )
};

export const ConsultingSection: React.FC = () => {
  return (
    <section className="section video-section relative py-20 sm:py-28 overflow-hidden" id="consulting">
      {/* Background Video / Poster */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          className="sec-video w-full h-full object-cover opacity-20 filter brightness-90"
          autoPlay
          muted
          loop
          playsInline
          poster="/img/posters/consulting-vault.jpg"
          onError={(e) => {
            (e.target as HTMLVideoElement).style.display = 'none';
          }}
        >
          <source src="/video/consulting-vault.mp4" type="video/mp4" />
          <source src="https://www.oranjestride.com/video/consulting-vault.mp4" type="video/mp4" />
        </video>
        <img
          className="sec-poster absolute inset-0 w-full h-full object-cover opacity-20 -z-10"
          src="/img/posters/consulting-vault.jpg"
          alt=""
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060a12] via-[#060a12]/80 to-[#060a12]" />
      </div>

      <div className="sec-content relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="max-w-3xl mb-14">
          <p className="section-label text-xs sm:text-sm font-mono uppercase tracking-widest text-[#ff6a00] font-semibold mb-3">
            {consultingData.label}
          </p>
          <h2 className="headline text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-4">
            {consultingData.headA}
            <span className="accent bg-gradient-to-r from-[#ff6a00] to-[#f47c20] bg-clip-text text-transparent">
              {consultingData.headAccent}
            </span>
          </h2>
          <p className="subhead text-base sm:text-lg text-[#9aa0ae] leading-relaxed">
            {consultingData.sub}
          </p>
        </div>

        <div className="consult-layout grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: 3 Consulting Items */}
          <div className="lg:col-span-7 grid gap-6">
            {consultingData.items.map((item, idx) => (
              <div
                key={idx}
                className="consult-item p-6 rounded-2xl bg-[#1e2d3d]/30 border border-white/10 hover:border-orange-500/30 flex items-start gap-5 transition-all duration-300 group"
              >
                <div className="consult-icon p-3.5 rounded-xl bg-[#ff6a00]/10 border border-[#ff6a00]/25 group-hover:bg-[#ff6a00]/20 flex-shrink-0 transition-colors">
                  {consultIcons[item.prop] || consultIcons.chart}
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-white mb-2 group-hover:text-[#ff6a00] transition-colors">
                    {item.h}
                  </h4>
                  <p className="text-sm text-[#9aa0ae] leading-relaxed">
                    {item.p}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: HUD (Heads-Up Display) Panel */}
          <div className="lg:col-span-5">
            <div className="hud relative p-7 rounded-2xl bg-[#060a12]/90 border border-orange-500/30 backdrop-blur-xl shadow-[inset_0_0_60px_rgba(255,106,0,0.06),0_20px_50px_rgba(0,0,0,0.8)]">
              {/* Corner brackets */}
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#ff6a00]" />
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#ff6a00]" />
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#ff6a00]" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#ff6a00]" />

              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <h4 className="font-display font-bold text-lg text-white tracking-wide flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff6a00] animate-pulse" />
                  {consultingData.hudTitle}
                </h4>
                <span className="text-[11px] font-mono text-[#ff6a00] uppercase tracking-wider">
                  Live Telemetry
                </span>
              </div>

              {/* Data Rows */}
              <div className="space-y-3.5 mb-8">
                {consultingData.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="data-row flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-white/[0.04]"
                  >
                    <span className="text-neutral-400">{m.label}</span>
                    <strong className="font-mono font-bold text-[#ff6a00] tracking-wider">
                      {m.value}
                    </strong>
                  </div>
                ))}
              </div>

              {/* Graphical Progress Bars */}
              <div className="space-y-4 pt-2">
                {consultingData.bars.map((bar, idx) => (
                  <div key={idx} className="bar space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-neutral-300">{bar.label}</span>
                      <span className="font-mono text-[#ff6a00]">{bar.value}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#ff6a00] to-[#f47c20] rounded-full transition-all duration-1000 shadow-[0_0_10px_#ff6a00]"
                        style={{ width: `${bar.value}%` }}
                      />
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
};
