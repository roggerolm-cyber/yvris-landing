"use client";

import { FadeIn } from "./FadeIn";

export const EditorialIntro = () => {
  return (
    <section id="approach" className="py-32 px-8 md:px-16 md:py-48 bg-stone-50 text-stone-900 flex justify-center scroll-mt-24">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">

        {/* Left Column: Abstract SaaS Architecture Graphic */}
        <div className="col-span-1 md:col-span-5 flex flex-col justify-start">
          <FadeIn>
            <div className="w-full aspect-[3/4] bg-stone-200 relative overflow-hidden group">
              <div className="absolute inset-0 bg-stone-300/50 transition-transform duration-1000 group-hover:scale-105" />

              {/* Abstract network/platform visualization */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 400" fill="none">
                {/* Nodes */}
                <circle cx="150" cy="120" r="8" className="fill-stone-400 group-hover:fill-accent transition-colors duration-700" />
                <circle cx="80" cy="200" r="5" className="fill-stone-400" />
                <circle cx="220" cy="200" r="5" className="fill-stone-400" />
                <circle cx="110" cy="300" r="6" className="fill-stone-400" />
                <circle cx="190" cy="300" r="6" className="fill-stone-400" />
                <circle cx="150" cy="350" r="4" className="fill-stone-400" />

                {/* Connection lines */}
                <line x1="150" y1="128" x2="80" y2="195" className="stroke-stone-400/40" strokeWidth="0.5" />
                <line x1="150" y1="128" x2="220" y2="195" className="stroke-stone-400/40" strokeWidth="0.5" />
                <line x1="80" y1="205" x2="110" y2="294" className="stroke-stone-400/40" strokeWidth="0.5" />
                <line x1="220" y1="205" x2="190" y2="294" className="stroke-stone-400/40" strokeWidth="0.5" />
                <line x1="110" y1="306" x2="150" y2="346" className="stroke-stone-400/40" strokeWidth="0.5" />
                <line x1="190" y1="306" x2="150" y2="346" className="stroke-stone-400/40" strokeWidth="0.5" />
                <line x1="80" y1="200" x2="220" y2="200" className="stroke-accent/20" strokeWidth="0.5" strokeDasharray="4 4" />
              </svg>

              <div className="absolute bottom-8 left-8">
                <p className="font-sans text-xs tracking-widest uppercase text-stone-500">Fig. 1 — Platform Topology</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Editorial Typography */}
        <div className="col-span-1 md:col-span-7 md:pl-16 flex flex-col justify-center">
          <FadeIn delay={0.2}>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-12">
              Infrastructure as a <br className="hidden md:block" />
              <span className="text-accent italic">design discipline.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="font-sans text-lg md:text-xl font-light leading-relaxed text-stone-600 max-w-2xl space-y-8">
              <p>
                Modern tech platforms are built from dozens of services — cloud providers, databases, payment processors, AI models, messaging systems. The challenge is no longer choosing them, but composing them into something coherent.
              </p>
              <p>
                YVRIS is the orchestration layer that makes your entire stack legible. We treat infrastructure the way Milanese studios treat design: with rigor, restraint, and an unwillingness to compromise on how things feel. Your APIs, workflows, and data pipelines — unified in a single composable platform.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-16">
            <button className="group relative font-sans text-sm uppercase tracking-widest pb-2 overflow-hidden">
              <span className="relative z-10">Explore the Platform</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-stone-900 transform origin-left transition-transform duration-300 group-hover:scale-x-0" />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent transform origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100 delay-100" />
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
