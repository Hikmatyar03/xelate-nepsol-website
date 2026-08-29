"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

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
    <div className="divide-y" style={{ borderColor: "rgba(22,33,28,0.08)" }}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="faq-item">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-4 py-5 text-left group"
              aria-expanded={isOpen}
            >
              <span
                className="font-semibold text-base leading-snug transition-colors duration-200"
                style={{ color: isOpen ? accentColor : "var(--text-primary)" }}
              >
                {item.q}
              </span>
              <span
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm mt-0.5 transition-all duration-300 border"
                style={{
                  backgroundColor: isOpen ? accentColor : "rgba(255,255,255,0.8)",
                  borderColor: isOpen ? accentColor : "rgba(22,33,28,0.12)",
                  color: isOpen ? "white" : "var(--text-muted)",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                <Plus className="w-4 h-4" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p
                    className={`pb-5 text-sm leading-relaxed ${
                      item.isPlaceholder ? "italic opacity-60" : ""
                    }`}
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
