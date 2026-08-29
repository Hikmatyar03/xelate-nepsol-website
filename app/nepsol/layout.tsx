import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nepsol — Effective in Relief from Kidney Stone",
  description:
    "Nepsol is a DRAP-registered herbal sachet formula (10 sachets per carton) with 8 active ingredients, clinically indicated for kidney stone conditions, UTI relief, and urinary tract health. Drap En. No: 00636.",
};

export default function NepsolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
