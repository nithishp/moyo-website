"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Products", path: "/#products" },
  { title: "About Us", path: "/about" },
  { title: "Contact", path: "/#contact" },
];

// Smooth-scroll to hash anchors using Lenis if available
function handleAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  path: string,
) {
  const hash = path.includes("#") ? path.split("#")[1] : null;
  if (!hash || typeof window === "undefined") return;
  const lenis = (window as unknown as Record<string, unknown>).lenis as
    | { scrollTo?: (target: string, opts?: object) => void }
    | undefined;
  if (!lenis?.scrollTo) return;
  const el = document.getElementById(hash);
  if (!el) return;
  e.preventDefault();
  lenis.scrollTo(`#${hash}`, { offset: -80, duration: 1.4 });
}

export default function MainNav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          scrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-sm shadow-[0_1px_0_0_#E0D8CC]"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src={
                scrolled
                  ? "/brand/moyo-logo-black.png"
                  : "/brand/moyo-logo-white.png"
              }
              alt="MOYO"
              width={90}
              height={36}
              className="transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.path}
                onClick={(e) => handleAnchorClick(e, link.path)}
                className={cn(
                  "text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-200 relative group py-1",
                  scrolled ? "text-[#1A1510]" : "text-white/90",
                )}
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                }}
              >
                {link.title}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-px transition-all duration-300",
                    scrolled ? "bg-[#C41230]" : "bg-white",
                    "w-0 group-hover:w-full",
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "md:hidden p-2 transition-colors duration-200",
              scrolled ? "text-[#1A1510]" : "text-white",
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-16 z-40 bg-[#FAF7F2] border-b border-[#E0D8CC] px-6 py-4 shadow-sm"
          >
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.path}
                onClick={(e) => {
                  setMobileOpen(false);
                  handleAnchorClick(e, link.path);
                }}
                className="flex items-center py-3 text-xs tracking-[0.2em] uppercase font-medium text-[#1A1510] border-b border-[#E0D8CC] last:border-0 hover:text-[#C41230] transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                }}
              >
                {link.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
