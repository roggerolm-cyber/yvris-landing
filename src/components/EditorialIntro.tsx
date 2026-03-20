"use client";

import { FadeIn } from "./FadeIn";

export const EditorialIntro = () => {
  return (
    <section className="py-32 px-8 md:px-16 md:py-48 bg-stone-50 text-stone-900 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        
        {/* Left Column: Abstract or subtle image/graphic representing Milanese design ethos */}
        <div className="col-span-1 md:col-span-5 flex flex-col justify-start">
          <FadeIn>
            <div className="w-full aspect-[3/4] bg-stone-200 relative overflow-hidden group">
              <div className="absolute inset-0 bg-stone-300 transition-transform duration-1000 group-hover:scale-105" />
              {/* Minimal geometric composition inside */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border-[0.5px] border-stone-500 rounded-full" />
              <div className="absolute bottom-8 left-8">
                <p className="font-sans text-xs tracking-widest uppercase text-stone-500">Fig. 1 — Form</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Editorial Typography */}
        <div className="col-span-1 md:col-span-7 md:pl-16 flex flex-col justify-center">
          <FadeIn delay={0.2}>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-12">
              Radical restraint in a <br className="hidden md:block"/>
              <span className="text-accent italic">complex landscape.</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="font-sans text-lg md:text-xl font-light leading-relaxed text-stone-600 max-w-2xl space-y-8">
              <p>
                We believe that software should not scream for your attention. It should exist as a quiet, authoritative presence in your workflow. YVRIS is born from the philosophy of Milanese design studios — where the process of creation and the final output share equal prestige.
              </p>
              <p>
                Our platform does not overwhelm with feature lists. It provides exactly what is necessary, exactly when it is needed. Typography, space, and intentional interactions define an experience that feels unhurried, yet extraordinarily capable.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4} className="mt-16">
            <button className="group relative font-sans text-sm uppercase tracking-widest pb-2 overflow-hidden">
              <span className="relative z-10">Read the Manifesto</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-stone-900 transform origin-left transition-transform duration-300 group-hover:scale-x-0" />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent transform origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100 delay-100" />
            </button>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};
