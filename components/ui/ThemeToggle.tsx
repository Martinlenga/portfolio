"use client";

import { useState } from "react";
import { Terminal } from "lucide-react";

export default function ThemeToggle() {
  const [isActive, setIsActive] = useState(true);

  // For this aesthetic, we stay in dark mode, but this toggles a "HUD" state
  const toggleSystem = () => {
    setIsActive(!isActive);
    // You can hook this up to change CSS variables or just play a sound!
  };

  return (
    <button 
      onClick={toggleSystem}
      className={`flex items-center gap-2 font-mono text-xs uppercase px-3 py-1 border transition-all ${
        isActive 
          ? "border-neon text-neon shadow-[0_0_10px_rgba(57,255,20,0.2)]" 
          : "border-stark/20 text-muted hover:border-stark/50"
      }`}
    >
      <Terminal size={14} />
      {isActive ? "SYS_ONLINE" : "SYS_STANDBY"}
    </button>
  );
}