import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: "var(--bg-canvas-dark)", borderTop: "1px solid rgba(22,33,28,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span
                className="font-display font-bold text-xl"
                style={{ color: "var(--xelate-red)" }}
              >
                Xelate
              </span>
              <span className="text-gray-400 mx-1">·</span>
              <span
                className="font-display font-bold text-xl"
                style={{ color: "var(--nepsol-green)" }}
              >
                Nepsol
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Two precision-formulated kidney health products, made to support your urinary system from daily wellness to targeted stone relief.
            </p>
            {/* Social placeholders */}
            <div className="flex gap-3 mt-6">
              {["F", "IG", "WA"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s === "F" ? "Facebook" : s === "IG" ? "Instagram" : "WhatsApp"}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(22,33,28,0.07)",
                    color: "var(--text-muted)",
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Xelate", href: "/xelate" },
                { label: "Nepsol", href: "/nepsol" },
                { label: "FAQ", href: "/faq" },
                { label: "Buy Xelate", href: "/xelate#buy" },
                { label: "Buy Nepsol", href: "/nepsol#buy" },
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
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
              <li>[Phone / WhatsApp — placeholder]</li>
              <li>[Email — placeholder]</li>
              <li>[Address — placeholder]</li>
            </ul>

            <div
              className="mt-6 pt-6 text-xs leading-relaxed"
              style={{
                color: "var(--text-muted-light)",
                borderTop: "1px solid rgba(22,33,28,0.08)",
              }}
            >
              <p className="font-semibold mb-1">Nepsol — Drap En. No: 00636</p>
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
