"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

export default function EkibimizPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#6D559F]/10 flex items-center justify-center">
          <svg className="w-10 h-10 text-[#6D559F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h1 className="text-3xl font-heading font-medium text-[#1E1E1E] mb-3">Uzman Kadromuz</h1>
        <p className="text-gray-500 mb-8 font-body">Bu sayfa demo surecinde hazirlanmaktadir.</p>
        <Link href="/" className="inline-flex items-center gap-2 bg-[#6D559F] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5a4785] transition-colors">
          <FiArrowLeft className="w-5 h-5" />Ana Sayfaya Don
        </Link>
      </motion.div>
    </div>
  );
}
