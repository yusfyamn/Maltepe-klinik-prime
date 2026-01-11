"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl font-heading font-bold text-[#6D559F] mb-4">404</h1>
          <h2 className="text-2xl font-heading text-[#1E1E1E] mb-4">Sayfa Bulunamadı</h2>
          <p className="text-gray-500 mb-8 font-body">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-[#6D559F] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5a4785] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Ana Sayfaya Dön
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
