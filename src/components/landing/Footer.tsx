import { OctopusMark } from "./OctopusMark";

const cols = [
  { title: "Product", links: ["Changelog", "Plugins", "Security", "Roadmap"] },
  { title: "Resources", links: ["Docs", "Discord", "Support", "Status"] },
  { title: "Company", links: ["Brand", "Privacy", "Terms", "Contact"] },
];

export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-5">
              <OctopusMark size={32} />
              <span className="font-display uppercase tracking-tighter font-bold text-lg">
                Coreblow
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              The high-pressure AI agent engine. Secure, extensible, unapologetically fast.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-10">
            {cols.map((c) => (
              <div key={c.title} className="space-y-4">
                <div className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">
                  {c.title}
                </div>
                <div className="flex flex-col gap-2 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  {c.links.map((l) => (
                    <a key={l} href="#" className="hover:text-foreground transition-colors">
                      {l}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border flex justify-between items-center text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          <span>© 2026 Coreblow Systems</span>
          <span>
            Status: <span className="text-emerald-400">Operational</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
