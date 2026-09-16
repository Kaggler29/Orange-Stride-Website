import React from 'react';

export const BrandMomentum: React.FC = () => {
  return (
    <section className="section video-section band-moment relative py-20 sm:py-28 overflow-hidden" id="brand">
      {/* Video / Poster Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          className="sec-video w-full h-full object-cover opacity-30 filter brightness-95"
          autoPlay
          muted
          loop
          playsInline
          poster="/img/posters/mascot-soaring-banner.jpg"
          onError={(e) => {
            (e.target as HTMLVideoElement).style.display = 'none';
          }}
        >
          <source src="/video/mascot-soaring-banner.mp4" type="video/mp4" />
          <source src="https://www.oranjestride.com/video/mascot-soaring-banner.mp4" type="video/mp4" />
        </video>
        <img
          className="sec-poster absolute inset-0 w-full h-full object-cover opacity-25 -z-10"
          src="/img/posters/mascot-soaring-banner.jpg"
          alt=""
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060a12] via-transparent to-[#060a12]" />
      </div>

      <div className="sec-content relative z-10 max-w-7xl mx-auto px-6 sm:px-10 text-center">
        <p className="eyebrow text-xs sm:text-sm font-mono uppercase tracking-widest text-[#ff6a00] font-semibold mb-3">
          The Mark in Motion
        </p>
        <h2 className="headline text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          Carry the <span className="accent text-[#ff6a00]">Momentum</span>
        </h2>
      </div>
    </section>
  );
};
