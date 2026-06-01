const quotes = [
  {
    handle: "@v_engine",
    name: "Jordan D.",
    body: "Coreblow is actually insane. The latency gap vs openclaw is noticeable on every single command. Rust backend for the win.",
  },
  {
    handle: "@stack_dev",
    name: "Aki.sh",
    body: "Finally a CLI agent that doesn't feel like a dial-up modem. The local Llama 3 support changed my whole workflow.",
  },
  {
    handle: "@kernel_panic",
    name: "T-X",
    body: "Plugin SDK is the killer feature. Wrote a custom deploy agent in 5 minutes. OpenClaw can't keep up.",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-center mb-16 text-muted-foreground">
          // developer feedback
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <div key={q.handle} className="p-6 border border-border bg-white/[0.02] hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-full bg-coral grid place-items-center text-background font-bold font-mono text-xs">
                  {q.name.slice(0, 1)}
                </div>
                <div>
                  <div className="text-sm font-bold">{q.name}</div>
                  <div className="text-[10px] font-mono text-muted-foreground">{q.handle}</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic leading-relaxed">"{q.body}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
