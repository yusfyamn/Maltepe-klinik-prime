"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

export default function HizmetlerPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#6D559F]/10 flex items-center justify-center">
          <svg className="w-10 h-10 text-[#6D559F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        <h1 className="text-3xl font-heading font-medium text-[#1E1E1E] mb-3">Hizmetlerimiz</h1>
        <p className="text-gray-500 mb-8 font-body">Bu sayfa demo surecinde hazirlanmaktadir.</p>
        <Link href="/" className="inline-flex items-center gap-2 bg-[#6D559F] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5a4785] transition-colors">
          <FiArrowLeft className="w-5 h-5" />Ana Sayfaya Don
        </Link>
      </motion.div>
    </div>
  );
}
