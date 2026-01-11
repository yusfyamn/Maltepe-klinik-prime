"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface iPhoneMockupProps {
  videoSrc: string;
}

export function iPhoneMockup({ videoSrc }: iPhoneMockupProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, user interaction required
      });
    }
  }, [videoSrc]);

  return (
    <div className="relative w-full max-w-[380px] mx-auto">
      {/* iPhone Frame - Purple - Thinner borders */}
      <div className="relative">
        {/* Phone Body - Thinner padding, no bottom */}
        <div 
          className="relative rounded-t-[55px] pt-1.5 px-1.5 pb-0"
          style={{
            background: 'linear-gradient(135deg, #6D559F 0%, #8B7BB5 50%, #6D559F 100%)',
          }}
        >
          {/* Dynamic Island */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-20" />
          
          {/* Screen Content Area - Instagram Reels Aspect Ratio (9:16) - No bottom radius */}
          <div className="relative w-full aspect-[9/16] rounded-t-[45px] overflow-hidden bg-black">
            {/* Video */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              key={videoSrc}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>

            {/* Subtle overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
