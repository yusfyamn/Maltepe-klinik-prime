"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { iPadMockup as IPadMockup } from "@/components/ui/iPadMockup";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useLanguage } from "@/contexts/LanguageContext";

const cases = [
  {
    id: "1",
    title: "Gülüş Tasarımı",
    treatment: "Hollywood Smile",
    description: "Zirkonyum veneerler ile tam gülüş dönüşümü",
  },
  {
    id: "2",
    title: "İmplant Tedavisi",
    treatment: "Tam Çene İmplant",
    description: "Eksik dişlerin implant ile restorasyonu",
  },
  {
    id: "3",
    title: "Diş Beyazlatma",
    treatment: "Profesyonel Beyazlatma",
    description: "Ofis tipi diş beyazlatma uygulaması",
  },
];

export function BeforeAfter() {
  const isMobile = useIsMobile();
  const { t } = useLanguage();
  
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-primary">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
          <div>
            <span className="inline-flex items-center gap-2 text-text-muted text-xs sm:text-sm font-body tracking-wider uppercase mb-3 sm:mb-4">
              <span className="w-6 sm:w-8 h-px bg-accent" />
              {t('beforeafter.tag')}
              <span className="w-6 sm:w-8 h-px bg-accent" />
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-text leading-tight mb-4 sm:mb-6">
              {t('beforeafter.title1')}
              <span className="text-accent"> {t('beforeafter.title2')}</span>
            </h2>
            <p className="text-text-muted text-sm sm:text-base lg:text-lg font-body leading-relaxed">
              {t('beforeafter.subtitle')}
            </p>
          </div>
        </div>

        {/* iPad Mockup - Full Width with taller aspect on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center px-4 sm:px-0"
        >
          <div className="w-full max-w-[900px]">
            <IPadMockup 
              beforeImage="/before.webp"
              afterImage="/after.webp"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
