import React, { useState, useEffect, useRef } from 'react';
import { impactStats } from '../data/siteData';

export const StatsBand: React.FC = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          const duration = 1600;
          const startTime = performance.now();

          const animateCounts = (now: number) => {
            const progress = Math.min(1, (now - startTime) / duration);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);

            const next = impactStats.map((stat) => {
              return Number((stat.value * eased).toFixed(stat.decimals));
            });
            setCounts(next);

            if (progress < 1) {
              requestAnimationFrame(animateCounts);
            } else {
              setCounts(impactStats.map((s) => s.value));
            }
          };

          requestAnimationFrame(animateCounts);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasTriggered]);

  return (
    <section
      ref={sectionRef}
      className="band relative py-16 sm:py-24 border-y border-orange-500/10 bg-[#060a12]/90 overflow-hidden"
      id="stats"
    >
      <div className="facet-bg absolute inset-0 opacity-15 pointer-events-none" aria-hidden="true" />

      <div className="sec-content relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
          {impactStats.map((stat, idx) => (
            <div
              key={idx}
              className="stat flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-orange-500/20 transition-all duration-300"
            >
              <strong className="block font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#ff6a00] drop-shadow-[0_0_24px_rgba(255,106,0,0.35)] tracking-tight mb-2">
                {stat.decimals > 0
                  ? counts[idx].toFixed(stat.decimals)
                  : Math.floor(counts[idx])}
                <span>{stat.suffix}</span>
              </strong>
              <span className="text-xs sm:text-sm font-medium text-[#9aa0ae] max-w-[180px] leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
