"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-[#1E1E1E] rounded-t-[40px] sm:rounded-t-[48px] md:rounded-t-[56px] pt-10 sm:pt-14 md:pt-16 pb-6 sm:pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 mb-12">
          {/* Left - Logo & Contact */}
          <div className="col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <Link href="/" className="inline-block">
                <img 
                  src="/Adsız (500 x 200 piksel) (350 x 200 piksel).png" 
                  alt="Klinik Prime" 
                  className="h-10 w-auto brightness-0 invert"
                />
              </Link>
              <div className="flex flex-col">
                <p className="text-white text-sm font-medium">
                  {t('footer.clinic')}
                </p>
                <p className="text-white/60 text-sm">
                  {t('footer.tagline')}
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <a href="https://maps.google.com/?q=Baglarbasi+Mh.+Bagdat+Cd.+No:398+Maltepe+Istanbul" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">Bağlarbaşı Mh. Bağdat Cd. No: 398, Maltepe/İstanbul</span>
              </a>
              <a href="tel:+905016390300" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">+90 (501) 639 03 00</span>
              </a>
              <a href="mailto:info@klinikprimemaltepe.com" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">info@klinikprimemaltepe.com</span>
              </a>
              <a href="https://www.instagram.com/klinikprimemaltepe/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-sm">@klinikprimemaltepe</span>
              </a>
            </div>
          </div>

          {/* Right - Links */}
          <div className="col-span-7 grid grid-cols-3 gap-8">
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">{t('footer.about')}</h4>
              <ul className="space-y-2.5">
                <li><Link href="/hakkimizda" className="text-white/60 hover:text-white text-sm transition-colors">{t('footer.ourClinic')}</Link></li>
                <li><Link href="/hekimlerimiz" className="text-white/60 hover:text-white text-sm transition-colors">{t('footer.ourDoctors')}</Link></li>
                <li><Link href="/galeri" className="text-white/60 hover:text-white text-sm transition-colors">{t('footer.gallery')}</Link></li>
                <li><Link href="/iletisim" className="text-white/60 hover:text-white text-sm transition-colors">{t('footer.contact')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2.5">
                <li><Link href="/gulus-tasarimi-maltepe" className="text-white/60 hover:text-white text-sm transition-colors">{t('footer.smileDesign')}</Link></li>
                <li><Link href="/implant-tedavisi-maltepe" className="text-white/60 hover:text-white text-sm transition-colors">{t('footer.implant')}</Link></li>
                <li><Link href="/zirkonyum-dis-maltepe" className="text-white/60 hover:text-white text-sm transition-colors">{t('footer.zirconium')}</Link></li>
                <li><Link href="/cocuk-dis-hekimligi-maltepe" className="text-white/60 hover:text-white text-sm transition-colors">{t('footer.pediatric')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">{t('footer.contact')}</h4>
              <ul className="space-y-2.5">
                <li><Link href="/gizlilik" className="text-white/60 hover:text-white text-sm transition-colors">{t('footer.privacy')}</Link></li>
                <li><Link href="/kvkk" className="text-white/60 hover:text-white text-sm transition-colors">{t('footer.kvkk')}</Link></li>
                <li><Link href="/cerez" className="text-white/60 hover:text-white text-sm transition-colors">{t('footer.cookie')}</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/" className="inline-block">
              <img 
                src="/Adsız (500 x 200 piksel) (350 x 200 piksel).png" 
                alt="Klinik Prime" 
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <div className="flex flex-col">
              <p className="text-white text-sm font-medium">
                {t('footer.clinic')}
              </p>
              <p className="text-white/60 text-sm">
                {t('footer.tagline')}
              </p>
            </div>
          </div>
          
          <div className="space-y-3 mb-10">
            <a href="https://maps.google.com/?q=Baglarbasi+Mh.+Bagdat+Cd.+No:398+Maltepe+Istanbul" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm">Bağlarbaşı Mh. Bağdat Cd. No: 398, Maltepe/İstanbul</span>
            </a>
            <a href="tel:+905016390300" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm">+90 (501) 639 03 00</span>
            </a>
            <a href="mailto:info@klinikprimemaltepe.com" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">info@klinikprimemaltepe.com</span>
            </a>
            <a href="https://www.instagram.com/klinikprimemaltepe/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-sm">@klinikprimemaltepe</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
              <h4 className="text-white text-base font-semibold mb-4">{t('footer.about')}</h4>
              <ul className="space-y-2.5">
                <li><Link href="/hakkimizda" className="text-white/60 hover:text-white text-sm transition-colors">{t('footer.ourClinic')}</Link></li>
                <li><Link href="/hekimlerimiz" className="text-white/60 hover:text-white text-sm transition-colors">{t('footer.ourDoctors')}</Link></li>
                <li><Link href="/gizlilik" className="text-white/60 hover:text-white text-sm transition-colors">{t('footer.privacy')}</Link></li>
                <li><Link href="/kvkk" className="text-white/60 hover:text-white text-sm transition-colors">{t('footer.kvkk')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-base font-semibold mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2.5">
                <li><Link href="/gulus-tasarimi-maltepe" className="text-white/60 hover:text-white text-sm transition-colors">{t('footer.smileDesign')}</Link></li>
                <li><Link href="/implant-tedavisi-maltepe" className="text-white/60 hover:text-white text-sm transition-colors">{t('footer.implant')}</Link></li>
                <li><Link href="/zirkonyum-dis-maltepe" className="text-white/60 hover:text-white text-sm transition-colors">{t('footer.zirconium')}</Link></li>
                <li><Link href="/cocuk-dis-hekimligi-maltepe" className="text-white/60 hover:text-white text-sm transition-colors">{t('footer.pediatric')}</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/10">
          <p className="text-white/40 text-xs">{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
