"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  objectFit?: "cover" | "contain" | "fill" | "none";
  placeholder?: "blur" | "skeleton" | "none";
  blurDataURL?: string;
  threshold?: number;
  onLoad?: () => void;
  onError?: () => void;
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  containerClassName = "",
  priority = false,
  quality = 85,
  sizes,
  objectFit = "cover",
  placeholder = "skeleton",
  blurDataURL,
  threshold = 200,
  onLoad,
  onError,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
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
  }, [priority, threshold, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
    console.error(`Failed to load image: ${src}`);
  };

  // Skeleton placeholder
  const SkeletonPlaceholder = () => (
    <div className="absolute inset-0 bg-gradient-to-r from-[#F5F3F9] via-[#E9E6F2] to-[#F5F3F9] animate-pulse" />
  );

  // Error fallback
  const ErrorFallback = () => (
    <div className="absolute inset-0 bg-[#F5F3F9] flex items-center justify-center">
      <div className="text-center text-[#6B6B6B]">
        <svg className="w-8 h-8 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-xs">Görsel yüklenemedi</span>
      </div>
    </div>
  );

  const objectFitClass = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill",
    none: "object-none",
  }[objectFit];

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${containerClassName}`}>
      {/* Placeholder */}
      {!isLoaded && !hasError && placeholder === "skeleton" && <SkeletonPlaceholder />}
      
      {/* Error state */}
      {hasError && <ErrorFallback />}
      
      {/* Image */}
      {isInView && !hasError && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          {fill ? (
            <Image
              src={src}
              alt={alt}
              fill
              quality={quality}
              sizes={sizes}
              priority={priority}
              className={`${objectFitClass} ${className}`}
              onLoad={handleLoad}
              onError={handleError}
              placeholder={placeholder === "blur" && blurDataURL ? "blur" : "empty"}
              blurDataURL={blurDataURL}
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              quality={quality}
              sizes={sizes}
              priority={priority}
              className={`${objectFitClass} ${className}`}
              onLoad={handleLoad}
              onError={handleError}
              placeholder={placeholder === "blur" && blurDataURL ? "blur" : "empty"}
              blurDataURL={blurDataURL}
            />
          )}
        </motion.div>
      )}
    </div>
  );
}

export default LazyImage;
