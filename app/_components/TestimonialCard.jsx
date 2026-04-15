"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { testimonials } from "@/data";
import { motion, useScroll, useTransform } from "framer-motion";

// Infinite marquee row
const MarqueeRow = ({ items, direction = 1, speed = 30 }) => {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <motion.div
        animate={{ x: direction > 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: "1rem", width: "max-content" }}
      >
        {doubled.map((t, i) => (
          <div
            key={i}
            style={{
              width: "320px",
              flexShrink: 0,
              padding: "1.5rem",
              border: "1px solid #E0D8CC",
              backgroundColor: "#FAF7F2",
              position: "relative",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "3.5rem",
                color: "#E0D8CC",
                lineHeight: 1,
                display: "block",
                marginTop: "-0.5rem",
                marginBottom: "0.25rem",
                userSelect: "none",
              }}
            >
              &ldquo;
            </span>
            <p
              style={{
                color: "#786E63",
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                fontSize: "0.85rem",
                lineHeight: 1.75,
                marginBottom: "1.25rem",
              }}
            >
              {t.feedback}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Image
                src={t.image}
                alt={t.name}
                width={36}
                height={36}
                style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0, width: "36px", height: "36px" }}
              />
              <div>
                <p style={{ color: "#1A1510", fontFamily: "var(--font-dm-sans)", fontSize: "0.8rem", fontWeight: 600 }}>
                  {t.name}
                </p>
                <p style={{ color: "#786E63", fontFamily: "var(--font-dm-sans)", fontSize: "0.7rem" }}>
                  {t.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Testimonialcard = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const headingX = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  const half = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, half);
  const row2 = testimonials.slice(half);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      style={{ backgroundColor: "#FAF7F2", overflow: "hidden" }}
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: "block",
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#C41230",
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            marginBottom: "0.75rem",
          }}
        >
          What People Say
        </motion.span>
        <motion.h2
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 300,
            color: "#1A1510",
            lineHeight: 1.1,
            x: headingX,
          }}
        >
          Loved by{" "}
          <em style={{ fontStyle: "italic", color: "#C41230" }}>thousands</em>
        </motion.h2>
      </div>

      {/* Fade masks */}
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: 0, bottom: 0, left: 0,
            width: "120px",
            background: "linear-gradient(to right, #FAF7F2, transparent)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0, bottom: 0, right: 0,
            width: "120px",
            background: "linear-gradient(to left, #FAF7F2, transparent)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <MarqueeRow items={row1} direction={1} speed={40} />
          <MarqueeRow items={row2} direction={-1} speed={34} />
        </div>
      </div>
    </section>
  );
};

export default Testimonialcard;
