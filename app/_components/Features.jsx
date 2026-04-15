"use client";
// REDESIGNED
import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const categories = [
  {
    number: "01",
    title: "Tissue Box",
    tagline: "Softness you can feel",
    description:
      "MOYO's tissue boxes deliver ultra-soft, absorbent tissues perfect for everyday use. Crafted from 100% virgin pulp, each pull is gentle on skin while keeping your space elegant.",
    features: [
      "Soft & Absorbent",
      "Elegant Box Design",
      "Eco-Friendly Materials",
    ],
    image: "/products/TISSUE-BOX-RED.png",
    href: "/product-details/1",
  },
  {
    number: "02",
    title: "Aluminium Foil",
    tagline: "Kitchen mastery, wrapped",
    description:
      "Professional-grade aluminium foil for cooking, wrapping, and storing. MOYO's foil offers superior heat retention and an impeccable seal to keep your food fresh.",
    features: [
      "Superior Heat Retention",
      "Tear-Resistant",
      "Food-Safe Coating",
    ],
    image: "/products/ALUMINIUM-FOIL.png",
    href: "/product-details/2",
  },
  {
    number: "03",
    title: "Waste Bags",
    tagline: "Hygiene, handled",
    description:
      "Reliable, heavy-duty bags for home, office, and institutional use. MOYO's waste bags are built to last, keeping your spaces clean without compromise.",
    features: ["Heavy-Duty Construction", "Leak-Proof Seal", "Multiple Sizes"],
    image: "/products/GARBAGE-BAG.png",
    href: "/product-details/3",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      style={{ backgroundColor: "#FAF7F2" }}
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#C41230",
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            }}
          >
            Our Catalogue
          </span>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 300,
              color: "#1A1510",
              lineHeight: 1.1,
              marginTop: "0.75rem",
            }}
          >
            Products made
            <br />
            for{" "}
            <em style={{ fontStyle: "italic", color: "#C41230" }}>
              every home
            </em>
          </h2>
        </motion.div>

        {/* Product feature rows */}
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: "4rem 0",
              borderTop: "1px solid #E0D8CC",
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 md:items-center"
          >
            {/* Text */}
            <div className={i % 2 === 1 ? "md:order-2" : "md:order-1"}>
              <span
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "6rem",
                  fontWeight: 300,
                  color: "#E8DDD0",
                  lineHeight: 1,
                  display: "block",
                  marginBottom: "-1rem",
                  userSelect: "none",
                }}
              >
                {cat.number}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 500,
                  color: "#1A1510",
                  marginBottom: "0.5rem",
                  lineHeight: 1.1,
                }}
              >
                {cat.title}
              </h3>
              <p
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#C41230",
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  marginBottom: "1.25rem",
                }}
              >
                {cat.tagline}
              </p>
              <p
                style={{
                  color: "#786E63",
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                  maxWidth: "420px",
                  fontSize: "0.95rem",
                }}
              >
                {cat.description}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  marginBottom: "2.5rem",
                }}
              >
                {cat.features.map((f, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.75rem",
                      fontSize: "0.85rem",
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      color: "#1A1510",
                    }}
                  >
                    <span
                      style={{
                        width: "20px",
                        height: "1px",
                        backgroundColor: "#C41230",
                        flexShrink: 0,
                        display: "block",
                      }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={cat.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  fontWeight: 500,
                  color: "#1A1510",
                  textDecoration: "none",
                  borderBottom: "1px solid #1A1510",
                  paddingBottom: "2px",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#C41230";
                  e.currentTarget.style.borderBottomColor = "#C41230";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#1A1510";
                  e.currentTarget.style.borderBottomColor = "#1A1510";
                }}
              >
                View Product &rarr;
              </a>
            </div>

            {/* Image */}
            <div
              style={{ position: "relative" }}
              className={i % 2 === 1 ? "md:order-1" : "md:order-2"}
            >
              <motion.div
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 1.1,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.1,
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F0EBE0",
                    aspectRatio: "1 / 1",
                    position: "relative",
                    overflow: "hidden",
                    maxHeight: "520px",
                    maxWidth: "520px",
                    margin: "0 auto",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ position: "absolute", inset: 0 }}
                  >
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-contain"
                      style={{ padding: "2rem" }}
                      sizes="(max-width: 768px) 90vw, 45vw"
                    />
                  </motion.div>
                </div>
              </motion.div>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: -1,
                  backgroundColor: "#E0D8CC",
                  transform:
                    i % 2 === 0
                      ? "translate(12px, 12px)"
                      : "translate(-12px, 12px)",
                  maxHeight: "520px",
                  maxWidth: "520px",
                  margin: "0 auto",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
