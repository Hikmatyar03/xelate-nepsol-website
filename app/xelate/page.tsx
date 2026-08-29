"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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

const subNavLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Benefits", href: "#benefits" },
  { label: "How to Use", href: "#how-to-use" },
  { label: "Buy", href: "#buy" },
  { label: "FAQ", href: "#faq" },
];

const benefitCards = [
  {
    icon: "🫘",
    title: "Everyday Kidney Support",
    desc: "Formulated to support healthy kidney function as part of your daily routine.",
  },
  {
    icon: "✨",
    title: "General Well-Being",
    desc: "Enriched to support overall wellness, not just one system in isolation.",
  },
  {
    icon: "📅",
    title: "Simple, Consistent Routine",
    desc: "One bottle, 30 capsules — a full month of consistent support.",
  },
  {
    icon: "🌟",
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
    a: "[Placeholder — needs physician / client input before publishing]",
    isPlaceholder: true,
  },
  {
    q: "Are there any side effects?",
    a: "[Placeholder — needs physician / client input before publishing]",
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
    ["overview", "benefits", "how-to-use", "buy", "faq"].forEach((id) => {
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
          <div className="flex items-center gap-6 overflow-x-auto hide-scrollbar py-1">
            {subNavLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`subnav-link flex-shrink-0 ${isActive ? "active" : ""}`}
                  style={
                    {
                      "--subnav-color": "var(--xelate-red)",
                      color: isActive ? "var(--xelate-red)" : "var(--text-muted)",
                    } as React.CSSProperties
                  }
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
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div
              className="pill mb-4"
              style={{ color: "var(--xelate-red)", backgroundColor: "rgba(156,43,58,0.1)" }}
            >
              Advanced Kidney Health Support
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight mb-4" style={{ color: "var(--xelate-ink)" }}>
              Advanced Support,<br />
              <span style={{ color: "var(--xelate-red)" }}>Every Single Day</span>
            </h1>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              30 capsules formulated to support kidney health and everyday well-being.
            </p>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 font-semibold text-lg italic"
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
                className="px-7 py-3.5 rounded-xl font-semibold text-white text-center transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
                style={{ backgroundColor: "var(--xelate-red)" }}
              >
                Buy Now
              </a>
              <a
                href="#benefits"
                className="px-7 py-3.5 rounded-xl font-semibold text-center transition-all duration-200 hover:scale-105"
                style={{ border: "1.5px solid var(--xelate-blue)", color: "var(--xelate-blue)" }}
              >
                See Benefits
              </a>
            </div>
          </motion.div>

          {/* Right — product image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="flex justify-center"
          >
            <div
              className="relative w-72 h-72 md:w-96 md:h-96 animate-float"
            >
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
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--bg-canvas)" }}
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="pill mb-3 mx-auto" style={{ color: "var(--xelate-red)", backgroundColor: "rgba(156,43,58,0.08)" }}>
              Why Choose Xelate
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold" style={{ color: "var(--xelate-ink)" }}>
              What Xelate Supports
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitCards.map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  className="glass-panel rounded-2xl p-7 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  style={{ border: "1px solid rgba(156,43,58,0.1)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: "rgba(156,43,58,0.1)" }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="font-display font-bold text-base mb-2" style={{ color: "var(--xelate-ink)" }}>
                    {card.title}
                  </h3>
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
          INGREDIENT PLACEHOLDER PANEL
          ============================================ */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "rgba(4,95,158,0.03)" }}
      >
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div
              className="rounded-2xl p-8"
              style={{
                border: "2px dashed rgba(4,95,158,0.25)",
                backgroundColor: "rgba(255,255,255,0.5)",
              }}
            >
              {/* Supplement facts header */}
              <div
                className="border-b-4 pb-2 mb-4"
                style={{ borderColor: "var(--xelate-ink)" }}
              >
                <p className="text-xl font-extrabold font-display tracking-tight" style={{ color: "var(--xelate-ink)" }}>
                  Supplement Facts
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                  Serving Size: 1 Capsule · Servings per bottle: 30
                </p>
              </div>

              <div className="flex items-center justify-center py-10 gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <p
                    className="font-display font-bold text-base"
                    style={{ color: "var(--xelate-blue)" }}
                  >
                    [[XELATE INGREDIENT PANEL — AWAITING CLIENT INPUT]]
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                    Ingredient names, dosages, and mg amounts will appear here once provided.
                  </p>
                </div>
              </div>

              <p className="text-xs italic text-center mt-2" style={{ color: "var(--text-muted-light)" }}>
                * Percent Daily Values are based on a 2,000 calorie diet.<br />† Daily Value not established.
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
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--bg-canvas)" }}
      >
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="pill mb-3 mx-auto" style={{ color: "var(--xelate-blue)", backgroundColor: "rgba(4,95,158,0.08)" }}>
              Usage
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold" style={{ color: "var(--xelate-ink)" }}>
              How to Use
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-panel rounded-2xl p-8" style={{ border: "1px solid rgba(156,43,58,0.1)" }}>
              <div className="flex flex-col sm:flex-row gap-6">
                {[
                  { step: "01", icon: "💊", title: "Take a Capsule", desc: "Take one capsule daily as part of your regular routine." },
                  { step: "02", icon: "💧", title: "With Water", desc: "Swallow with a full glass of water for best absorption." },
                ].map((s) => (
                  <div key={s.step} className="flex-1 text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4"
                      style={{ backgroundColor: "rgba(156,43,58,0.1)" }}
                    >
                      {s.icon}
                    </div>
                    <div className="font-display font-extrabold text-4xl mb-1" style={{ color: "rgba(156,43,58,0.15)" }}>
                      {s.step}
                    </div>
                    <h4 className="font-semibold text-base mb-2" style={{ color: "var(--xelate-ink)" }}>
                      {s.title}
                    </h4>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div
                className="mt-6 pt-6 text-xs italic text-center"
                style={{ color: "var(--text-muted-light)", borderTop: "1px solid rgba(22,33,28,0.07)" }}
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
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(135deg, rgba(156,43,58,0.05) 0%, rgba(4,95,158,0.06) 100%)" }}
      >
        <div className="max-w-2xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <p className="pill mb-3 mx-auto" style={{ color: "var(--xelate-red)", backgroundColor: "rgba(156,43,58,0.1)" }}>
              Order Now
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold" style={{ color: "var(--xelate-ink)" }}>
              Get Xelate Delivered
            </h2>
            <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
              Cash on Delivery · Free order confirmation via WhatsApp
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-panel rounded-2xl p-8" style={{ border: "1px solid rgba(156,43,58,0.12)" }}>
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
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--bg-canvas)" }}
      >
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="pill mb-3 mx-auto" style={{ color: "var(--xelate-red)", backgroundColor: "rgba(156,43,58,0.08)" }}>
              Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold" style={{ color: "var(--xelate-ink)" }}>
              Xelate FAQ
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-panel rounded-2xl p-8" style={{ border: "1px solid rgba(156,43,58,0.1)" }}>
              <FaqAccordion items={xelateFaq} accentColor="var(--xelate-red)" />
              <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(22,33,28,0.07)" }}>
                <Link
                  href="/faq"
                  className="text-sm font-medium"
                  style={{ color: "var(--xelate-blue)" }}
                >
                  See all FAQs →
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
