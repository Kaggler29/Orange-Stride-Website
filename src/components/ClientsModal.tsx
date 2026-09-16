import React, { useState } from 'react';
import { clientsData } from '../data/siteData';

interface ClientsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientsModal: React.FC<ClientsModalProps> = ({ isOpen, onClose }) => {
  const [filter, setFilter] = useState<'all' | 'academic' | 'corporate'>('all');

  if (!isOpen) return null;

  const academicCount = clientsData.roster.filter((c) => c.c === 'academic').length;
  const corporateCount = clientsData.roster.filter((c) => c.c === 'corporate').length;
  const allCount = clientsData.roster.length;

  const filteredList =
    filter === 'all'
      ? clientsData.roster
      : clientsData.roster.filter((c) => c.c === filter);

  return (
    <div
      className="cg-overlay fixed inset-0 z-[200] grid place-items-center p-4 sm:p-6 bg-[#03060c]/85 backdrop-blur-md overflow-y-auto"
      id="clients-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cg-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="cg-modal relative w-full max-w-5xl my-auto rounded-3xl bg-gradient-to-b from-[#1e2d3d]/95 via-[#0d1723]/98 to-[#060a12] border border-orange-500/30 shadow-[0_40px_120px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-clients"
          className="cg-close absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/15 flex items-center justify-center text-lg z-20 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="cg-head p-6 sm:p-8 border-b border-white/10">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#ff6a00] bg-[#ff6a00]/10 border border-[#ff6a00]/25 mb-2">
            Institutional Network
          </div>
          <h3 id="cg-title" className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
            Clients &amp; Partners
          </h3>
          <p className="text-sm text-[#9aa0ae]">
            {allCount} organisations across academia, enterprise &amp; government. Hover a card for the engagement scope.
          </p>

          {/* Filter Tabs */}
          <div className="cg-tabs flex items-center gap-3 mt-6 flex-wrap" id="cg-tabs">
            <button
              onClick={() => setFilter('all')}
              className={`cg-tab px-5 py-2 rounded-full font-display text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#ff6a00] text-[#180a00] shadow-[0_0_15px_rgba(255,106,0,0.4)]'
                  : 'bg-white/5 border border-white/10 text-neutral-300 hover:border-orange-500/40 hover:text-white'
              }`}
            >
              All <span className="opacity-75">({allCount})</span>
            </button>
            <button
              onClick={() => setFilter('academic')}
              className={`cg-tab px-5 py-2 rounded-full font-display text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'academic'
                  ? 'bg-[#ff6a00] text-[#180a00] shadow-[0_0_15px_rgba(255,106,0,0.4)]'
                  : 'bg-white/5 border border-white/10 text-neutral-300 hover:border-orange-500/40 hover:text-white'
              }`}
            >
              Academic <span className="opacity-75">({academicCount})</span>
            </button>
            <button
              onClick={() => setFilter('corporate')}
              className={`cg-tab px-5 py-2 rounded-full font-display text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'corporate'
                  ? 'bg-[#ff6a00] text-[#180a00] shadow-[0_0_15px_rgba(255,106,0,0.4)]'
                  : 'bg-white/5 border border-white/10 text-neutral-300 hover:border-orange-500/40 hover:text-white'
              }`}
            >
              Corporate <span className="opacity-75">({corporateCount})</span>
            </button>
          </div>
        </div>

        {/* Modal Body: Cards Grid */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
          <div className="cg-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filteredList.map((client, idx) => (
              <div
                key={idx}
                className="cg-card relative aspect-[4/3] rounded-xl overflow-hidden p-3.5 bg-white/[0.04] border border-white/10 flex flex-col items-center justify-center text-center gap-2 group hover:border-[#ff6a00] hover:shadow-[0_12px_30px_rgba(255,106,0,0.2)] transition-all duration-300"
              >
                {/* Logo box */}
                <div className="cg-logo w-full h-14 bg-white rounded-lg p-2 flex items-center justify-center shadow-inner">
                  <img
                    src={client.img}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://www.oranjestride.com${client.img}`;
                    }}
                    alt={client.n}
                    className="max-h-10 max-w-[110px] object-contain group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="cg-name font-display font-bold text-xs sm:text-sm text-white line-clamp-1">
                  {client.n}
                </div>

                <div className="cg-type text-[11px] font-mono text-[#9aa0ae]">
                  {client.t}
                </div>

                {/* Hover Reveal Card Overlay */}
                <div className="cg-cap absolute inset-0 bg-gradient-to-br from-[#ff6a00]/95 to-[#f47c20]/95 text-[#180a00] p-4 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 font-medium text-xs leading-relaxed select-none">
                  <strong className="block font-display font-bold text-sm mb-1">
                    {client.n}
                  </strong>
                  <span>{client.rel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="cg-foot p-4 sm:p-6 bg-black/40 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
          <span className="text-xs text-[#9aa0ae]">
            Showing {filteredList.length} of {allCount} partner institutions
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            Close Directory
          </button>
        </div>
      </div>
    </div>
  );
};
