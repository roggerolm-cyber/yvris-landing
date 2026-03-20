"use client";

import { FadeIn } from "./FadeIn";
import { SlackLogo, SupabaseLogo, Stripelogo } from "./IntegrationLogos";

export const ProductEditorial = () => {
  return (
    <section className="py-32 px-8 md:px-16 md:py-48 bg-stone-50 text-stone-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">

        {/* Typographic Column */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-12">
          <FadeIn>
            <p className="font-sans text-xs uppercase tracking-widest text-stone-400 border-t border-stone-200 pt-4">
              Platform Overview
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.1] text-stone-900 tracking-tight">
              Your entire stack. <br />
              <span className="italic text-accent">One surface.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="font-sans text-base text-stone-500 font-light leading-relaxed space-y-6">
              <p>
                YVRIS consolidates infrastructure monitoring, workflow orchestration, and team collaboration into a single composable dashboard — designed not as a control panel, but as an interface worthy of the systems it governs.
              </p>
              <p>
                Real-time metrics rendered with the clarity of mid-century data graphics. Event streams that read like editorial timelines. Every pixel in service of comprehension.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Embedded Dashboard UI */}
        <div className="col-span-1 md:col-span-8 md:pl-16 relative">
          <FadeIn delay={0.3}>
            <div className="w-full bg-white border border-stone-200 shadow-sm flex flex-col overflow-hidden">

              {/* Dashboard Header */}
              <div className="flex items-center justify-between px-8 py-5 border-b border-stone-200 bg-stone-50">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-lg text-stone-800">YVRIS</span>
                  <span className="text-stone-300">|</span>
                  <span className="font-sans text-xs uppercase tracking-widest text-stone-400">Dashboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-mono text-xs text-stone-400">All systems nominal</span>
                </div>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-4 border-b border-stone-200">
                {[
                  { label: "Uptime", value: "99.98%", trend: "+0.02%" },
                  { label: "Avg Latency", value: "12ms", trend: "-3ms" },
                  { label: "Active Workflows", value: "847", trend: "+24" },
                  { label: "Events / sec", value: "14.2K", trend: "+1.8K" },
                ].map((stat, i) => (
                  <div key={i} className={`p-6 ${i < 3 ? "border-r border-stone-200" : ""}`}>
                    <span className="font-sans text-[10px] uppercase tracking-widest text-stone-400 block mb-2">
                      {stat.label}
                    </span>
                    <span className="font-serif text-2xl text-stone-900 block">
                      {stat.value}
                    </span>
                    <span className="font-mono text-xs text-emerald-500 mt-1 block">
                      {stat.trend}
                    </span>
                  </div>
                ))}
              </div>

              {/* Graph + Event Stream */}
              <div className="grid grid-cols-1 md:grid-cols-5">
                {/* Mini Graph */}
                <div className="md:col-span-3 p-8 border-r border-stone-200">
                  <div className="flex justify-between items-baseline mb-6">
                    <span className="font-sans text-xs uppercase tracking-widest text-stone-400">Throughput — 24h</span>
                    <span className="font-mono text-[10px] text-stone-400">req/s</span>
                  </div>
                  <div className="w-full h-32 flex items-end gap-[3px]">
                    {[35, 42, 38, 55, 48, 62, 58, 72, 65, 80, 75, 88, 82, 92, 85, 95, 90, 100, 88, 78, 85, 90, 95, 92].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-stone-200 hover:bg-accent transition-colors duration-300 rounded-t-[1px]"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Live Event Stream */}
                <div className="md:col-span-2 p-6 flex flex-col gap-0">
                  <span className="font-sans text-xs uppercase tracking-widest text-stone-400 mb-4">Live Events</span>
                  {[
                    { time: "now", icon: <SlackLogo className="w-3 h-3" />, text: "Alert sent to #ops", color: "text-stone-400" },
                    { time: "2s", icon: <SupabaseLogo className="w-3 h-3" />, text: "Row inserted: users", color: "text-stone-400" },
                    { time: "5s", icon: <Stripelogo className="w-3 h-3" />, text: "Payment $249.00", color: "text-stone-400" },
                    { time: "8s", icon: <SlackLogo className="w-3 h-3" />, text: "Deploy complete", color: "text-stone-400" },
                    { time: "12s", icon: <SupabaseLogo className="w-3 h-3" />, text: "Auth: new session", color: "text-stone-400" },
                  ].map((event, i) => (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-stone-100 last:border-0">
                      <span className="font-mono text-[10px] text-stone-300 w-6 flex-shrink-0">{event.time}</span>
                      <span className={event.color}>{event.icon}</span>
                      <span className="font-mono text-xs text-stone-500 truncate">{event.text}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </FadeIn>

          {/* Floating Status Badge */}
          <FadeIn delay={0.5} className="absolute -bottom-6 -right-4 md:-right-8 bg-white p-5 border border-stone-200 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <div>
                <p className="font-sans text-xs font-medium text-stone-800">34 edge regions</p>
                <p className="font-mono text-[10px] text-stone-400">p99: 18ms</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
