import React, { useState, useEffect, useCallback } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { BrandMomentum } from './components/BrandMomentum';
import { StatsBand } from './components/StatsBand';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { MascotLab } from './components/MascotLab';
import { ProgrammesSection } from './components/ProgrammesSection';
import { ConsultingSection } from './components/ConsultingSection';
import { IndiaTourSection } from './components/IndiaTourSection';
import { ClientsSection } from './components/ClientsSection';
import { ClientsModal } from './components/ClientsModal';
import { ContactSection } from './components/ContactSection';
import { DataStrideModal } from './components/DataStrideModal';
import { Footer } from './components/Footer';
import { audioEngine } from './utils/audio';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [liteMode, setLiteMode] = useState<boolean>(() => {
    return localStorage.getItem('os_perf_lite') === 'true';
  });
  const [isSoundOn, setIsSoundOn] = useState<boolean>(false);
  const [isClientsModalOpen, setIsClientsModalOpen] = useState<boolean>(false);
  const [isDataStrideModalOpen, setIsDataStrideModalOpen] = useState<boolean>(false);

  // Sync lite mode with DOM and storage
  const handleToggleLiteMode = useCallback(() => {
    setLiteMode((prev) => {
      const next = !prev;
      localStorage.setItem('os_perf_lite', String(next));
      if (next) {
        document.body.classList.add('lite-mode');
      } else {
        document.body.classList.remove('lite-mode');
      }
      return next;
    });
  }, []);

  useEffect(() => {
    if (liteMode) {
      document.body.classList.add('lite-mode');
    } else {
      document.body.classList.remove('lite-mode');
    }
  }, [liteMode]);

  // Ambient sound toggle
  const handleToggleSound = useCallback(() => {
    const newState = audioEngine.toggle();
    setIsSoundOn(newState);
  }, []);

  // Smooth navigation handler
  const handleNavigate = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    audioEngine.swell();

    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      const navOffset = 70;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  // Scrollspy via IntersectionObserver
  useEffect(() => {
    const sectionIds = [
      'hero',
      'brand',
      'stats',
      'about',
      'expertise',
      'testimonials',
      'mascot-lab',
      'programmes',
      'consulting',
      'tour',
      'clients',
      'contact'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.25, 0.5],
        rootMargin: '-10% 0px -40% 0px'
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen text-[#f5efe6] selection:bg-[#ff6a00] selection:text-[#180a00] font-sans antialiased overflow-x-hidden">
      {/* 3D WebGL particle field & ambient audio / performance controls */}
      <BackgroundEffects
        liteMode={liteMode}
        onToggleLiteMode={handleToggleLiteMode}
        isSoundOn={isSoundOn}
        onToggleSound={handleToggleSound}
      />

      {/* Top sticky navigation bar & section dot tracker */}
      <Navigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Single-Page App Content */}
      <main id="app-main" className="relative z-10">
        <Hero onNavigate={handleNavigate} />
        <BrandMomentum />
        <StatsBand />
        <AboutSection />
        <ExpertiseSection />
        <TestimonialsSection />
        <MascotLab />
        <ProgrammesSection />
        <ConsultingSection />
        <IndiaTourSection onEnquire={() => handleNavigate('contact')} />
        <ClientsSection onOpenModal={() => setIsClientsModalOpen(true)} />
        <ContactSection />
      </main>

      {/* Brand Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Modals */}
      <ClientsModal
        isOpen={isClientsModalOpen}
        onClose={() => setIsClientsModalOpen(false)}
      />

      <DataStrideModal
        isOpen={isDataStrideModalOpen}
        onOpen={() => setIsDataStrideModalOpen(true)}
        onClose={() => setIsDataStrideModalOpen(false)}
      />
    </div>
  );
}

export default App;
