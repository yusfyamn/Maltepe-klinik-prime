"use client";

import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

interface iPadMockupProps {
  beforeImage: string;
  afterImage: string;
}

export function iPadMockup({ beforeImage, afterImage }: iPadMockupProps) {
  const { t } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  }, []);

  const handleMouseDown = useCallback(() => setIsDragging(true), []);
  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  return (
    <div className="relative w-full max-w-[900px] mx-auto">
      {/* iPad Frame - Purple - Thin borders */}
      <div className="relative">
        {/* iPad Body */}
        <div 
          className="relative rounded-[24px] p-1.5"
          style={{
            background: 'linear-gradient(135deg, #6D559F 0%, #8B7BB5 50%, #6D559F 100%)',
          }}
        >
          {/* Screen Content Area - Taller on mobile, iPad Pro aspect (4:3) on desktop */}
          <div className="relative w-full aspect-[3/4] sm:aspect-[4/3] rounded-[18px] overflow-hidden bg-black">
            {/* Before/After Slider Container */}
            <div
              ref={containerRef}
              className="relative w-full h-full cursor-ew-resize select-none touch-none"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseUp}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
            >
              {/* Before Image (Full) */}
              <div className="absolute inset-0 pointer-events-none">
                <Image
                  src={`${beforeImage}?v=${Date.now()}`}
                  alt="Before"
                  fill
                  className="object-cover select-none"
                  priority
                  unoptimized
                  draggable={false}
                />
              </div>

              {/* After Image (Clipped) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src={`${afterImage}?v=${Date.now()}`}
                  alt="After"
                  fill
                  className="object-cover select-none"
                  priority
                  unoptimized
                  draggable={false}
                />
              </div>

              {/* Before Badge - Outside clipPath */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-black/70 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-white/20 z-20 pointer-events-none">
                <span className="text-white text-xs sm:text-sm font-semibold">{t('beforeafter.before')}</span>
              </div>

              {/* After Badge - Outside clipPath */}
              <div 
                className="absolute top-3 sm:top-4 right-3 sm:right-4 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border-2 z-20 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, #6D559F 0%, #8B7BB5 100%)',
                  borderColor: '#8B7BB5'
                }}
              >
                <span className="text-white text-xs sm:text-sm font-semibold">{t('beforeafter.after')}</span>
              </div>

              {/* Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-[3px] shadow-2xl z-10"
                style={{ 
                  left: `${sliderPosition}%`, 
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #6D559F 0%, #8B7BB5 50%, #6D559F 100%)'
                }}
              >
                {/* Slider Handle */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-2xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #6D559F 0%, #8B7BB5 50%, #6D559F 100%)'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M7 5L12 10L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 5L12 10L17 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
