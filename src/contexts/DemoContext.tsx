"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { DemoVariant, ThemeConfig, DEMO_CONFIGS } from "@/types";

interface DemoContextType {
  variant: DemoVariant;
  config: ThemeConfig;
  setVariant: (variant: DemoVariant) => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

const STORAGE_KEY = "maltepe-dental-demo-variant";
const DEFAULT_VARIANT: DemoVariant = "clinic-estate";

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const [variant, setVariantState] = useState<DemoVariant>(DEFAULT_VARIANT);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && isValidVariant(stored)) {
        setVariantState(stored as DemoVariant);
      }
    } catch {
      // localStorage not available, use default
    }
    setIsHydrated(true);
  }, []);

  const setVariant = useCallback((newVariant: DemoVariant) => {
    setVariantState(newVariant);
    try {
      localStorage.setItem(STORAGE_KEY, newVariant);
    } catch {
      // localStorage not available
    }
  }, []);

  const config = DEMO_CONFIGS[variant];

  // Prevent hydration mismatch by not rendering until hydrated
  if (!isHydrated) {
    return (
      <DemoContext.Provider
        value={{
          variant: DEFAULT_VARIANT,
          config: DEMO_CONFIGS[DEFAULT_VARIANT],
          setVariant,
        }}
      >
        {children}
      </DemoContext.Provider>
    );
  }

  return (
    <DemoContext.Provider value={{ variant, config, setVariant }}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo(): DemoContextType {
  const context = useContext(DemoContext);
  if (context === undefined) {
    throw new Error("useDemo must be used within a DemoProvider");
  }
  return context;
}

function isValidVariant(value: string): value is DemoVariant {
  return ["clinic-estate", "aesthetic-luxury", "medical-authority", "phone-mockup"].includes(value);
}
