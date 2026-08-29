"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Sparkles,
  CalendarCheck,
  CheckCircle2,
  Lock,
  Pill,
  GlassWater,
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

const benefitCards = [
  {
    icon: HeartPulse,
    title: "Everyday Kidney Support",
    desc: "Formulated to support healthy kidney function as part of your daily routine.",
  },
  {
    icon: Sparkles,
    title: "General Well-Being",
    desc: "Enriched to support overall wellness, not just one system in isolation.",
  },
  {
    icon: CalendarCheck,
    title: "Simple, Consistent Routine",
    desc: "One bottle, 30 capsules — a full month of consistent support.",
  },
  {
    icon: CheckCircle2,
    title: "Made to Fit Your Day",
    desc: "Designed to slot into an existing routine without complication.",
  },
];

const xelateFaq = [
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
    a: "[[Placeholder — awaiting client / physician input before publishing]]",
    isPlaceholder: true,
  },
  {
    q: "Are there any side effects?",
    a: "[[Placeholder — awaiting client / physician input before publishing]]",
    isPlaceholder: true,
  },
];

export default function XelatePage() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
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
        style={{ borderColor: "rgba(156,43,58,0.12)" }}
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
                    color: isActive ? "var(--xelate-red)" : "var(--text-muted)",
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
        className="bloom-xelate pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(156,43,58,0.04) 0%, rgba(4,95,158,0.06) 100%)",
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
                color: "var(--xelate-red)",
                backgroundColor: "rgba(156,43,58,0.1)",
              }}
            >
              Advanced Kidney Health Support
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-[1.05] tracking-tight mb-4"
              style={{ color: "var(--xelate-ink)" }}
            >
              Advanced Support,<br />
              <span style={{ color: "var(--xelate-red)" }}>Every Single Day</span>
            </h1>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              30 capsules formulated to support kidney health and everyday well-being.
            </p>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 font-semibold text-lg"
              style={{
                backgroundColor: "rgba(156,43,58,0.06)",
                color: "var(--xelate-red)",
              }}
            >
              [PRICE — Coming Soon]
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#buy"
                className="px-7 py-3.5 rounded-xl font-semibold text-white text-center transition-all duration-200 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] shadow-sm flex items-center justify-center gap-2"
                style={{ backgroundColor: "var(--xelate-red)" }}
              >
                <span>Buy Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#benefits"
                className="px-7 py-3.5 rounded-xl font-semibold text-center transition-all duration-200 hover:scale-[1.02] border bg-white/60"
                style={{
                  borderColor: "var(--xelate-blue)",
                  color: "var(--xelate-blue)",
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
                className="absolute inset-0 rounded-full blur-3xl opacity-30"
                style={{
                  background:
                    "radial-gradient(circle, var(--xelate-red) 0%, var(--xelate-blue) 60%, transparent 80%)",
                }}
              />
              <div className="relative w-full h-full">
                <Image
                  src="/images/xelate-bottle.jpeg"
                  alt="Xelate Advanced Kidney Health Support — 30 Capsules"
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
          BENEFITS
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
                color: "var(--xelate-red)",
                backgroundColor: "rgba(156,43,58,0.08)",
              }}
            >
              Why Choose Xelate
            </p>
            <h2
              className="text-3xl md:text-4xl font-display font-semibold tracking-tight"
              style={{ color: "var(--xelate-ink)" }}
            >
              What Xelate Supports
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div
                    className="glass-card h-full flex flex-col justify-between"
                    style={{ border: "1px solid rgba(156,43,58,0.15)" }}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{
                            backgroundColor: "rgba(156,43,58,0.1)",
                            color: "var(--xelate-red)",
                          }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                          Benefit 0{i + 1}
                        </span>
                      </div>
                      <h3
                        className="font-display font-semibold text-lg mb-2"
                        style={{ color: "var(--xelate-ink)" }}
                      >
                        {card.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {card.desc}
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
          INGREDIENT PLACEHOLDER PANEL (Audit fix)
          ============================================ */}
      <section
        id="ingredients"
        className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "rgba(4,95,158,0.03)" }}
      >
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div
              className="glass-card"
              style={{
                border: "2px dashed rgba(4,95,158,0.3)",
                backgroundColor: "rgba(255,255,255,0.75)",
              }}
            >
              {/* Supplement facts header */}
              <div
                className="border-b-4 pb-3 mb-6"
                style={{ borderColor: "var(--xelate-ink)" }}
              >
                <p
                  className="text-xl font-bold font-display tracking-tight"
                  style={{ color: "var(--xelate-ink)" }}
                >
                  Supplement Facts
                </p>
                <p className="text-xs mt-1 text-stone-600">
                  Serving Size: 1 Capsule · Servings per bottle: 30
                </p>
              </div>

              <div className="flex items-center justify-center py-10 gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-[var(--xelate-blue)] flex-shrink-0">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <p
                    className="font-display font-semibold text-base"
                    style={{ color: "var(--xelate-blue)" }}
                  >
                    [[XELATE INGREDIENT PANEL — AWAITING CLIENT INPUT]]
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                    Ingredient names, dosages, and mg amounts will appear here once provided.
                  </p>
                </div>
              </div>

              {/* Inaccurate FDA boilerplate removed per Audit */}
              <p
                className="text-xs italic text-center mt-3 pt-3 border-t border-stone-200/60"
                style={{ color: "var(--text-muted-light)" }}
              >
                Values per capsule — to be confirmed.
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
        style={{ backgroundColor: "var(--bg-canvas)" }}
      >
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p
              className="pill mb-3 mx-auto"
              style={{
                color: "var(--xelate-blue)",
                backgroundColor: "rgba(4,95,158,0.08)",
              }}
            >
              Directions
            </p>
            <h2
              className="text-3xl md:text-4xl font-display font-semibold tracking-tight"
              style={{ color: "var(--xelate-ink)" }}
            >
              How to Use
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div
              className="glass-card"
              style={{ border: "1px solid rgba(156,43,58,0.15)" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  {
                    step: "01",
                    icon: Pill,
                    title: "Take a Capsule",
                    desc: "Take one capsule daily as part of your regular routine.",
                  },
                  {
                    step: "02",
                    icon: GlassWater,
                    title: "With Water",
                    desc: "Swallow with a full glass of water for best absorption.",
                  },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.step} className="text-left">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{
                            backgroundColor: "rgba(156,43,58,0.1)",
                            color: "var(--xelate-red)",
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
                        style={{ color: "var(--xelate-ink)" }}
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
              <div
                className="mt-8 pt-6 text-xs italic text-center"
                style={{
                  color: "var(--text-muted-light)",
                  borderTop: "1px solid rgba(22,33,28,0.07)",
                }}
              >
                * Dosage placeholder — confirmed instructions to be provided by client before launch.
              </div>
            </div>
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
            "linear-gradient(135deg, rgba(156,43,58,0.05) 0%, rgba(4,95,158,0.06) 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <p
              className="pill mb-3 mx-auto"
              style={{
                color: "var(--xelate-red)",
                backgroundColor: "rgba(156,43,58,0.1)",
              }}
            >
              Order Now
            </p>
            <h2
              className="text-3xl md:text-4xl font-display font-semibold tracking-tight"
              style={{ color: "var(--xelate-ink)" }}
            >
              Get Xelate Delivered
            </h2>
            <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
              Cash on Delivery · Direct order confirmation via WhatsApp
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div
              className="glass-card"
              style={{ border: "1px solid rgba(156,43,58,0.15)" }}
            >
              <OrderForm
                productName="Xelate (30 Capsules)"
                primaryColor="var(--xelate-red)"
                secondaryColor="var(--xelate-blue)"
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
                color: "var(--xelate-red)",
                backgroundColor: "rgba(156,43,58,0.08)",
              }}
            >
              Questions
            </p>
            <h2
              className="text-3xl md:text-4xl font-display font-semibold tracking-tight"
              style={{ color: "var(--xelate-ink)" }}
            >
              Xelate FAQ
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div
              className="glass-card p-6 sm:p-8"
              style={{ border: "1px solid rgba(156,43,58,0.15)" }}
            >
              <FaqAccordion items={xelateFaq} accentColor="var(--xelate-red)" />
              <div
                className="mt-6 pt-6"
                style={{ borderTop: "1px solid rgba(22,33,28,0.07)" }}
              >
                <Link
                  href="/faq"
                  className="text-sm font-medium inline-flex items-center gap-1.5"
                  style={{ color: "var(--xelate-blue)" }}
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
