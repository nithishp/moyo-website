"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useSpring(0, { stiffness: 300, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 300, damping: 28 });

  const dotX = useSpring(0, { stiffness: 800, damping: 40 });
  const dotY = useSpring(0, { stiffness: 800, damping: 40 });

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onEnterLink = () => setIsHovering(true);
    const onLeaveLink = () => setIsHovering(false);

    window.addEventListener("mousemove", onMove);

    const interactives = document.querySelectorAll("a, button, [data-cursor]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterLink);
        el.removeEventListener("mouseleave", onLeaveLink);
      });
    };
  }, [visible, mouseX, mouseY, dotX, dotY]);

  if (!visible) return null;

  return (
    <>
      {/* Outer ring — follows with lag */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovering ? "48px" : "32px",
          height: isHovering ? "48px" : "32px",
          borderRadius: "50%",
          border: `1px solid ${isHovering ? "rgba(196,18,48,0.6)" : "rgba(196,18,48,0.35)"}`,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
          transition:
            "width 0.25s ease, height 0.25s ease, border-color 0.25s ease",
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Inner dot — follows precisely */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          position: "fixed",
          top: 0,
          left: 0,
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          backgroundColor: "#C41230",
          pointerEvents: "none",
          zIndex: 10000,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
