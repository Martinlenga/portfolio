"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);

  const scramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3; // Controls the speed of the unscramble
    }, 30);
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      onViewportEnter={() => scramble()} // <--- THIS IS THE FIX
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => scramble()}
    >
      {displayText}
    </motion.span>
  );
}