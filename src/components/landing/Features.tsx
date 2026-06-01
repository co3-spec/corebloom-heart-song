const features = [
  { n: "01", title: "Sub-ms Latency", body: "Proprietary engine in Rust. No overhead, no lag between thought and execution." },
  { n: "02", title: "Multi-Model Routing", body: "Dynamically switches between GPT-4o, Claude 3.5 Sonnet, and local Llama 3." },
  { n: "03", title: "Plugin Forge", body: "Build custom CLI tools in seconds with our TypeScript SDK and WASM extensions." },
  { n: "04", title: "Context Aware", body: "Deep indexes your entire codebase for pin-point accurate answers and edits." },
  { n: "05", title: "Secure Vault", body: "Your secrets stay yours. Local-first encryption for every API key and token." },
  { n: "06", title: "Native GUI", body: "Optional dashboard for visual project mapping and agent orchestration." },
];

export function Features() {
  return (
    <section id="features" className="py-32 px-6 border-t border-border bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-accent mb-4">
            // capabilities
          </div>
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter font-bold">
            Engineered for precision
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {features.map((f) => (
            <div
              key={f.n}
              className="bg-background p-10 hover:bg-accent/[0.03] transition-colors group"
            >
              <div className="text-accent font-mono text-sm font-bold mb-6">{f.n}</div>
              <h3 className="font-display text-2xl uppercase mb-3 font-bold">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
