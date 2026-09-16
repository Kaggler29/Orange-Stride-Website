import React, { useState } from 'react';
import { mascotLabData } from '../data/siteData';

export const MascotLab: React.FC = () => {
  const [activeClip, setActiveClip] = useState<'wave' | 'run' | 'cheer'>('run');

  const poseImages = {
    wave: '/img/mascot/poses/wave.webp',
    run: '/img/mascot/poses/run.webp',
    cheer: '/img/mascot/poses/cheer.webp'
  };

  return (
    <section className="band relative py-20 sm:py-28 bg-[#060a12] border-t border-orange-500/10 overflow-hidden" id="mascot-lab">
      <div className="facet-bg absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true" />

      <div className="sec-content relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="lab-card relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-[#1e2d3d]/40 via-[#17314a]/20 to-[#060a12] border border-orange-500/25 shadow-[0_30px_80px_rgba(0,0,0,0.7)] overflow-hidden">
          {/* Ambient spotlight sweep */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(255,106,0,0.15)_0%,transparent_70%)] pointer-events-none" />

          <div className="lab-split grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Copy & Controls */}
            <div className="lab-copy lg:col-span-7 flex flex-col items-start">
              <p className="section-label text-xs sm:text-sm font-mono uppercase tracking-widest text-[#ff6a00] font-semibold mb-3">
                {mascotLabData.label}
              </p>
              <h2 className="headline text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-6">
                {mascotLabData.headA}
                <span className="accent bg-gradient-to-r from-[#ff6a00] to-[#f47c20] bg-clip-text text-transparent">
                  {mascotLabData.headAccent}
                </span>
              </h2>
              <p className="lead text-base sm:text-lg text-[#9aa0ae] leading-relaxed mb-8">
                {mascotLabData.sub}
              </p>

              <div className="lab-chips flex flex-wrap items-center gap-3">
                <span className="lab-hint text-xs sm:text-sm font-mono text-neutral-400 mr-2">
                  {mascotLabData.hint}
                </span>
                {mascotLabData.clips.map((c) => (
                  <button
                    key={c.clip}
                    type="button"
                    onClick={() => setActiveClip(c.clip as 'wave' | 'run' | 'cheer')}
                    className={`lab-chip px-5 py-2.5 rounded-full font-display text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                      activeClip === c.clip
                        ? 'bg-[#ff6a00] text-[#180a00] shadow-[0_0_20px_rgba(255,106,0,0.5)] scale-105'
                        : 'bg-white/5 border border-white/10 text-neutral-300 hover:border-orange-500/40 hover:text-white'
                    }`}
                    aria-label={`Play ${c.label} animation`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Interactive Character Stage */}
            <div className="lab-stage lg:col-span-5 relative flex flex-col items-center justify-center min-h-[320px] sm:min-h-[400px]">
              <div className="relative w-full max-w-xs flex flex-col items-center">
                {/* Dynamic animated glow ring under feet */}
                <div className="absolute bottom-6 w-56 h-12 bg-[#ff6a00]/30 blur-xl rounded-full animate-pulse" />
                <div className="absolute bottom-8 w-44 h-8 border border-orange-500/40 rounded-full scale-y-50" />

                {/* Character Pose */}
                <div className="relative z-10 w-64 sm:w-72 transition-all duration-500 transform hover:scale-105">
                  <img
                    key={activeClip}
                    src={poseImages[activeClip]}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://www.oranjestride.com${poseImages[activeClip]}`;
                    }}
                    alt={`OranjeStride Runner performing ${activeClip}`}
                    className="w-full h-auto object-contain filter drop-shadow-[0_20px_35px_rgba(255,106,0,0.35)] animate-[mascotBob_4s_ease-in-out_infinite]"
                  />
                </div>

                {/* Pose Tag */}
                <div className="mt-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-mono text-[#ff6a00] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ff6a00] animate-ping" />
                  Action: {activeClip.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
