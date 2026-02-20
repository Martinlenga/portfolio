"use client";

export default function Footer() {
  return (
    <footer className="bg-void text-muted py-8 px-6 md:px-20 border-t border-stark/10 font-mono text-xs md:text-sm uppercase flex flex-col md:flex-row justify-between items-center gap-4 relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-[1px] bg-neon shadow-[0_0_20px_rgba(57,255,20,0.8)] opacity-20"></div>

      <div className="flex items-center gap-4">
        <span className="w-2 h-2 bg-neon rounded-full animate-pulse"></span>
        <span>STATUS: ACTIVE // {new Date().getFullYear()}</span>
      </div>

      <div className="text-center md:text-left">
        <p>Built with <span className="text-stark">Next.js</span> & <span className="text-stark">Framer Motion</span></p>
      </div>

      <div className="flex gap-6 items-center">
        {/* The API Flex */}
        <a 
          href="/api/resume" 
          target="_blank" 
          className="text-stark/50 hover:text-neon transition-colors font-mono flex items-center gap-2 group"
        >
          <span className="text-neon opacity-0 group-hover:opacity-100 transition-opacity">GET</span> 
          /api/resume
        </a>
        <p className="opacity-50 hover:opacity-100 transition-colors cursor-crosshair">MARTIN_LENGA.EXE</p>
      </div>
    </footer>
  );
}