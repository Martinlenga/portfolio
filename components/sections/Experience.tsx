"use client";

import { motion } from "framer-motion";
import { experience } from "../../data/experience";
import GlitchText from "../ui/GlitchText"; // <-- Importing the Glitch effect

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-20 bg-surface text-stark">
      <div className="mb-20">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          {/* Applying the Glitch Effect here */}
          <GlitchText text="Trajectory." />
        </h2>
      </div>

      <div className="relative border-l border-stark/20 ml-4 md:ml-8">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative pl-8 md:pl-16 pb-16 last:pb-0 group"
          >
            {/* Timeline Node */}
            <div className="absolute left-[-5px] top-2 w-2 h-2 bg-stark rounded-full group-hover:bg-neon group-hover:shadow-neon-glow transition-all duration-300"></div>
            
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
              <span className="font-mono text-neon text-sm md:text-base w-40 shrink-0">
                {exp.duration}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold uppercase">{exp.role}</h3>
            </div>
            
            <div className="md:ml-48">
              <h4 className="text-xl text-muted font-mono mb-4">{exp.company}</h4>
              <ul className="space-y-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-stark/80 flex items-start gap-2">
                    <span className="text-neon mt-1.5 opacity-50">{">"}</span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}