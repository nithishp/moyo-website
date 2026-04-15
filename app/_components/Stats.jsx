"use client";
import React from "react";
import Counter from "@/components/animata/text/counter";
import { motion } from "framer-motion";

const stats = [
  {
    value: 100,
    suffix: "+",
    label: "Distributors",
    detail: "Across the country",
  },
  {
    value: 50000,
    suffix: "+",
    label: "Happy Customers",
    detail: "Trust MOYO daily",
  },
  { value: 20, suffix: "+", label: "Products", detail: "Curated essentials" },
  {
    value: 100,
    suffix: "%",
    label: "Sustainable",
    detail: "Eco-friendly materials",
  },
];

const Stats = () => {
  return (
    <section
      style={{
        backgroundColor: "#140F0A",
        position: "relative",
        overflow: "hidden",
      }}
      className="py-20"
    >
      {/* Top gradient line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(196,18,48,0.5), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div
          style={{
            gap: "1px",
            backgroundColor: "rgba(255,255,255,0.06)",
          }}
          className="grid grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ backgroundColor: "#140F0A", padding: "3rem 2rem" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(3rem, 5vw, 5rem)",
                  fontWeight: 300,
                  color: "#FAF7F2",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "2px",
                }}
              >
                <Counter targetValue={stat.value} />
                <span style={{ color: "#C41230" }}>{stat.suffix}</span>
              </p>
              <p
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(250,247,242,0.7)",
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  marginBottom: "0.25rem",
                }}
              >
                {stat.label}
              </p>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#786E63",
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                }}
              >
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(196,18,48,0.5), transparent)",
        }}
      />
    </section>
  );
};

export default Stats;
