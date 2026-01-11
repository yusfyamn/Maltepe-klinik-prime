"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { 
  FiChevronDown, 
  FiArrowRight, 
  FiMapPin,
  FiPhone,
  FiClock,
  FiX,
} from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { menuSlide, getCurveVariants, linkSlide } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

// Language Selector Component
const languages = [
  { code: "tr", flag: "🇹🇷", name: "Türkçe" },
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "de", flag: "🇩🇪", name: "Deutsch" },
];

function LanguageSelector({ scrolled }: { scrolled: boolean }) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const selected = languages.find(l => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-9 h-9 aspect-square flex-shrink-0 rounded-full text-lg transition-all mobile-circle ${
          scrolled 
            ? "bg-gray-50 hover:bg-gray-100" 
            : "bg-white/10 hover:bg-white/20"
        }`}
      >
        {selected.flag}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className={`absolute right-0 top-[calc(100%_+_12px)] rounded-2xl border p-3 shadow-2xl min-w-[160px] z-50 ${
              scrolled 
                ? "bg-white border-gray-100 shadow-xl shadow-black/8" 
                : "bg-[#1a1a1a]/95 backdrop-blur-xl border-white/10"
            }`}
          >
            {/* Nub arrow */}
            <span 
              className={`absolute right-4 top-0 h-3 w-3 -translate-y-1/2 rotate-45 rounded-tl border-l border-t ${
                scrolled ? "border-gray-100 bg-white" : "border-white/10 bg-[#1a1a1a]/95"
              }`}
            />
            
            <div className={`divide-y ${scrolled ? "divide-gray-100" : "divide-white/5"}`}>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as any);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-2 py-2.5 transition-colors rounded-lg ${
                    selected.code === lang.code 
                      ? scrolled ? "bg-[#6D559F]/5" : "bg-white/5"
                      : scrolled ? "hover:bg-gray-50" : "hover:bg-white/5"
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <div className="flex-1 text-left">
                    <p className={`text-sm font-medium ${
                      selected.code === lang.code 
                        ? "text-[#6D559F]" 
                        : scrolled ? "text-[#1E1E1E]" : "text-white"
                    }`}>
                      {lang.name}
                    </p>
                  </div>
                  {selected.code === lang.code && (
                    <svg className="w-4 h-4 text-[#6D559F]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Mobile Language Selector - Simpler version for mobile navbar
function MobileLanguageSelector({ scrolled }: { scrolled: boolean }) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const selected = languages.find(l => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-9 h-9 aspect-square flex-shrink-0 rounded-full text-lg transition-all mobile-circle ${
          scrolled 
            ? "bg-gray-100" 
            : "bg-white/15"
        }`}
      >
        {selected.flag}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-[calc(100%_+_8px)] rounded-xl border bg-white border-gray-100 shadow-xl p-2 min-w-[140px] z-[100]"
          >
            <div className="space-y-0.5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as any);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 transition-colors rounded-lg text-left ${
                    selected.code === lang.code 
                      ? "bg-[#6D559F]/10 text-[#6D559F]"
                      : "text-[#1E1E1E] hover:bg-gray-50"
                  }`}
                >
                  <span className="text-base">{lang.flag}</span>
                  <span className="text-sm font-medium">{lang.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const mobileMenuItems = [
    {
      title: t('nav.services'),
      href: "/hizmetler",
      subItems: [
        { title: t('services.smile'), href: "/gulus-tasarimi-maltepe" },
        { title: t('services.implant'), href: "/implant-tedavisi-maltepe" },
        { title: t('services.zirconium'), href: "/zirkonyum-dis-maltepe" },
        { title: t('services.pediatric'), href: "/cocuk-dis-hekimligi-maltepe" },
        { title: "Diş Beyazlatma", href: "/dis-beyazlatma" },
        { title: "Ortodonti", href: "/ortodonti" },
      ]
    },
    {
      title: t('nav.aboutUs'),
      href: "/hakkimizda",
      subItems: [
        { title: t('nav.ourClinic'), href: "/hakkimizda" },
        { title: t('nav.ourTeam'), href: "/ekibimiz" },
        { title: t('nav.testimonials'), href: "/referanslar" },
      ]
    },
    {
      title: t('nav.contact'),
      href: "/iletisim",
      subItems: null
    },
    {
      title: t('nav.blog'),
      href: "/blog",
      subItems: null
    },
  ];

  return (
    <>
      {/* Desktop Navbar - Combined with TopBar info */}
      <div className="fixed top-0 left-0 right-0 z-50 hidden md:block">
        {/* Info Strip - Minimal, disappears on scroll */}
        <div className={`overflow-hidden transition-[height,opacity] duration-300 ${scrolled ? "h-0 opacity-0" : "h-9 opacity-100"}`}>
          <div className="h-9 bg-[#6D559F] text-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 h-full flex items-center justify-between text-[11px] lg:text-[12px]">
              {/* Left - Contact */}
              <div className="flex items-center gap-4 lg:gap-6">
                <a href="tel:+905016390300" className="flex items-center gap-2 hover:text-white/80">
                  <FiPhone className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="whitespace-nowrap">{t('nav.phone')}</span>
                </a>
                <span className="flex items-center gap-2 text-white/80">
                  <FiMapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="whitespace-nowrap">{t('nav.location')}</span>
                </span>
                <span className="flex items-center gap-2 text-white/80 hidden lg:flex">
                  <FiClock className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="whitespace-nowrap">{t('nav.hours')}</span>
                </span>
              </div>
              
              {/* Right - Social, Links & Language */}
              <div className="flex items-center gap-2 lg:gap-4">
                <div className="flex items-center gap-2 lg:gap-3 hidden lg:flex">
                  <Link href="/online-randevu" className="hover:text-white/80 whitespace-nowrap">{t('nav.appointment')}</Link>
                  <span className="text-white/40">|</span>
                  <Link href="/yol-tarifi" className="hover:text-white/80 whitespace-nowrap">{t('features.directions')}</Link>
                </div>
                
                <div className="flex items-center gap-2 ml-0 lg:ml-2">
                  <a href="https://www.instagram.com/klinikprimemaltepe/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30">
                    <FaInstagram className="w-3 h-3" />
                  </a>
                  <a href="https://wa.me/905016390300" target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center hover:bg-[#25D366]">
                    <FaWhatsapp className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Navbar */}
        <header 
          className={`${
            scrolled 
              ? "bg-white shadow-lg shadow-black/5" 
              : "bg-black/30 backdrop-blur-xl"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-3 items-center h-16">
            {/* Left - Logo */}
            <Link href="/" className="hover:opacity-80">
              <img 
                src="/Adsız (500 x 200 piksel) (350 x 200 piksel).png" 
                alt="Maltepe Diş" 
                className={`h-14 w-auto ${scrolled ? "" : "brightness-0 invert"}`}
              />
            </Link>

            {/* Center - Nav Tabs */}
            <div className="flex justify-center">
              <NavTabs scrolled={scrolled} />
            </div>

            {/* Right - Actions */}
            <div className="flex items-center gap-3 justify-end">
              {/* Phone - visible when scrolled */}
              {scrolled && (
                <a href="tel:+905016390300" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#6D559F] whitespace-nowrap">
                  <FiPhone className="w-4 h-4 flex-shrink-0" />
                  <span className="hidden xl:inline">+90 501 639 03 00</span>
                </a>
              )}

              {/* Language Selector */}
              <LanguageSelector scrolled={scrolled} />
              
              <Button
                className={`rounded-full px-6 py-2.5 text-sm flex items-center gap-2 ${
                  scrolled 
                    ? "bg-[#6D559F] text-white hover:bg-[#5a4785] shadow-lg shadow-[#6D559F]/20" 
                    : "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white hover:text-[#6D559F]"
                }`}
                asChild
              >
                <Link href="/iletisim">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {t('nav.appointmentBtn')}
                </Link>
              </Button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Navbar - Hero'da şeffaf, scroll'da beyaz */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
          scrolled 
            ? "bg-white/98 backdrop-blur-xl shadow-lg" 
            : "bg-black/30 backdrop-blur-xl"
        }`}
      >
        <div className="flex items-center justify-between px-4 h-14">
          <Link href="/">
            <img 
              src="/Adsız (500 x 200 piksel) (350 x 200 piksel).png" 
              alt="Maltepe Diş" 
              className={`h-10 w-auto transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
            />
          </Link>

          <div className="flex items-center gap-2">
            {/* Language Flag */}
            <MobileLanguageSelector scrolled={scrolled} />
            
            <button 
              onClick={() => setMobileOpen(true)}
              className={`p-2 transition-colors ${
                scrolled 
                  ? "text-[#1E1E1E] hover:text-[#6D559F]" 
                  : "text-white hover:text-white/80"
              }`}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Light-sass Style */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            />
            
            {/* Menu Panel with SVG Curve - Beyaz */}
            <motion.div
              variants={menuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-white z-[70] md:hidden shadow-2xl"
            >
              {/* SVG Curve - Sol taraf beyaz */}
              <svg 
                className="absolute top-0 left-[-99px] w-[100px] h-full fill-white stroke-none pointer-events-none"
                style={{ filter: 'drop-shadow(-2px 0 8px rgba(0,0,0,0.1))' }}
              >
                <motion.path
                  variants={getCurveVariants()}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                />
              </svg>
              
              {/* Content */}
              <div className="box-border h-full py-[30px] px-[35px] flex flex-col justify-between overflow-y-auto">
                {/* Header - Logo & Close Button */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-[40px] flex items-center justify-between"
                  >
                    <img 
                      src="/Adsız (500 x 200 piksel) (350 x 200 piksel).png" 
                      alt="Klinik Prime" 
                      className="h-12 w-auto"
                    />
                    <motion.button
                      onClick={() => setMobileOpen(false)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
                      aria-label="Menüyü Kapat"
                    >
                      <FiX className="w-5 h-5" />
                    </motion.button>
                  </motion.div>

                  {/* Menu Label */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-400 border-b border-gray-200 uppercase text-[11px] mb-[20px] pb-[10px] tracking-wider"
                  >
                    <p>Menu</p>
                  </motion.div>
                  
                  {/* Menu Items with Dropdowns */}
                  <div className="space-y-0.5">
                    {mobileMenuItems.map((item, index) => (
                      <motion.div
                        key={item.title}
                        custom={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index + 0.4 }}
                      >
                        {item.subItems ? (
                          <div>
                            {/* Main Item with Dropdown */}
                            <button
                              onClick={() => setExpandedMenu(expandedMenu === item.title ? null : item.title)}
                              className="w-full flex items-center justify-between py-2 text-[#1E1E1E] text-[22px] font-light hover:text-[#6D559F] transition-colors"
                            >
                              <span>{item.title}</span>
                              <motion.div
                                animate={{ rotate: expandedMenu === item.title ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <FiChevronDown className="w-5 h-5 text-gray-400" />
                              </motion.div>
                            </button>
                            
                            {/* Dropdown Sub Items */}
                            <AnimatePresence>
                              {expandedMenu === item.title && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-4 pb-2 space-y-1 border-l-2 border-[#6D559F]/20 ml-2 mt-2">
                                    {item.subItems.map((subItem, subIndex) => (
                                      <motion.div
                                        key={subItem.title}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: subIndex * 0.05 }}
                                      >
                                        <Link
                                          href={subItem.href}
                                          onClick={() => setMobileOpen(false)}
                                          className="block py-2.5 text-sm text-gray-600 hover:text-[#6D559F] transition-colors"
                                        >
                                          {subItem.title}
                                        </Link>
                                      </motion.div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-between py-2 text-[#1E1E1E] text-[22px] font-light hover:text-[#6D559F] transition-colors"
                          >
                            <span>{item.title}</span>
                            <FiArrowRight className="w-5 h-5 text-gray-400" />
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Randevu Al Butonu - Minimal */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-6"
                  >
                    <Link
                      href="/iletisim"
                      onClick={() => setMobileOpen(false)}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#6D559F] text-white hover:bg-[#5a4785] transition-colors shadow-md"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm font-medium">{t('nav.appointmentBtn')}</span>
                    </Link>
                  </motion.div>
                </div>

                {/* Footer - Minimal Icon Buttons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex w-full justify-center gap-4 pt-6"
                >
                  <a 
                    href="https://www.instagram.com/klinikprimemaltepe/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 aspect-square flex-shrink-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md mobile-circle"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://wa.me/905016390300" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 aspect-square flex-shrink-0 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md mobile-circle"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                  </a>
                  <a 
                    href="tel:+905016390300" 
                    className="w-10 h-10 aspect-square flex-shrink-0 rounded-full bg-[#6D559F] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md mobile-circle"
                    aria-label="Telefon"
                  >
                    <FiPhone className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


// Navigation Tabs with Advanced Dropdown
function NavTabs({ scrolled }: { scrolled: boolean }) {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<"l" | "r" | null>(null);

  const TABS = [
    { title: t('nav.services'), Component: HizmetlerContent, hasDropdown: true },
    { title: t('nav.aboutUs'), Component: HakkimizdaContent, hasDropdown: true },
    { title: t('nav.contact'), Component: IletisimContent, hasDropdown: true },
  ].map((n, idx) => ({ ...n, id: idx + 1 }));

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }
    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-1"
    >
      {TABS.map((t) => (
        <Tab
          key={t.id}
          selected={selected}
          handleSetSelected={handleSetSelected}
          tab={t.id}
          hasDropdown={t.hasDropdown}
          scrolled={scrolled}
        >
          {t.title}
        </Tab>
      ))}
      <AnimatePresence>
        {selected && TABS.find(t => t.id === selected)?.hasDropdown && (
          <Content dir={dir} selected={selected} scrolled={scrolled} TABS={TABS} />
        )}
      </AnimatePresence>
    </div>
  );
}

function Tab({ 
  children, 
  tab, 
  handleSetSelected, 
  selected, 
  hasDropdown,
  scrolled,
}: { 
  children: React.ReactNode;
  tab: number;
  handleSetSelected: (val: number | null) => void;
  selected: number | null;
  hasDropdown?: boolean;
  scrolled: boolean;
}) {
  const isSelected = selected === tab;

  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => hasDropdown && handleSetSelected(tab)}
      onClick={() => hasDropdown && handleSetSelected(isSelected ? null : tab)}
      className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm ${
        scrolled 
          ? isSelected 
            ? "bg-[#6D559F]/10 text-[#6D559F]" 
            : "text-gray-600 hover:bg-gray-100 hover:text-[#1E1E1E]"
          : isSelected 
            ? "bg-white/15 text-white" 
            : "text-white hover:bg-white/10"
      }`}
    >
      <span>{children}</span>
      {hasDropdown && (
        <FiChevronDown
          className={`transition-transform duration-300 ${isSelected ? "rotate-180" : ""}`}
        />
      )}
    </button>
  );
}

function Content({ selected, dir, scrolled, TABS }: { selected: number; dir: "l" | "r" | null; scrolled: boolean; TABS: any[] }) {
  return (
    <motion.div
      id="overlay-content"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%_+_16px)] w-[420px] rounded-2xl border-2 p-6 shadow-2xl ${
        scrolled 
          ? "bg-white border-gray-200 shadow-xl shadow-black/10" 
          : "bg-[#1a1a1a]/95 backdrop-blur-xl border-white/20"
      }`}
    >
      <Bridge />
      <Nub selected={selected} scrolled={scrolled} />
      {TABS.map((t) => (
        <div className="overflow-hidden" key={t.id}>
          {selected === t.id && t.Component && (
            <motion.div
              initial={{ opacity: 0, x: dir === "l" ? 100 : dir === "r" ? -100 : 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <t.Component scrolled={scrolled} />
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  );
}

const Bridge = () => (
  <div className="absolute -top-[16px] left-0 right-0 h-[16px]" />
);

function Nub({ selected, scrolled }: { selected: number; scrolled: boolean }) {
  const [left, setLeft] = useState(0);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");
      if (!hoveredTab || !overlayContent) return;
      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft, width: contentWidth } = overlayContent.getBoundingClientRect();
      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;
      setLeft(tabCenter);
    }
  };

  if (typeof window !== 'undefined') {
    setTimeout(moveNub, 0);
  }

  return (
    <motion.span
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className={`absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border ${
        scrolled ? "border-gray-100 bg-white" : "border-white/10 bg-[#1a1a1a]/95"
      }`}
      style={{ clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)", left }}
    />
  );
}


// Hizmetler Dropdown Content
function HizmetlerContent({ scrolled }: { scrolled: boolean }) {
  const { t } = useLanguage();
  
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-1">
        {/* Sol Kolon - Estetik */}
        <div>
          <p className={`text-[10px] uppercase tracking-wider mb-3 ${scrolled ? "text-gray-400" : "text-white/40"}`}>
            {t('services.aestheticTreatments')}
          </p>
          <div className={`divide-y ${scrolled ? "divide-gray-100" : "divide-white/5"}`}>
            <Link 
              href="/gulus-tasarimi-maltepe" 
              className={`block py-2.5 text-sm transition-colors ${
                scrolled ? "text-gray-600 hover:text-[#6D559F]" : "text-white/70 hover:text-white"
              }`}
            >
              {t('services.smile')}
            </Link>
            <Link 
              href="/dis-beyazlatma" 
              className={`block py-2.5 text-sm transition-colors ${
                scrolled ? "text-gray-600 hover:text-[#6D559F]" : "text-white/70 hover:text-white"
              }`}
            >
              {t('services.teethWhitening')}
            </Link>
            <Link 
              href="/zirkonyum-dis-maltepe" 
              className={`block py-2.5 text-sm transition-colors ${
                scrolled ? "text-gray-600 hover:text-[#6D559F]" : "text-white/70 hover:text-white"
              }`}
            >
              {t('services.zirconium')}
            </Link>
          </div>
        </div>

        {/* Sağ Kolon - Tedaviler */}
        <div>
          <p className={`text-[10px] uppercase tracking-wider mb-3 ${scrolled ? "text-gray-400" : "text-white/40"}`}>
            {t('services.treatments')}
          </p>
          <div className={`divide-y ${scrolled ? "divide-gray-100" : "divide-white/5"}`}>
            <Link 
              href="/implant-tedavisi-maltepe" 
              className={`block py-2.5 text-sm transition-colors ${
                scrolled ? "text-gray-600 hover:text-[#6D559F]" : "text-white/70 hover:text-white"
              }`}
            >
              {t('services.implant')}
            </Link>
            <Link 
              href="/ortodonti" 
              className={`block py-2.5 text-sm transition-colors ${
                scrolled ? "text-gray-600 hover:text-[#6D559F]" : "text-white/70 hover:text-white"
              }`}
            >
              {t('services.orthodontics')}
            </Link>
            <Link 
              href="/cocuk-dis-hekimligi-maltepe" 
              className={`block py-2.5 text-sm transition-colors ${
                scrolled ? "text-gray-600 hover:text-[#6D559F]" : "text-white/70 hover:text-white"
              }`}
            >
              {t('services.pediatric')}
            </Link>
          </div>
        </div>
      </div>

      <div className={`mt-5 pt-4 border-t ${scrolled ? "border-gray-100" : "border-white/10"}`}>
        <Link 
          href="/hizmetler" 
          className={`flex items-center gap-2 text-sm font-medium transition-colors ${
            scrolled ? "text-[#6D559F] hover:text-[#5a4785]" : "text-[#A38BCB] hover:text-white"
          }`}
        >
          <span>{t('nav.allServices')}</span>
          <FiArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

// Hakkımızda Dropdown Content
function HakkimizdaContent({ scrolled }: { scrolled: boolean }) {
  const { t } = useLanguage();
  
  return (
    <div className={`divide-y ${scrolled ? "divide-gray-100" : "divide-white/5"}`}>
      <Link 
        href="/hakkimizda" 
        className={`flex items-center justify-between py-3 transition-colors group ${
          scrolled ? "text-gray-600 hover:text-[#6D559F]" : "text-white/70 hover:text-white"
        }`}
      >
        <div>
          <p className={`text-sm font-medium ${scrolled ? "text-[#1E1E1E] group-hover:text-[#6D559F]" : "text-white"}`}>
            {t('nav.aboutUs')}
          </p>
          <p className={`text-xs ${scrolled ? "text-gray-400" : "text-white/40"}`}>
            {t('nav.ourVision')}
          </p>
        </div>
        <FiArrowRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${scrolled ? "text-[#6D559F]" : "text-white"}`} />
      </Link>
      <Link 
        href="/ekibimiz" 
        className={`flex items-center justify-between py-3 transition-colors group ${
          scrolled ? "text-gray-600 hover:text-[#6D559F]" : "text-white/70 hover:text-white"
        }`}
      >
        <div>
          <p className={`text-sm font-medium ${scrolled ? "text-[#1E1E1E] group-hover:text-[#6D559F]" : "text-white"}`}>
            {t('nav.ourTeam')}
          </p>
          <p className={`text-xs ${scrolled ? "text-gray-400" : "text-white/40"}`}>
            {t('nav.experiencedDoctors')}
          </p>
        </div>
        <FiArrowRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${scrolled ? "text-[#6D559F]" : "text-white"}`} />
      </Link>

      <Link 
        href="/referanslar" 
        className={`flex items-center justify-between py-2.5 transition-colors group ${
          scrolled ? "text-gray-600 hover:text-[#6D559F]" : "text-white/70 hover:text-white"
        }`}
      >
        <div>
          <p className={`text-sm font-medium ${scrolled ? "text-[#1E1E1E] group-hover:text-[#6D559F]" : "text-white"}`}>
            {t('nav.testimonials')}
          </p>
          <p className={`text-xs ${scrolled ? "text-gray-400" : "text-white/40"}`}>
            {t('nav.patientExperiences')}
          </p>
        </div>
        <FiArrowRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${scrolled ? "text-[#6D559F]" : "text-white"}`} />
      </Link>
    </div>
  );
}

// İletişim Dropdown Content
function IletisimContent({ scrolled }: { scrolled: boolean }) {
  const { t } = useLanguage();
  
  return (
    <div>
      <div className={`divide-y ${scrolled ? "divide-gray-100" : "divide-white/5"}`}>
        {/* Telefon */}
        <a 
          href="tel:+905016390300" 
          className={`flex items-center gap-4 py-3 group ${scrolled ? "text-gray-600" : "text-white/70"}`}
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
            scrolled ? "bg-[#6D559F]/10" : "bg-white/10"
          }`}>
            <FiPhone className="w-4 h-4 text-[#6D559F]" />
          </div>
          <div>
            <p className={`text-xs ${scrolled ? "text-gray-400" : "text-white/40"}`}>{t('nav.phoneLabel')}</p>
            <p className={`text-sm font-medium ${scrolled ? "text-[#1E1E1E] group-hover:text-[#6D559F]" : "text-white"}`}>
              +90 501 639 03 00
            </p>
          </div>
        </a>

        {/* Adres */}
        <div className={`flex items-center gap-4 py-3 ${scrolled ? "text-gray-600" : "text-white/70"}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
            scrolled ? "bg-[#6D559F]/10" : "bg-white/10"
          }`}>
            <FiMapPin className="w-4 h-4 text-[#6D559F]" />
          </div>
          <div>
            <p className={`text-xs ${scrolled ? "text-gray-400" : "text-white/40"}`}>{t('nav.addressLabel')}</p>
            <p className={`text-sm font-medium ${scrolled ? "text-[#1E1E1E]" : "text-white"}`}>
              Maltepe, İstanbul
            </p>
          </div>
        </div>

        {/* Çalışma Saatleri */}
        <div className={`flex items-center gap-4 py-3 ${scrolled ? "text-gray-600" : "text-white/70"}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
            scrolled ? "bg-[#6D559F]/10" : "bg-white/10"
          }`}>
            <FiClock className="w-4 h-4 text-[#6D559F]" />
          </div>
          <div>
            <p className={`text-xs ${scrolled ? "text-gray-400" : "text-white/40"}`}>{t('nav.hoursLabel')}</p>
            <p className={`text-sm font-medium ${scrolled ? "text-[#1E1E1E]" : "text-white"}`}>
              {t('nav.monSat')}
            </p>
          </div>
        </div>
      </div>

      <div className={`mt-5 pt-4 border-t flex gap-3 ${scrolled ? "border-gray-100" : "border-white/10"}`}>
        <Link 
          href="/iletisim" 
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-medium transition-all ${
            scrolled 
              ? "bg-[#6D559F] text-white hover:bg-[#5a4785]" 
              : "bg-white/10 text-white hover:bg-white/15"
          }`}
        >
          {t('nav.contact')}
        </Link>
        <Link 
          href="/yol-tarifi" 
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-medium transition-all ${
            scrolled 
              ? "border border-gray-200 text-gray-600 hover:border-[#6D559F] hover:text-[#6D559F]" 
              : "border border-white/20 text-white hover:bg-white/10"
          }`}
        >
          {t('features.directions')}
        </Link>
      </div>
    </div>
  );
}

// TABS will be created inside the component to access t()
