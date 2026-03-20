"use client";

import { FadeIn } from "./FadeIn";

const steps = [
  {
    number: "01",
    title: "Connect",
    subtitle: "Your Infrastructure",
    description:
      "Bring your existing stack — cloud providers, databases, APIs, and services. YVRIS maps your architecture in minutes, not months.",
    code: `import { Yvris } from '@yvris/sdk'

const platform = new Yvris({
  providers: ['gcloud', 'aws'],
  services: ['supabase', 'stripe'],
})

await platform.connect()`,
  },
  {
    number: "02",
    title: "Orchestrate",
    subtitle: "With Intelligence",
    description:
      "Define workflows that span your entire ecosystem. AI-assisted routing ensures data flows to exactly where it creates value.",
    code: `const workflow = platform.workflow('onboarding')

workflow
  .on('user.created')
  .pipe(enrichWithAI({ model: 'claude' }))
  .route(to => [
    to.slack('#new-users'),
    to.supabase('profiles'),
    to.stripe('customers'),
  ])`,
  },
  {
    number: "03",
    title: "Observe",
    subtitle: "Every Signal",
    description:
      "Real-time observability that feels designed, not bolted on. System health, performance metrics, and business intelligence on a single, composed surface.",
    code: `const dashboard = platform.observe({
  metrics: ['latency', 'throughput', 'errors'],
  interval: '1s',
  alerts: {
    latency: { threshold: '100ms' },
    errors:  { threshold: 0.01 },
  }
})`,
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-32 px-8 md:px-16 md:py-48 bg-white text-stone-900">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-24 md:mb-32">
          <FadeIn>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-stone-400 mb-6">
              The Process
            </p>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight max-w-3xl">
              Three movements. <br />
              <span className="italic text-accent">One platform.</span>
            </h2>
          </FadeIn>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-stone-200 py-16 md:py-24"
            >
              {/* Number + Title */}
              <div className="col-span-1 md:col-span-4 flex flex-col gap-6">
                <FadeIn delay={i * 0.1}>
                  <span className="font-serif text-7xl md:text-8xl text-stone-200 leading-none">
                    {step.number}
                  </span>
                </FadeIn>
                <FadeIn delay={i * 0.1 + 0.1}>
                  <h3 className="font-serif text-3xl md:text-4xl tracking-tight leading-tight">
                    {step.title}.
                  </h3>
                  <p className="font-sans text-sm uppercase tracking-widest text-accent mt-2">
                    {step.subtitle}
                  </p>
                </FadeIn>
                <FadeIn delay={i * 0.1 + 0.15}>
                  <p className="font-sans text-base font-light leading-relaxed text-stone-500 max-w-sm">
                    {step.description}
                  </p>
                </FadeIn>
              </div>

              {/* Code Block — Treated as a visual quotation */}
              <div className="col-span-1 md:col-span-8">
                <FadeIn delay={i * 0.1 + 0.2}>
                  <div className="bg-stone-900 text-stone-300 p-8 md:p-12 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
                    <div className="flex items-center gap-2 mb-6 pb-4 border-b border-stone-700/50">
                      <div className="w-2 h-2 rounded-full bg-stone-600" />
                      <div className="w-2 h-2 rounded-full bg-stone-600" />
                      <div className="w-2 h-2 rounded-full bg-stone-600" />
                      <span className="ml-4 text-stone-500 text-[10px] tracking-widest uppercase">
                        yvris.config.ts
                      </span>
                    </div>
                    <pre className="whitespace-pre-wrap">
                      <code>
                        {step.code.split("\n").map((line, li) => (
                          <span key={li} className="block">
                            {highlightSyntax(line)}
                          </span>
                        ))}
                      </code>
                    </pre>
                  </div>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function highlightSyntax(line: string) {
  const parts: React.ReactNode[] = [];
  let remaining = line;
  let key = 0;

  const patterns: [RegExp, string][] = [
    [/^(import|from|const|await|new)\b/, "text-accent"],
    [/('[@\w/.-]+'|'[^']*')/, "text-emerald-400"],
    [/(\/\/.*)$/, "text-stone-600"],
    [/(\{|\}|\[|\]|\(|\))/, "text-stone-500"],
    [/\b(to|model|threshold|interval)\b(?=\s*[:=])/, "text-sky-400"],
  ];

  const tokens = remaining.split(/(\s+)/);
  for (const token of tokens) {
    let matched = false;
    for (const [pattern, color] of patterns) {
      if (pattern.test(token)) {
        parts.push(
          <span key={key++} className={color}>
            {token}
          </span>
        );
        matched = true;
        break;
      }
    }
    if (!matched) {
      parts.push(<span key={key++}>{token}</span>);
    }
  }

  return parts;
}
