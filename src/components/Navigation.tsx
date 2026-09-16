import React, { useState, useEffect } from 'react';
import { navLinks, siteMeta } from '../data/siteData';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const [ribbonVisible, setRibbonVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  const sections = [
    { id: 'hero', label: 'Hero' },
    { id: 'stats', label: 'Impact' },
    { id: 'about', label: 'About' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'testimonials', label: 'Voices' },
    { id: 'mascot-lab', label: 'Mascot' },
    { id: 'programmes', label: 'Programmes' },
    { id: 'consulting', label: 'Consulting' },
    { id: 'tour', label: 'India Tour' },
    { id: 'clients', label: 'Clients' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Top Announcement Ribbon */}
      {ribbonVisible && (
        <div
          className="relative z-[95] w-full py-2 px-4 text-center text-xs sm:text-sm font-medium border-b border-orange-500/20 bg-gradient-to-r from-[#060a12] via-[#1e2d3d] to-[#060a12] text-[#f5efe6] flex items-center justify-center gap-3 transition-all"
          id="announcement-ribbon"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-[#ff6a00] animate-pulse" />
          <span>{siteMeta.announcement}</span>
          <button
            onClick={() => setRibbonVisible(false)}
            className="ml-3 text-neutral-400 hover:text-white p-1 transition-colors cursor-pointer text-sm"
            aria-label="Close notification"
            id="ribbon-close"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <nav
        className={`nav fixed left-0 right-0 z-[70] transition-all duration-300 ${
          ribbonVisible ? 'top-10 sm:top-9' : 'top-0'
        } ${scrolled ? 'bg-[#060a12]/85 backdrop-blur-md border-b border-white/5 py-3 shadow-2xl' : 'bg-transparent py-5'}`}
        aria-label="Primary"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between w-full">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="nav-brand flex items-center gap-3 group"
            aria-label="OranjeStride home"
          >
            <img
              className="nav-logo w-9 h-9 object-contain transition-transform group-hover:scale-105"
              src="/img/logo02.png"
              onError={(e) => {
                // Fallback to live site if local image fails
                (e.target as HTMLImageElement).src = 'https://www.oranjestride.com/img/logo02.png';
              }}
              alt="OranjeStride Logo"
              width={36}
              height={36}
            />
            <span className="wordmark text-xl sm:text-2xl font-bold tracking-tight">
              <span className="w-oranje text-[#ff6a00]">Oranje</span>
              <span className="w-stride text-white">Stride</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#9aa0ae]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`relative py-1 transition-colors ${
                    isActive ? 'text-[#ff6a00]' : 'hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff6a00] rounded-full shadow-[0_0_8px_#ff6a00]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action & Mobile Burger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#ff6a00]/15 text-[#ff6a00] border border-[#ff6a00]/30 hover:bg-[#ff6a00] hover:text-[#180a00] transition-all"
            >
              Get in Touch
            </a>

            <button
              className="nav-burger lg:hidden p-2 text-neutral-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-current transition-opacity duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-current transition-transform duration-300 ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[60px] z-50 bg-[#060a12]/98 backdrop-blur-xl border-t border-white/10 p-8 flex flex-col items-center justify-center gap-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`text-2xl font-display font-semibold transition-colors ${
                  activeSection === link.id ? 'text-[#ff6a00]' : 'text-neutral-300 hover:text-[#ff6a00]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-6 w-full max-w-xs">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="btn btn-primary w-full justify-center"
              >
                Enquire Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Floating Active Section Dot Indicator */}
      <div
        className="nav-dots hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-[65] flex-col items-center gap-3 pointer-events-auto"
        aria-hidden="true"
      >
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => onNavigate(sec.id)}
              className={`group relative flex items-center justify-end p-1 transition-all`}
              title={sec.label}
              aria-label={sec.label}
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute right-6 px-2 py-0.5 rounded text-[11px] font-medium bg-[#1e2d3d] text-white border border-white/10 whitespace-nowrap shadow-md pointer-events-none">
                {sec.label}
              </span>
              <span
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-3 h-3 bg-[#ff6a00] shadow-[0_0_10px_#ff6a00]'
                    : 'bg-white/25 hover:bg-white/60'
                }`}
              />
            </button>
          );
        })}
      </div>
    </>
  );
};
