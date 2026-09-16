import React from 'react';
import { indiaTourData } from '../data/siteData';

interface IndiaTourSectionProps {
  onEnquire: () => void;
}

export const IndiaTourSection: React.FC<IndiaTourSectionProps> = ({ onEnquire }) => {
  return (
    <section className="section video-section relative py-20 sm:py-28 overflow-hidden" id="tour">
      {/* Background Video / Poster */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          className="sec-video w-full h-full object-cover opacity-20 filter brightness-90"
          autoPlay
          muted
          loop
          playsInline
          poster="/img/posters/india-tour-globe.jpg"
          onError={(e) => {
            (e.target as HTMLVideoElement).style.display = 'none';
          }}
        >
          <source src="/video/india-tour-globe.mp4" type="video/mp4" />
          <source src="https://www.oranjestride.com/video/india-tour-globe.mp4" type="video/mp4" />
        </video>
        <img
          className="sec-poster absolute inset-0 w-full h-full object-cover opacity-20 -z-10"
          src="/img/posters/india-tour-globe.jpg"
          alt=""
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060a12] via-[#060a12]/85 to-[#060a12]" />
      </div>

      <div className="sec-content relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="tour-layout grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Subhead, and Mascot */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6a00]/10 border border-[#ff6a00]/25 text-[#ff6a00] text-xs font-mono uppercase tracking-wider mb-4">
              <span>✈</span> {indiaTourData.label}
            </div>
            <h2 className="headline text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-6">
              {indiaTourData.headA}
              <span className="accent bg-gradient-to-r from-[#ff6a00] to-[#f47c20] bg-clip-text text-transparent">
                {indiaTourData.headAccent}
              </span>
            </h2>
            <p className="lead text-base sm:text-lg text-[#9aa0ae] leading-relaxed mb-8">
              {indiaTourData.sub}
            </p>

            <button
              onClick={onEnquire}
              className="btn btn-primary px-8 py-4 rounded-full font-display font-bold text-sm tracking-wider uppercase bg-gradient-to-b from-[#ff6a00] to-[#f47c20] text-[#180a00] shadow-[0_10px_35px_rgba(255,106,0,0.4)] hover:shadow-[0_14px_45px_rgba(255,106,0,0.6)] transition-all cursor-pointer mb-8"
            >
              Apply for 2026 Cohort →
            </button>

            {/* Mascot in point/wave pose */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 max-w-sm">
              <div className="w-20 h-20 flex-shrink-0">
                <img
                  src="/img/mascot/poses/run.webp"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://www.oranjestride.com/img/mascot/poses/run.webp';
                  }}
                  alt="Marut India Tour"
                  className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(255,106,0,0.3)]"
                />
              </div>
              <div>
                <strong className="block text-white font-display text-sm font-semibold mb-0.5">
                  Limited Seats Worldwide
                </strong>
                <p className="text-xs text-[#9aa0ae]">
                  Hosted on-campus with executive immersion and networking.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Tour Features */}
          <div className="lg:col-span-6">
            <div className="tour-features grid gap-5">
              {indiaTourData.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="tour-feat p-6 rounded-2xl bg-[#1e2d3d]/35 border border-white/10 hover:border-orange-500/30 transition-all duration-300 flex items-start gap-4 group"
                >
                  <span className="dot w-3 h-3 rounded-full bg-[#ff6a00] mt-1.5 shadow-[0_0_10px_#ff6a00] flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <div>
                    <h4 className="font-display font-bold text-base sm:text-lg text-white mb-1.5 group-hover:text-[#ff6a00] transition-colors">
                      {feat.h}
                    </h4>
                    <p className="text-sm text-[#9aa0ae] leading-relaxed">
                      {feat.p}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
