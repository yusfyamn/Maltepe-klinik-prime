"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface LazyIframeProps {
  src: string;
  title: string;
  className?: string;
  containerClassName?: string;
  height?: string;
  width?: string;
  threshold?: number;
  allowFullScreen?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

export function LazyIframe({
  src,
  title,
  className = "",
  containerClassName = "",
  height = "100%",
  width = "100%",
  threshold = 200,
  allowFullScreen = true,
  onLoad,
  onError,
}: LazyIframeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
    console.error(`Failed to load iframe: ${src}`);
  };

  const handleRetry = () => {
    setHasError(false);
    setIsLoaded(false);
    setShouldLoad(true);
  };

  // Skeleton placeholder with map icon
  const SkeletonPlaceholder = () => (
    <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3F9] to-[#E9E6F2] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/50 flex items-center justify-center animate-pulse">
          <svg className="w-8 h-8 text-[#6D559F]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <p className="text-[#6B6B6B] text-sm">Harita yükleniyor...</p>
      </div>
    </div>
  );

  // Error fallback with retry button
  const ErrorFallback = () => (
    <div className="absolute inset-0 bg-[#F5F3F9] flex items-center justify-center">
      <div className="text-center p-6">
        <svg className="w-12 h-12 mx-auto mb-3 text-[#6B6B6B]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <p className="text-[#6B6B6B] text-sm mb-4">Harita yüklenemedi</p>
        <button
          onClick={handleRetry}
          className="px-4 py-2 bg-[#6D559F] text-white text-sm rounded-full hover:bg-[#5D4889] transition-colors duration-300"
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  );

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden ${containerClassName}`}
      style={{ height, width }}
    >
      {/* Placeholder */}
      {!isLoaded && !hasError && <SkeletonPlaceholder />}
      
      {/* Error state */}
      {hasError && <ErrorFallback />}
      
      {/* Iframe */}
      {shouldLoad && !hasError && (
        <motion.iframe
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          src={src}
          title={title}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={allowFullScreen}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={className}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
}

export default LazyIframe;
