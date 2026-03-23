"use client";

import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <section className="relative min-h-[80vh] bg-stone-50 text-stone-900 flex flex-col justify-center items-center px-8 py-32 text-center overflow-hidden">

      {/* Decorative background typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-serif text-[30vw] text-stone-200/50 leading-none">Y</span>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl z-10"
      >
        <span className="font-sans text-xs uppercase tracking-[0.2em] text-accent mb-8 block">
          Start Building
        </span>
        <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-8 text-balance tracking-tight">
          Your platform, <br />
          <span className="italic">composed.</span>
        </h2>
        <p className="font-sans text-lg md:text-xl font-light text-stone-500 mb-16 max-w-xl mx-auto leading-relaxed">
          Replace infrastructure chaos with orchestrated clarity. Free tier available — no credit card required.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href="mailto:info@yvrisl.com" className="bg-stone-900 text-white px-10 py-4 font-sans text-sm tracking-widest uppercase hover:bg-accent transition-colors duration-300 w-full md:w-auto text-center">
            Get in Touch
          </a>
          <a href="mailto:info@yvrisl.com" className="font-sans text-sm tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors duration-300 border-b border-stone-300 hover:border-stone-900 pb-1">
            info@yvrisl.com
          </a>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-12 w-full px-8 md:px-16 flex justify-between items-end z-10">
        <div className="font-serif text-2xl text-stone-300">
          Yvris.
        </div>
        <div className="font-sans text-[10px] uppercase tracking-widest text-stone-400 text-right leading-relaxed">
          <p>© {new Date().getFullYear()} YVRIS</p>
          <a href="mailto:info@yvrisl.com" className="hover:text-stone-200 transition-colors duration-300">info@yvrisl.com</a>
        </div>
      </div>
    </section>
  );
};
