import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xelate — Advanced Kidney Health Support",
  description:
    "Xelate is a 30-capsule kidney health supplement enriched with essential nutrients to support kidney health and general well-being.",
};

export default function XelateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
