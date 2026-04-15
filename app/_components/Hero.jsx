"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";

const products = [
  { img: "/products/MOYO-PINK.png", label: "Tissue Box" },
  { img: "/products/GARBAGE-BAG.png", label: "Garbage Bag" },
  { img: "/products/ALUMINIUM-FOIL.png", label: "Aluminium Foil" },
  { img: "/products/DISPOSAL-BAG.png", label: "Disposal Bag" },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

// Magnetic button hook
function useMagnetic(strength = 0.35) {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 200, damping: 18 });
  const y = useSpring(0, { stiffness: 200, damping: 18 });

  const onMouseMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      x.set((e.clientX - cx) * strength);
      y.set((e.clientY - cy) * strength);
    },
    [x, y, strength],
  );

  const onMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { ref, x, y, onMouseMove, onMouseLeave };
}

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);

  // Parallax driven by Lenis scroll — avoids conflict with native scroll events
  const scrollY = useMotionValue(0);
  useEffect(() => {
    let cleanup = null;
    const attach = () => {
      const lenis = window.lenis;
      if (!lenis) return false;
      const handler = ({ scroll }) => scrollY.set(scroll);
      lenis.on("scroll", handler);
      cleanup = () => lenis.off("scroll", handler);
      return true;
    };
    if (!attach()) {
      const t = setTimeout(attach, 150);
      return () => {
        clearTimeout(t);
        cleanup?.();
      };
    }
    return () => cleanup?.();
  }, [scrollY]);

  const glowY = useTransform(scrollY, [0, 600], [0, -80]);
  const imageY = useTransform(scrollY, [0, 600], [0, -60]);
  const textY = useTransform(scrollY, [0, 600], [0, -30]);

  // Magnetic CTAs
  const primaryMag = useMagnetic(0.4);
  const secondaryMag = useMagnetic(0.3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ backgroundColor: "#140F0A" }}
    >
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.04,
        }}
      />

      {/* Crimson ambient glow — parallax */}
      <motion.div
        style={{
          y: glowY,
          top: "10%",
          right: "10%",
          width: "600px",
          height: "600px",
        }}
        className="absolute pointer-events-none"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.25, 0.18],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(circle, rgba(196,18,48,0.2) 0%, transparent 65%)",
            borderRadius: "50%",
          }}
        />
      </motion.div>

      {/* Horizontal line decoration */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(255,255,255,0.04)",
          transformOrigin: "left",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-28 lg:py-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text block — parallax */}
        <motion.div style={{ y: textY }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            style={{ color: "#FAF7F2" }}
          >
            <motion.span
              variants={fadeUp}
              style={{
                display: "inline-block",
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#C41230",
                marginBottom: "1.5rem",
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              }}
            >
              Premium Home Essentials
            </motion.span>

            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
                fontWeight: 300,
                lineHeight: 0.92,
                letterSpacing: "-0.01em",
                marginBottom: "1.5rem",
              }}
            >
              Every
              <br />
              <em style={{ fontStyle: "italic", color: "#C41230" }}>home</em>
              <br />
              deserves
              <br />
              the best
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{
                color: "#786E63",
                fontSize: "1rem",
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                maxWidth: "360px",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
              }}
            >
              From tissue boxes to kitchen essentials &mdash; MOYO brings
              quality you can feel into every room.
            </motion.p>

            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              {/* Magnetic primary CTA */}
              <motion.div
                ref={primaryMag.ref}
                style={{ x: primaryMag.x, y: primaryMag.y }}
                onMouseMove={primaryMag.onMouseMove}
                onMouseLeave={primaryMag.onMouseLeave}
              >
                <Link
                  href="/#products"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    backgroundColor: "#C41230",
                    color: "#ffffff",
                    padding: "0.9rem 1.75rem",
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition:
                      "background-color 0.25s ease, transform 0.15s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#A00E27")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#C41230")
                  }
                >
                  View Products &rarr;
                </Link>
              </motion.div>

              {/* Magnetic secondary CTA */}
              <motion.div
                ref={secondaryMag.ref}
                style={{ x: secondaryMag.x, y: secondaryMag.y }}
                onMouseMove={secondaryMag.onMouseMove}
                onMouseLeave={secondaryMag.onMouseLeave}
              >
                <Link
                  href="/#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                    fontWeight: 500,
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.2)",
                    paddingBottom: "2px",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.borderBottomColor =
                      "rgba(255,255,255,0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                    e.currentTarget.style.borderBottomColor =
                      "rgba(255,255,255,0.2)";
                  }}
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Product image showcase — parallax */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* Rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              width: "380px",
              height: "380px",
              borderRadius: "50%",
              border: "1px dashed rgba(196,18,48,0.15)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.04)",
              pointerEvents: "none",
            }}
          />

          {/* Product image */}
          <div
            style={{ position: "relative", width: "280px", height: "340px" }}
            className="lg:w-[340px] lg:h-[420px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.04, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: "absolute", inset: 0 }}
              >
                <Image
                  src={products[current].img}
                  alt={products[current].label}
                  fill
                  className="object-contain"
                  style={{ filter: "drop-shadow(0 24px 64px rgba(0,0,0,0.7))" }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Label */}
          <AnimatePresence mode="wait">
            <motion.span
              key={current}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              style={{
                position: "absolute",
                bottom: "-8px",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#786E63",
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              }}
            >
              {products[current].label}
            </motion.span>
          </AnimatePresence>

          {/* Dot indicators */}
          <div
            style={{
              position: "absolute",
              bottom: "-38px",
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            {products.map((_, i) => (
              <motion.button
                key={i}
                animate={{
                  width: i === current ? "24px" : "6px",
                  backgroundColor:
                    i === current ? "#C41230" : "rgba(255,255,255,0.2)",
                }}
                transition={{ duration: 0.3 }}
                onClick={() => setCurrent(i)}
                style={{
                  height: "6px",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: "absolute",
          bottom: "2.25rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#786E63",
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "40px",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
