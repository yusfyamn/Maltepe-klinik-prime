"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr' | 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

// Translations
const translations: Record<Language, Record<string, string>> = {
  tr: {
    // Navbar
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.services': 'Hizmetler',
    'nav.doctors': 'Ekibimiz',
    'nav.contact': 'İletişim',
    'nav.appointment': 'Online Randevu',
    'nav.phone': '+90 501 639 03 00',
    'nav.location': 'Maltepe, İstanbul',
    'nav.hours': 'Pzt-Cmt: 09:00 - 23:00',
    'nav.appointmentBtn': 'Randevu Al',
    
    // Services Items
    'services.smile': 'Gülüş Tasarımı',
    'services.smileDesc': 'Dijital tasarım ile hayalinizdeki gülüşe kavuşun.',
    'services.implant': 'İmplant Tedavisi',
    'services.implantDesc': 'Eksik dişler için kalıcı ve doğal çözüm.',
    'services.zirconium': 'Zirkonyum Kaplama',
    'services.zirconiumDesc': 'Doğal görünümde estetik ve dayanıklı kaplamalar.',
    'services.pediatric': 'Çocuk Diş Hekimliği',
    'services.pediatricDesc': 'Çocuklar için korku içermeyen, eğlenceli tedaviler.',
    
    // Doctor Titles
    'doctor.dentist': 'Diş Hekimi',
    'doctor.specialist': 'Uzman Diş Hekimi',
    'doctor.general': 'Genel Diş Hekimliği',
    'doctor.aesthetic': 'Estetik Diş Hekimliği',
    'doctor.implantology': 'İmplantoloji & Cerrahi',
    
    // Hero
    'hero.tag': 'Premium Diş Kliniği',
    'hero.title1': 'Estetik Gülüşler,',
    'hero.title2': 'Bilimsel Yaklaşım',
    'hero.subtitle': 'Modern diş hekimliğinde güven ve kalite.',
    'hero.cta1': 'Randevu Oluştur',
    'hero.cta2': 'Hizmetleri İncele',
    'hero.scroll': 'Kaydır',
    
    // BeforeAfter
    'beforeafter.tag': 'Sonuçlar',
    'beforeafter.title1': 'Gerçek',
    'beforeafter.title2': 'dönüşümler',
    'beforeafter.subtitle': 'Hastalarımızın tedavi öncesi ve sonrası görüntüleri. Her gülüş bir başyapıt.',
    'beforeafter.before': 'Önce',
    'beforeafter.after': 'Sonra',
    
    // Testimonials
    'testimonials.google': 'Google Yorumları',
    'testimonials.title': 'Hastalarımız Ne Diyor?',
    
    // Doctors
    'doctors.title': 'Hekimlerimiz',
    'doctors.subtitle': 'Alanında uzman diş hekimlerimiz ile güvenle tedavi olun.',
    
    // Services
    'services.title1': 'Yeni bir Gülüş,',
    'services.title2': 'Yeni bir Deneyim',
    'services.allservices': 'Tüm Hizmetler',
    
    // Features/Map
    'features.modern': 'Modern Klinik',
    'features.title': 'Klinik Prime Maltepe',
    'features.description': 'Son teknoloji ekipmanlar ve steril ortamda, uzman kadromuzla hizmetinizdeyiz. Dijital diş hekimliği cihazlarımız sayesinde hassas teşhis ve hızlı tedavi sağlıyoruz.',
    'features.premium': 'Premium Klinik',
    'features.comfort': 'Maltepe\'nin en modern diş kliniğinde konforlu ortamda tedavi olun.',
    'features.tech': 'İleri Teknoloji',
    'features.digital': 'Dijital Diş Hekimliği',
    'features.diagnosis': 'Dijital röntgen, intraoral kamera ve 3D görüntüleme sistemleri ile hassas teşhis.',
    'features.fast': 'Hızlı Tedavi',
    'features.fastdesc': 'Modern cihazlarımız sayesinde tedavi sürenizi minimuma indiriyoruz.',
    'features.location': 'Kolay Ulaşım',
    'features.locationdesc': 'Metro ve minibüs duraklarına yürüme mesafesinde konumlanmış klinik.',
    'features.directions': 'Yol Tarifi',
    
    // Footer
    'footer.about': 'Hakkımızda',
    'footer.services': 'Hizmetlerimiz',
    'footer.contact': 'İletişim',
    'footer.hours': 'Çalışma Saatleri',
    'footer.weekdays': 'Hafta İçi: 09:00 - 19:00',
    'footer.saturday': 'Cumartesi: 09:00 - 17:00',
    'footer.sunday': 'Pazar: Kapalı',
    'footer.clinic': 'Klinik Prime Maltepe',
    'footer.tagline': 'Güvenilir Diş Tedavisi',
    'footer.address': 'Bağlarbaşı Mh. Bağdat Cd. No: 398, Maltepe/İstanbul',
    'footer.ourClinic': 'Kliniğimiz',
    'footer.ourDoctors': 'Hekimlerimiz',
    'footer.gallery': 'Galeri',
    'footer.smileDesign': 'Gülüş Tasarımı',
    'footer.implant': 'İmplant',
    'footer.zirconium': 'Zirkonyum',
    'footer.pediatric': 'Pedodonti',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.kvkk': 'KVKK',
    'footer.cookie': 'Çerez Politikası',
    'footer.rights': '© 2025 Klinik Prime Maltepe. Tüm hakları saklıdır.',
    
    // Navbar Menu
    'nav.menu': 'Menu',
    'nav.ourClinic': 'Kliniğimiz',
    'nav.ourTeam': 'Uzman Kadromuz',
    'nav.testimonials': 'Hasta Yorumları',
    'nav.blog': 'Blog',
    'nav.aesthetic': 'Estetik Tedaviler',
    'nav.treatments': 'Tedaviler',
    'nav.allServices': 'Tüm Hizmetler',
    'nav.aboutUs': 'Hakkımızda',
    'nav.ourVision': 'Kliniğimiz ve vizyonumuz',
    'nav.experiencedDoctors': 'Deneyimli diş hekimlerimiz',
    'nav.patientExperiences': 'Mutlu hastalarımızın deneyimleri',
    'nav.workingHours': 'Çalışma Saatleri',
    'nav.monSat': 'Pzt-Cmt: 09:00 - 23:00',
    'nav.closeMenu': 'Menüyü Kapat',
    'nav.phoneLabel': 'Telefon',
    'nav.addressLabel': 'Adres',
    'nav.hoursLabel': 'Çalışma Saatleri',
    
    // Review dates
    'review.monthAgo': 'bir ay önce',
    'review.2monthsAgo': '2 ay önce',
    'review.3weeksAgo': '3 hafta önce',
    'review.4weeksAgo': '4 hafta önce',
    
    // Review texts
    'review.ahmet': 'Tedavi süreci mükemmel yürütüldü. Hizmet anlayışınız ve hekimlik bilginiz harika.',
    'review.turgay': 'Alp Bey\'in başarısı sayesinde tekrar geldim. Çalışanlar güler yüzlü ve yardımcı.',
    'review.bestgk': 'Alp bey işinin uzmanı, her işlemi anlatıyor. Kesinlikle tavsiye ederim.',
    'review.recep': 'Çalışanlar çok iyi karşıladı. Hiç ağrı hissetmedim, çok memnun kaldım.',
    'review.omer': 'Alp hocanın ilgisi mükemmel. Artık bizim diş hekimimiz.',
    'review.engin': 'Kalite, temizlik, güler yüz. Profesyonel kadro, kesinlikle tavsiye ediyorum.',
    
    // WhatsApp
    'whatsapp.message': 'Merhaba, randevu almak istiyorum.',
    'whatsapp.writeNow': 'Hemen yazın',
    
    // Hero tags
    'hero.maltepetag': 'Maltepe, İstanbul',
    'hero.esthetictag': 'Estetik',
    'hero.implanttag': 'İmplant',
    'hero.zirconiumtag': 'Zirkonyum',
    
    // Common
    'common.backHome': 'Ana Sayfaya Dön',
    'common.pageNotFound': 'Sayfa Bulunamadı',
    'common.pageNotFoundDesc': 'Aradığınız sayfa mevcut değil veya taşınmış olabilir.',
    'common.underConstruction': 'Bu sayfa demo sürecinde hazırlanmaktadır.',
    
    // Services dropdown categories
    'services.aestheticTreatments': 'Estetik Tedaviler',
    'services.treatments': 'Tedaviler',
    'services.teethWhitening': 'Diş Beyazlatma',
    'services.orthodontics': 'Ortodonti',
    
    // Phone mockup variant
    'phoneMockup.title1': 'Gülüşünüzü',
    'phoneMockup.title2': 'Dönüştürüyoruz',
    'phoneMockup.subtitle': 'Kaydırın ve farkı görün! Estetik diş tedavilerimizle hayalinizdeki gülüşe kavuşun.',
    'phoneMockup.viewReferences': 'Referansları İncele',
    
    // CTA Section
    'cta.title1': 'Gülüşünüzü değiştirmeye',
    'cta.title2': 'hazır mısınız?',
    'cta.subtitle': 'Ücretsiz ön görüşme için hemen randevu alın. Uzman kadromuz sizinle tanışmak için sabırsızlanıyor.',
    'cta.locationLabel': 'Konum',
    'cta.hoursLabel': 'Çalışma Saatleri',
    'cta.phoneLabel': 'Telefon',
    'cta.formTitle': 'Randevu Formu',
    'cta.nameLabel': 'Ad Soyad',
    'cta.namePlaceholder': 'Adınız ve soyadınız',
    'cta.phoneInputLabel': 'Telefon',
    'cta.phonePlaceholder': '05XX XXX XX XX',
    'cta.serviceLabel': 'Hizmet',
    'cta.servicePlaceholder': 'Hizmet seçin',
    'cta.serviceSmile': 'Gülüş Tasarımı',
    'cta.serviceImplant': 'İmplant Tedavisi',
    'cta.serviceZirconium': 'Zirkonyum Kaplama',
    'cta.servicePediatric': 'Çocuk Diş Hekimliği',
    'cta.serviceOther': 'Diğer',
    'cta.messageLabel': 'Mesajınız (Opsiyonel)',
    'cta.messagePlaceholder': 'Eklemek istediğiniz notlar...',
    'cta.submitButton': 'Randevu Talebi Gönder',
    'cta.privacyNote': 'Bilgileriniz gizli tutulacaktır.',
    'cta.successMessage': 'Randevu talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.',
  },
  
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.doctors': 'Our Team',
    'nav.contact': 'Contact',
    'nav.appointment': 'Online Appointment',
    'nav.phone': '+90 501 639 03 00',
    'nav.location': 'Maltepe, Istanbul',
    'nav.hours': 'Mon-Sat: 09:00 - 23:00',
    'nav.appointmentBtn': 'Book Appointment',
    
    // Services Items
    'services.smile': 'Smile Design',
    'services.smileDesc': 'Achieve your dream smile with digital design.',
    'services.implant': 'Implant Treatment',
    'services.implantDesc': 'Permanent and natural solution for missing teeth.',
    'services.zirconium': 'Zirconium Crowns',
    'services.zirconiumDesc': 'Aesthetic and durable natural-looking crowns.',
    'services.pediatric': 'Pediatric Dentistry',
    'services.pediatricDesc': 'Fun, fear-free treatments for children.',
    
    // Doctor Titles
    'doctor.dentist': 'Dentist',
    'doctor.specialist': 'Specialist Dentist',
    'doctor.general': 'General Dentistry',
    'doctor.aesthetic': 'Aesthetic Dentistry',
    'doctor.implantology': 'Implantology & Surgery',
    
    // Hero
    'hero.tag': 'Premium Dental Clinic',
    'hero.title1': 'Aesthetic Smiles,',
    'hero.title2': 'Scientific Approach',
    'hero.subtitle': 'Trust and quality in modern dentistry.',
    'hero.cta1': 'Make Appointment',
    'hero.cta2': 'View Services',
    'hero.scroll': 'Scroll',
    
    // BeforeAfter
    'beforeafter.tag': 'Results',
    'beforeafter.title1': 'Real',
    'beforeafter.title2': 'transformations',
    'beforeafter.subtitle': 'Before and after images of our patients. Every smile is a masterpiece.',
    'beforeafter.before': 'Before',
    'beforeafter.after': 'After',
    
    // Testimonials
    'testimonials.google': 'Google Reviews',
    'testimonials.title': 'What Our Patients Say?',
    
    // Doctors
    'doctors.title': 'Our Doctors',
    'doctors.subtitle': 'Trust our expert dentists for your treatment.',
    
    // Services
    'services.title1': 'A New Smile,',
    'services.title2': 'A New Experience',
    'services.allservices': 'All Services',
    
    // Features/Map
    'features.modern': 'Modern Clinic',
    'features.title': 'Klinik Prime Maltepe',
    'features.description': 'We serve you with state-of-the-art equipment and sterile environment.',
    'features.premium': 'Premium Clinic',
    'features.comfort': 'Get treatment in a comfortable environment at Maltepe\'s most modern dental clinic.',
    'features.tech': 'Advanced Technology',
    'features.digital': 'Digital Dentistry',
    'features.diagnosis': 'Precise diagnosis with digital x-ray, intraoral camera and 3D imaging systems.',
    'features.fast': 'Fast Treatment',
    'features.fastdesc': 'We minimize your treatment time with our modern devices.',
    'features.location': 'Easy Access',
    'features.locationdesc': 'Walking distance to metro and minibus stops.',
    'features.directions': 'Get Directions',
    
    // Footer
    'footer.about': 'About Us',
    'footer.services': 'Our Services',
    'footer.contact': 'Contact',
    'footer.hours': 'Working Hours',
    'footer.weekdays': 'Weekdays: 09:00 - 19:00',
    'footer.saturday': 'Saturday: 09:00 - 17:00',
    'footer.sunday': 'Sunday: Closed',
    'footer.clinic': 'Klinik Prime Maltepe',
    'footer.tagline': 'Trusted Dental Treatment',
    'footer.address': 'Bağlarbaşı Mh. Bağdat Cd. No: 398, Maltepe/Istanbul',
    'footer.ourClinic': 'Our Clinic',
    'footer.ourDoctors': 'Our Doctors',
    'footer.gallery': 'Gallery',
    'footer.smileDesign': 'Smile Design',
    'footer.implant': 'Implant',
    'footer.zirconium': 'Zirconium',
    'footer.pediatric': 'Pediatrics',
    'footer.privacy': 'Privacy Policy',
    'footer.kvkk': 'GDPR',
    'footer.cookie': 'Cookie Policy',
    'footer.rights': '© 2025 Klinik Prime Maltepe. All rights reserved.',
    
    // Navbar Menu
    'nav.menu': 'Menu',
    'nav.ourClinic': 'Our Clinic',
    'nav.ourTeam': 'Expert Team',
    'nav.testimonials': 'Patient Reviews',
    'nav.blog': 'Blog',
    'nav.aesthetic': 'Aesthetic Treatments',
    'nav.treatments': 'Treatments',
    'nav.allServices': 'All Services',
    'nav.aboutUs': 'About Us',
    'nav.ourVision': 'Our clinic and vision',
    'nav.experiencedDoctors': 'Experienced dentists',
    'nav.patientExperiences': 'Happy patient experiences',
    'nav.workingHours': 'Working Hours',
    'nav.monSat': 'Mon-Sat: 09:00 - 23:00',
    'nav.closeMenu': 'Close Menu',
    'nav.phoneLabel': 'Phone',
    'nav.addressLabel': 'Address',
    'nav.hoursLabel': 'Working Hours',
    
    // Review dates
    'review.monthAgo': 'a month ago',
    'review.2monthsAgo': '2 months ago',
    'review.3weeksAgo': '3 weeks ago',
    'review.4weeksAgo': '4 weeks ago',
    
    // Review texts
    'review.ahmet': 'The treatment process was excellent. Your service approach and medical knowledge are great.',
    'review.turgay': 'I came back thanks to Dr. Alp\'s success. Staff are friendly and helpful.',
    'review.bestgk': 'Dr. Alp is an expert, he explains every procedure. I definitely recommend.',
    'review.recep': 'The staff welcomed me very well. I felt no pain, very satisfied.',
    'review.omer': 'Dr. Alp\'s care is excellent. Now he is our dentist.',
    'review.engin': 'Quality, cleanliness, friendly face. Professional staff, I definitely recommend.',
    
    // WhatsApp
    'whatsapp.message': 'Hello, I would like to make an appointment.',
    'whatsapp.writeNow': 'Write Now',
    
    // Hero tags
    'hero.maltepetag': 'Maltepe, Istanbul',
    'hero.esthetictag': 'Aesthetic',
    'hero.implanttag': 'Implant',
    'hero.zirconiumtag': 'Zirconium',
    
    // Common
    'common.backHome': 'Back to Home',
    'common.pageNotFound': 'Page Not Found',
    'common.pageNotFoundDesc': 'The page you are looking for does not exist or may have been moved.',
    'common.underConstruction': 'This page is under construction during demo process.',
    
    // Services dropdown categories
    'services.aestheticTreatments': 'Aesthetic Treatments',
    'services.treatments': 'Treatments',
    'services.teethWhitening': 'Teeth Whitening',
    'services.orthodontics': 'Orthodontics',
    
    // Phone mockup variant
    'phoneMockup.title1': 'Transform',
    'phoneMockup.title2': 'Your Smile',
    'phoneMockup.subtitle': 'Swipe and see the difference! Achieve your dream smile with our aesthetic dental treatments.',
    'phoneMockup.viewReferences': 'View References',
    
    // CTA Section
    'cta.title1': 'Ready to transform',
    'cta.title2': 'your smile?',
    'cta.subtitle': 'Book a free consultation now. Our expert team is eager to meet you.',
    'cta.locationLabel': 'Location',
    'cta.hoursLabel': 'Working Hours',
    'cta.phoneLabel': 'Phone',
    'cta.formTitle': 'Appointment Form',
    'cta.nameLabel': 'Full Name',
    'cta.namePlaceholder': 'Your first and last name',
    'cta.phoneInputLabel': 'Phone',
    'cta.phonePlaceholder': '05XX XXX XX XX',
    'cta.serviceLabel': 'Service',
    'cta.servicePlaceholder': 'Select service',
    'cta.serviceSmile': 'Smile Design',
    'cta.serviceImplant': 'Implant Treatment',
    'cta.serviceZirconium': 'Zirconium Crowns',
    'cta.servicePediatric': 'Pediatric Dentistry',
    'cta.serviceOther': 'Other',
    'cta.messageLabel': 'Your Message (Optional)',
    'cta.messagePlaceholder': 'Notes you want to add...',
    'cta.submitButton': 'Submit Appointment Request',
    'cta.privacyNote': 'Your information will be kept confidential.',
    'cta.successMessage': 'Your appointment request has been received. We will contact you as soon as possible.',
  },
  
  de: {
    // Navbar
    'nav.home': 'Startseite',
    'nav.about': 'Über Uns',
    'nav.services': 'Dienstleistungen',
    'nav.doctors': 'Unser Team',
    'nav.contact': 'Kontakt',
    'nav.appointment': 'Online Termin',
    'nav.phone': '+90 501 639 03 00',
    'nav.location': 'Maltepe, Istanbul',
    'nav.hours': 'Mo-Sa: 09:00 - 23:00',
    'nav.appointmentBtn': 'Termin Buchen',
    
    // Services Items
    'services.smile': 'Lächeln Design',
    'services.smileDesc': 'Erreichen Sie Ihr Traumlächeln mit digitalem Design.',
    'services.implant': 'Implantatbehandlung',
    'services.implantDesc': 'Permanente und natürliche Lösung für fehlende Zähne.',
    'services.zirconium': 'Zirkonkronen',
    'services.zirconiumDesc': 'Ästhetische und langlebige natürlich aussehende Kronen.',
    'services.pediatric': 'Kinderzahnheilkunde',
    'services.pediatricDesc': 'Spaßige, angstfreie Behandlungen für Kinder.',
    
    // Doctor Titles
    'doctor.dentist': 'Zahnarzt',
    'doctor.specialist': 'Fachzahnarzt',
    'doctor.general': 'Allgemeine Zahnheilkunde',
    'doctor.aesthetic': 'Ästhetische Zahnheilkunde',
    'doctor.implantology': 'Implantologie & Chirurgie',
    
    // Hero
    'hero.tag': 'Premium Zahnklinik',
    'hero.title1': 'Ästhetisches Lächeln,',
    'hero.title2': 'Wissenschaftlicher Ansatz',
    'hero.subtitle': 'Vertrauen und Qualität in der modernen Zahnmedizin.',
    'hero.cta1': 'Termin Vereinbaren',
    'hero.cta2': 'Dienstleistungen',
    'hero.scroll': 'Scrollen',
    
    // BeforeAfter
    'beforeafter.tag': 'Ergebnisse',
    'beforeafter.title1': 'Echte',
    'beforeafter.title2': 'Verwandlungen',
    'beforeafter.subtitle': 'Vorher-Nachher-Bilder unserer Patienten. Jedes Lächeln ist ein Meisterwerk.',
    'beforeafter.before': 'Vorher',
    'beforeafter.after': 'Nachher',
    
    // Testimonials
    'testimonials.google': 'Google Bewertungen',
    'testimonials.title': 'Was Unsere Patienten Sagen?',
    
    // Doctors
    'doctors.title': 'Unsere Ärzte',
    'doctors.subtitle': 'Vertrauen Sie unseren Fachzahnärzten für Ihre Behandlung.',
    
    // Services
    'services.title1': 'Ein Neues Lächeln,',
    'services.title2': 'Eine Neue Erfahrung',
    'services.allservices': 'Alle Dienstleistungen',
    
    // Features/Map
    'features.modern': 'Moderne Klinik',
    'features.title': 'Klinik Prime Maltepe',
    'features.description': 'Wir bedienen Sie mit modernster Ausstattung und steriler Umgebung.',
    'features.premium': 'Premium Klinik',
    'features.comfort': 'Lassen Sie sich in angenehmer Atmosphäre in Maltepes modernster Zahnklinik behandeln.',
    'features.tech': 'Fortgeschrittene Technologie',
    'features.digital': 'Digitale Zahnmedizin',
    'features.diagnosis': 'Präzise Diagnose mit digitalem Röntgen, Intraoralkamera und 3D-Bildgebungssystemen.',
    'features.fast': 'Schnelle Behandlung',
    'features.fastdesc': 'Wir minimieren Ihre Behandlungszeit mit unseren modernen Geräten.',
    'features.location': 'Einfacher Zugang',
    'features.locationdesc': 'Fußläufig zu Metro- und Minibushaltestellen.',
    'features.directions': 'Wegbeschreibung',
    
    // Footer
    'footer.about': 'Über Uns',
    'footer.services': 'Unsere Dienstleistungen',
    'footer.contact': 'Kontakt',
    'footer.hours': 'Öffnungszeiten',
    'footer.weekdays': 'Wochentags: 09:00 - 19:00',
    'footer.saturday': 'Samstag: 09:00 - 17:00',
    'footer.sunday': 'Sonntag: Geschlossen',
    'footer.clinic': 'Klinik Prime Maltepe',
    'footer.tagline': 'Vertrauenswürdige Zahnbehandlung',
    'footer.address': 'Bağlarbaşı Mh. Bağdat Cd. No: 398, Maltepe/Istanbul',
    'footer.ourClinic': 'Unsere Klinik',
    'footer.ourDoctors': 'Unsere Ärzte',
    'footer.gallery': 'Galerie',
    'footer.smileDesign': 'Lächeln Design',
    'footer.implant': 'Implantat',
    'footer.zirconium': 'Zirkon',
    'footer.pediatric': 'Kinderzahnmedizin',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.kvkk': 'DSGVO',
    'footer.cookie': 'Cookie-Richtlinie',
    'footer.rights': '© 2025 Klinik Prime Maltepe. Alle Rechte vorbehalten.',
    
    // Navbar Menu
    'nav.menu': 'Menü',
    'nav.ourClinic': 'Unsere Klinik',
    'nav.ourTeam': 'Expertenteam',
    'nav.testimonials': 'Patientenbewertungen',
    'nav.blog': 'Blog',
    'nav.aesthetic': 'Ästhetische Behandlungen',
    'nav.treatments': 'Behandlungen',
    'nav.allServices': 'Alle Dienstleistungen',
    'nav.aboutUs': 'Über Uns',
    'nav.ourVision': 'Unsere Klinik und Vision',
    'nav.experiencedDoctors': 'Erfahrene Zahnärzte',
    'nav.patientExperiences': 'Glückliche Patientenerfahrungen',
    'nav.workingHours': 'Öffnungszeiten',
    'nav.monSat': 'Mo-Sa: 09:00 - 23:00',
    'nav.closeMenu': 'Menü Schließen',
    'nav.phoneLabel': 'Telefon',
    'nav.addressLabel': 'Adresse',
    'nav.hoursLabel': 'Öffnungszeiten',
    
    // Review dates
    'review.monthAgo': 'vor einem Monat',
    'review.2monthsAgo': 'vor 2 Monaten',
    'review.3weeksAgo': 'vor 3 Wochen',
    'review.4weeksAgo': 'vor 4 Wochen',
    
    // Review texts
    'review.ahmet': 'Der Behandlungsprozess war hervorragend. Ihr Service und Ihr medizinisches Wissen sind großartig.',
    'review.turgay': 'Ich bin dank Dr. Alps Erfolg zurückgekommen. Das Personal ist freundlich und hilfsbereit.',
    'review.bestgk': 'Dr. Alp ist ein Experte, er erklärt jede Prozedur. Ich empfehle ihn auf jeden Fall.',
    'review.recep': 'Das Personal hat mich sehr gut empfangen. Ich hatte keine Schmerzen, sehr zufrieden.',
    'review.omer': 'Dr. Alps Fürsorge ist ausgezeichnet. Jetzt ist er unser Zahnarzt.',
    'review.engin': 'Qualität, Sauberkeit, freundliches Gesicht. Professionelles Personal, ich empfehle es auf jeden Fall.',
    
    // WhatsApp
    'whatsapp.message': 'Hallo, ich möchte einen Termin vereinbaren.',
    'whatsapp.writeNow': 'Jetzt Schreiben',
    
    // Hero tags
    'hero.maltepetag': 'Maltepe, Istanbul',
    'hero.esthetictag': 'Ästhetik',
    'hero.implanttag': 'Implantat',
    'hero.zirconiumtag': 'Zirkon',
    
    // Common
    'common.backHome': 'Zurück zur Startseite',
    'common.pageNotFound': 'Seite Nicht Gefunden',
    'common.pageNotFoundDesc': 'Die gesuchte Seite existiert nicht oder wurde möglicherweise verschoben.',
    'common.underConstruction': 'Diese Seite befindet sich im Demo-Prozess im Aufbau.',
    
    // Services dropdown categories
    'services.aestheticTreatments': 'Ästhetische Behandlungen',
    'services.treatments': 'Behandlungen',
    'services.teethWhitening': 'Zahnaufhellung',
    'services.orthodontics': 'Kieferorthopädie',
    
    // Phone mockup variant
    'phoneMockup.title1': 'Verwandeln Sie',
    'phoneMockup.title2': 'Ihr Lächeln',
    'phoneMockup.subtitle': 'Wischen Sie und sehen Sie den Unterschied! Erreichen Sie Ihr Traumlächeln mit unseren ästhetischen Zahnbehandlungen.',
    'phoneMockup.viewReferences': 'Referenzen Ansehen',
    
    // CTA Section
    'cta.title1': 'Bereit, Ihr Lächeln',
    'cta.title2': 'zu verwandeln?',
    'cta.subtitle': 'Buchen Sie jetzt eine kostenlose Beratung. Unser Expertenteam freut sich darauf, Sie kennenzulernen.',
    'cta.locationLabel': 'Standort',
    'cta.hoursLabel': 'Öffnungszeiten',
    'cta.phoneLabel': 'Telefon',
    'cta.formTitle': 'Terminformular',
    'cta.nameLabel': 'Vollständiger Name',
    'cta.namePlaceholder': 'Ihr Vor- und Nachname',
    'cta.phoneInputLabel': 'Telefon',
    'cta.phonePlaceholder': '05XX XXX XX XX',
    'cta.serviceLabel': 'Dienstleistung',
    'cta.servicePlaceholder': 'Dienstleistung auswählen',
    'cta.serviceSmile': 'Lächeln Design',
    'cta.serviceImplant': 'Implantatbehandlung',
    'cta.serviceZirconium': 'Zirkonkronen',
    'cta.servicePediatric': 'Kinderzahnheilkunde',
    'cta.serviceOther': 'Andere',
    'cta.messageLabel': 'Ihre Nachricht (Optional)',
    'cta.messagePlaceholder': 'Notizen, die Sie hinzufügen möchten...',
    'cta.submitButton': 'Terminanfrage Senden',
    'cta.privacyNote': 'Ihre Daten werden vertraulich behandelt.',
    'cta.successMessage': 'Ihre Terminanfrage wurde empfangen. Wir werden uns so schnell wie möglich bei Ihnen melden.',
  },
};
