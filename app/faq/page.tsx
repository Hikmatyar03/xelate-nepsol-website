import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import FaqTabs from "@/components/FaqTabs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Xelate kidney health capsules and Nepsol kidney stone relief sachets — ingredients, usage, dosage, shipping, and more.",
};

const generalFaqs = [
  {
    q: "How does shipping work?",
    a: "[Placeholder — shipping policy to be provided by client before launch. Orders will be shipped via standard courier services across Pakistan.]",
    isPlaceholder: true,
  },
  {
    q: "What is your returns policy?",
    a: "[Placeholder — returns policy to be provided by client before launch. Generally, unused and sealed products may be eligible for return within a specified window.]",
    isPlaceholder: true,
  },
  {
    q: "How does Cash on Delivery (COD) work?",
    a: "[Placeholder — COD policy to be provided by client before launch. Typically: place your order, receive your parcel, then pay the courier in cash upon delivery. No upfront payment required.]",
    isPlaceholder: true,
  },
];

export default function FaqPage() {
  return (
    <>
      <Navbar />

      <main
        className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--bg-canvas)" }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p
              className="pill mb-3 mx-auto"
              style={{ color: "var(--text-muted)", backgroundColor: "rgba(22,33,28,0.06)" }}
            >
              Help & Information
            </p>
            <h1
              className="text-4xl md:text-5xl font-display font-extrabold"
              style={{ color: "var(--text-primary)" }}
            >
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-base" style={{ color: "var(--text-muted)" }}>
              Everything you need to know about Xelate, Nepsol, and your order.
            </p>
          </div>

          {/* General FAQs */}
          <div className="mb-12">
            <h2
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "var(--text-muted)" }}
            >
              General — Shipping, Returns & Orders
            </h2>
            <div
              className="glass-panel rounded-2xl p-8"
              style={{ border: "1px solid rgba(22,33,28,0.08)" }}
            >
              <FaqAccordion items={generalFaqs} accentColor="var(--text-primary)" />
            </div>
          </div>

          {/* Product FAQs — tabbed (client component) */}
          <div>
            <h2
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "var(--text-muted)" }}
            >
              Product Questions
            </h2>
            <FaqTabs />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
