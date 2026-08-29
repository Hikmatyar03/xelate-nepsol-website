import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import FaqTabs from "@/components/FaqTabs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Frequently asked questions about Xelate kidney health capsules and Nepsol kidney stone relief sachets — ingredients, usage, dosage, shipping, and more.",
};

const generalFaqs = [
  {
    q: "How does shipping work?",
    a: "[[Placeholder — shipping policy to be confirmed by client before official launch. Orders will be shipped via nationwide courier services.]]",
    isPlaceholder: true,
  },
  {
    q: "What is your returns policy?",
    a: "[[Placeholder — returns policy to be confirmed by client before official launch. Typically, sealed products in original packaging are eligible for return within a specified period.]]",
    isPlaceholder: true,
  },
  {
    q: "How does Cash on Delivery (COD) work?",
    a: "[[Placeholder — COD policy to be confirmed by client before official launch. With COD, you place your order online and pay cash to the courier upon parcel delivery with no advance payment required.]]",
    isPlaceholder: true,
  },
];

export default function FaqPage() {
  return (
    <>
      <Navbar />

      <main
        className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 bloom-sage"
        style={{ backgroundColor: "var(--bg-canvas)" }}
      >
        <div className="max-w-3xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-14">
            <p
              className="pill mb-3 mx-auto"
              style={{
                color: "var(--text-muted)",
                backgroundColor: "rgba(22,33,28,0.06)",
              }}
            >
              Help & Information
            </p>
            <h1
              className="text-4xl md:text-5xl font-display font-semibold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Frequently Asked Questions
            </h1>
            <p
              className="mt-4 text-base sm:text-lg max-w-xl mx-auto"
              style={{ color: "var(--text-muted)" }}
            >
              Everything you need to know about Xelate daily support, Nepsol stone relief, and your order.
            </p>
          </div>

          {/* General FAQs */}
          <div className="mb-14">
            <h2
              className="text-xs font-bold uppercase tracking-widest mb-5 text-stone-600"
            >
              General — Shipping, Returns & Orders
            </h2>
            <div className="glass-card p-6 sm:p-8">
              <FaqAccordion items={generalFaqs} accentColor="var(--text-primary)" />
            </div>
          </div>

          {/* Product FAQs — tabbed */}
          <div>
            <h2
              className="text-xs font-bold uppercase tracking-widest mb-5 text-stone-600"
            >
              Product Inquiries
            </h2>
            <FaqTabs />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
