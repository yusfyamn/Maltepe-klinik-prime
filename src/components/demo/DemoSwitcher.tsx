"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDemo } from "@/contexts/DemoContext";
import { DemoVariant, DEMO_LABELS } from "@/types";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const variants: DemoVariant[] = ["clinic-estate", "aesthetic-luxury", "medical-authority"];

export function DemoSwitcher() {
  const { variant, setVariant } = useDemo();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent-hover text-text p-4 rounded-2xl shadow-sm border border-border transition-all duration-300"
          aria-label="Demo varyasyonunu değiştir"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </motion.button>
      </SheetTrigger>
      
      <SheetContent side="right" className="w-96 bg-primary border-l border-border">
        <SheetHeader>
          <SheetTitle className="font-heading text-xl text-text">Demo Varyasyonu</SheetTitle>
        </SheetHeader>
        
        <div className="mt-8 space-y-4">
          <p className="font-body text-text-muted text-sm">
            3 farklı tasarım varyasyonu arasından seçim yapın. Her varyasyon farklı bir kullanıcı deneyimi sunar.
          </p>
          
          <div className="space-y-3">
            {variants.map((v) => (
              <button
                key={v}
                onClick={() => {
                  setVariant(v);
                  setIsOpen(false);
                }}
                className={`w-full p-4 rounded-2xl border text-left transition-all duration-300 ${
                  variant === v
                    ? "border-accent bg-accent-light"
                    : "border-border bg-background hover:border-accent"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading text-text">{DEMO_LABELS[v].title}</span>
                  {variant === v && (
                    <span className="text-xs font-body text-accent bg-accent/20 px-2 py-1 rounded-full">
                      Aktif
                    </span>
                  )}
                </div>
                <p className="font-body text-sm text-text-muted">
                  {DEMO_LABELS[v].description}
                </p>
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-border">
            <p className="font-body text-xs text-text-light">
              Seçiminiz tarayıcınızda saklanır ve sayfa yenilendiğinde korunur.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
