"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-20 bg-void text-stark overflow-hidden border-b border-stark/10 pt-24 lg:pt-0">
      
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      {/* Left Column: Text Content */}
      <div className="relative z-10 flex flex-col items-start gap-4 w-full lg:w-3/5">
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 font-mono text-sm md:text-base text-neon uppercase tracking-widest"
        >
          <span className="w-2 h-2 bg-neon rounded-full animate-pulse shadow-[0_0_10px_var(--color-neon)]"></span>
          System Online // Available for Hire
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[12vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase text-stark"
        >
          Martin <br /> Lenga.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-6 font-mono text-xl md:text-3xl text-muted"
        >
          {">"} <span className="text-stark">
            <Typewriter
              words={[
                "Data & Machine Learning Graduate.",
                "Full Stack Python Engineer.",
                "Predictive Analytics Specialist."
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-12 w-full sm:w-auto"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-neon text-void font-bold uppercase tracking-wider overflow-hidden cursor-pointer"
          >
            <span className="relative z-10 group-hover:text-stark transition-colors duration-300">Initialize Projects</span>
            <div className="absolute inset-0 bg-void transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
          </button>
          <a
            href="/CV-Martin-Lenga.pdf"
            target="_blank"
            className="px-8 py-4 border border-stark/30 text-stark font-mono uppercase tracking-widest hover:border-neon hover:text-neon transition-colors duration-300 shadow-none hover:shadow-[0_0_15px_var(--color-neon)]"
          >
            Extract_CV.pdf
          </a>
        </motion.div>
      </div>

      {/* Right Column: Circular Cyber-Halo Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
        className="relative z-10 w-full lg:w-2/5 mt-16 lg:mt-0 flex justify-center lg:justify-end"
      >
        {/* The Circular Container - Increased width to 90% and max-width to 500px */}
        <div className="relative w-[90%] max-w-[450px] md:max-w-[500px] aspect-square rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border-2 border-stark/20 hover:border-neon shadow-[0px_0px_20px_rgba(242,242,242,0.1)] hover:shadow-[0px_0px_50px_var(--color-neon)] group">
          
          <img 
            src="/profile.jpg" 
            alt="Martin Lenga" 
            className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700"
          />
          
          {/* Cyberpunk Scanline Overlay */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(0,0,0,0.3)_3px,rgba(0,0,0,0.3)_3px)] pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
        </div>
      </motion.div>

    </section>
  );
}