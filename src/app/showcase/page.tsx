"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiArrowLeft, FiCheck } from "react-icons/fi";

function ColorCard({ color, name, hex, usage, border }: { color: string; name: string; hex: string; usage: string; border?: boolean }) {
  return (
    <div className="text-center">
      <div 
        className={`w-full aspect-square rounded-2xl mb-3 ${border ? 'border border-gray-200' : ''}`}
        style={{ backgroundColor: color }}
      />
      <p className="text-sm font-medium text-[#1E1E1E] mb-1">{name}</p>
      <p className="text-xs text-gray-400 mb-2">{hex}</p>
      <p className="text-xs text-gray-500 leading-relaxed">{usage}</p>
    </div>
  );
}

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Sticky Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-[#6D559F] transition-colors">
            <FiArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Ana Sayfa</span>
          </Link>
          <h1 className="font-heading text-lg font-medium text-[#1E1E1E]">Design System</h1>
          <div className="w-20" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-20">
        
        {/* Introduction */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-medium text-[#1E1E1E] mb-4">
            Klinik Prime Maltepe
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#6D559F] to-[#8B7BB5]">
              Design System
            </span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Premium dental klinik web sitesi için hazırlanmış kapsamlı tasarım sistemi. 
            Modern, şık ve kullanıcı dostu arayüz elementleri.
          </p>
        </motion.section>

        {/* Typography */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-medium text-[#1E1E1E] mb-3">Tipografi</h2>
            <p className="text-gray-600">
              Web sitesi iki ana font ailesi kullanmaktadır: <strong>SF Pro Display</strong> başlıklar için, 
              <strong> Satoshi</strong> ise metin içerikleri için tercih edilmiştir.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl p-8 border border-gray-100">
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-4">SF Pro Display - Başlıklar</p>
                <p className="text-sm text-gray-500 mb-6">Apple'ın sistem fontu. Modern, okunabilir ve profesyonel görünüm.</p>
              </div>
              <div className="space-y-6">
                <div>
                  <span className="text-xs text-gray-400 block mb-2">H1 - 48px / Bold</span>
                  <h1 className="text-h1 text-[#1E1E1E]">Premium Dental Care</h1>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block mb-2">H2 - 40px / Semibold</span>
                  <h2 className="text-h2 text-[#1E1E1E]">Uzman Kadromuz</h2>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block mb-2">H3 - 32px / Semibold</span>
                  <h3 className="text-h3 text-[#1E1E1E]">Hizmetlerimiz</h3>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block mb-2">H4 - 24px / Medium</span>
                  <h4 className="text-h4 text-[#1E1E1E]">İmplant Tedavisi</h4>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-4">Satoshi - İçerik Metinleri</p>
                <p className="text-sm text-gray-500 mb-6">Geometrik ve modern sans-serif. Uzun metinlerde mükemmel okunabilirlik.</p>
              </div>
              <div className="space-y-6">
                <div>
                  <span className="text-xs text-gray-400 block mb-2">Body Large - 18px / Regular</span>
                  <p className="text-body-lg text-gray-600">Modern dental klinik deneyimi için doğru adrestesiniz.</p>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block mb-2">Body - 16px / Regular</span>
                  <p className="text-body text-gray-600">Tüm dental ihtiyaçlarınız için yanınızdayız. Uzman kadromuz ve modern ekipmanlarımız ile hizmetinizdeyiz.</p>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block mb-2">Body Small - 14px / Regular</span>
                  <p className="text-body-sm text-gray-500">Randevu almak için bizi arayabilir veya online randevu formunu kullanabilirsiniz.</p>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block mb-2">Caption - 12px / Medium</span>
                  <p className="text-caption text-gray-400">© 2025 Klinik Prime Maltepe. Tüm hakları saklıdır.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Color Palette */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-medium text-[#1E1E1E] mb-3">Renk Paleti</h2>
            <p className="text-gray-600">
              Profesyonel ve güven veren mor tonları ana renk olarak kullanılmıştır. 
              Nötr griler ise içerik hiyerarşisini oluşturur.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 border border-gray-100">
            <div className="mb-10">
              <h3 className="text-xl font-heading font-medium text-[#1E1E1E] mb-4">Ana Renkler</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <ColorCard 
                  color="#6D559F" 
                  name="Primary" 
                  hex="#6D559F" 
                  usage="Ana butonlar, vurgular, linkler"
                />
                <ColorCard 
                  color="#5a4785" 
                  name="Primary Hover" 
                  hex="#5a4785" 
                  usage="Buton hover durumu"
                />
                <ColorCard 
                  color="#E9E6F2" 
                  name="Primary Light" 
                  hex="#E9E6F2" 
                  usage="Arka planlar, borderlar"
                  border
                />
                <ColorCard 
                  color="#F5F3F9" 
                  name="Primary Lightest" 
                  hex="#F5F3F9" 
                  usage="Card arka planları"
                  border
                />
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-heading font-medium text-[#1E1E1E] mb-4">Nötr Renkler</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <ColorCard 
                  color="#1E1E1E" 
                  name="Text Primary" 
                  hex="#1E1E1E" 
                  usage="Ana başlıklar ve metinler"
                />
                <ColorCard 
                  color="#6B6B6B" 
                  name="Text Secondary" 
                  hex="#6B6B6B" 
                  usage="Açıklama metinleri"
                />
                <ColorCard 
                  color="#FAFAFA" 
                  name="Background" 
                  hex="#FAFAFA" 
                  usage="Sayfa arka planı"
                  border
                />
                <ColorCard 
                  color="#FFFFFF" 
                  name="White" 
                  hex="#FFFFFF" 
                  usage="Kartlar, modaller"
                  border
                />
                <ColorCard 
                  color="#E5E5E5" 
                  name="Border" 
                  hex="#E5E5E5" 
                  usage="Ayırıcılar, çerçeveler"
                  border
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-heading font-medium text-[#1E1E1E] mb-4">Aksanlar & Durumlar</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <ColorCard 
                  color="#25D366" 
                  name="WhatsApp" 
                  hex="#25D366" 
                  usage="WhatsApp iletişim butonu"
                />
                <ColorCard 
                  color="#E1306C" 
                  name="Instagram" 
                  hex="#E1306C" 
                  usage="Sosyal medya bağlantıları"
                />
                <ColorCard 
                  color="#4CAF50" 
                  name="Success" 
                  hex="#4CAF50" 
                  usage="Başarı mesajları"
                />
                <ColorCard 
                  color="#E57373" 
                  name="Error" 
                  hex="#E57373" 
                  usage="Hata mesajları"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Buttons */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-medium text-[#1E1E1E] mb-3">Butonlar</h2>
            <p className="text-gray-600">
              Tüm butonlar rounded-full (tamamen yuvarlak) köşelere sahiptir. 
              Bu modern ve dost canlısı bir görünüm sağlar.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 border border-gray-100 space-y-8">
            <div>
              <h3 className="text-lg font-heading font-medium text-[#1E1E1E] mb-4">Primary Buttons</h3>
              <p className="text-sm text-gray-600 mb-6">Ana aksiyonlar için kullanılır (Randevu Al, İletişim, vb.)</p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#6D559F] text-white hover:bg-[#5a4785] rounded-full px-8 py-3">
                  Randevu Al
                </Button>
                <Button className="bg-[#6D559F] text-white hover:bg-[#5a4785] rounded-full px-8 py-3 shadow-lg shadow-[#6D559F]/30">
                  Shadow Efekti
                </Button>
                <Button className="bg-[#6D559F] text-white hover:bg-[#5a4785] rounded-full px-10 py-4 text-lg">
                  Large Button
                </Button>
                <Button disabled className="bg-gray-300 text-gray-500 rounded-full px-8 py-3 cursor-not-allowed">
                  Disabled
                </Button>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-lg font-heading font-medium text-[#1E1E1E] mb-4">Secondary Buttons</h3>
              <p className="text-sm text-gray-600 mb-6">İkincil aksiyonlar için kullanılır</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="border-2 border-[#6D559F] text-[#6D559F] hover:bg-[#6D559F]/5 rounded-full px-8 py-3">
                  Outline Primary
                </Button>
                <Button variant="outline" className="border-2 border-gray-300 text-gray-600 hover:bg-gray-50 rounded-full px-8 py-3">
                  Outline Gray
                </Button>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-lg font-heading font-medium text-[#1E1E1E] mb-4">Ghost & Link Buttons</h3>
              <p className="text-sm text-gray-600 mb-6">Minimal aksiyonlar ve navigasyon için</p>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="ghost" className="text-[#6D559F] hover:bg-[#6D559F]/5 rounded-full px-8 py-3">
                  Ghost Button
                </Button>
                <Button variant="link" className="text-[#6D559F] hover:text-[#5a4785] underline-offset-4">
                  Link Button
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1E1E1E] to-[#2E2E2E] rounded-2xl p-8">
              <h3 className="text-lg font-heading font-medium text-white mb-4">Karanlık Arka Plan</h3>
              <p className="text-sm text-white/70 mb-6">Dark mode veya koyu arka planlar için</p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-[#1E1E1E] hover:bg-white/90 rounded-full px-8 py-3">
                  White Button
                </Button>
                <Button className="bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm rounded-full px-8 py-3">
                  Glass Effect
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Cards */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-medium text-[#1E1E1E] mb-3">Kartlar & Container'lar</h2>
            <p className="text-gray-600">
              Farklı içerik tiplerini gruplamak için kullanılan cart bileşenleri. 
              Tümü yumuşak gölgeler ve geniş border radius değerleri ile tasarlanmıştır.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Service Card */}
            <div className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 rounded-2xl bg-[#6D559F]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[#6D559F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-medium text-[#1E1E1E] mb-3">Service Card</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Hizmet kartları için kullanılır. Hover efekti ile gölge artar.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#6D559F] font-medium">
                <span>Detaylı Bilgi</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Gradient Card */}
            <div className="bg-gradient-to-br from-[#6D559F] to-[#8B7BB5] rounded-[32px] p-8 text-white shadow-lg shadow-[#6D559F]/30">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                <FiCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-medium mb-3">Gradient Card</h3>
              <p className="text-sm text-white/90 leading-relaxed mb-4">
                Özel vurgular ve önemli bilgiler için gradient arka plan kullanılır.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">Feature</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">Premium</span>
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-[#F5F3F9] rounded-[32px] p-8 border-2 border-[#E9E6F2]">
              <h3 className="text-xl font-heading font-medium text-[#1E1E1E] mb-6">Info Card</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-[#E9E6F2]">
                  <span className="text-sm text-gray-600">Pazartesi - Cumartesi</span>
                  <span className="text-sm text-[#1E1E1E] font-medium">09:00 - 23:00</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-[#E9E6F2]">
                  <span className="text-sm text-gray-600">Pazar</span>
                  <span className="text-sm text-gray-400">Kapalı</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Telefon</span>
                  <span className="text-sm text-[#6D559F] font-medium">0501 639 03 00</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Border Radius & Spacing */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-medium text-[#1E1E1E] mb-3">Spacing & Border Radius</h2>
            <p className="text-gray-600">
              Tutarlı boşluklar ve köşe yuvarlakları tasarımda uyum sağlar.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 border border-gray-100">
            <h3 className="text-lg font-heading font-medium text-[#1E1E1E] mb-6">Border Radius Değerleri</h3>
            <div className="flex flex-wrap gap-8 items-end">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#6D559F] rounded-lg mb-3" />
                <span className="text-xs text-gray-500 block">rounded-lg</span>
                <span className="text-xs text-gray-400">8px</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#6D559F] rounded-xl mb-3" />
                <span className="text-xs text-gray-500 block">rounded-xl</span>
                <span className="text-xs text-gray-400">12px</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#6D559F] rounded-2xl mb-3" />
                <span className="text-xs text-gray-500 block">rounded-2xl</span>
                <span className="text-xs text-gray-400">16px</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#6D559F] rounded-3xl mb-3" />
                <span className="text-xs text-gray-500 block">rounded-3xl</span>
                <span className="text-xs text-gray-400">24px</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#6D559F] rounded-[32px] mb-3" />
                <span className="text-xs text-gray-500 block">[32px]</span>
                <span className="text-xs text-gray-400">Kartlar</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#6D559F] rounded-full mb-3" />
                <span className="text-xs text-gray-500 block">rounded-full</span>
                <span className="text-xs text-gray-400">Butonlar</span>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-lg font-heading font-medium text-[#1E1E1E] mb-4">Spacing Scale</h3>
              <p className="text-sm text-gray-600 mb-6">8px artışlarla ölçeklendirilmiş boşluk sistemi</p>
              <div className="space-y-3">
                {[
                  { size: "4px", class: "p-1", label: "Extra Small" },
                  { size: "8px", class: "p-2", label: "Small" },
                  { size: "16px", class: "p-4", label: "Medium" },
                  { size: "24px", class: "p-6", label: "Large" },
                  { size: "32px", class: "p-8", label: "Extra Large" },
                  { size: "48px", class: "p-12", label: "XXL" },
                ].map((item) => (
                  <div key={item.size} className="flex items-center gap-4">
                    <div className="w-24 text-sm text-gray-600">{item.label}</div>
                    <div className="w-16 text-xs text-gray-400">{item.size}</div>
                    <div className="flex-1 h-8 bg-[#6D559F] rounded" style={{ width: item.size }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Icons & Iconography */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-medium text-[#1E1E1E] mb-3">İkonlar</h2>
            <p className="text-gray-600">
              React Icons kütüphanesinden Feather Icons seti kullanılmaktadır. 
              Minimal ve modern çizgiler ile profesyonel görünüm sağlar.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "✓", name: "Check", usage: "Başarı, tamamlanmış" },
                { icon: "→", name: "Arrow", usage: "Yönlendirme, ileri" },
                { icon: "★", name: "Star", usage: "Favori, değerlendirme" },
                { icon: "♥", name: "Heart", usage: "Beğeni, favori" },
                { icon: "⚡", name: "Zap", usage: "Hızlı, premium" },
                { icon: "👤", name: "User", usage: "Profil, kişi" },
                { icon: "📞", name: "Phone", usage: "İletişim, arama" },
                { icon: "✉", name: "Mail", usage: "E-posta, mesaj" },
              ].map((item) => (
                <div key={item.name} className="text-center p-4 rounded-2xl hover:bg-[#F5F3F9] transition-colors">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#6D559F]/10 flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <p className="text-sm font-medium text-[#1E1E1E] mb-1">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.usage}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <div className="text-center pt-12 border-t border-gray-200">
          <p className="text-sm text-gray-400 mb-2">Klinik Prime Maltepe - Design System v1.0</p>
          <p className="text-xs text-gray-400">
            Next.js 15 • TypeScript • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </div>
  );
}
