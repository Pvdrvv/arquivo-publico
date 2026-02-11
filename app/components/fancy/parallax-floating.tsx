"use client";
import React, { createContext, useContext, useEffect, useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useSpring } from "framer-motion";

const FloatingContext = createContext({ x: { get: () => 0 }, y: { get: () => 0 } });

export function Floating({ children, sensitivity = 0.1, className = "" }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouse = (e) => {
      x.set((e.clientX - window.innerWidth / 2) * sensitivity);
      y.set((e.clientY - window.innerHeight / 2) * sensitivity);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [sensitivity, x, y]);

  return (
    <FloatingContext.Provider value={{ x, y }}>
      <div className={`relative overflow-hidden ${className}`}>{children}</div>
    </FloatingContext.Provider>
  );
}

export function FloatingElement({ children, depth = 1, className = "" }) {
  const { x, y } = useContext(FloatingContext);
  const springX = useSpring(0, { damping: 20, stiffness: 100 });
  const springY = useSpring(0, { damping: 20, stiffness: 100 });

  useAnimationFrame(() => {
    springX.set(x.get() * depth);
    springY.set(y.get() * depth);
  });

  return (
    <motion.div style={{ x: springX, y: springY }} className={className}>
      {children}
    </motion.div>
  );
}