import React from 'react';
import { navLinks, siteMeta } from '../data/siteData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer relative py-16 bg-[#03060c] border-t border-orange-500/15 overflow-hidden">
      <div className="facet-bg absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true" />

      <div className="sec-content relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
          {/* Brand Col */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/img/logo02.png"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://www.oranjestride.com/img/logo02.png';
                }}
                alt="OranjeStride Logo"
                className="w-10 h-10 object-contain"
                width={40}
                height={40}
              />
              <span className="wordmark text-2xl font-display font-bold">
                <span className="w-oranje text-[#ff6a00]">Oranje</span>
                <span className="w-stride text-white">Stride</span>
              </span>
            </div>

            <p className="text-sm font-semibold text-white mb-1">
              {siteMeta.legal}
            </p>
            <p className="text-xs text-[#ff6a00] font-mono mb-4">
              Stride into Decision Intelligence
            </p>
            <p className="text-sm text-[#9aa0ae] max-w-md leading-relaxed">
              India's premier Gen AI &amp; Data Science training consultancy — turning complex algorithms into competitive advantage for professionals, executives, and institutions.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.id);
                    }}
                    className="text-[#9aa0ae] hover:text-[#ff6a00] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Headquarters
            </h4>
            <div className="space-y-2 text-xs text-[#9aa0ae]">
              <p>Safdarjung Enclave, New Delhi, India</p>
              <p className="font-mono text-white pt-1">
                contactus@oranjestride.com
              </p>
              <p className="font-mono text-white">
                +91 93117 90400
              </p>
              <div className="pt-4">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors cursor-pointer"
                >
                  ↑ Back to Top
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider & copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} {siteMeta.legal}. All rights reserved.
          </p>
          <p className="text-center sm:text-right font-display text-[11px] text-neutral-400">
            From data to decisions. From decisions to outcomes.
          </p>
        </div>
      </div>
    </footer>
  );
};
