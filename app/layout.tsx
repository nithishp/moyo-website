import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import MainNav from "@/components/mainNav";
import LenisProvider from "@/components/LenisProvider";
import CursorFollower from "@/components/CursorFollower";
import ScrollProgress from "@/components/ScrollProgress";
import { Toaster } from "sonner";
import "./global.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MOYO — Everyone Deserves the Best",
  description:
    "Premium home essentials — Tissues, Aluminium Foil, and Sustainable Bags designed for every household.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body
        style={{
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
          backgroundColor: "#FAF7F2",
          color: "#1A1510",
        }}
      >
        <LenisProvider>
          <CursorFollower />
          <ScrollProgress />
          <MainNav />
          <div className="min-h-screen w-full">{children}</div>
          <Toaster />
        </LenisProvider>
      </body>
    </html>
  );
}
