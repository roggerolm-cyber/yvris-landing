"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import {
  Database,
  Globe,
  Network,
  Cpu,
  Workflow,
  Code2,
} from "lucide-react";

const Item = ({ children, x, y, delay }: { children: React.ReactNode, x: string, y: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay }}
    className="absolute flex flex-col items-center gap-4 group"
    style={{ left: x, top: y }}
  >
    <div className="text-stone-400 group-hover:text-accent transition-colors duration-700 p-8 border border-stone-200/50 bg-white/50 backdrop-blur-sm shadow-sm rounded-full">
      {children}
    </div>
  </motion.div>
);

export const StillLifeIntegrations = () => {
  return (
    <section className="relative h-screen min-h-[800px] w-full bg-stone-100 overflow-hidden flex flex-col justify-center border-y border-stone-200">
      {/* Editorial Title */}
      <div className="absolute top-16 md:top-32 left-8 md:left-16 z-20 pointer-events-none">
        <FadeIn>
          <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-stone-500 mb-6">
            The Ecosystem
          </h3>
          <p className="font-serif text-3xl md:text-5xl text-stone-900 max-w-sm leading-tight">
            Arranged for <br/> Absolute <span className="italic">Synchrony.</span>
          </p>
        </FadeIn>
      </div>

      {/* Composition Area */}
      <div className="relative w-full h-[600px] max-w-7xl mx-auto z-10">
        
        {/* Subtle background guides/lines reflecting Swiss graphic design */}
        <div className="absolute inset-0 border-l border-t border-stone-200/50 mix-blend-multiply opacity-50" />
        <div className="absolute left-[33%] top-0 bottom-0 w-[1px] bg-stone-200/50 mix-blend-multiply opacity-50" />
        <div className="absolute left-[66%] top-0 bottom-0 w-[1px] bg-stone-200/50 mix-blend-multiply opacity-50" />
        <div className="absolute top-[50%] left-0 right-0 h-[1px] bg-stone-200/50 mix-blend-multiply opacity-50" />

        {/* Still Life Objects */}
        <Item x="20%" y="20%" delay={0.2}>
          <Database size={32} strokeWidth={1} />
        </Item>
        <Item x="60%" y="15%" delay={0.4}>
          <Globe size={40} strokeWidth={1} />
        </Item>
        <Item x="80%" y="45%" delay={0.6}>
          <Network size={28} strokeWidth={1} />
        </Item>
        <Item x="45%" y="60%" delay={0.5}>
          <Cpu size={48} strokeWidth={1} />
        </Item>
        <Item x="15%" y="70%" delay={0.3}>
          <Workflow size={32} strokeWidth={1} />
        </Item>
        <Item x="75%" y="80%" delay={0.7}>
          <Code2 size={36} strokeWidth={1} />
        </Item>

        <div className="absolute right-8 md:right-16 bottom-8 text-right z-20">
          <FadeIn delay={1}>
            <p className="font-sans text-xs uppercase tracking-widest text-stone-500">
              Fig. 2 — Integration Architecture
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
