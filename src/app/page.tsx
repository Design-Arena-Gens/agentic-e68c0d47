export default function Home() {
  const productionSystems = [
    {
      label: "Hybrid RAG Platform",
      headline: "High-recall retrieval with <200ms responses for regulated teams.",
      details:
        "Swapped naive vector search for reranked multi-hop retrieval, automated ingestion QA, and ship-weekly evaluation harnesses.",
    },
    {
      label: "Agentic Document Automation",
      headline: "Autonomous pipeline processing millions of contracts every week.",
      details:
        "Orchestrated tool-using agents, human verification loops, and structured output guards to unlock reliable filings.",
    },
    {
      label: "Fine-tuned Reasoners",
      headline: "Custom Qwen + Llama experts outperforming base models by 18%.",
      details:
        "Data curation, LoRA fine-tunes, elastic evaluation, and on-demand adapters deployed behind a feature-flagged API.",
    },
  ];

  const openSource = [
    {
      name: "CommandRex",
      description:
        "Operator-forwards CLI that chains retrieval, reasoning, and action planning for production incidents.",
      link: "https://github.com/commandrex/commandrex",
    },
    {
      name: "Junior Researcher",
      description:
        "Autonomous research assistant that drafts memos, citations, and experiment briefs from messy prompts.",
      link: "https://github.com/junior-researcher-labs/junior-researcher",
    },
    {
      name: "MCP Experiments",
      description:
        "Playground MCP servers used for rapid prototyping of coding agents and evaluation sandboxes.",
      link: "https://github.com/agentic-labs/mcp-experiments",
    },
  ];

  const capabilities = [
    "Production RAG + retrieval engineering",
    "Tool-using agent workflows",
    "LLM evals, telemetry, and guardrails",
    "Fine-tuning & distillation (Qwen, Llama, Mistral)",
    "Observability + feedback flywheels",
    "Developer enablement & workshops",
  ];

  const latestSignals = [
    "Publishing research on agent observability & failure recovery.",
    "Teaching hands-on workshops for product teams adopting LLMs.",
    "Designing MCP-first services that make coding agents trustworthy.",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -right-20 top-16 hidden h-[320px] w-[320px] rotate-[8deg] rounded-[3rem] border-4 border-black bg-[#ffe8a3] shadow-[10px_10px_0_0_#141414] md:block" />
      <div className="pointer-events-none absolute -left-28 bottom-20 h-72 w-72 -rotate-6 rounded-[3rem] border-4 border-black bg-[#d6f6ff] shadow-[10px_10px_0_0_#141414]" />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-20 px-5 pb-28 pt-24 md:px-10 md:pt-28">
        <header className="grid gap-10 rounded-[3rem] border-4 border-black bg-[#fffef7] p-10 shadow-[12px_12px_0_0_#141414] md:grid-cols-[1.4fr_0.8fr] md:p-16">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#ffb800] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] shadow-[4px_4px_0_0_#141414] md:text-sm">
              AI Engineer · Systems Builder
            </span>
            <h1 className="text-pretty text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
              I turn ambitious AI ideas into reliable products that ship.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed md:text-xl">
              I build production LLM systems, retrieval pipelines, and agentic
              workflows for teams that need real outcomes. From fine-tuning
              Qwen &amp; Llama experts, to designing fast retrieval services,
              to automating document-heavy operations—I close the gap between
              research demos and dependable products.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:build@agentic.studio"
                className="inline-flex items-center gap-3 rounded-full border-3 border-black bg-[#6a5dfc] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[6px_6px_0_0_#141414] transition hover:-translate-y-1 hover:shadow-[9px_9px_0_0_#141414]"
              >
                Start a build sprint
              </a>
              <a
                href="#showcase"
                className="inline-flex items-center rounded-full border-3 border-black bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] shadow-[6px_6px_0_0_#141414] transition hover:-translate-y-1 hover:shadow-[9px_9px_0_0_#141414]"
              >
                Inspect the work
              </a>
            </div>
          </div>

          <div className="space-y-6 rounded-[2.5rem] border-4 border-black bg-white p-8 shadow-[8px_8px_0_0_#141414]">
            <div className="rounded-3xl border-3 border-black bg-[#ffe8a3] p-6 shadow-[6px_6px_0_0_#141414]">
              <h2 className="text-lg font-bold uppercase tracking-wide">
                Current Signals
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed">
                {latestSignals.map((signal) => (
                  <li key={signal} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-black" />
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-3">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-600">
                Core Capabilities
              </h3>
              <div className="grid gap-3">
                {capabilities.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center justify-between rounded-2xl border-3 border-black bg-[#fdfcf4] px-4 py-2 text-sm font-semibold shadow-[4px_4px_0_0_#141414]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section
          id="showcase"
          className="relative rounded-[3rem] border-4 border-black bg-[#f0fffb] p-10 shadow-[12px_12px_0_0_#141414] md:p-16"
        >
          <div className="absolute -right-8 -top-8 hidden rotate-[6deg] rounded-3xl border-4 border-black bg-[#6a5dfc] px-6 py-3 text-sm font-black uppercase tracking-[0.25em] text-white shadow-[8px_8px_0_0_#141414] md:block">
            Production Mode
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
                Systems I ship
              </h2>
              <p className="max-w-3xl text-lg leading-relaxed">
                Everyday work focuses on stitching together data plumbing,
                reasoning engines, and product surfaces so teams can trust the
                AI that supports their operations.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {productionSystems.map((system) => (
                <article
                  key={system.label}
                  className="flex h-full flex-col gap-4 rounded-[2.5rem] border-4 border-black bg-white p-6 shadow-[8px_8px_0_0_#141414]"
                >
                  <span className="inline-flex w-fit items-center rounded-full border-2 border-black bg-[#ffb800] px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] shadow-[3px_3px_0_0_#141414]">
                    {system.label}
                  </span>
                  <h3 className="text-lg font-bold leading-snug">
                    {system.headline}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-700">
                    {system.details}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[3rem] border-4 border-black bg-white p-10 shadow-[12px_12px_0_0_#141414] md:p-12">
            <h2 className="text-3xl font-black uppercase tracking-tight">
              Open Source Lab
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              I publish tools that help teams reason better with AI, measure
              what agents are doing, and bootstrap their own evaluation loops.
            </p>
            <div className="mt-8 space-y-6">
              {openSource.map((project) => (
                <div
                  key={project.name}
                  className="rounded-3xl border-3 border-black bg-[#f7f1ff] p-6 shadow-[8px_8px_0_0_#141414]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-bold uppercase tracking-wide">
                      {project.name}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border-2 border-black bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] shadow-[4px_4px_0_0_#141414] transition hover:-translate-y-[2px] hover:shadow-[6px_6px_0_0_#141414]"
                    >
                      Repo
                    </a>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-8">
            <div className="rounded-[3rem] border-4 border-black bg-[#fffef7] p-8 shadow-[12px_12px_0_0_#141414]">
              <h2 className="text-2xl font-black uppercase tracking-tight">
                Workshop Sprints
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                Sessions that teach teams how to productionize LLM features,
                map risk surfaces, and wire telemetry into everyday delivery.
              </p>
              <ul className="mt-6 space-y-4 text-sm font-semibold">
                <li className="rounded-2xl border-3 border-black bg-white px-4 py-3 shadow-[6px_6px_0_0_#141414]">
                  Ship &amp; evaluate RAG in 48 hours.
                </li>
                <li className="rounded-2xl border-3 border-black bg-white px-4 py-3 shadow-[6px_6px_0_0_#141414]">
                  Build tool-using agents with human-in-the-loop checkpoints.
                </li>
                <li className="rounded-2xl border-3 border-black bg-white px-4 py-3 shadow-[6px_6px_0_0_#141414]">
                  Instrument MCP servers + coding agents for reliability.
                </li>
              </ul>
            </div>

            <div className="rounded-[3rem] border-4 border-black bg-[#d6f6ff] p-8 shadow-[12px_12px_0_0_#141414]">
              <h2 className="text-2xl font-black uppercase tracking-tight">
                Research Tracks
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                Writing on retrieval ergonomics, agent guardrails, and how to
                make AI systems observable enough for real teams.
              </p>
              <ul className="mt-6 space-y-3 text-sm font-semibold">
                <li>Failure recovery patterns for chain-of-thought agents.</li>
                <li>Telemetry-driven evals for hybrid search pipelines.</li>
                <li>MCP-native debugging workflows for coding copilots.</li>
              </ul>
            </div>
          </aside>
        </section>

        <section className="relative rounded-[3rem] border-4 border-black bg-[#141414] p-12 text-white shadow-[12px_12px_0_0_#141414] md:p-16">
          <div className="absolute -top-4 left-10 inline-flex rounded-full border-2 border-white bg-[#ffb800] px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-black shadow-[4px_4px_0_0_#141414]">
            Reliability over hype
          </div>
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-black uppercase leading-tight md:text-4xl">
                Ready to turn AI experiments into everyday tools?
              </h2>
              <p className="text-lg leading-relaxed text-neutral-100">
                I partner with product, data, and platform teams to ship
                dependable AI features—complete with evals, guardrails, and
                observability from day one.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-[2.5rem] border-4 border-white bg-[#1f1f1f] p-8 shadow-[8px_8px_0_0_rgba(255,255,255,0.35)]">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-200">
                Get in the loop
              </span>
              <a
                href="mailto:build@agentic.studio"
                className="inline-flex items-center justify-center rounded-full border-3 border-white bg-[#6a5dfc] px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[6px_6px_0_0_rgba(255,255,255,0.45)] transition hover:-translate-y-1 hover:shadow-[9px_9px_0_0_rgba(255,255,255,0.45)]"
              >
                build@agentic.studio
              </a>
              <p className="text-sm leading-relaxed text-neutral-300">
                Based in production shipping schedules, not labs. Let’s build
                something your teammates will actually adopt.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
