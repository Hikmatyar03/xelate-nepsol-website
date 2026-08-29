"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";

/* ---------- scroll-reveal helper ---------- */
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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Why-kidney-health icon stats ---------- */
const whyCards = [
  {
    icon: "🫘",
    stat: "2",
    unit: "kidneys",
    desc: "Filter your entire blood supply roughly 40 times per day — small organs, enormous workload.",
  },
  {
    icon: "💧",
    stat: "180L",
    unit: "daily filtration",
    desc: "Your kidneys process approximately 180 litres of blood daily, excreting waste through urine.",
  },
  {
    icon: "🪨",
    stat: "1 in 10",
    unit: "people",
    desc: "Roughly one in ten adults will experience a kidney stone at some point in their lifetime.",
  },
];

/* ---------- FAQ teaser ---------- */
const faqTeaser = [
  {
    q: "What is Xelate?",
    a: "Xelate is an advanced kidney health support supplement — 30 capsules per bottle — formulated to support healthy kidney function and general well-being.",
  },
  {
    q: "What is Nepsol used for?",
    a: "Nepsol is a sachet-based formula effective in relief from kidney stones, including renal tubular acidosis with calcium stones, hypocitraturic calcium oxalate nephrolithiasis, and uric acid lithiasis.",
  },
  {
    q: "Is Nepsol registered with DRAP?",
    a: "Yes — Nepsol carries Drap En. No: 00636 and is manufactured by Silvia Laboratories.",
  },
];

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <>
      <Navbar />

      {/* ============================================
          HERO
          ============================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/xelate-bottle.jpeg"
            onLoadedData={() => setVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src="/videos/product-animation.mp4" type="video/mp4" />
          </video>
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-10" />
        </div>

        {/* Hero content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-panel rounded-2xl p-8 md:p-10 max-w-xl"
          >
            <p
              className="pill mb-4"
              style={{
                backgroundColor: "rgba(255,255,255,0.25)",
                color: "white",
              }}
            >
              Kidney & Urinary Health, Backed by Two Formulas
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white leading-tight mb-4">
              Two Ways to Protect Your Kidneys
            </h1>
            <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed">
              Xelate supports daily kidney function with a 30-capsule routine.
              Nepsol targets kidney stone relief with a powerful 10-sachet herbal formula.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/xelate"
                className="px-6 py-3.5 rounded-xl font-semibold text-white text-center transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
                style={{ backgroundColor: "var(--xelate-red)" }}
              >
                Explore Xelate
              </Link>
              <Link
                href="/nepsol"
                className="px-6 py-3.5 rounded-xl font-semibold text-white text-center transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
                style={{ backgroundColor: "var(--nepsol-green)" }}
              >
                Explore Nepsol
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          TRUST BAR
          ============================================ */}
      <div
        className="py-4 px-4"
        style={{ backgroundColor: "var(--bg-canvas)", borderBottom: "1px solid rgba(22,33,28,0.07)" }}
      >
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          <span>DRAP-Registered Formula (Nepsol)</span>
          <span className="opacity-30">·</span>
          <span>30 Capsules · 10 Sachets</span>
          <span className="opacity-30">·</span>
          <span>Consult Your Physician for Personalized Use</span>
        </div>
      </div>

      {/* ============================================
          MEET THE PRODUCTS
          ============================================ */}
      <section
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--bg-canvas)" }}
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="pill mb-3 mx-auto" style={{ color: "var(--text-muted)", backgroundColor: "rgba(22,33,28,0.06)" }}>
              Our Products
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold" style={{ color: "var(--text-primary)" }}>
              Meet the Products
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Xelate card */}
            <ScrollReveal delay={0.1}>
              <div className="bloom-xelate rounded-2xl overflow-hidden h-full">
                <div className="glass-panel rounded-2xl p-8 h-full flex flex-col relative z-10 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-1">
                    <div
                      className="pill mb-4"
                      style={{ color: "var(--xelate-red)", backgroundColor: "rgba(156,43,58,0.1)" }}
                    >
                      Capsules · 30 per bottle
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2" style={{ color: "var(--xelate-ink)" }}>
                      Xelate
                    </h3>
                    <p className="text-base font-semibold mb-3" style={{ color: "var(--xelate-blue)" }}>
                      Advanced Kidney Health Support
                    </p>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                      Enriched with essential nutrients to support kidney health and general well-being. A full month of consistent daily support in every bottle.
                    </p>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-gray-50">
                      <Image
                        src="/images/xelate-bottle.jpeg"
                        alt="Xelate kidney health capsules bottle"
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <Link
                    href="/xelate"
                    className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 hover:gap-3"
                    style={{ color: "var(--xelate-red)" }}
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Nepsol card */}
            <ScrollReveal delay={0.2}>
              <div className="bloom-nepsol rounded-2xl overflow-hidden h-full">
                <div className="glass-panel rounded-2xl p-8 h-full flex flex-col relative z-10 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-1">
                    <div
                      className="pill mb-4"
                      style={{ color: "var(--nepsol-green)", backgroundColor: "rgba(43,158,82,0.1)" }}
                    >
                      Sachets · 10 per carton
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2" style={{ color: "var(--nepsol-ink)" }}>
                      Nepsol
                    </h3>
                    <p className="text-base font-semibold mb-3" style={{ color: "var(--nepsol-forest)" }}>
                      Effective in Relief from Kidney Stone
                    </p>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                      A DRAP-registered herbal sachet formula with 8 active ingredients clinically indicated for kidney stone conditions, UTI relief, and urinary tract health.
                    </p>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-gray-50">
                      <Image
                        src="/images/nepsol-carton.png"
                        alt="Nepsol kidney stone relief sachets carton"
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <Link
                    href="/nepsol"
                    className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 hover:gap-3"
                    style={{ color: "var(--nepsol-green)" }}
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================
          WHY KIDNEY HEALTH MATTERS
          ============================================ */}
      <section
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(135deg, rgba(4,95,158,0.05) 0%, rgba(43,158,82,0.05) 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="pill mb-3 mx-auto" style={{ color: "var(--xelate-blue)", backgroundColor: "rgba(4,95,158,0.08)" }}>
              Why It Matters
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold" style={{ color: "var(--text-primary)" }}>
              Why Kidney Health Matters
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: "var(--text-muted)" }}>
              Your kidneys work around the clock. Supporting them proactively is one of the most impactful things you can do for long-term wellness.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyCards.map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass-panel rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <div className="font-display font-extrabold text-4xl mb-1" style={{ color: "var(--text-primary)" }}>
                    {card.stat}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                    {card.unit}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {card.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ TEASER
          ============================================ */}
      <section
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--bg-canvas)" }}
      >
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="pill mb-3 mx-auto" style={{ color: "var(--text-muted)", backgroundColor: "rgba(22,33,28,0.06)" }}>
              Quick Answers
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold" style={{ color: "var(--text-primary)" }}>
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-panel rounded-2xl p-8">
              <FaqAccordion items={faqTeaser} accentColor="var(--nepsol-green)" />
              <div className="mt-8 text-center">
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-105"
                  style={{ border: "1.5px solid var(--nepsol-green)", color: "var(--nepsol-green)" }}
                >
                  See All FAQs →
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
