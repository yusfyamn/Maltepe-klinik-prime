"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

export default function CocukDisHekimligiPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#6D559F]/10 flex items-center justify-center">
          <svg className="w-10 h-10 text-[#6D559F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h1 className="text-3xl font-heading font-medium text-[#1E1E1E] mb-3">Cocuk Dis Hekimligi</h1>
        <p className="text-gray-500 mb-8 font-body">Bu sayfa demo surecinde hazirlanmaktadir.</p>
        <Link href="/" className="inline-flex items-center gap-2 bg-[#6D559F] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5a4785] transition-colors">
          <FiArrowLeft className="w-5 h-5" />Ana Sayfaya Don
        </Link>
      </motion.div>
    </div>
  );
}
