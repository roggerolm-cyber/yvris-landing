"use client";

import { FadeIn } from "./FadeIn";

export const APIPreview = () => {
  return (
    <section className="relative bg-stone-900 text-stone-100 py-32 px-8 md:px-16 md:py-48 overflow-hidden">
      {/* Background decorative type */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[20vw] text-stone-800/30 select-none pointer-events-none whitespace-nowrap leading-none">
        API
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
        {/* Left Editorial */}
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center gap-12">
          <FadeIn>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-accent mb-6">
              Developer Experience
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-stone-50">
              Four lines to <br />
              <span className="italic">production.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="font-sans text-base md:text-lg font-light leading-relaxed text-stone-400 max-w-md">
              Our SDK was designed for developers who value clarity. No boilerplate, no ceremony — just the precise interface between your intent and execution.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="flex flex-col gap-6 pt-4">
              {[
                { label: "Type-Safe", desc: "Full TypeScript, end-to-end" },
                { label: "Edge-Ready", desc: "Runs on Vercel, Cloudflare, Deno" },
                { label: "Observable", desc: "Built-in tracing & metrics" },
              ].map((feat, i) => (
                <div key={i} className="flex items-baseline gap-4 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                  <div>
                    <span className="font-sans text-sm font-medium text-stone-200">
                      {feat.label}
                    </span>
                    <span className="font-sans text-sm text-stone-500 ml-2">
                      — {feat.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right — Code Showcase */}
        <div className="col-span-1 md:col-span-7">
          <FadeIn delay={0.2}>
            <div className="bg-black/50 backdrop-blur-sm border border-stone-700/50 p-8 md:p-12">

              {/* Tab Bar */}
              <div className="flex items-center gap-6 mb-8 pb-4 border-b border-stone-700/40">
                <button className="font-mono text-xs text-accent border-b border-accent pb-2 uppercase tracking-wider">
                  quickstart.ts
                </button>
                <button className="font-mono text-xs text-stone-500 pb-2 uppercase tracking-wider hover:text-stone-300 transition-colors">
                  workflow.ts
                </button>
                <button className="font-mono text-xs text-stone-500 pb-2 uppercase tracking-wider hover:text-stone-300 transition-colors">
                  observe.ts
                </button>
              </div>

              {/* Code */}
              <pre className="font-mono text-xs md:text-sm leading-loose overflow-x-auto">
                <code>
                  <Line n={1}>
                    <K>import</K> {"{ "}<V>Yvris</V>{" }"} <K>from</K> <S>{`'@yvris/sdk'`}</S>
                  </Line>
                  <Line n={2}>
                    <K>import</K> {"{ "}<V>supabase</V>, <V>stripe</V>, <V>slack</V>{" }"} <K>from</K> <S>{`'@yvris/integrations'`}</S>
                  </Line>
                  <Line n={3}>{""}</Line>
                  <Line n={4}>
                    <C>{"// Initialize with your stack"}</C>
                  </Line>
                  <Line n={5}>
                    <K>const</K> <V>app</V> = <K>new</K> <V>Yvris</V>({`{`}
                  </Line>
                  <Line n={6}>
                    {"  "}<P>integrations</P>: [supabase(), stripe(), slack()],
                  </Line>
                  <Line n={7}>
                    {"  "}<P>ai</P>: {"{ "}<P>provider</P>: <S>{`'claude'`}</S>, <P>model</P>: <S>{`'sonnet'`}</S>{" }"},
                  </Line>
                  <Line n={8}>
                    {`})`}
                  </Line>
                  <Line n={9}>{""}</Line>
                  <Line n={10}>
                    <C>{"// Deploy to the edge"}</C>
                  </Line>
                  <Line n={11}>
                    <K>await</K> app.<V>deploy</V>({`{`} <P>runtime</P>: <S>{`'edge'`}</S> {`}`})
                  </Line>
                  <Line n={12}>{""}</Line>
                  <Line n={13}>
                    <C>{"// That's it. You're live."}</C>
                  </Line>
                </code>
              </pre>

              {/* Terminal Response */}
              <div className="mt-8 pt-6 border-t border-stone-700/40">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs text-emerald-400">
                    ✓ Deployed to 34 edge regions in 2.4s
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Caption */}
          <FadeIn delay={0.4}>
            <p className="font-sans text-xs uppercase tracking-widest text-stone-600 mt-6 text-right">
              Fig. 3 — SDK Interface
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Line = ({ n, children }: { n: number; children: React.ReactNode }) => (
  <span className="block">
    <span className="inline-block w-8 text-right mr-6 text-stone-600 select-none">{n}</span>
    {children}
  </span>
);

const K = ({ children }: { children: React.ReactNode }) => (
  <span className="text-accent">{children}</span>
);
const V = ({ children }: { children: React.ReactNode }) => (
  <span className="text-stone-100">{children}</span>
);
const S = ({ children }: { children: React.ReactNode }) => (
  <span className="text-emerald-400">{children}</span>
);
const C = ({ children }: { children: React.ReactNode }) => (
  <span className="text-stone-600 italic">{children}</span>
);
const P = ({ children }: { children: React.ReactNode }) => (
  <span className="text-sky-400">{children}</span>
);
