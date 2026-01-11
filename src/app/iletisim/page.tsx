"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#6D559F]/10 flex items-center justify-center">
          <FiPhone className="w-10 h-10 text-[#6D559F]" />
        </div>
        <h1 className="text-3xl font-heading font-medium text-[#1E1E1E] mb-3">Iletisim</h1>
        <p className="text-gray-500 mb-6 font-body">Bize ulasmanin en kolay yollari:</p>
        <div className="space-y-3 mb-8">
          <a href="tel:+905016390300" className="flex items-center justify-center gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
            <FiPhone className="w-5 h-5 text-[#6D559F]" />
            <span className="font-medium text-[#1E1E1E]">+90 501 639 03 00</span>
          </a>
          <a href="https://wa.me/905016390300" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] text-white rounded-xl p-4 hover:bg-[#20bd5a] transition-colors">
            <FaWhatsapp className="w-5 h-5" />
            <span className="font-medium">WhatsApp</span>
          </a>
          <a href="https://www.instagram.com/klinikprimemaltepe/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white rounded-xl p-4 hover:opacity-90 transition-opacity">
            <FaInstagram className="w-5 h-5" />
            <span className="font-medium">@klinikprimemaltepe</span>
          </a>
          <div className="flex items-center justify-center gap-3 bg-white rounded-xl p-4 shadow-sm">
            <FiMapPin className="w-5 h-5 text-[#6D559F]" />
            <span className="text-gray-600">Maltepe, Istanbul</span>
          </div>
        </div>
        <Link href="/" className="inline-flex items-center gap-2 text-[#6D559F] font-medium hover:underline">
          <FiArrowLeft className="w-5 h-5" />Ana Sayfaya Don
        </Link>
      </motion.div>
    </div>
  );
}
