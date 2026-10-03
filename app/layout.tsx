import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Oswald, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollIndicator from "@/components/ScrollIndicator";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leszno Tire Lab — Automotive Performance Lab",
  description:
    "Precision tire service, fitment and performance setup in Leszno, Poland. Montaż, wyważanie i serwis opon dla kierowców, którzy wymagają więcej.",
  metadataBase: new URL("https://lesznotirelab.pl"),
  openGraph: {
    title: "Leszno Tire Lab",
    description: "Performance starts from the road.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pl" className={`${oswald.variable} ${inter.variable} ${mono.variable}`}>
      <body className="bg-graphite-950">
        <ScrollIndicator />
        {children}
      </body>
    </html>
  );
}
