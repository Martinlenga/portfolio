"use client";

import { motion } from "framer-motion";
import { skills as techCategories, flatSkills } from "../../data/skills";
import GlitchText from "../ui/GlitchText"; // <-- Importing the Glitch effect

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-surface text-stark overflow-hidden border-b border-stark/10">
      
      {/* Infinite Marquee Strip */}
      <div className="relative flex overflow-x-hidden border-y border-stark/10 bg-void py-6 mb-20 whitespace-nowrap">
        <motion.div 
          className="flex gap-12 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...flatSkills, ...flatSkills].map((skill, idx) => (
            <span key={idx} className="text-3xl md:text-5xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-stark/80 to-stark/20 tracking-tighter">
              {skill}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="px-6 md:px-20 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-neon text-xl mb-6 block">{"// 03_CAPABILITIES"}</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            {/* Applying the Glitch Effect here */}
            <GlitchText text="The Arsenal." />
          </h2>
        </div>

        {/* Brutalist Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 border ${category.color} bg-void/50 backdrop-blur-sm hover:bg-void transition-colors group`}
            >
              <h3 className="font-mono text-sm uppercase tracking-widest mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                [{category.title}]
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 border border-current font-bold uppercase text-sm group-hover:shadow-[4px_4px_0px_currentColor] transition-all hover:-translate-y-1 hover:-translate-x-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}