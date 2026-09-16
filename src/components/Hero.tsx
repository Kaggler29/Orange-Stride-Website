import React, { useState, useEffect } from 'react';
import { heroData, siteMeta } from '../data/siteData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [bubbleText, setBubbleText] = useState('');
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  const greetings = [
    siteMeta.mascotGreeting,
    "Ready to master Agentic AI & RAG pipelines?",
    "Check out our India AI Learning Tour 2026!",
    "Try DataStride for live in-browser SQL practice!"
  ];

  // Typing effect for speech bubble
  useEffect(() => {
    const fullText = greetings[currentGreetingIndex];
    let charIdx = 0;
    setBubbleText('');

    const timer = setInterval(() => {
      if (charIdx <= fullText.length) {
        setBubbleText(fullText.slice(0, charIdx));
        charIdx++;
      } else {
        clearInterval(timer);
      }
    }, 45);

    return () => clearInterval(timer);
  }, [currentGreetingIndex]);

  const handleMascotClick = () => {
    setCurrentGreetingIndex((prev) => (prev + 1) % greetings.length);
  };

  return (
    <section className="section video-section relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden" id="hero">
      {/* Background Video with Poster Fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          className="sec-video w-full h-full object-cover opacity-35 filter brightness-90 contrast-110"
          autoPlay
          muted
          loop
          playsInline
          poster="/img/posters/hero-opening.jpg"
          onError={(e) => {
            // If local video fails, show poster
            (e.target as HTMLVideoElement).style.display = 'none';
          }}
        >
          <source src="/video/hero-opening.mp4" type="video/mp4" />
          <source src="https://www.oranjestride.com/video/hero-opening.mp4" type="video/mp4" />
        </video>
        <img
          className="sec-poster absolute inset-0 w-full h-full object-cover opacity-30 -z-10"
          src="/img/posters/hero-opening.jpg"
          alt=""
          aria-hidden="true"
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060a12] via-[#060a12]/40 to-[#060a12]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(255,106,0,0.18)_0%,transparent_60%)]" />
      </div>

      <div className="sec-content relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Headlines & CTAs */}
        <div className="lg:col-span-8 flex flex-col items-start">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#ff6a00]/10 border border-[#ff6a00]/25 text-[#ff6a00] text-xs uppercase tracking-widest font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00] animate-ping" />
            {heroData.eyebrow}
          </div>

          <div className="mb-2">
            <span className="wordmark text-2xl sm:text-3xl font-display font-bold">
              <span className="w-oranje text-[#ff6a00]">Oranje</span>
              <span className="w-stride text-white">Stride</span>
            </span>
          </div>

          <h1 className="display text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            {heroData.headlineA}
            <span className="accent bg-gradient-to-r from-[#ff6a00] via-[#ff9547] to-[#f47c20] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(255,106,0,0.4)]">
              {heroData.headlineAccent}
            </span>
          </h1>

          <p className="subhead text-lg sm:text-xl text-[#9aa0ae] max-w-2xl leading-relaxed mb-4">
            {heroData.subhead}
          </p>

          <p className="motto text-sm sm:text-base font-display font-medium text-[#ff6a00]/90 tracking-wide mb-8 border-l-2 border-[#ff6a00] pl-4 py-0.5">
            {siteMeta.motto}
          </p>

          <div className="cta-row flex flex-wrap items-center gap-4">
            <a
              href="#programmes"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('programmes');
              }}
              className="btn btn-primary px-8 py-4 rounded-full font-display font-bold text-sm tracking-wider uppercase bg-gradient-to-b from-[#ff6a00] to-[#f47c20] text-[#180a00] shadow-[0_10px_35px_rgba(255,106,0,0.4)] hover:shadow-[0_14px_45px_rgba(255,106,0,0.6)] hover:-translate-y-0.5 transition-all"
            >
              {heroData.ctaPrimary.label} →
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
              className="btn btn-ghost px-8 py-4 rounded-full font-display font-semibold text-sm tracking-wider text-white border border-white/20 hover:border-[#ff6a00] hover:text-[#ff6a00] hover:bg-[#ff6a00]/10 transition-all"
            >
              {heroData.ctaSecondary.label}
            </a>
          </div>
        </div>

        {/* Right Column: Marut Interactive Mascot Character */}
        <div className="lg:col-span-4 relative flex flex-col items-center justify-center pt-8 lg:pt-0">
          {/* Speech bubble */}
          <div
            onClick={handleMascotClick}
            className="relative cursor-pointer mb-4 p-4 rounded-2xl bg-[#1e2d3d]/90 border border-[#ff6a00]/40 backdrop-blur-md shadow-[0_12px_36px_rgba(0,0,0,0.5)] max-w-xs text-left group hover:border-[#ff6a00] transition-all duration-300"
            role="status"
            title="Click to hear more from Marut!"
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#ff6a00] font-bold">
                Marut · AI Guide
              </span>
              <span className="text-[10px] text-neutral-400 group-hover:text-[#ff6a00] transition-colors">
                (Click me!)
              </span>
            </div>
            <p className="text-sm sm:text-base font-display font-semibold text-white min-h-[44px]">
              {bubbleText}
              <span className="inline-block w-1 h-4 bg-[#ff6a00] ml-1 animate-pulse" />
            </p>
            {/* Bubble pointer */}
            <div className="absolute -bottom-2 right-12 w-4 h-4 bg-[#1e2d3d] border-b border-r border-[#ff6a00]/40 rotate-45 transform" />
          </div>

          {/* 3D Character Pose */}
          <div
            onClick={handleMascotClick}
            className="relative cursor-pointer select-none group flex flex-col items-center"
            title="Click Marut to interact"
          >
            <div className="w-52 sm:w-64 md:w-72 max-w-full transition-transform duration-500 group-hover:scale-105">
              <img
                src="/img/mascot/poses/wave.webp"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://www.oranjestride.com/img/mascot/poses/wave.webp';
                }}
                alt="OranjeStride Mascot Marut"
                className="w-full h-auto object-contain filter drop-shadow-[0_24px_45px_rgba(255,106,0,0.25)] animate-[mascotBob_5s_ease-in-out_infinite]"
              />
            </div>
            <div className="w-40 h-6 bg-gradient-to-r from-transparent via-[#ff6a00]/30 to-transparent blur-md rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};
