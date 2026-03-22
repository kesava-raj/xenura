import type { Metadata } from "next";
import { Syne, DM_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import ScrollAnimations from "./components/ScrollAnimations";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Xenura — Engineering the Future",
  description: "Engineering intelligent systems for the companies building tomorrow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmMono.variable} ${outfit.variable}`}>
      <body>
        <Cursor />
        <AnimatedBackground />
        <ScrollAnimations />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
