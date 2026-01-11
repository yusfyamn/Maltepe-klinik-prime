"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PhoneMockupProps {
  beforeImage: string;
  afterImage: string;
}

export function PhoneMockup({ beforeImage, afterImage }: PhoneMockupProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX, e.currentTarget);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX, e.currentTarget);
    }
  };

  return (
    <div className="relative w-full max-w-[332px] mx-auto">
      {/* Phone Frame */}
      <div className="relative w-[332px] h-[719px] mx-auto">
        {/* Frame SVG Background */}
        <div 
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='332' height='719' viewBox='0 0 332 719' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='4' y='4' width='324' height='711' rx='48' fill='%231a1a1a'/%3E%3Crect x='8' y='55' width='316' height='640' rx='32' fill='%23000'/%3E%3Cpath d='M332 52c0-26.51-21.49-48-48-48H48C21.49 4 0 25.49 0 52v615c0 26.51 21.49 48 48 48h236c26.51 0 48-21.49 48-48V52z' fill='%23000'/%3E%3Crect x='4' y='4' width='324' height='711' rx='48' stroke='%23404040' stroke-width='4'/%3E%3Crect x='130' y='18' width='72' height='24' rx='12' fill='%231a1a1a'/%3E%3C/svg%3E")`,
            backgroundSize: '332px 719px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />

        {/* Screen Content Area */}
        <div className="absolute top-[55px] left-[8px] w-[316px] h-[640px] rounded-[32px] overflow-hidden bg-white">
          {/* Before/After Slider Container */}
          <div
            className="relative w-full h-full cursor-ew-resize select-none"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            {/* Before Image (Full) */}
            <div className="absolute inset-0">
              <Image
                src={beforeImage}
                alt="Before"
                fill
                className="object-cover"
                priority
              />
              {/* Before Label */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="text-white text-xs font-medium">Önce</span>
              </div>
            </div>

            {/* After Image (Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={afterImage}
                alt="After"
                fill
                className="object-cover"
                priority
              />
              {/* After Label */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="text-white text-xs font-medium">Sonra</span>
              </div>
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-[3px] bg-white shadow-lg z-10"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              {/* Slider Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-800">
                  <path d="M7 5L12 10L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 5L8 10L13 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Tags */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[580px] h-full pointer-events-none z-30">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute top-[70px] left-0 flex items-center gap-2 bg-[#dbeafe] px-3 py-2 rounded-full shadow-lg transform -rotate-6"
        >
          <span className="text-base">✨</span>
          <span className="text-sm font-medium text-[#1E1E1E]">Estetik</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute top-[120px] right-0 flex items-center gap-2 bg-[#fce7f3] px-3 py-2 rounded-full shadow-lg transform rotate-4"
        >
          <span className="text-base">😊</span>
          <span className="text-sm font-medium text-[#1E1E1E]">Güzel Gülüş</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="absolute top-[180px] left-5 flex items-center gap-2 bg-[#d1fae5] px-3 py-2 rounded-full shadow-lg transform rotate-5"
        >
          <span className="text-base">⚡</span>
          <span className="text-sm font-medium text-[#1E1E1E]">Hızlı</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="absolute top-[220px] right-5 flex items-center gap-2 bg-[#fef3c7] px-3 py-2 rounded-full shadow-lg transform -rotate-4"
        >
          <span className="text-base">🔒</span>
          <span className="text-sm font-medium text-[#1E1E1E]">Güvenli</span>
        </motion.div>
      </div>
    </div>
  );
}
