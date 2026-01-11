"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface MacBookMockupProps {
  beforeImage: string;
  afterImage: string;
}

export function MacBookMockup({ beforeImage, afterImage }: MacBookMockupProps) {
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
    <div className="relative w-full max-w-[1200px] mx-auto">
      {/* MacBook Frame */}
      <div className="relative w-full">
        {/* Screen Bezel */}
        <div className="relative bg-[#1a1a1a] rounded-t-2xl p-3 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-xl z-20" />
          
          {/* Screen Content Area */}
          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-black">
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
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white text-sm font-medium">Önce</span>
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
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white text-sm font-medium">Sonra</span>
                </div>
              </div>

              {/* Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-[3px] bg-white shadow-2xl z-10"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                {/* Slider Handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-800">
                    <path d="M7 5L12 10L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 5L12 10L17 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MacBook Base */}
        <div className="relative h-4 bg-gradient-to-b from-[#d4d4d4] to-[#a3a3a3] rounded-b-lg">
          <div className="absolute inset-x-0 top-0 h-1 bg-[#1a1a1a]/10" />
        </div>

        {/* MacBook Shadow */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-black/20 blur-2xl rounded-full" />
      </div>
    </div>
  );
}
