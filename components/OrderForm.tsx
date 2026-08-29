"use client";

import { useState } from "react";
import { CheckCircle2, Minus, Plus, MessageSquare } from "lucide-react";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello! I would like to place an order:\n\n*Product:* ${productName}\n*Quantity:* ${quantity}\n*Full Name:* ${form.name}\n*Phone / WhatsApp:* ${form.phone}\n*Delivery Address:* ${form.address}\n\n*Payment Method:* Cash on Delivery (COD)`
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
        className="glass-card text-center p-8 sm:p-10"
        style={{ borderColor: `${primaryColor}40` }}
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
        >
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3
          className="font-display font-semibold text-2xl mb-2 tracking-tight"
          style={{ color: primaryColor }}
        >
          Order Details Sent!
        </h3>
        <p
          className="text-base max-w-md mx-auto leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          WhatsApp has opened with your order summary pre-filled. Please tap send to confirm your order directly with our customer support team.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold underline underline-offset-4"
          style={{ color: "var(--text-muted)" }}
        >
          Place another order
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleCOD} className="space-y-5">
      {/* Quantity selector (bordered stepper) */}
      <div>
        <label
          className="block text-xs font-semibold uppercase tracking-wider mb-2 text-stone-600"
        >
          Select Quantity
        </label>
        <div className="flex items-center gap-3">
          <div
            className="inline-flex items-center rounded-xl p-1 border bg-white/60"
            style={{ borderColor: "rgba(0, 0, 0, 0.1)" }}
          >
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all hover:bg-black/5 active:scale-95 text-stone-700"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span
              className="w-12 text-center font-bold text-lg font-display tabular-nums text-stone-900"
            >
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all hover:bg-black/5 active:scale-95 text-stone-700"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <span className="text-sm font-medium text-stone-600">
            × {productName}
          </span>
        </div>
      </div>

      {/* Price placeholder */}
      <div
        className="flex items-center justify-between py-3 px-4 rounded-xl border"
        style={{
          backgroundColor: `${primaryColor}06`,
          borderColor: `${primaryColor}20`,
        }}
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-600">
          Price per unit
        </span>
        <span
          className="font-display font-semibold text-lg"
          style={{ color: primaryColor }}
        >
          [PRICE — Coming Soon]
        </span>
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="order-name"
          className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-stone-700"
        >
          Full Name *
        </label>
        <input
          id="order-name"
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. Tariq Mehmood"
          className="w-full glass-input"
          onFocus={(e) => {
            e.target.style.borderColor = primaryColor;
            e.target.style.boxShadow = `0 0 0 2px ${primaryColor}30`;
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "rgba(0,0,0,0.1)";
            e.target.style.boxShadow = "none";
          }}
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="order-phone"
          className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-stone-700"
        >
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
          className="w-full glass-input"
          onFocus={(e) => {
            e.target.style.borderColor = primaryColor;
            e.target.style.boxShadow = `0 0 0 2px ${primaryColor}30`;
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "rgba(0,0,0,0.1)";
            e.target.style.boxShadow = "none";
          }}
        />
      </div>

      {/* Address */}
      <div>
        <label
          htmlFor="order-address"
          className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-stone-700"
        >
          Delivery Address *
        </label>
        <textarea
          id="order-address"
          name="address"
          required
          rows={3}
          value={form.address}
          onChange={handleChange}
          placeholder="House/Street, Area, City, Province"
          className="w-full glass-textarea resize-none"
          onFocus={(e) => {
            e.target.style.borderColor = primaryColor;
            e.target.style.boxShadow = `0 0 0 2px ${primaryColor}30`;
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "rgba(0,0,0,0.1)";
            e.target.style.boxShadow = "none";
          }}
        />
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          type="submit"
          className="w-full sm:flex-1 py-3.5 px-7 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] shadow-sm flex items-center justify-center gap-2"
          style={{ backgroundColor: primaryColor }}
        >
          <MessageSquare className="w-4 h-4" />
          <span>Place Order (Cash on Delivery)</span>
        </button>
        <button
          type="button"
          disabled
          title="Payment gateway coming soon"
          className="w-full sm:flex-1 py-3.5 px-7 rounded-xl font-semibold text-sm transition-all duration-200 opacity-50 cursor-not-allowed border bg-transparent flex items-center justify-center"
          style={{
            borderColor: primaryColor,
            color: primaryColor,
          }}
        >
          Pay Online (Coming Soon)
        </button>
      </div>

      <p
        className="text-xs text-center pt-1"
        style={{ color: "var(--text-muted-light)" }}
      >
        Submitting opens WhatsApp with your order details pre-formatted.
      </p>
    </form>
  );
}
