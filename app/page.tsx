"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Pill,
  Droplets,
  Activity,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";
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

/* ---------- Trust Badges (Prompt 3B) ---------- */
const trustBadges = [
  {
    icon: ShieldCheck,
    label: "DRAP-Registered",
    sub: "Drap En. No: 00636",
  },
  {
    icon: Pill,
    label: "30 Capsules · 10 Sachets",
    sub: "Two targeted formats",
  },
  {
    icon: Droplets,
    label: "Physician-Guided Use",
    sub: "Evidence-based wellness",
  },
];

/* ---------- Why-kidney-health icon stats (Lucide icons, no emojis) ---------- */
const whyCards = [
  {
    icon: Activity,
    stat: "2",
    unit: "Kidneys",
    desc: "Filter your entire blood supply roughly 40 times per day — vital organs with an enormous workload.",
  },
  {
    icon: Droplets,
    stat: "180 L",
    unit: "Daily Filtration",
    desc: "Your kidneys process approximately 180 litres of blood daily, regulating hydration and removing waste.",
  },
  {
    icon: Users,
    stat: "1 in 10",
    unit: "Adults Affected",
    desc: "Roughly one in ten adults will experience urinary discomfort or kidney stones during their lifetime.",
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
    a: "Nepsol is a sachet-based formula effective in relief from kidney stones, including renal tubular acidosis (RTA) with calcium stones, hypocitraturic calcium oxalate nephrolithiasis, and uric acid lithiasis.",
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
          HERO (Prompt 3B Revision)
          ============================================ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0 z-0 bg-stone-100">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/xelate-bottle.jpeg"
            onLoadedData={() => setVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src="/videos/product-animation.mp4" type="video/mp4" />
          </video>

          {/* Prompt 3B: Vertical gradient only - transparent top 50%, to rgba(8,16,12,0.55) at bottom */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(8, 16, 12, 0) 45%, rgba(8, 16, 12, 0.58) 100%)",
            }}
          />
        </div>

        {/* Hero content: Positioned in negative space zone */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="lg:col-span-7 glass-panel-hero rounded-3xl p-8 sm:p-10"
            >
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-white/90 bg-white/15 border border-white/20 mb-5">
                <Sparkles className="w-3.5 h-3.5 text-white/80" />
                <span>Kidney & Urinary Health, Backed by Two Formulas</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-white tracking-tight leading-[1.05] mb-5">
                Two Ways to Protect Your Kidneys
              </h1>

              <p className="text-base sm:text-lg text-white/85 max-w-xl font-normal leading-relaxed mb-8">
                Xelate supports daily kidney function with a 30-capsule routine.
                Nepsol targets kidney stone relief with an 8-ingredient herbal sachet formula.
              </p>

              {/* Two CTA buttons: solid brand colors */}
              <div className="flex flex-col sm:flex-row gap-3.5">
                <Link
                  href="/xelate"
                  className="px-7 py-3.5 rounded-xl font-semibold text-sm text-white text-center transition-all duration-200 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] shadow-md flex items-center justify-center gap-2"
                  style={{ backgroundColor: "var(--xelate-red)" }}
                >
                  <span>Explore Xelate</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/nepsol"
                  className="px-7 py-3.5 rounded-xl font-semibold text-sm text-white text-center transition-all duration-200 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] shadow-md flex items-center justify-center gap-2"
                  style={{ backgroundColor: "var(--nepsol-green)" }}
                >
                  <span>Explore Nepsol</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          TRUST BADGES BAR (Prompt 3B)
          ============================================ */}
      <section
        className="py-6 px-4 border-b border-stone-200/70"
        style={{ backgroundColor: "var(--bg-canvas)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {trustBadges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="glass-panel rounded-2xl p-4 flex items-center gap-3.5 bg-white/75 hover:bg-white transition-all">
                    <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center flex-shrink-0 text-stone-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold tracking-tight text-[var(--text-primary)]">
                        {badge.label}
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">
                        {badge.sub}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          MEET THE PRODUCTS
          ============================================ */}
      <section
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--bg-canvas)" }}
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p
              className="pill mb-3 mx-auto"
              style={{
                color: "var(--text-muted)",
                backgroundColor: "rgba(22,33,28,0.06)",
              }}
            >
              Our Products
            </p>
            <h2
              className="text-3xl md:text-4xl font-display font-semibold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Meet the Products
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Xelate card */}
            <ScrollReveal delay={0.1}>
              <div className="bloom-xelate rounded-3xl overflow-hidden h-full">
                <div className="glass-panel rounded-3xl p-8 sm:p-10 h-full flex flex-col relative z-10 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-1">
                    <div
                      className="pill mb-4"
                      style={{
                        color: "var(--xelate-red)",
                        backgroundColor: "rgba(156,43,58,0.1)",
                      }}
                    >
                      Capsules · 30 per bottle
                    </div>
                    <h3
                      className="text-2xl sm:text-3xl font-display font-semibold mb-2"
                      style={{ color: "var(--xelate-ink)" }}
                    >
                      Xelate
                    </h3>
                    <p
                      className="text-base font-medium mb-3"
                      style={{ color: "var(--xelate-blue)" }}
                    >
                      Advanced Kidney Health Support
                    </p>
                    <p
                      className="text-sm leading-relaxed mb-6"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Enriched with essential nutrients to support kidney health and general well-being. A full month of consistent daily support in every bottle.
                    </p>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-stone-50/80 border border-stone-200/50">
                      <Image
                        src="/images/xelate-bottle.jpeg"
                        alt="Xelate kidney health capsules bottle"
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <Link
                    href="/xelate"
                    className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 group-hover:gap-3"
                    style={{ color: "var(--xelate-red)" }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Nepsol card */}
            <ScrollReveal delay={0.2}>
              <div className="bloom-nepsol rounded-3xl overflow-hidden h-full">
                <div className="glass-panel rounded-3xl p-8 sm:p-10 h-full flex flex-col relative z-10 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-1">
                    <div
                      className="pill mb-4"
                      style={{
                        color: "var(--nepsol-green)",
                        backgroundColor: "rgba(43,158,82,0.1)",
                      }}
                    >
                      Sachets · 10 per carton
                    </div>
                    <h3
                      className="text-2xl sm:text-3xl font-display font-semibold mb-2"
                      style={{ color: "var(--nepsol-ink)" }}
                    >
                      Nepsol
                    </h3>
                    <p
                      className="text-base font-medium mb-3"
                      style={{ color: "var(--nepsol-forest)" }}
                    >
                      Effective in Relief from Kidney Stone
                    </p>
                    <p
                      className="text-sm leading-relaxed mb-6"
                      style={{ color: "var(--text-muted)" }}
                    >
                      A DRAP-registered herbal sachet formula with 8 active ingredients clinically indicated for kidney stone conditions, UTI relief, and urinary tract health.
                    </p>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-stone-50/80 border border-stone-200/50">
                      <Image
                        src="/images/nepsol-carton.png"
                        alt="Nepsol kidney stone relief sachets carton"
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <Link
                    href="/nepsol"
                    className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 group-hover:gap-3"
                    style={{ color: "var(--nepsol-green)" }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================
          WHY KIDNEY HEALTH MATTERS (No Emojis)
          ============================================ */}
      <section
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{
          background:
            "linear-gradient(135deg, rgba(4,95,158,0.05) 0%, rgba(43,158,82,0.05) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p
              className="pill mb-3 mx-auto"
              style={{
                color: "var(--xelate-blue)",
                backgroundColor: "rgba(4,95,158,0.08)",
              }}
            >
              Why It Matters
            </p>
            <h2
              className="text-3xl md:text-4xl font-display font-semibold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Why Kidney Health Matters
            </h2>
            <p
              className="mt-4 max-w-xl mx-auto text-base"
              style={{ color: "var(--text-muted)" }}
            >
              Your kidneys work around the clock. Supporting them proactively is one of the most impactful things you can do for long-term wellness.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="glass-panel rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-2xl bg-stone-100/90 flex items-center justify-center mx-auto mb-5 text-stone-700">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div
                      className="font-display font-semibold text-4xl mb-1 tracking-tight"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {card.stat}
                    </div>
                    <div
                      className="text-xs font-semibold uppercase tracking-widest mb-3"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {card.unit}
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {card.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
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
            <p
              className="pill mb-3 mx-auto"
              style={{
                color: "var(--text-muted)",
                backgroundColor: "rgba(22,33,28,0.06)",
              }}
            >
              Quick Answers
            </p>
            <h2
              className="text-3xl md:text-4xl font-display font-semibold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-panel rounded-3xl p-8 sm:p-10">
              <FaqAccordion items={faqTeaser} accentColor="var(--nepsol-green)" />
              <div className="mt-8 text-center">
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-105"
                  style={{
                    border: "1.5px solid var(--nepsol-green)",
                    color: "var(--nepsol-green)",
                  }}
                >
                  <span>See All FAQs</span>
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
