'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    // Mobil cihazlarda Lenis'i devre dışı bırak - native scroll daha performanslı
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,  // Daha smooth ve premium his
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // Apple-style easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,  // Balanced scrolling
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
      syncTouch: true,  // Touch events senkronize
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
