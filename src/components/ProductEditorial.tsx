"use client";

import { FadeIn } from "./FadeIn";

export const ProductEditorial = () => {
  return (
    <section className="py-32 px-8 md:px-16 md:py-48 bg-white text-stone-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">
        
        {/* Typographic Column */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-12">
          <FadeIn>
            <p className="font-sans text-xs uppercase tracking-widest text-stone-400 border-t border-stone-200 pt-4">
              Feature Profile
            </p>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.1] text-stone-900 tracking-tight">
              Quietly <br />
              Extraordinary.
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="font-sans text-base text-stone-500 font-light leading-relaxed space-y-6">
              <p>
                The interface does not perform for the user; it serves them. Like a well-bound book, the mechanics of the experience vanish, leaving only the substance.
              </p>
              <p>
                Metrics, insights, and structural data are set in monastic simplicity. Data visualization borrows not from dashboards, but from mid-century encyclopedias — precise, unambiguous, and aesthetically resolute.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Embedded UI Context */}
        <div className="col-span-1 md:col-span-8 md:pl-16 relative">
          <FadeIn delay={0.3}>
            {/* The UI container mimics a printed page with elegant spacing */}
            <div className="w-full bg-stone-50 p-8 md:p-16 border border-stone-200 shadow-sm flex flex-col gap-12">
              
              <div className="flex justify-between items-baseline border-b border-stone-300 pb-4">
                <span className="font-serif text-2xl italic text-stone-800">System Metrics</span>
                <span className="font-sans text-xs uppercase tracking-widest text-stone-400">Live Feed</span>
              </div>

              <div className="grid grid-cols-3 gap-8">
                {[
                  { label: "Throughput", value: "99.9%" },
                  { label: "Latency", value: "12ms" },
                  { label: "Active Nodes", value: "4,092" },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-stone-500">
                      {stat.label}
                    </span>
                    <span className="font-serif text-3xl text-stone-900">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Minimal UI graph abstraction */}
              <div className="w-full h-48 border-l border-b border-stone-300 relative mt-8 flex items-end">
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent mix-blend-multiply" />
                <div className="absolute top-1/2 left-0 w-full h-[1px] border-t border-dashed border-stone-300" />
                
                {/* Data Bars */}
                <div className="flex w-full justify-between items-end h-full px-4 gap-2">
                  {[40, 60, 45, 80, 55, 90, 65, 100, 75, 85].map((h, i) => (
                    <div
                      key={i}
                      className="w-full bg-stone-300 hover:bg-accent transition-colors duration-500"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

            </div>
          </FadeIn>

          <FadeIn delay={0.5} className="absolute -bottom-8 -right-8 md:-right-16 bg-white p-6 border border-stone-200 shadow-md">
             <p className="font-sans text-sm font-medium tracking-tight text-accent flex items-center gap-4">
               <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
               Status: Optimal
             </p>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};
