"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  containerClassName?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  threshold?: number;
  onLoad?: () => void;
  onError?: () => void;
}

export function LazyVideo({
  src,
  poster,
  className = "",
  containerClassName = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  controls = false,
  threshold = 200,
  onLoad,
  onError,
}: LazyVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: `${threshold}px`,
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  // Auto-play when in view
  useEffect(() => {
    if (isInView && isLoaded && autoPlay && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented, this is expected on some browsers
      });
    }
  }, [isInView, isLoaded, autoPlay]);

  const handleLoadedData = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
    console.error(`Failed to load video: ${src}`);
  };

  // Skeleton placeholder
  const SkeletonPlaceholder = () => (
    <div className="absolute inset-0 bg-gradient-to-r from-[#F5F3F9] via-[#E9E6F2] to-[#F5F3F9] animate-pulse flex items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center">
        <svg className="w-8 h-8 text-[#6D559F]/30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );

  // Error fallback
  const ErrorFallback = () => (
    <div className="absolute inset-0 bg-[#F5F3F9] flex items-center justify-center">
      <div className="text-center text-[#6B6B6B]">
        <svg className="w-10 h-10 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <span className="text-xs">Video yüklenemedi</span>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${containerClassName}`}>
      {/* Placeholder */}
      {!isLoaded && !hasError && <SkeletonPlaceholder />}
      
      {/* Poster image while loading */}
      {poster && !isLoaded && !hasError && (
        <img 
          src={poster} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      
      {/* Error state */}
      {hasError && <ErrorFallback />}
      
      {/* Video */}
      {shouldLoad && !hasError && (
        <motion.video
          ref={videoRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className={`w-full h-full object-cover ${className}`}
          autoPlay={autoPlay && isInView}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          controls={controls}
          preload="none"
          onLoadedData={handleLoadedData}
          onError={handleError}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      )}
    </div>
  );
}

export default LazyVideo;
