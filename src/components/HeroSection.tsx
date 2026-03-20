"use client";

import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-end px-8 pb-16 md:px-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-stone-900 pointer-events-none z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"
        />
        {/* Orbital ring representing platform orchestration */}
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "20%", opacity: 0.12 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="absolute right-0 bottom-0 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full border-[1px] border-white/50"
        />
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "30%", opacity: 0.08 }}
          transition={{ duration: 2.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="absolute right-[5%] bottom-0 w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] rounded-full border-[1px] border-white/30"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-start text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-light border-b border-white/30 pb-2">
            SaaS Platform — Tech Infrastructure
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-serif text-[15vw] leading-[0.85] tracking-tighter"
        >
          YVRIS.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 md:mt-16 w-full flex flex-col md:flex-row md:justify-between md:items-end gap-8"
        >
          <p className="font-sans text-lg md:text-2xl font-light max-w-lg text-stone-200 leading-relaxed">
            The orchestration layer for modern tech platforms. Connect, compose, and deploy your entire infrastructure from a single, considered surface.
          </p>
          <div className="flex flex-col items-end gap-2">
            <span className="font-mono text-xs text-stone-500 tracking-wider">npm i @yvris/sdk</span>
            <span className="font-sans text-xs text-accent uppercase tracking-widest">Get Started →</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
