"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
  isPlaceholder?: boolean;
}

interface FaqAccordionProps {
  items: FaqItem[];
  accentColor?: string;
}

export default function FaqAccordion({
  items,
  accentColor = "var(--nepsol-green)",
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-stone-200/60 overflow-hidden rounded-2xl">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="transition-all duration-200"
            style={{
              backgroundColor: isOpen
                ? "rgba(255, 255, 255, 0.7)"
                : "var(--surface-glass)",
              borderLeft: isOpen
                ? `3px solid ${accentColor}`
                : "3px solid transparent",
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-6 text-left group"
              aria-expanded={isOpen}
            >
              <span
                className="font-display font-semibold text-base sm:text-lg leading-snug transition-colors duration-200 tracking-tight"
                style={{
                  color: isOpen ? accentColor : "var(--text-primary)",
                }}
              >
                {item.q}
              </span>
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 border border-stone-200/70 bg-white/70"
                style={{
                  color: isOpen ? accentColor : "var(--text-muted)",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-1">
                    <p
                      className={`text-sm sm:text-base leading-relaxed ${
                        item.isPlaceholder ? "italic text-stone-500" : ""
                      }`}
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.a}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
