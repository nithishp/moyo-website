"use client";
import { motion } from "framer-motion";
import styles from "./SplashScreen.module.css";

export const SplashScreen = () => {
  return (
    <div className={styles.splashScreen}>
      {/* Crimson glow */}
      <div
        style={{
          position: "absolute",
          width: "480px",
          height: "480px",
          background:
            "radial-gradient(circle, rgba(196,18,48,0.25) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", position: "relative", zIndex: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.18em" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-cormorant), BankGothic, Georgia, serif",
            fontSize: "clamp(4rem, 12vw, 9rem)",
            fontWeight: 300,
            color: "#ffffff",
            lineHeight: 1,
            margin: 0,
          }}
        >
          MOYO
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, transparent, #C41230, transparent)",
            margin: "16px auto",
            width: "200px",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            margin: 0,
          }}
        >
          Everyone deserves the best
        </motion.p>
      </motion.div>
    </div>
  );
};
