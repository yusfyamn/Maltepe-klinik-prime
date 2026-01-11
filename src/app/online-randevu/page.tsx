"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiCalendar } from "react-icons/fi";

export default function OnlineRandevuPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#6D559F]/10 flex items-center justify-center">
          <FiCalendar className="w-10 h-10 text-[#6D559F]" />
        </div>
        <h1 className="text-3xl font-heading font-medium text-[#1E1E1E] mb-3">Online Randevu</h1>
        <p className="text-gray-500 mb-8 font-body">Bu sayfa demo surecinde hazirlanmaktadir.</p>
        <Link href="/" className="inline-flex items-center gap-2 bg-[#6D559F] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5a4785] transition-colors">
          <FiArrowLeft className="w-5 h-5" />Ana Sayfaya Don
        </Link>
      </motion.div>
    </div>
  );
}
