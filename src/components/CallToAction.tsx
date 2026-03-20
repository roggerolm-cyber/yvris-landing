"use client";

import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <section className="relative h-screen min-h-[600px] bg-stone-900 text-stone-50 flex flex-col justify-center items-center px-8 text-center overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl z-10"
      >
        <span className="font-sans text-xs uppercase tracking-[0.2em] text-accent mb-8 block">
          Epilogue
        </span>
        <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-12 text-balance">
          The art of <span className="italic">possibility</span>,<br />
          bound by rigor.
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <button className="bg-white text-stone-900 px-8 py-4 font-sans text-sm tracking-widest uppercase hover:bg-stone-200 transition-colors duration-300 w-full md:w-auto">
            Begin the Inquiry
          </button>
          <a href="#" className="font-sans text-sm tracking-widest uppercase text-stone-400 hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white pb-1">
            Read the Documentation
          </a>
        </div>
      </motion.div>

      {/* Footer Typography */}
      <div className="absolute bottom-12 w-full px-8 md:px-16 flex justify-between items-end z-10">
        <div className="font-serif text-3xl opacity-50">
          Yvris.
        </div>
        <div className="font-sans text-xs uppercase tracking-widest text-stone-500 text-right">
          <p>© {new Date().getFullYear()} YVRIS STUDIO.</p>
          <p>BUILT FOR THOSE WHO CARE.</p>
        </div>
      </div>
      
    </section>
  );
};
