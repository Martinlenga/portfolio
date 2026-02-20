"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-20 bg-void text-stark border-b border-stark/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Column: The Hook */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div>
            <span className="font-mono text-neon text-xl mb-6 block">{"// 01_IDENTITY"}</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
              Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-stark to-muted stroke-text">raw data</span> & scalable systems.
            </h2>
          </div>
          
          <div className="mt-12 hidden lg:block">
            <div className="w-24 h-1 bg-neon mb-4"></div>
            <p className="font-mono text-sm text-muted uppercase tracking-widest">
              Based in Nairobi, Kenya <br/>
              Strathmore University Alumni
            </p>
          </div>
        </motion.div>

        {/* Right Column: The Narrative */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col gap-8 text-lg md:text-xl text-stark/80 leading-relaxed font-light"
        >
          <p>
            I am a Full Stack & AI Engineer who refuses to choose between the backend engine and the data that drives it. I build intelligent, predictive architectures that solve actual problems—not just academic exercises.
          </p>
          <p>
            My approach is rooted in rigorous engineering. Whether I am developing a <span className="text-neon font-mono text-base uppercase">Random Forest classification pipeline</span> to predict and prevent student dropouts, or architecting a <span className="text-neon font-mono text-base uppercase">Django/PostgreSQL</span> transit platform handling real-time M-Pesa transactions, the goal remains the same: <strong className="text-stark font-bold">flawless execution and actionable insights.</strong>
          </p>
          <p>
            I thrive in the terminal, breathe Python, and leverage machine learning to turn noise into signal. I don't just train models; I deploy them into production-ready web environments.
          </p>
          
          {/* Brutalist Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-stark/10">
            <div>
              <h4 className="text-4xl font-black text-stark">04+</h4>
              <p className="font-mono text-xs text-muted uppercase mt-2">Years of Study & Execution</p>
            </div>
            <div>
              <h4 className="text-4xl font-black text-stark">ML</h4>
              <p className="font-mono text-xs text-muted uppercase mt-2">Predictive Analytics Focus</p>
            </div>
            <div>
              <h4 className="text-4xl font-black text-neon">API</h4>
              <p className="font-mono text-xs text-muted uppercase mt-2">System Integrations</p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}