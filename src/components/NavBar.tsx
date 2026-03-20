"use client";

import { motion } from "framer-motion";

export const NavBar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 md:px-16 flex justify-between items-center mix-blend-difference text-white pointer-events-none"
    >
      <div className="font-serif text-2xl tracking-tight uppercase font-medium pointer-events-auto">
        Yvris.
      </div>
      <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-sans pointer-events-auto">
        <a href="#approach" className="hover:text-accent transition-colors duration-300">Approach</a>
        <a href="#ecosystem" className="hover:text-accent transition-colors duration-300">Ecosystem</a>
        <a href="mailto:info@yvrisl.com" className="hover:text-accent transition-colors duration-300">Contact</a>
      </nav>
      <div className="md:hidden pointer-events-auto">
        <button className="text-sm uppercase tracking-widest">Menu</button>
      </div>
    </motion.header>
  );
};
