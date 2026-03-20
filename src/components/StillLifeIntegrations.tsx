"use client";

import { FadeIn } from "./FadeIn";
import {
  IntegrationLogo,
  SlackLogo,
  VercelLogo,
  SupabaseLogo,
  GoogleCloudLogo,
  ClaudeLogo,
  NextjsLogo,
  Stripelogo,
  AWSLogo,
} from "./IntegrationLogos";

export const StillLifeIntegrations = () => {
  return (
    <section className="relative w-full bg-stone-100 overflow-hidden border-y border-stone-200 py-32 md:py-48 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Editorial Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 md:mb-32">
          <div className="col-span-1 md:col-span-5">
            <FadeIn>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-stone-400 mb-6">
                The Ecosystem
              </p>
              <h3 className="font-serif text-4xl md:text-6xl text-stone-900 leading-[1.1] tracking-tight">
                Arranged for <br />
                Absolute <span className="italic text-accent">Synchrony.</span>
              </h3>
            </FadeIn>
          </div>
          <div className="col-span-1 md:col-span-5 md:col-start-8 flex items-end">
            <FadeIn delay={0.2}>
              <p className="font-sans text-base md:text-lg font-light leading-relaxed text-stone-500">
                YVRIS orchestrates your entire tech stack into a single, composable surface. Each integration is not merely connected — it is understood, contextualized, and elevated.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Still Life Composition — Swiss Grid, editorial placement */}
        <div className="relative">
          {/* Subtle grid guides */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-[25%] top-0 bottom-0 w-[1px] bg-stone-300/30" />
            <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-stone-300/30" />
            <div className="absolute left-[75%] top-0 bottom-0 w-[1px] bg-stone-300/30" />
          </div>

          {/* Main Composition: Asymmetric Editorial Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200/60">

            {/* Vercel — Large, anchor piece */}
            <div className="md:col-span-2 md:row-span-2 bg-stone-50 p-12 md:p-20 flex flex-col justify-between min-h-[280px] md:min-h-[400px] group hover:bg-white transition-colors duration-700">
              <div className="flex-1 flex items-center justify-center">
                <IntegrationLogo
                  name="Vercel"
                  logo={<VercelLogo className="w-full h-full" />}
                  brandColor="#000000"
                  size="lg"
                  delay={0.1}
                />
              </div>
              <FadeIn delay={0.3}>
                <p className="font-sans text-xs text-stone-400 leading-relaxed mt-8">
                  Edge-first deployment infrastructure. Zero-config builds with global distribution at the speed of thought.
                </p>
              </FadeIn>
            </div>

            {/* Supabase */}
            <div className="bg-stone-50 p-8 md:p-12 flex flex-col justify-between min-h-[200px] group hover:bg-white transition-colors duration-700">
              <div className="flex-1 flex items-center justify-center">
                <IntegrationLogo
                  name="Supabase"
                  logo={<SupabaseLogo className="w-full h-full" />}
                  brandColor="#3ECF8E"
                  size="md"
                  delay={0.2}
                />
              </div>
              <FadeIn delay={0.4}>
                <p className="font-sans text-[10px] text-stone-400 leading-relaxed mt-6">
                  Open-source backend as a service.
                </p>
              </FadeIn>
            </div>

            {/* Slack */}
            <div className="bg-stone-50 p-8 md:p-12 flex flex-col justify-between min-h-[200px] group hover:bg-white transition-colors duration-700">
              <div className="flex-1 flex items-center justify-center">
                <IntegrationLogo
                  name="Slack"
                  logo={<SlackLogo className="w-full h-full" />}
                  brandColor="#E01E5A"
                  size="md"
                  delay={0.3}
                />
              </div>
              <FadeIn delay={0.5}>
                <p className="font-sans text-[10px] text-stone-400 leading-relaxed mt-6">
                  Team communication, orchestrated.
                </p>
              </FadeIn>
            </div>

            {/* Google Cloud */}
            <div className="bg-stone-50 p-8 md:p-12 flex flex-col justify-between min-h-[200px] group hover:bg-white transition-colors duration-700">
              <div className="flex-1 flex items-center justify-center">
                <IntegrationLogo
                  name="Google Cloud"
                  logo={<GoogleCloudLogo className="w-full h-full" />}
                  brandColor="#4285F4"
                  size="md"
                  delay={0.4}
                />
              </div>
              <FadeIn delay={0.6}>
                <p className="font-sans text-[10px] text-stone-400 leading-relaxed mt-6">
                  Enterprise-grade cloud infrastructure.
                </p>
              </FadeIn>
            </div>

            {/* Claude */}
            <div className="bg-stone-50 p-8 md:p-12 flex flex-col justify-between min-h-[200px] group hover:bg-white transition-colors duration-700">
              <div className="flex-1 flex items-center justify-center">
                <IntegrationLogo
                  name="Claude AI"
                  logo={<ClaudeLogo className="w-full h-full" />}
                  brandColor="#D97757"
                  size="md"
                  delay={0.5}
                />
              </div>
              <FadeIn delay={0.7}>
                <p className="font-sans text-[10px] text-stone-400 leading-relaxed mt-6">
                  AI reasoning, deeply integrated.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Secondary Row — Smaller Credits-Style Logos */}
          <div className="mt-px bg-stone-200/60">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-px">
              {[
                { name: "Next.js", logo: <NextjsLogo className="w-full h-full" />, color: "#000" },
                { name: "Stripe", logo: <Stripelogo className="w-full h-full" />, color: "#635BFF" },
                { name: "AWS", logo: <AWSLogo className="w-full h-full" />, color: "#FF9900" },
                { name: "Vercel", logo: <VercelLogo className="w-full h-full" />, color: "#000" },
                { name: "Supabase", logo: <SupabaseLogo className="w-full h-full" />, color: "#3ECF8E" },
                { name: "Slack", logo: <SlackLogo className="w-full h-full" />, color: "#E01E5A" },
              ].map((item, i) => (
                <div key={i} className="bg-stone-50 hover:bg-white transition-colors duration-500 py-8 px-6 flex items-center justify-center">
                  <IntegrationLogo
                    name={item.name}
                    logo={item.logo}
                    brandColor={item.color}
                    size="sm"
                    delay={0.1 * i}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Caption */}
          <div className="mt-8 flex justify-end">
            <FadeIn delay={0.8}>
              <p className="font-sans text-xs uppercase tracking-widest text-stone-400">
                Fig. 2 — Integration Architecture
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
