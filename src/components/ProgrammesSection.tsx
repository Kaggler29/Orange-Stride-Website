import React, { useState } from 'react';
import { programmesData } from '../data/siteData';

export const ProgrammesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'corporate' | 'university'>('corporate');

  const currentTab = programmesData.tabs.find((t) => t.id === activeTab) || programmesData.tabs[0];

  return (
    <section className="section video-section relative py-20 sm:py-28 overflow-hidden" id="programmes">
      {/* Background Video / Poster */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          className="sec-video w-full h-full object-cover opacity-25 filter brightness-90"
          autoPlay
          muted
          loop
          playsInline
          poster="/img/posters/programmes-ascent.jpg"
          onError={(e) => {
            (e.target as HTMLVideoElement).style.display = 'none';
          }}
        >
          <source src="/video/programmes-ascent.mp4" type="video/mp4" />
          <source src="https://www.oranjestride.com/video/programmes-ascent.mp4" type="video/mp4" />
        </video>
        <img
          className="sec-poster absolute inset-0 w-full h-full object-cover opacity-20 -z-10"
          src="/img/posters/programmes-ascent.jpg"
          alt=""
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060a12] via-[#060a12]/85 to-[#060a12]" />
      </div>

      <div className="sec-content relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="prog-layout grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Tab Selection */}
          <div className="lg:col-span-5">
            <p className="section-label text-xs sm:text-sm font-mono uppercase tracking-widest text-[#ff6a00] font-semibold mb-3">
              {programmesData.label}
            </p>
            <h2 className="headline text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-4">
              {programmesData.headA}
              <span className="accent bg-gradient-to-r from-[#ff6a00] to-[#f47c20] bg-clip-text text-transparent">
                {programmesData.headAccent}
              </span>
            </h2>
            <p className="lead text-base sm:text-lg text-[#9aa0ae] leading-relaxed mb-8">
              {programmesData.sub}
            </p>

            {/* Tab switchers */}
            <div className="tabs flex flex-col sm:flex-row gap-3 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 w-fit" role="tablist">
              {programmesData.tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as 'corporate' | 'university')}
                    className={`tab px-6 py-3 rounded-xl font-display text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#ff6a00] text-[#180a00] shadow-[0_4px_20px_rgba(255,106,0,0.4)]'
                        : 'text-[#9aa0ae] hover:text-white'
                    }`}
                    role="tab"
                    aria-selected={isActive}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* University Joint Certificate Callout */}
            <div className="mt-8 p-5 rounded-2xl bg-[#ff6a00]/10 border border-[#ff6a00]/25 flex items-start gap-4">
              <span className="text-2xl">🎓</span>
              <div>
                <strong className="block text-white font-display text-sm mb-1 font-semibold">
                  Accredited & Recognized
                </strong>
                <p className="text-xs text-[#9aa0ae] leading-relaxed">
                  {programmesData.cert}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Steps / Curriculum Modules */}
          <div className="lg:col-span-7">
            <div className="steps grid gap-5">
              {currentTab.steps.map((step, idx) => (
                <div
                  key={idx}
                  className={`step relative p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                    step.flagship
                      ? 'bg-gradient-to-br from-[#ff6a00]/15 via-[#1e2d3d]/50 to-[#060a12] border-orange-500/40 shadow-[0_10px_35px_rgba(255,106,0,0.15)]'
                      : 'bg-[#1e2d3d]/30 border-white/10 hover:border-orange-500/30'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight flex items-center gap-2">
                      {step.h}
                    </h3>
                    {step.flagship && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#ff6a00] text-[#180a00] shadow-[0_0_12px_rgba(255,106,0,0.5)]">
                        ★ Flagship
                      </span>
                    )}
                    {step.cert && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium text-[#ff6a00] bg-[#ff6a00]/10 border border-[#ff6a00]/30">
                        Co-Signed Cert
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#9aa0ae] leading-relaxed">
                    {step.p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
