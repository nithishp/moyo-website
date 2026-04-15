"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  Products: [
    { label: "Tissue Boxes", href: "/product-categories/tissue-box" },
    { label: "Aluminium Foil", href: "/product-categories/aluminium-foil" },
    { label: "Waste Bags", href: "/product-categories/waste-bags" },
    { label: "All Products", href: "/product-categories/all" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Story", href: "/about" },
    { label: "Distributors", href: "/#contact" },
    { label: "Careers", href: "#" },
  ],
  Contact: [
    { label: "hello@moyohome.com", href: "mailto:hello@moyohome.com" },
    { label: "+1 (800) MOYO-HOME", href: "tel:+18006696466" },
    { label: "123 Brand Street, NY", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#140F0A" }} className="text-white">
      {/* Top rule */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, #C41230 30%, #C41230 70%, transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        {/* Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <Image
              src="/brand/moyo-logo-white.png"
              alt="MOYO"
              width={120}
              height={48}
              className="w-28 object-contain"
            />
            <p
              style={{
                color: "#786E63",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.875rem",
                lineHeight: "1.7",
              }}
            >
              Premium home essentials crafted for everyday elegance. Every home
              deserves the best.
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              {["IG", "FB", "TW"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.65rem",
                    color: "#786E63",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#C41230";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.12)";
                    e.currentTarget.style.color = "#786E63";
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="flex flex-col gap-5">
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#fff",
                }}
              >
                {heading}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "0.875rem",
                        color: "#786E63",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#786E63";
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.8rem",
              color: "#786E63",
            }}
          >
            © {new Date().getFullYear()} Leal Groups. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Use"].map((t) => (
              <a
                key={t}
                href="#"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.8rem",
                  color: "#786E63",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#786E63";
                }}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
