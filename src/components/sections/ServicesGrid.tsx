"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useDemo } from "@/contexts/DemoContext";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useLanguage } from "@/contexts/LanguageContext";


// Aesthetic Luxury - Dark Banner Section (like E-max in the image)
function AestheticLuxuryServices() {
  return (
    <section className="relative py-0 overflow-hidden">
      {/* Dark Banner - E-max Style */}
      <div className="relative bg-[#1a1a1a] py-20 md:py-28">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(117, 100, 167, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 80% 50%, rgba(117, 100, 167, 0.2) 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <h2 className="text-h2 text-white mb-6 leading-tight">
                E-max Diş Kaplama
              </h2>
              <p className="text-body text-white/60 leading-relaxed mb-8 max-w-md">
                E-max, lityum disilikat cam seramikten üretilen, doğal diş görünümüne en yakın estetik kaplama sistemidir. Işık geçirgenliği sayesinde doğal dişlerle aynı parlaklığı sunar.
              </p>
              
              {/* Features list */}
              <div className="space-y-3 mb-8">
                {["Doğal ışık geçirgenliği", "Yüksek dayanıklılık", "Biyouyumlu malzeme", "10+ yıl garanti"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6D559F]" />
                    <span className="text-body-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/emax-kaplama"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 text-body-sm font-medium"
              >
                <span>Detaylı Bilgi</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Right - Visual placeholder */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl opacity-30">💎</span>
                  <p className="text-white/30 text-body-sm mt-4">Görsel Alanı</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Şeffaf Plak / Invisalign Section - Card style */}
      <div className="bg-[#F5F3F9] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="bg-[#6D559F] rounded-3xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left - Image placeholder */}
              <div className="relative h-64 md:h-auto bg-gradient-to-br from-[#8B7AB8] to-[#6D559F] flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-7xl opacity-40">😁</span>
                  <p className="text-white/40 text-body-sm mt-4">Görsel Alanı</p>
                </div>
              </div>

              {/* Right - Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-white/60 text-caption tracking-wider uppercase mb-3">Ortodonti</span>
                <h3 className="text-h3 text-white mb-4">
                  Şeffaf Plak | Invisalign
                </h3>
                <p className="text-body-sm text-white/70 leading-relaxed mb-6">
                  Görünmez diş teli alternatifi ile sosyal hayatınızı etkilemeden düzgün dişlere kavuşun. Çıkarılabilir, hijyenik ve konforlu.
                </p>
                <Link 
                  href="/seffaf-plak"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#6D559F] hover:bg-white/90 transition-all duration-300 text-body-sm font-medium w-fit"
                >
                  <span>İncele</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid() {
  const { variant } = useDemo();
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  // Mobilde animasyonsuz, desktop'ta animasyonlu
  const HeaderComponent = isMobile ? "div" : motion.div;
  const GridComponent = isMobile ? "div" : motion.div;
  const ItemComponent = isMobile ? "div" : motion.div;

  const services = [
    {
      id: "01",
      title: t('services.smile'),
      description: t('services.smileDesc'),
      href: "/gulus-tasarimi-maltepe",
      images: ["/gülüş tasarımı.webp", "/gülüş tasarımı.webp"],
    },
    {
      id: "02",
      title: t('services.implant'),
      description: t('services.implantDesc'),
      href: "/implant-tedavisi-maltepe",
      images: ["/implant tedavisi.webp", "/implant tedavisi.webp"],
    },
    {
      id: "03",
      title: t('services.zirconium'),
      description: t('services.zirconiumDesc'),
      href: "/zirkonyum-dis-maltepe",
      images: ["/zirkonyum kaplama.png", "/zirkonyum kaplama.png"],
    },
    {
      id: "04",
      title: t('services.pediatric'),
      description: t('services.pediatricDesc'),
      href: "/cocuk-dis-hekimligi-maltepe",
      images: ["/çocuk diş hekimliği.webp", "/çocuk diş hekimliği.webp"],
    },
  ];

  // Aesthetic Luxury variant
  if (variant === "aesthetic-luxury") {
    return <AestheticLuxuryServices />;
  }

  // Default Clinic Estate variant
  return (
    <section id="service-section" className="py-8 sm:py-10 md:py-12 pb-12 sm:pb-16 md:pb-20 overflow-visible rounded-b-[40px] sm:rounded-b-[48px] md:rounded-b-[56px]" style={{ backgroundColor: "#4A3B6B" }}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="section-heading-wrapper flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-white/20">
          <HeaderComponent 
            {...(!isMobile && {
              variants: fadeInUp,
              initial: "hidden",
              whileInView: "visible",
              viewport: viewportConfig,
            })}
          >
            <h2 className="text-2xl sm:text-3xl md:text-h2 text-white font-heading m-0">
              {t('services.title1')}
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-h2 text-white/70 font-heading m-0">
              {t('services.title2')}
            </h2>
          </HeaderComponent>
          
          {/* Desktop Button */}
          <HeaderComponent
            {...(!isMobile && {
              variants: fadeInUp,
              initial: "hidden",
              whileInView: "visible",
              viewport: viewportConfig,
            })}
            className="hidden lg:block"
          >
            <Link 
              href="/hizmetler" 
              className="btn-premium primary-button inline-flex items-center gap-2 border border-white/30 rounded-full px-5 py-2.5 text-white text-body-sm font-medium transition-all duration-300 cubic-bezier(0.25, 0.46, 0.45, 0.94) hover:bg-white hover:shadow-lg hover:-translate-y-0.5"
              style={{ 
                "--hover-text-color": "#6D559F"
              } as React.CSSProperties & { "--hover-text-color": string }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#6D559F";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "white";
              }}
            >
              <span>{t('services.allservices')}</span>
              <svg width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.33337 6.33334H14.6667M14.6667 6.33334V14.6667M14.6667 6.33334L6.33337 14.6667" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </HeaderComponent>
        </div>

        {/* Services Grid */}
        <GridComponent 
          className="service-grid overflow-visible"
          {...(!isMobile && {
            variants: staggerContainer,
            initial: "hidden",
            whileInView: "visible",
            viewport: viewportConfig,
          })}
        >
          {services.map((service) => (
            <ItemComponent
              key={service.id}
              {...(!isMobile && {
                variants: staggerItem,
              })}
              role="listitem"
              className="overflow-visible"
            >
              <Link 
                href={service.href} 
                className="service-card group relative grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_1fr] gap-2 sm:gap-4 items-center border-b border-white/20 py-4 sm:py-5 md:py-6 text-white transition-all duration-300 cubic-bezier(0.25, 0.46, 0.45, 0.94) hover:bg-white hover:rounded-lg hover:px-4 sm:hover:px-6 md:hover:px-8 hover:border-transparent hover:shadow-2xl hover:-translate-y-1 overflow-visible"
              >
                {/* Single Large Image - Show on hover, positioned in center inside the card */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 hidden lg:block">
                  <div className="w-28 h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-2xl overflow-hidden shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-500 border-4 border-white">
                    <img 
                      src={service.images[0]} 
                      alt="" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Number */}
                <div className="text-sm sm:text-base md:text-body-lg font-medium text-white/60 group-hover:text-[#6D559F]/60 transition-colors duration-300 relative z-10">
                  {service.id}
                </div>
                
                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-h4 font-medium sm:justify-self-center sm:text-center text-white group-hover:text-[#6D559F] transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>
                
                {/* Description - Hidden on mobile, visible on sm+ */}
                <p className="hidden sm:block text-xs sm:text-sm md:text-body-sm text-right justify-self-end sm:whitespace-normal md:whitespace-nowrap text-white/70 group-hover:text-[#6D559F]/80 transition-colors duration-300 relative z-10">
                  {service.description}
                </p>
              </Link>
            </ItemComponent>
          ))}
        </GridComponent>

        {/* Mobile Button */}
        <HeaderComponent
          {...(!isMobile && {
            variants: fadeInUp,
            initial: "hidden",
            whileInView: "visible",
            viewport: viewportConfig,
          })}
          className="res-button-show lg:hidden flex justify-center items-center mt-6"
        >
          <Link 
            href="/hizmetler" 
            className="btn-premium primary-button inline-flex items-center gap-2 border border-white/30 rounded-full px-5 py-2.5 text-white text-body-sm font-medium transition-all duration-300 cubic-bezier(0.25, 0.46, 0.45, 0.94) hover:bg-white hover:shadow-lg hover:-translate-y-0.5"
            style={{ 
              "--hover-text-color": "#6D559F"
            } as React.CSSProperties & { "--hover-text-color": string }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#6D559F";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "white";
            }}
          >
            <span>{t('services.allservices')}</span>
            <svg width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.33337 6.33334H14.6667M14.6667 6.33334V14.6667M14.6667 6.33334L6.33337 14.6667" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </HeaderComponent>
      </div>
    </section>
  );
}
