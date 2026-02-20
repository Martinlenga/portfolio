"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
}

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const baseStyle = "relative inline-flex items-center justify-center px-8 py-4 font-bold uppercase tracking-widest transition-all duration-300 overflow-hidden group";
  
  const variants = {
    primary: "bg-neon text-void",
    outline: "border border-stark/30 text-stark hover:border-neon hover:text-neon hover:shadow-neon-glow font-mono",
    ghost: "text-muted hover:text-neon bg-transparent font-mono",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-void transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
      )}
      <span className={`relative z-10 ${variant === 'primary' ? 'group-hover:text-stark transition-colors' : ''}`}>
        {children}
      </span>
    </button>
  );
}