import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Xelate & Nepsol — Kidney Health Solutions",
    template: "%s | Xelate & Nepsol",
  },
  description:
    "Two precision-formulated kidney health products: Xelate for advanced daily kidney support, and Nepsol for effective relief from kidney stones. DRAP-registered.",
  keywords: [
    "Xelate",
    "Nepsol",
    "kidney health",
    "kidney stone relief",
    "urinary health",
    "sachets",
    "capsules",
    "DRAP registered",
  ],
  openGraph: {
    type: "website",
    siteName: "Xelate & Nepsol",
    locale: "en_PK",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&f[]=switzer@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
