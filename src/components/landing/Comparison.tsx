const rows = [
  ["Response time", "~1.4s", "0.2s"],
  ["Multi-model support", "Limited", "6+ models"],
  ["Extensibility", "Config-only", "Plugin SDK + WASM"],
  ["Local execution", "No", "Yes (Ollama)"],
  ["Context window", "128k", "Infinite (vector RAG)"],
];

export function Comparison() {
  return (
    <section id="compare" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-accent mb-4">
            // head to head
          </div>
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter font-bold">
            Coreblow vs OpenClaw
          </h2>
        </div>
        <div className="border border-border rounded-lg overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5">
              <tr>
                <th className="p-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Metric
                </th>
                <th className="p-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  OpenClaw.ai
                </th>
                <th className="p-6 font-mono text-[10px] uppercase tracking-widest text-accent">
                  Coreblow.com
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map(([metric, them, us]) => (
                <tr key={metric} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 text-muted-foreground">{metric}</td>
                  <td className="p-6">{them}</td>
                  <td className="p-6 text-accent font-bold">{us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
