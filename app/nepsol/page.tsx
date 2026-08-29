"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Flame,
  Activity,
  Sparkles,
  Leaf,
  Stethoscope,
  PackageCheck,
  GlassWater,
  Thermometer,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import OrderForm from "@/components/OrderForm";

function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const subNavLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Benefits", href: "#benefits" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "How to Use", href: "#how-to-use" },
  { label: "Buy", href: "#buy" },
  { label: "FAQ", href: "#faq" },
];

const benefitPillars = [
  {
    icon: Flame,
    title: "UTI Relief",
    color: "var(--nepsol-red)",
    bgColor: "rgba(198,51,59,0.08)",
    items: [
      "Provides relief from UTI symptoms",
      "Helps reduce the risk of recurrent UTIs",
      "Reduces the burning sensation during urination",
    ],
  },
  {
    icon: Activity,
    title: "Kidney & Urinary Health",
    color: "var(--nepsol-forest)",
    bgColor: "rgba(11,92,48,0.08)",
    items: [
      "Supports kidney and urinary tract health",
      "Helps maintain normal urinary flow",
      "Supports healthy kidney function",
      "Helps maintain a healthy urinary environment",
    ],
  },
  {
    icon: Sparkles,
    title: "Stone Management",
    color: "var(--nepsol-green)",
    bgColor: "rgba(43,158,82,0.08)",
    items: [
      "Helps support the passage of concretions, gravel, and stones",
      "May help prevent new kidney stones from forming",
      "May inhibit the recurrence of stones",
      "Helps in the expulsion of kidney and bladder stones",
    ],
  },
  {
    icon: Leaf,
    title: "General Wellness",
    color: "var(--nepsol-green)",
    bgColor: "rgba(43,158,82,0.08)",
    items: [
      "Helps reduce mild fluid retention",
      "An all-round solution for urinary complaints",
    ],
  },
];

const ingredients = [
  { name: "Elettaria Cardamom", amount: "390.625 mg" },
  { name: "Kalmi Shora", amount: "390.625 mg" },
  { name: "Sange Yahood", amount: "390.625 mg" },
  { name: "Naushadar", amount: "390.625 mg" },
  { name: "Suhaga", amount: "390.625 mg" },
  { name: "Cuminum cyminum", amount: "390.625 mg" },
  { name: "Cichorium intybus", amount: "843.750 mg" },
  { name: "Rosa damascena", amount: "421.875 mg" },
];

const indicatedConditions = [
  "Renal tubular acidosis (RTA) with calcium stones",
  "Hypocitraturic calcium oxalate nephrolithiasis",
  "Uric acid lithiasis with or without calcium stones",
];

const nepsolFaq = [
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

export default function NepsolPage() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ["overview", "benefits", "ingredients", "how-to-use", "buy", "faq"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      {/* ---- Sticky Sub-Nav ---- */}
      <div
        className="sticky top-16 z-40 glass-nav border-b"
        style={{ borderColor: "rgba(43,158,82,0.12)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 overflow-x-auto py-1">
            {subNavLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="subnav-link flex-shrink-0"
                  style={{
                    color: isActive ? "var(--nepsol-green)" : "var(--text-muted)",
                    fontWeight: isActive ? 600 : 500,
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============================================
          OVERVIEW / HERO
          ============================================ */}
      <section
        id="overview"
        className="bloom-nepsol pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(11,92,48,0.05) 0%, rgba(43,158,82,0.06) 100%)",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <div
              className="pill mb-4"
              style={{
                color: "var(--nepsol-green)",
                backgroundColor: "rgba(43,158,82,0.1)",
              }}
            >
              DRAP Registered · Drap En. No: 00636
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-[1.05] tracking-tight mb-4"
              style={{ color: "var(--nepsol-ink)" }}
            >
              Effective in Relief<br />
              <span style={{ color: "var(--nepsol-green)" }}>from Kidney Stone</span>
            </h1>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              10 sachets per carton. A powerful herbal formula with 8 active ingredients — clinically indicated for kidney stone conditions and urinary tract health.
            </p>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 font-semibold text-lg"
              style={{
                backgroundColor: "rgba(43,158,82,0.06)",
                color: "var(--nepsol-green)",
              }}
            >
              [PRICE — Coming Soon]
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#buy"
                className="px-7 py-3.5 rounded-xl font-semibold text-white text-center transition-all duration-200 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] shadow-sm flex items-center justify-center gap-2"
                style={{ backgroundColor: "var(--nepsol-green)" }}
              >
                <span>Buy Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#benefits"
                className="px-7 py-3.5 rounded-xl font-semibold text-center transition-all duration-200 hover:scale-[1.02] border bg-white/60"
                style={{
                  borderColor: "var(--nepsol-forest)",
                  color: "var(--nepsol-forest)",
                }}
              >
                See Benefits
              </a>
            </div>
          </motion.div>

          {/* Right — product image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-25"
                style={{
                  background:
                    "radial-gradient(circle, var(--nepsol-green) 0%, var(--nepsol-forest) 60%, transparent 80%)",
                }}
              />
              <div className="relative w-full h-full">
                <Image
                  src="/images/nepsol-carton.png"
                  alt="Nepsol Kidney Stone Relief Sachets — 10 Sachets per carton"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 288px, 384px"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          BENEFITS — 4 PILLARS
          ============================================ */}
      <section
        id="benefits"
        className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--bg-canvas)" }}
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p
              className="pill mb-3 mx-auto"
              style={{
                color: "var(--nepsol-green)",
                backgroundColor: "rgba(43,158,82,0.08)",
              }}
            >
              Targeted Actions
            </p>
            <h2
              className="text-3xl md:text-4xl font-display font-semibold tracking-tight"
              style={{ color: "var(--nepsol-ink)" }}
            >
              Four Pillars of Nepsol
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div
                    className="glass-card h-full flex flex-col justify-between"
                    style={{ border: `1px solid ${pillar.color}25` }}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{
                            backgroundColor: pillar.bgColor,
                            color: pillar.color,
                          }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                          Pillar 0{i + 1}
                        </span>
                      </div>
                      <h3
                        className="font-display font-semibold text-lg mb-4"
                        style={{ color: pillar.color }}
                      >
                        {pillar.title}
                      </h3>
                      <ul className="space-y-2.5">
                        {pillar.items.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2.5 text-sm leading-relaxed"
                            style={{ color: "var(--text-muted)" }}
                          >
                            <span
                              className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: pillar.color }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          INGREDIENTS (Prompt 11: 4px solid left accent bar + styled label card, non-duplicated header)
          ============================================ */}
      <section
        id="ingredients"
        className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "rgba(11,92,48,0.03)" }}
      >
        <div className="max-w-2xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p
              className="pill mb-3 mx-auto"
              style={{
                color: "var(--nepsol-forest)",
                backgroundColor: "rgba(11,92,48,0.08)",
              }}
            >
              Active Formula
            </p>
            <h2
              className="text-3xl md:text-4xl font-display font-semibold tracking-tight"
              style={{ color: "var(--nepsol-ink)" }}
            >
              Each Sachet Contains
            </h2>
            <p className="text-sm mt-2 text-stone-600">
              Precise herbal extract potencies per 10-sachet carton
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div
              className="glass-card relative overflow-hidden p-0 border-l-4"
              style={{
                borderLeftColor: "var(--nepsol-forest)",
                borderTopColor: "rgba(255, 255, 255, 0.6)",
                borderRightColor: "rgba(255, 255, 255, 0.6)",
                borderBottomColor: "rgba(255, 255, 255, 0.6)",
              }}
            >
              {/* Header row in label/eyebrow style */}
              <div className="px-6 sm:px-8 py-4 border-b border-stone-200/70 bg-stone-50/60 flex items-center justify-between">
                <span className="label-eyebrow text-stone-600">
                  Active Pharmaceutical Ingredient
                </span>
                <span className="label-eyebrow text-stone-600 text-right">
                  Amount
                </span>
              </div>

              {/* Rows */}
              <div className="divide-y divide-stone-200/60">
                {ingredients.map((ing, i) => (
                  <div
                    key={i}
                    className="px-6 sm:px-8 py-3.5 flex items-center justify-between hover:bg-green-50/30 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-normal text-stone-900">
                      {ing.name}
                    </span>
                    <span className="text-sm sm:text-base font-medium tabular-figure text-[var(--nepsol-forest)]">
                      {ing.amount}
                    </span>
                  </div>
                ))}
              </div>

              {/* Regulatory strip */}
              <div className="px-6 sm:px-8 py-4 bg-stone-50/80 border-t border-stone-200/70 text-xs text-stone-500 leading-relaxed tabular-figure">
                DRAP Registration: Drap En. No: 00636 · Prod. E. No: 006361290453 · Manufactured by Silvia Laboratories
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          INDICATED FOR
          ============================================ */}
      <section
        className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--bg-canvas)" }}
      >
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div
              className="glass-card"
              style={{ border: "1px solid rgba(198,51,59,0.15)" }}
            >
              <div className="flex items-center gap-3.5 mb-6">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(198,51,59,0.1)",
                    color: "var(--nepsol-red)",
                  }}
                >
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <h3
                    className="font-display font-semibold text-lg"
                    style={{ color: "var(--nepsol-ink)" }}
                  >
                    Clinically Indicated For
                  </h3>
                  <p className="text-xs text-stone-500">
                    As stated on regulatory-approved packaging
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {indicatedConditions.map((condition, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm leading-relaxed text-stone-800"
                  >
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white font-bold mt-0.5"
                      style={{ backgroundColor: "var(--nepsol-red)" }}
                    >
                      {i + 1}
                    </span>
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
              <p
                className="mt-6 text-xs italic text-stone-500 pt-4 border-t border-stone-200/60"
              >
                Consult your physician for personalized medical advice.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          HOW TO USE
          ============================================ */}
      <section
        id="how-to-use"
        className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "rgba(43,158,82,0.04)" }}
      >
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p
              className="pill mb-3 mx-auto"
              style={{
                color: "var(--nepsol-green)",
                backgroundColor: "rgba(43,158,82,0.08)",
              }}
            >
              Directions
            </p>
            <h2
              className="text-3xl md:text-4xl font-display font-semibold tracking-tight"
              style={{ color: "var(--nepsol-ink)" }}
            >
              Dosage & Directions
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div
              className="glass-card"
              style={{ border: "1px solid rgba(43,158,82,0.15)" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  {
                    step: "01",
                    icon: PackageCheck,
                    title: "Dosage",
                    desc: "Use one to two sachets daily, or as directed by your physician.",
                  },
                  {
                    step: "02",
                    icon: GlassWater,
                    title: "How to Take",
                    desc: "Mix the contents of a sachet in a glass of water and use immediately. Do not store an open sachet — use immediately.",
                  },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.step} className="text-left">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{
                            backgroundColor: "rgba(43,158,82,0.1)",
                            color: "var(--nepsol-forest)",
                          }}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-display font-bold text-2xl text-stone-300">
                          {s.step}
                        </span>
                      </div>
                      <h4
                        className="font-semibold text-base mb-1.5"
                        style={{ color: "var(--nepsol-ink)" }}
                      >
                        {s.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {s.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Storage */}
              <div
                className="mt-8 pt-6 flex items-start gap-3.5 border-t border-stone-200/60"
              >
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-[var(--nepsol-forest)] flex-shrink-0">
                  <Thermometer className="w-5 h-5" />
                </div>
                <div>
                  <p
                    className="font-semibold text-sm mb-0.5"
                    style={{ color: "var(--nepsol-forest)" }}
                  >
                    Storage Instructions
                  </p>
                  <p className="text-sm text-stone-600">
                    Store in a cool, dry place below 30°C. Keep all medicines out of reach of children.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Regulatory strip */}
          <ScrollReveal delay={0.2} className="mt-6 text-center">
            <p
              className="text-xs font-semibold uppercase tracking-widest tabular-figure text-stone-500"
            >
              Drap En. No: 00636 · Manufactured by Silvia Laboratories
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          BUY
          ============================================ */}
      <section
        id="buy"
        className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8"
        style={{
          background:
            "linear-gradient(135deg, rgba(11,92,48,0.05) 0%, rgba(43,158,82,0.07) 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <p
              className="pill mb-3 mx-auto"
              style={{
                color: "var(--nepsol-green)",
                backgroundColor: "rgba(43,158,82,0.1)",
              }}
            >
              Order Now
            </p>
            <h2
              className="text-3xl md:text-4xl font-display font-semibold tracking-tight"
              style={{ color: "var(--nepsol-ink)" }}
            >
              Get Nepsol Delivered
            </h2>
            <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
              Cash on Delivery · Direct order confirmation via WhatsApp
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div
              className="glass-card"
              style={{ border: "1px solid rgba(43,158,82,0.15)" }}
            >
              <OrderForm
                productName="Nepsol (10 Sachets)"
                primaryColor="var(--nepsol-green)"
                secondaryColor="var(--nepsol-forest)"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          FAQ
          ============================================ */}
      <section
        id="faq"
        className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--bg-canvas)" }}
      >
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p
              className="pill mb-3 mx-auto"
              style={{
                color: "var(--nepsol-green)",
                backgroundColor: "rgba(43,158,82,0.08)",
              }}
            >
              Questions
            </p>
            <h2
              className="text-3xl md:text-4xl font-display font-semibold tracking-tight"
              style={{ color: "var(--nepsol-ink)" }}
            >
              Nepsol FAQ
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div
              className="glass-card p-6 sm:p-8"
              style={{ border: "1px solid rgba(43,158,82,0.15)" }}
            >
              <FaqAccordion items={nepsolFaq} accentColor="var(--nepsol-green)" />
              <div
                className="mt-6 pt-6"
                style={{ borderTop: "1px solid rgba(22,33,28,0.07)" }}
              >
                <Link
                  href="/faq"
                  className="text-sm font-medium inline-flex items-center gap-1.5"
                  style={{ color: "var(--nepsol-forest)" }}
                >
                  <span>See all FAQs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
