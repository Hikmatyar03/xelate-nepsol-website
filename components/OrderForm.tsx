"use client";

import { useState } from "react";

interface OrderFormProps {
  productName: string;
  primaryColor: string;
  secondaryColor?: string;
}

export default function OrderForm({
  productName,
  primaryColor,
  secondaryColor,
}: OrderFormProps) {
  const [quantity, setQuantity] = useState(1);
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello! I'd like to order:\n\n*Product:* ${productName}\n*Quantity:* ${quantity}\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Address:* ${form.address}\n\n*Payment:* Cash on Delivery`
    );
  };

  const handleCOD = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) return;
    const waUrl = `https://wa.me/?text=${buildWhatsAppMessage()}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="rounded-2xl p-8 text-center glass-panel"
        style={{ borderColor: `${primaryColor}30` }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl"
          style={{ backgroundColor: `${primaryColor}15` }}
        >
          ✓
        </div>
        <h3 className="font-display font-bold text-xl mb-2" style={{ color: primaryColor }}>
          Order Sent!
        </h3>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          We've opened WhatsApp with your order details. Our team will confirm your order shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm underline"
          style={{ color: "var(--text-muted)" }}
        >
          Place another order
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleCOD} className="space-y-4">
      {/* Quantity selector */}
      <div>
        <label className="block text-sm font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
          Quantity
        </label>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all hover:scale-105 active:scale-95"
            style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
          >
            −
          </button>
          <span
            className="w-12 text-center font-bold text-xl font-display"
            style={{ color: "var(--text-primary)" }}
          >
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all hover:scale-105 active:scale-95"
            style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
          >
            +
          </button>
          <span className="text-sm ml-1" style={{ color: "var(--text-muted)" }}>
            × {productName}
          </span>
        </div>
      </div>

      {/* Price placeholder */}
      <div
        className="flex items-center justify-between py-3 px-4 rounded-xl"
        style={{ backgroundColor: `${primaryColor}08` }}
      >
        <span className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
          Price per unit
        </span>
        <span
          className="font-display font-bold text-lg italic"
          style={{ color: primaryColor }}
        >
          [PRICE — Coming Soon]
        </span>
      </div>

      {/* Name */}
      <div>
        <label htmlFor="order-name" className="block text-sm font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
          Full Name *
        </label>
        <input
          id="order-name"
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 glass-panel border-0"
          style={{
            color: "var(--text-primary)",
            boxShadow: "0 0 0 1px rgba(22,33,28,0.1)",
          } as React.CSSProperties}
          onFocus={(e) =>
            (e.target.style.boxShadow = `0 0 0 2px ${primaryColor}40`)
          }
          onBlur={(e) =>
            (e.target.style.boxShadow = "0 0 0 1px rgba(22,33,28,0.1)")
          }
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="order-phone" className="block text-sm font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
          Phone / WhatsApp *
        </label>
        <input
          id="order-phone"
          type="tel"
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="+92 3XX XXXXXXX"
          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 glass-panel border-0"
          style={{
            color: "var(--text-primary)",
            boxShadow: "0 0 0 1px rgba(22,33,28,0.1)",
          }}
          onFocus={(e) =>
            (e.target.style.boxShadow = `0 0 0 2px ${primaryColor}40`)
          }
          onBlur={(e) =>
            (e.target.style.boxShadow = "0 0 0 1px rgba(22,33,28,0.1)")
          }
        />
      </div>

      {/* Address */}
      <div>
        <label htmlFor="order-address" className="block text-sm font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
          Delivery Address *
        </label>
        <textarea
          id="order-address"
          name="address"
          required
          rows={3}
          value={form.address}
          onChange={handleChange}
          placeholder="Street, City, Province"
          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 glass-panel border-0 resize-none"
          style={{
            color: "var(--text-primary)",
            boxShadow: "0 0 0 1px rgba(22,33,28,0.1)",
          }}
          onFocus={(e) =>
            (e.target.style.boxShadow = `0 0 0 2px ${primaryColor}40`)
          }
          onBlur={(e) =>
            (e.target.style.boxShadow = "0 0 0 1px rgba(22,33,28,0.1)")
          }
        />
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          type="submit"
          className="flex-1 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
          style={{ backgroundColor: primaryColor }}
        >
          Place Order (Cash on Delivery)
        </button>
        <button
          type="button"
          disabled
          title="Payment gateway coming soon"
          className="flex-1 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 opacity-50 cursor-not-allowed"
          style={{
            border: `1.5px solid ${primaryColor}`,
            color: primaryColor,
          }}
        >
          Pay Online (Coming Soon)
        </button>
      </div>

      <p className="text-xs text-center pt-1" style={{ color: "var(--text-muted-light)" }}>
        Placing order opens WhatsApp with your details pre-filled.
      </p>
    </form>
  );
}
