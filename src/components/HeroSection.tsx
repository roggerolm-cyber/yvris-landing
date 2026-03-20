"use client";

import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-end px-8 pb-16 md:px-16 md:pb-24 overflow-hidden bg-[#E24A2D]">
      <div className="absolute inset-0 bg-stone-900 pointer-events-none z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"
        />
        {/* Abstract shape representing technical sophistication intersecting with design */}
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "20%", opacity: 0.15 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="absolute right-0 bottom-0 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full border-[1px] border-white/50"
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
            Vol. 01 — The Intersection
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
          className="mt-12 md:mt-16 w-full flex justify-end"
        >
          <p className="font-sans text-base md:text-xl font-light max-w-sm md:max-w-md text-right text-stone-200 leading-relaxed">
            A considered tool built by people with taste. The quiet authority of technical sophistication, beautifully restrained.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
