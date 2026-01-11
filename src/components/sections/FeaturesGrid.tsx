"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useDemo } from "@/contexts/DemoContext";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { iPhoneMockup as IPhoneMockup } from "@/components/ui/iPhoneMockup";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useLanguage } from "@/contexts/LanguageContext";

export function FeaturesGrid() {
  const { config, variant } = useDemo();
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  const sectionSpacing =
    config.spacing === "generous"
      ? "section-generous"
      : config.spacing === "balanced"
      ? "section-balanced"
      : "section-compact";

  if (variant === "aesthetic-luxury") {
    return <AestheticLuxuryGrid sectionSpacing={sectionSpacing} />;
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-primary">
      <div className="container-default px-4 sm:px-6">
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16">
          {/* iPhone Mockup with side content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-4 sm:mb-6 lg:mb-16">
            {/* Left Content */}
            <div className="lg:col-span-3">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <span className="text-[#6D559F] text-xs sm:text-sm font-medium tracking-wider uppercase block mb-2 sm:mb-3">
                    {t('features.modern')}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1E1E1E] mb-3 sm:mb-4">
                    {t('features.title')}
                  </h3>
                  <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
                    {t('features.description')}
                  </p>
                </div>
                <div className="pt-3 sm:pt-4 border-t border-[#E9E6F2]">
                  <h4 className="text-sm sm:text-base text-[#1E1E1E] font-medium mb-1 sm:mb-2">{t('features.premium')}</h4>
                  <p className="text-xs sm:text-sm text-[#6B6B6B]">
                    {t('features.comfort')}
                  </p>
                </div>
              </div>
            </div>

            {/* Center iPhone Mockup */}
            <div className="lg:col-span-6 flex justify-center relative">
              <IPhoneMockup videoSrc="/Klinik Prime Maltepe Açıldı.mp4?v=2" />
              {/* White glow effect at bottom - thin and visible blend into map */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[50%] h-24 bg-white/80 blur-xl rounded-full pointer-events-none" />
            </div>

            {/* Right Content - Hidden on Mobile */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="space-y-6">
                <div>
                  <span className="text-[#6D559F] text-sm font-medium tracking-wider uppercase block mb-3">
                    {t('features.digital')}
                  </span>
                  <h3 className="text-2xl font-semibold text-[#1E1E1E] mb-4">
                    {t('features.tech')}
                  </h3>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    {t('features.diagnosis')}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E9E6F2]">
                  <h4 className="text-[#1E1E1E] font-medium mb-2">{t('features.fast')}</h4>
                  <p className="text-sm text-[#6B6B6B]">
                    {t('features.fastdesc')}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E9E6F2]">
                  <h4 className="text-[#1E1E1E] font-medium mb-2">{t('features.location')}</h4>
                  <p className="text-sm text-[#6B6B6B]">
                    {t('features.locationdesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Map - iPhone bottom blends into it */}
          <div className="relative -mt-32 sm:-mt-40 lg:-mt-48">
            <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-[#E9E6F2] shadow-xl">
              <SkeletonLocation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function AestheticLuxuryGrid({ sectionSpacing }: { sectionSpacing: string }) {
  return (
    <section className={`${sectionSpacing} bg-[#FAFAFA]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-[#6D559F] text-sm font-medium tracking-wider uppercase mb-3 block">
              Estetik Hizmetler
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1E1E1E]">
              Gulus Tasarimi
            </h2>
          </div>
          <p className="text-base text-[#6B6B6B] max-w-md leading-relaxed">
            Yuz hatlariniza ve kisiligine ozel tasarlanan gulus estetigi ile hayalinizdeki guluse kavusun.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-12 gap-4 md:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={staggerItem} className="col-span-12 md:col-span-5 row-span-2">
            <Link href="/gulus-tasarimi" className="group block h-full">
              <div className="relative h-full min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#F5F3F9] to-[#E1DCF0]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/50 flex items-center justify-center">
                      <span className="text-6xl">😊</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                  <span className="text-xs text-white/70 font-medium tracking-wider uppercase mb-2 block">Estetik Dis Hekimligi</span>
                  <h3 className="text-xl font-semibold text-white mb-2">Gulus Tasarimi</h3>
                  <p className="text-sm text-white/80 leading-relaxed max-w-xs">Dijital gulus tasarimi ile yuz hatlarina uygun mukemmel gulus</p>
                </div>
              </div>
            </Link>
          </motion.div>

          <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-4 md:gap-5">
            <motion.div variants={staggerItem} className="col-span-1">
              <Link href="/implant" className="group block">
                <div className="relative h-[200px] md:h-[240px] rounded-2xl overflow-hidden bg-[#6D559F]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl opacity-30">🦷</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-xs text-white/60 tracking-wider uppercase block mb-1">Cerrahi</span>
                    <h3 className="text-lg font-semibold text-white">Implant Tedavisi</h3>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={staggerItem} className="col-span-1">
              <Link href="/porselen-lamina" className="group block">
                <div className="relative h-[200px] md:h-[240px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#F0EBF7] to-[#E1DCF0]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl opacity-40">✨</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-xs text-[#6D559F]/70 tracking-wider uppercase block mb-1">Estetik</span>
                    <h3 className="text-lg font-semibold text-[#1E1E1E]">Porselen Lamina</h3>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={staggerItem} className="col-span-2 grid grid-cols-3 gap-4 md:gap-5">
              <Link href="/kanal-tedavisi" className="group block">
                <div className="relative h-[160px] md:h-[200px] rounded-2xl overflow-hidden bg-[#F5F3F9] border border-[#E9E6F2]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl opacity-40">🔬</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-base font-medium text-[#1E1E1E]">Kanal Tedavisi</h3>
                  </div>
                </div>
              </Link>
              <Link href="/zirkonyum" className="group block">
                <div className="relative h-[160px] md:h-[200px] rounded-2xl overflow-hidden bg-[#F5F3F9] border border-[#E9E6F2]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl opacity-40">💎</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-base font-medium text-[#1E1E1E]">Zirkonyum Dis</h3>
                  </div>
                </div>
              </Link>
              <Link href="/dis-beyazlatma" className="group block">
                <div className="relative h-[160px] md:h-[200px] rounded-2xl overflow-hidden bg-[#F5F3F9] border border-[#E9E6F2]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl opacity-40">⚡</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-base font-medium text-[#1E1E1E]">Dis Beyazlatma</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const SkeletonBeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="absolute inset-0 bg-[#FAFAFA]">
      <div className="absolute inset-0 bg-[#FAFAFA]" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
        <img src="/before.webp" alt="Once" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-[#FAFAFA]" style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}>
        <img src="/after.webp" alt="Sonra" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20">
        <span className="text-xs sm:text-sm text-white font-medium bg-black/40 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">Once</span>
      </div>
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20">
        <span className="text-xs sm:text-sm text-white font-medium bg-[#6D559F] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">Sonra</span>
      </div>
      <div className="absolute top-0 bottom-0 w-0.5 sm:w-1 bg-white shadow-lg cursor-ew-resize z-[5]" style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl flex items-center justify-center">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#6D559F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
      <input type="range" min="0" max="100" value={sliderPosition} onChange={(e) => setSliderPosition(Number(e.target.value))} className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-[15]" />
    </div>
  );
};

const SkeletonTechnology = () => {
  return (
    <div className="absolute inset-0 bg-white overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover object-top sm:object-center">
        <source src="/grid1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

const SkeletonLocation = () => {
  const { t } = useLanguage();
  
  return (
    <div className="absolute inset-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.0!2d29.1315!3d40.9365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac5d0a0a0a0a1%3A0x1234567890abcdef!2sKlinik%20Prime%20Maltepe!5e0!3m2!1str!2str!4v1704067200000!5m2!1str!2str"
        title="Klinik Prime Maltepe Konum"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
      <a 
        href="https://www.google.com/maps/search/Klinik+Prime+Maltepe" 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-[#6D559F] hover:bg-[#5a4785] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 shadow-lg z-10"
      >
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>{t('features.directions')}</span>
      </a>
    </div>
  );
};
