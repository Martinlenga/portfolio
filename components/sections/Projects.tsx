"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-20 bg-void text-stark">
      <div className="mb-16 border-b border-stark/10 pb-8 flex justify-between items-end">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Selected <br/> Works.</h2>
        <span className="font-mono text-neon text-xl hidden md:block">{"// 02"}</span>
      </div>

      <div className="flex flex-col">
        {projects.map((project, idx) => (
          <motion.a
            href={project.live || project.github || "#"}
            target="_blank"
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group block py-12 border-b border-stark/10 relative overflow-hidden"
          >
            {/* Hover Reveal Background */}
            <div className="absolute inset-0 bg-surface translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] z-0"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="font-mono text-sm text-muted group-hover:text-neon transition-colors">{project.year}</span>
                  <span className="font-mono text-xs px-2 py-1 border border-stark/20 rounded-full">{project.role}</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight group-hover:text-neon transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
              
              <div className="flex-1 md:max-w-md">
                <p className="text-muted group-hover:text-stark transition-colors mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="font-mono text-xs uppercase bg-stark/5 px-2 py-1 group-hover:bg-neon group-hover:text-void transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full border border-stark/20 group-hover:border-neon group-hover:bg-neon group-hover:text-void transition-all duration-300">
                <ArrowUpRight size={28} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}