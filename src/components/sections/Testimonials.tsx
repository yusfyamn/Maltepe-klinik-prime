"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useLanguage } from "@/contexts/LanguageContext";

function ReviewCard({ review, index, t }: { review: any; index: number; t: (key: string) => string }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-[#E9E6F2] shadow-sm h-full flex flex-col">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 aspect-square flex-shrink-0 rounded-full bg-[#6D559F] flex items-center justify-center mobile-circle overflow-hidden">
            {review.image ? (
              <img 
                src={review.image} 
                alt={review.name} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <span className="text-white font-medium text-sm">{review.name.charAt(0)}</span>
            )}
          </div>
          <div>
            <p className="text-sm text-[#1E1E1E] font-medium">{review.name}</p>
            <p className="text-xs text-[#6B6B6B]">{t(review.dateKey)}</p>
          </div>
        </div>
        <div className="flex gap-0.5">
          {[1,2,3,4,5].map((i) => (
            <svg key={i} className="w-3.5 h-3.5 text-[#FBBC05]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-sm text-[#6B6B6B] leading-relaxed">{t(review.textKey)}</p>
    </div>
  );
}

export function Testimonials() {
  const { t } = useLanguage();
  
  const reviews = [
    {
      name: "Ahmet Baş",
      rating: 5,
      dateKey: "review.monthAgo",
      image: "/ahmet baş.png",
      textKey: "review.ahmet",
    },
    {
      name: "Turgay T",
      rating: 5,
      dateKey: "review.2monthsAgo",
      textKey: "review.turgay",
    },
    {
      name: "BestGKDunya",
      rating: 5,
      dateKey: "review.3weeksAgo",
      textKey: "review.bestgk",
    },
    {
      name: "Recep Akpınar",
      rating: 5,
      dateKey: "review.2monthsAgo",
      textKey: "review.recep",
    },
    {
      name: "Ömer Can Soylu",
      rating: 5,
      dateKey: "review.4weeksAgo",
      image: "/ömer can soylu.png",
      textKey: "review.omer",
    },
    {
      name: "Engin Aydın",
      rating: 5,
      dateKey: "review.monthAgo",
      image: "/engin aydın.png",
      textKey: "review.engin",
    },
  ];
  
  return (
    <section className="pt-4 pb-12 md:pt-6 md:pb-16 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-[#6B6B6B]">{t('testimonials.google')}</span>
              <div className="flex items-center gap-1 ml-2">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-[#FBBC05]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm text-[#1E1E1E] font-medium ml-1">5.0</span>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1E1E1E]">{t('testimonials.title')}</h2>
          </div>
        </div>

        {/* Grid Layout - Mobile: 4 items (2x2), Desktop: All 6 items (3x2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {reviews.map((review, index) => (
            <div key={index} className={index >= 4 ? "hidden lg:block" : ""}>
              <ReviewCard review={review} index={index} t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
