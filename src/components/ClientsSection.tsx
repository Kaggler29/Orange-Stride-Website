import React from 'react';
import { clientsData } from '../data/siteData';

interface ClientsSectionProps {
  onOpenModal: () => void;
}

export const ClientsSection: React.FC<ClientsSectionProps> = ({ onOpenModal }) => {
  // Preview 8 logos in a slick preview ribbon
  const previewList = clientsData.roster.slice(0, 8);

  return (
    <section className="section video-section relative py-20 sm:py-28 overflow-hidden" id="clients">
      {/* Background Video / Poster */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          className="sec-video w-full h-full object-cover opacity-20 filter brightness-90"
          autoPlay
          muted
          loop
          playsInline
          poster="/img/posters/clients-monument.jpg"
          onError={(e) => {
            (e.target as HTMLVideoElement).style.display = 'none';
          }}
        >
          <source src="/video/clients-monument.mp4" type="video/mp4" />
          <source src="https://www.oranjestride.com/video/clients-monument.mp4" type="video/mp4" />
        </video>
        <img
          className="sec-poster absolute inset-0 w-full h-full object-cover opacity-20 -z-10"
          src="/img/posters/clients-monument.jpg"
          alt=""
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060a12] via-[#060a12]/80 to-[#060a12]" />
      </div>

      <div className="sec-content relative z-10 max-w-7xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center">
        <p className="section-label text-xs sm:text-sm font-mono uppercase tracking-widest text-[#ff6a00] font-semibold mb-3">
          {clientsData.label}
        </p>
        <h2 className="headline text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-4 max-w-3xl">
          {clientsData.headA}
          <span className="accent bg-gradient-to-r from-[#ff6a00] to-[#f47c20] bg-clip-text text-transparent">
            {clientsData.headAccent}
          </span>
        </h2>
        <p className="subhead text-base sm:text-lg text-[#9aa0ae] max-w-2xl leading-relaxed mb-8">
          {clientsData.sub}
        </p>

        {/* CTA to open full directory modal */}
        <button
          onClick={onOpenModal}
          id="open-clients"
          className="btn btn-primary px-8 py-4 rounded-full font-display font-bold text-sm tracking-wider uppercase bg-gradient-to-b from-[#ff6a00] to-[#f47c20] text-[#180a00] shadow-[0_10px_35px_rgba(255,106,0,0.4)] hover:shadow-[0_14px_45px_rgba(255,106,0,0.6)] hover:scale-105 transition-all cursor-pointer mb-4"
        >
          {clientsData.cta} →
        </button>

        <p className="clients-hint text-xs sm:text-sm text-[#9aa0ae] mb-12">
          {clientsData.hint}
        </p>

        {/* Preview logo reel */}
        <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {previewList.map((client, idx) => (
            <div
              key={idx}
              onClick={onOpenModal}
              className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-orange-500/30 flex flex-col items-center justify-center gap-2 cursor-pointer group transition-all duration-300"
            >
              <div className="w-full h-12 bg-white rounded-lg p-2 flex items-center justify-center">
                <img
                  src={client.img}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://www.oranjestride.com${client.img}`;
                  }}
                  alt={client.n}
                  className="max-h-8 max-w-[100px] object-contain filter group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="font-display text-xs font-semibold text-neutral-300 truncate w-full text-center">
                {client.n}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
