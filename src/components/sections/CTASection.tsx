"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

export function CTASection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderimi burada işlenecek
    console.log("Form submitted:", formData);
    alert(t('cta.successMessage'));
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-[#FAFAFA] relative overflow-hidden">

      <div className="container-default relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2 className="text-2xl sm:text-3xl md:text-h2 text-[#1E1E1E] leading-tight mb-4 sm:mb-6">
              {t('cta.title1')}<span className="text-[#6D559F]"> {t('cta.title2')}</span>
            </h2>
            <p className="text-sm sm:text-base md:text-body text-[#6B6B6B] leading-relaxed mb-6 sm:mb-8 max-w-md">
              {t('cta.subtitle')}
            </p>

            {/* Info */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#6D559F]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#6D559F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] sm:text-caption text-[#6B6B6B]">{t('cta.locationLabel')}</p>
                  <p className="text-xs sm:text-body-sm text-[#1E1E1E]">Bağlarbaşı Mh. Bağdat Cd. No: 398, Maltepe</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#6D559F]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#6D559F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] sm:text-caption text-[#6B6B6B]">{t('cta.hoursLabel')}</p>
                  <p className="text-xs sm:text-body-sm text-[#1E1E1E]">{t('nav.monSat')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#6D559F]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#6D559F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] sm:text-caption text-[#6B6B6B]">{t('cta.phoneLabel')}</p>
                  <p className="text-xs sm:text-body-sm text-[#1E1E1E]">+90 501 639 03 00</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-[#6D559F]/20 shadow-xl shadow-[#6D559F]/5">
              <h3 className="text-lg sm:text-xl md:text-h4 text-[#1E1E1E] mb-4 sm:mb-6">{t('cta.formTitle')}</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-body-sm text-[#6B6B6B] mb-1.5 sm:mb-2">{t('cta.nameLabel')}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[#E9E6F2] focus:border-[#6D559F] focus:outline-none transition-colors text-sm sm:text-body text-[#1E1E1E]"
                    placeholder={t('cta.namePlaceholder')}
                  />
                </div>
                
                <div>
                  <label className="block text-xs sm:text-body-sm text-[#6B6B6B] mb-1.5 sm:mb-2">{t('cta.phoneInputLabel')}</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[#E9E6F2] focus:border-[#6D559F] focus:outline-none transition-colors text-sm sm:text-body text-[#1E1E1E]"
                    placeholder={t('cta.phonePlaceholder')}
                  />
                </div>
                
                <div>
                  <label className="block text-xs sm:text-body-sm text-[#6B6B6B] mb-1.5 sm:mb-2">{t('cta.serviceLabel')}</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[#E9E6F2] focus:border-[#6D559F] focus:outline-none transition-colors text-sm sm:text-body text-[#1E1E1E] bg-white"
                  >
                    <option value="">{t('cta.servicePlaceholder')}</option>
                    <option value="gulus-tasarimi">{t('cta.serviceSmile')}</option>
                    <option value="implant">{t('cta.serviceImplant')}</option>
                    <option value="zirkonyum">{t('cta.serviceZirconium')}</option>
                    <option value="cocuk">{t('cta.servicePediatric')}</option>
                    <option value="diger">{t('cta.serviceOther')}</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs sm:text-body-sm text-[#6B6B6B] mb-1.5 sm:mb-2">{t('cta.messageLabel')}</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-[#E9E6F2] focus:border-[#6D559F] focus:outline-none transition-colors text-sm sm:text-body text-[#1E1E1E] resize-none"
                    placeholder={t('cta.messagePlaceholder')}
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full mt-5 sm:mt-6 bg-[#6D559F] hover:bg-[#5a4785] text-white py-3 sm:py-4 rounded-full text-sm sm:text-body font-medium transition-colors duration-300"
              >
                {t('cta.submitButton')}
              </button>
              
              <p className="text-[10px] sm:text-caption text-[#6B6B6B] text-center mt-3 sm:mt-4">
                {t('cta.privacyNote')}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
