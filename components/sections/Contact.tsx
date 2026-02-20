"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-20 bg-void text-stark min-h-screen flex flex-col justify-center relative">
      
      {/* Background aesthetic */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none overflow-hidden">
        <h1 className="text-[20vw] font-black leading-none">EOF.</h1>
      </div>

      <div className="max-w-4xl w-full mx-auto relative z-10">
        <div className="mb-16">
          <span className="font-mono text-neon text-xl mb-6 block animate-pulse">{"// SYSTEM_PROMPT: CONTACT"}</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Initiate <br/> Protocol.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Terminal Form */}
          <motion.form 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 font-mono"
          >
            <div className="relative group">
              <span className="absolute left-0 top-3 text-neon">{">"}</span>
              <input 
                type="text" 
                placeholder="USER_NAME" 
                className="w-full bg-transparent border-b border-stark/30 py-3 pl-6 text-stark focus:outline-none focus:border-neon focus:shadow-[0_1px_10px_var(--color-neon)] transition-all placeholder:text-muted uppercase"
                required
              />
            </div>
            
            <div className="relative group">
              <span className="absolute left-0 top-3 text-neon">{">"}</span>
              <input 
                type="email" 
                placeholder="USER_EMAIL" 
                className="w-full bg-transparent border-b border-stark/30 py-3 pl-6 text-stark focus:outline-none focus:border-neon focus:shadow-[0_1px_10px_var(--color-neon)] transition-all placeholder:text-muted uppercase"
                required
              />
            </div>

            <div className="relative group">
              <span className="absolute left-0 top-3 text-neon">{">"}</span>
              <textarea 
                placeholder="TRANSMIT_MESSAGE..." 
                rows={4}
                className="w-full bg-transparent border-b border-stark/30 py-3 pl-6 text-stark focus:outline-none focus:border-neon focus:shadow-[0_1px_10px_var(--color-neon)] transition-all placeholder:text-muted resize-none uppercase"
                required
              />
            </div>

            <button 
              type="submit"
              className="mt-4 self-start px-8 py-4 bg-stark text-void font-bold uppercase tracking-wider hover:bg-neon transition-colors duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Execute Transmission</span>
            </button>
          </motion.form>

          {/* Raw Data Links */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-end font-mono text-sm space-y-8 border-l border-stark/20 pl-8"
          >
            <div>
              <p className="text-muted mb-2 uppercase">{"[ NETWORK_NODES ]"}</p>
              <ul className="space-y-4 text-lg">
                <li>
                  <a href="https://www.linkedin.com/in/martin-lenga/" target="_blank" rel="noreferrer" className="hover:text-neon transition-colors flex items-center gap-2">
                    <span className="text-stark/30">{"->"}</span> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Martinlenga" target="_blank" rel="noreferrer" className="hover:text-neon transition-colors flex items-center gap-2">
                    <span className="text-stark/30">{"->"}</span> GitHub
                  </a>
                </li>
                <li>
                  <a href="mailto:martinlenga003@gmail.com" className="hover:text-neon transition-colors flex items-center gap-2">
                    <span className="text-stark/30">{"->"}</span> Email
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-muted mb-2 uppercase">{"[ COMM_CHANNELS ]"}</p>
              {/* WhatsApp Integration */}
              <a href="https://wa.me/254719828354" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-stark text-lg hover:text-neon transition-colors">
                 <span className="text-stark/30 group-hover:text-neon">{"->"}</span> +254 719 828 354 <span className="text-xs text-muted group-hover:text-neon uppercase ml-2">[WhatsApp]</span>
              </a>
              <p className="text-stark mt-2 flex items-center gap-2 text-lg">
                <span className="text-stark/30">{"->"}</span> Nairobi, Kenya
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}