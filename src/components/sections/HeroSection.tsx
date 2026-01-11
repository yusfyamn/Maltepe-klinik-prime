"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useDemo } from "@/contexts/DemoContext";
import { heroSequence } from "@/lib/animations";
import { useIsMobile } from "@/hooks/useIsMobile";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { useLanguage } from "@/contexts/LanguageContext";

// Video Background Component - Mobilde parallax yok
function VideoBackground({ scrollYProgress, isMobile }: { scrollYProgress: any; isMobile: boolean }) {
  // Mobilde parallax'ı devre dışı bırak
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [1, 1] : [1, 1.1]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div 
        style={isMobile ? {} : { y, scale }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </motion.div>
      {/* Gradient overlay - darker at top and left for text readability */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.2) 100%)'
        }}
      />
      {/* Left side darker for text */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, transparent 70%)'
        }}
      />
      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.3) 100%)'
        }}
      />
      
      {/* Modern Film Grain Noise Overlay - Static */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

    </div>
  );
}

// WhatsApp Button Component
function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/905016390300"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow md:flex hidden"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="WhatsApp ile iletişime geç"
    >
      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </motion.a>
  );
}

// Estate Tags - Premium detail
function EstateTags() {
  const { t } = useLanguage();
  const tags = [t('hero.maltepetag'), t('hero.esthetictag'), t('hero.implanttag'), t('hero.zirconiumtag')];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="absolute bottom-8 left-0 right-0"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-3 text-white/40">
          {tags.map((tag, i) => (
            <span key={tag} className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-body">{tag}</span>
              {i < tags.length - 1 && <span className="w-1 h-1 rounded-full bg-white/30" />}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Aesthetic Luxury Hero Content
function AestheticLuxuryHero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Full screen background - Woman's face close-up */}
      <div className="absolute inset-0">
        {/* Background image placeholder - grayscale/muted tones */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(200,195,190,0.3) 0%, rgba(180,175,170,0.4) 100%)`,
            backgroundColor: '#C8C3BE',
          }}
        />
        
        {/* Simulated face texture - soft skin tones */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 120% 100% at 50% 40%, rgba(210,195,185,0.9) 0%, rgba(195,185,175,0.8) 30%, rgba(180,170,160,0.7) 60%, rgba(165,155,145,0.6) 100%)
            `,
          }}
        />
        
        {/* Subtle smile area highlight */}
        <div 
          className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[300px] h-[80px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, transparent 70%)',
          }}
        />
      </div>
      
      {/* Content - Centered */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          {/* Small Tag - Italic */}
          <motion.p
            variants={heroSequence.tag}
            initial="hidden"
            animate="visible"
            className="text-[#5A7A6A] text-body-lg mb-2 font-heading"
            style={{ fontStyle: 'italic', fontWeight: 300 }}
          >
            Estetik Dişler için
          </motion.p>

          {/* Main Headline - Large Serif */}
          <motion.h1
            variants={heroSequence.title}
            initial="hidden"
            animate="visible"
            className="text-h1 text-[#2D3B35] mb-3 leading-[1.1]"
            style={{ fontWeight: 400 }}
          >
            Prime Dent
          </motion.h1>

          {/* Location Tag - Spaced letters */}
          <motion.p
            variants={heroSequence.subtitle}
            initial="hidden"
            animate="visible"
            className="text-[#5A7A6A] text-body-sm tracking-[0.4em] uppercase mb-10"
          >
            İstanbul
          </motion.p>

          {/* CTA Button - Outlined with icon */}
          <motion.div
            variants={heroSequence.cta}
            initial="hidden"
            animate="visible"
          >
            <Link
              href="/online-randevu"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#2D3B35]/30 text-[#2D3B35] hover:bg-[#2D3B35] hover:text-white transition-all duration-300 text-body-sm tracking-wide group"
            >
              {/* Calendar icon */}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Online Randevu</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </section>
  );
}

export function HeroSection() {
  const { variant } = useDemo();
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms for content - Mobilde devre dışı
  const contentY = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["0%", "50%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], isMobile ? [1, 1] : [1, 0]);

  // Aesthetic Luxury variant
  if (variant === "aesthetic-luxury") {
    return <AestheticLuxuryHero />;
  }

  // Phone Mockup variant
  if (variant === "phone-mockup") {
    return (
      <section className="relative min-h-screen overflow-hidden bg-white">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F3F9] via-white to-[#E1DCF0]" />
        
        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <PhoneMockup 
              beforeImage="/before.webp"
              afterImage="/after.webp"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1E1E1E] mb-4 font-heading">
              {t('phoneMockup.title1')}
              <br />
              <span 
                className="bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: "linear-gradient(90deg, #6D559F 0%, #8B7BB5 50%, #B8A4D9 100%)"
                }}
              >
                {t('phoneMockup.title2')}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-[#6B6B6B] mb-8">
              {t('phoneMockup.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/online-randevu"
                className="inline-flex items-center justify-center gap-2 bg-[#6D559F] text-white px-8 py-4 rounded-full font-medium hover:bg-[#5D4889] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {t('nav.appointment')}
              </Link>
              
              <Link
                href="#referanslar"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#E9E6F2] text-[#6D559F] px-8 py-4 rounded-full font-medium hover:border-[#6D559F] transition-all duration-300"
              >
                {t('phoneMockup.viewReferences')}
                <svg width="20" height="20" viewBox="0 0 21 21" fill="none">
                  <path d="M6.33337 6.33334H14.6667M14.6667 6.33334V14.6667M14.6667 6.33334L6.33337 14.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* WhatsApp Button */}
        <WhatsAppButton />
      </section>
    );
  }

  // Default Clinic Estate variant
  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-background">
      <VideoBackground scrollYProgress={scrollYProgress} isMobile={isMobile} />
      
      {/* Main Content with Parallax */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 min-h-screen flex flex-col justify-center items-start"
      >
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            {/* Small Tag */}
            <motion.div
              variants={!isMobile ? heroSequence.tag : undefined}
              initial={!isMobile ? "hidden" : false}
              animate={!isMobile ? "visible" : false}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-3 text-white/50 text-caption tracking-[0.2em] uppercase">
                <span className="w-12 h-px bg-white/30" />
                {t('hero.tag')}
              </span>
            </motion.div>

            {/* Main Headline - Premium & Minimal */}
            <motion.h1
              variants={!isMobile ? heroSequence.title : undefined}
              initial={!isMobile ? "hidden" : false}
              animate={!isMobile ? "visible" : false}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 sm:mb-8 leading-[1.1] sm:leading-[1.05]"
            >
              {t('hero.title1')}
              <br />
              <span 
                className="bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: "linear-gradient(90deg, #8B7BB5 0%, #A38BCB 30%, #B8A4D9 60%, #D4C8E8 100%)"
                }}
              >
                {t('hero.title2')}
              </span>
            </motion.h1>

            {/* Subheadline - Minimal */}
            <motion.p
              variants={!isMobile ? heroSequence.subtitle : undefined}
              initial={!isMobile ? "hidden" : false}
              animate={!isMobile ? "visible" : false}
              className="text-base sm:text-lg md:text-xl text-white/60 max-w-md mb-8 sm:mb-10 md:mb-12 leading-relaxed font-light"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTAs - Premium Style */}
            <motion.div
              variants={heroSequence.cta}
              initial="hidden"
              animate="visible"
              className="flex flex-row gap-2 sm:gap-4"
            >
              {/* Primary CTA */}
              <Link 
                href="/iletisim"
                className="btn-premium inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white rounded-full px-3 sm:px-6 py-2.5 sm:py-3.5 text-[#1E1E1E] text-xs sm:text-body-sm font-medium transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{t('hero.cta1')}</span>
              </Link>
              
              {/* Secondary CTA */}
              <Link 
                href="#hizmetler"
                className="btn-premium inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white/15 border border-white/25 rounded-full px-3 sm:px-6 py-2.5 sm:py-3.5 text-white text-xs sm:text-body-sm font-medium transition-all duration-300 hover:bg-white/25 hover:border-white/35 hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>{t('hero.cta2')}</span>
                <svg width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.33337 6.33334H14.6667M14.6667 6.33334V14.6667M14.6667 6.33334L6.33337 14.6667" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Center Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <div className="text-center">
            <p className="text-white/30 text-caption uppercase tracking-[0.2em] mb-2">Kaydır</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent mx-auto"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Estate Tags */}
      <EstateTags />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </section>
  );
}
