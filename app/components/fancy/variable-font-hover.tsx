"use client";
import { motion } from "framer-motion";

export function VariableFontHoverByLetter({ label, fromFontVariationSettings, toFontVariationSettings, className = "" }) {
  return (
    <motion.span 
      className={`inline-block ${className}`}
      initial={{ fontVariationSettings: fromFontVariationSettings }}
      whileHover={{ fontVariationSettings: toFontVariationSettings }}
      transition={{ duration: 0.3 }}
    >
      {label}
    </motion.span>
  );
}