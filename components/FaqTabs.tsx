"use client";

import { useState } from "react";
import FaqAccordion from "@/components/FaqAccordion";

const xelateFaqs = [
  {
    q: "What is Xelate?",
    a: "Xelate is an advanced kidney health support supplement, enriched with essential nutrients to support kidney health and general well-being.",
  },
  {
    q: "How many capsules are in a bottle?",
    a: "Each bottle contains 30 capsules — a full month's supply.",
  },
  {
    q: "Who should take Xelate?",
    a: "[Placeholder — needs physician / client input before publishing]",
    isPlaceholder: true,
  },
  {
    q: "Are there any side effects?",
    a: "[Placeholder — needs physician / client input before publishing]",
    isPlaceholder: true,
  },
];

const nepsolFaqs = [
  {
    q: "What is Nepsol used for?",
    a: "Nepsol is a sachet-based formula effective in relief from kidney stones, including renal tubular acidosis (RTA) with calcium stones, hypocitraturic calcium oxalate nephrolithiasis, and uric acid lithiasis with or without calcium stones.",
  },
  {
    q: "How do I take Nepsol?",
    a: "Mix the contents of one sachet in a glass of water and use immediately. Use one to two sachets daily, or as directed by your physician.",
  },
  {
    q: "Can I store a mixed sachet for later?",
    a: "No — once mixed, use immediately. Do not store an open sachet.",
  },
  {
    q: "Does Nepsol help with UTIs?",
    a: "Nepsol is formulated to provide relief from UTI symptoms, reduce the risk of recurrent UTIs, and ease the burning sensation during urination.",
  },
  {
    q: "Is Nepsol registered/approved?",
    a: "Yes — Drap En. No: 00636, manufactured by Silvia Laboratories.",
  },
  {
    q: "Where do I store Nepsol sachets?",
    a: "In a cool, dry place below 30°C, out of reach of children.",
  },
];

export default function FaqTabs() {
  const [activeTab, setActiveTab] = useState<"xelate" | "nepsol">("xelate");

  return (
    <div>
      {/* Tab buttons */}
      <div
        className="flex rounded-xl p-1 mb-6 gap-1"
        style={{ backgroundColor: "rgba(22,33,28,0.06)" }}
      >
        <button
          onClick={() => setActiveTab("xelate")}
          className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
            activeTab === "xelate" ? "shadow-sm" : ""
          }`}
          style={{
            backgroundColor: activeTab === "xelate" ? "white" : "transparent",
            color: activeTab === "xelate" ? "var(--xelate-red)" : "var(--text-muted)",
          }}
        >
          Xelate
        </button>
        <button
          onClick={() => setActiveTab("nepsol")}
          className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
            activeTab === "nepsol" ? "shadow-sm" : ""
          }`}
          style={{
            backgroundColor: activeTab === "nepsol" ? "white" : "transparent",
            color: activeTab === "nepsol" ? "var(--nepsol-green)" : "var(--text-muted)",
          }}
        >
          Nepsol
        </button>
      </div>

      {/* Tab content */}
      {activeTab === "xelate" && (
        <div
          className="glass-panel rounded-2xl p-8"
          style={{ border: "1px solid rgba(156,43,58,0.12)" }}
        >
          <FaqAccordion items={xelateFaqs} accentColor="var(--xelate-red)" />
        </div>
      )}
      {activeTab === "nepsol" && (
        <div
          className="glass-panel rounded-2xl p-8"
          style={{ border: "1px solid rgba(43,158,82,0.12)" }}
        >
          <FaqAccordion items={nepsolFaqs} accentColor="var(--nepsol-green)" />
        </div>
      )}

      {/* Disclaimer */}
      <p className="mt-8 text-xs text-center" style={{ color: "var(--text-muted-light)" }}>
        Consult your physician before starting any new supplement or treatment.
      </p>
    </div>
  );
}
