import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        backgroundColor: "var(--bg-canvas-dark)",
        borderTop: "1px solid rgba(22,33,28,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center mb-4">
              <span
                className="font-display font-semibold text-xl tracking-tight"
                style={{ color: "var(--xelate-red)" }}
              >
                Xelate
              </span>
              <span className="mx-2.5 h-4 w-px bg-stone-300 inline-block" />
              <span
                className="font-display font-semibold text-xl tracking-tight"
                style={{ color: "var(--nepsol-green)" }}
              >
                Nepsol
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Two precision-formulated kidney health products, made to support your urinary system from daily wellness to targeted stone relief.
            </p>

            {/* Support channels */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Support"
                className="px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 hover:scale-105 border bg-white/60"
                style={{
                  borderColor: "rgba(43,158,82,0.3)",
                  color: "var(--nepsol-forest)",
                }}
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Support</span>
              </a>
            </div>
          </div>

          {/* Col 2 — Quick links */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Xelate (Capsules)", href: "/xelate" },
                { label: "Nepsol (Sachets)", href: "/nepsol" },
                { label: "Frequently Asked Questions", href: "/faq" },
                { label: "Order Xelate", href: "/xelate#buy" },
                { label: "Order Nepsol", href: "/nepsol#buy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-[var(--nepsol-green)]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact + Regulatory */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              Contact & Inquiries
            </h3>
            <ul className="space-y-3 text-sm" style={{ color: "var(--text-muted)" }}>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-stone-400 flex-shrink-0" />
                <span>[Phone / WhatsApp — placeholder]</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-stone-400 flex-shrink-0" />
                <span>[Email — placeholder]</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" />
                <span>[Distribution / Office address — placeholder]</span>
              </li>
            </ul>

            <div
              className="mt-6 pt-6 text-xs leading-relaxed"
              style={{
                color: "var(--text-muted-light)",
                borderTop: "1px solid rgba(22,33,28,0.08)",
              }}
            >
              <p className="font-semibold mb-1 text-stone-600">
                Nepsol — Drap En. No: 00636
              </p>
              <p>Manufactured by Silvia Laboratories.</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{
            borderTop: "1px solid rgba(22,33,28,0.08)",
            color: "var(--text-muted-light)",
          }}
        >
          <p>© {new Date().getFullYear()} Xelate · Nepsol. All rights reserved.</p>
          <p className="text-center sm:text-right max-w-sm">
            Consult your physician before starting any new supplement or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
}
