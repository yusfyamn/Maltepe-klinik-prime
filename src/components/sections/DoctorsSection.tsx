"use client";

import { motion } from "framer-motion";
import { useDemo } from "@/contexts/DemoContext";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useLanguage } from "@/contexts/LanguageContext";

interface Doctor {
  name: string;
  title: string;
  specialization: string;
  image?: string;
}

export function DoctorsSection() {
  const { config } = useDemo();
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  const doctors: Doctor[] = [
    {
      name: "Dt. Alp Yıldıran",
      title: t('doctor.dentist'),
      specialization: t('doctor.general'),
      image: "/Dt.-Alp-Yıldıran.webp",
    },
    {
      name: "Dt. Elif Gelgeç",
      title: t('doctor.dentist'),
      specialization: t('doctor.aesthetic'),
      image: "/Dt.-Elif-Gelgeç.webp",
    },
    {
      name: "Uzm. Dt. Aytaç Üzel",
      title: t('doctor.specialist'),
      specialization: t('doctor.implantology'),
      image: "/Uzm. Dt. Aytaç Üzel.webp",
    },
  ];

  const sectionSpacing =
    config.spacing === "generous"
      ? "py-20 md:py-28"
      : config.spacing === "balanced"
      ? "py-16 md:py-24"
      : "py-8 md:py-12";

  // Her zaman animasyonsuz - performans için
  const HeaderComponent = "div";
  const GridComponent = "div";
  const CardComponent = "div";

  return (
    <section className={`${sectionSpacing} pb-14 rounded-[40px] sm:rounded-[48px] md:rounded-[56px]`} style={{ backgroundColor: "#4A3B6B" }}>
      <div className="container-default">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-h2 text-white">
              {t('doctors.title')}
            </h2>
          </div>
          <p className="text-body text-white/60 max-w-none md:whitespace-nowrap">
            {t('doctors.subtitle')}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.name}
              className={doctors.length === 3 && index === 2 ? "sm:col-span-2 sm:max-w-[50%] sm:mx-auto lg:col-span-1 lg:max-w-none" : ""}
            >
              <div className="rounded-3xl overflow-hidden">
                {/* Image with overlay text */}
                <div className="aspect-[4/5] lg:aspect-[3/4] xl:aspect-[4/5] bg-gradient-to-br from-white/5 to-white/10 relative overflow-hidden">
                  {doctor.image ? (
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-h3 text-white">
                          {doctor.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Text on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-heading font-medium text-white">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-white/70 mt-0.5">
                      {doctor.specialization}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
