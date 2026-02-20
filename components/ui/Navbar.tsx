"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const sections = ["hero", "about", "projects", "experience", "skills", "contact"];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cmdOpen, setCmdOpen] = useState(false);

  // Handle Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollY / docHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FIX 3: Added ESC key to the event listener
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCmdOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setCmdOpen(false);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const jumpTo = (id: string) => {
    setCmdOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Progress HUD Line */}
      <div className="fixed top-0 left-0 h-[2px] bg-neon z-[60] shadow-[0_0_10px_var(--color-neon)]" style={{ width: `${scrollProgress}%` }} />

      {/* Minimal Top Bar */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference pointer-events-none">
        <div 
          className="text-2xl font-black text-stark tracking-tighter cursor-pointer uppercase pointer-events-auto"
          onClick={() => jumpTo("hero")}
        >
          ML.
        </div>

        <div className="flex items-center gap-6 pointer-events-auto">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          
          {/* Command Palette Trigger */}
          <button 
            onClick={() => setCmdOpen(true)}
            className="flex items-center gap-2 text-stark/70 hover:text-neon font-mono text-sm uppercase transition-colors"
          >
            <Search size={16} />
            <span className="hidden md:inline">Menu</span>
            <kbd className="hidden md:flex items-center gap-1 bg-stark/10 px-2 py-1 rounded text-xs border border-stark/20">
              <Command size={12} /> K
            </kbd>
          </button>
        </div>
      </nav>

      {/* Command Palette Overlay (CMD+K) */}
      <AnimatePresence>
        {cmdOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-void/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={() => setCmdOpen(false)}></div>

            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-surface border border-stark/20 shadow-2xl flex flex-col overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-stark/10 bg-void/50">
                <div className="flex items-center gap-3 text-neon font-mono text-sm">
                  <Command size={16} />
                  <span>SYSTEM_NAVIGATION</span>
                </div>
                <button onClick={() => setCmdOpen(false)} className="text-stark/50 hover:text-neon transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="p-2 flex flex-col gap-1">
                <div className="px-4 py-2 text-xs font-mono text-muted uppercase tracking-widest">Available Routes</div>
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => jumpTo(section)}
                    className="w-full text-left px-4 py-4 font-mono uppercase text-stark hover:bg-neon hover:text-void transition-colors group flex justify-between items-center"
                  >
                    <span>{section}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">{"[ ENTER ]"}</span>
                  </button>
                ))}
              </div>
              
              <div className="p-4 border-t border-stark/10 bg-void/50 flex justify-between items-center text-xs font-mono text-muted">
                <span>Use mouse or touch to navigate.</span>
                <span className="hidden md:block">ESC to cancel</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}