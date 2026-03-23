"use client";

import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";

const metrics = [
  { value: "99.98%", label: "Uptime SLA", note: "Guaranteed availability" },
  { value: "12ms", label: "Median Latency", note: "Global edge network" },
  { value: "14K+", label: "Events / Second", note: "Peak throughput capacity" },
  { value: "34", label: "Edge Regions", note: "Worldwide deployment" },
];

export const SocialProof = () => {
  return (
    <section className="bg-stone-900 text-stone-100 py-32 px-8 md:px-16 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 md:mb-28">
          <div className="col-span-1 md:col-span-6">
            <FadeIn>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-stone-500 mb-6">
                By the Numbers
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-stone-50">
                Infrastructure that <br />
                <span className="italic text-accent">speaks for itself.</span>
              </h2>
            </FadeIn>
          </div>
          <div className="col-span-1 md:col-span-4 md:col-start-9 flex items-end">
            <FadeIn delay={0.15}>
              <p className="font-sans text-base font-light leading-relaxed text-stone-400">
                Built for teams creating the next generation of tech platforms. The invisible backbone your operations deserve.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-700/30">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="bg-stone-900 p-8 md:p-12 flex flex-col gap-4 group hover:bg-stone-800/50 transition-colors duration-700"
            >
              <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-50 group-hover:text-accent transition-colors duration-700">
                {metric.value}
              </span>
              <div className="mt-auto">
                <span className="font-sans text-sm text-stone-300 block">
                  {metric.label}
                </span>
                <span className="font-sans text-xs text-stone-600 block mt-1">
                  {metric.note}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted By — Editorial Credits Style */}
        <div className="mt-24 md:mt-32 border-t border-stone-700/50 pt-12">
          <FadeIn>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-stone-600 mb-12 text-center">
              Designed for teams at every scale
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
              {[
                "Startups",
                "Scale-ups",
                "Enterprise",
                "Dev Teams",
                "Platform Eng.",
                "Infra Ops",
              ].map((audience, i) => (
                <span
                  key={i}
                  className="font-serif text-xl md:text-2xl italic text-stone-600 hover:text-stone-300 transition-colors duration-500 cursor-default"
                >
                  {audience}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
