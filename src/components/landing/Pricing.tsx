const tiers = [
  {
    name: "Hacker",
    price: "Free",
    suffix: "",
    desc: "For the solo dev building fast.",
    features: ["Basic CLI tools", "GPT-4o mini support", "100 requests / day", "Community plugins"],
    cta: "Install Core",
    featured: false,
  },
  {
    name: "Pro",
    price: "$20",
    suffix: "/mo",
    desc: "For engineering teams at lightspeed.",
    features: ["Unlimited requests", "All models included", "Plugin marketplace", "Native GUI dashboard", "Project-wide RAG"],
    cta: "Upgrade to Pro",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    suffix: "",
    desc: "Security and scale for large orgs.",
    features: ["Custom SSO / auth", "Private plugin repo", "24/7 priority ops", "On-premise routing"],
    cta: "Contact Sales",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 bg-white/[0.02] border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-accent mb-4">
            // licensing
          </div>
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter font-bold">
            Pick your tier
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={
                "p-8 bg-background flex flex-col transition-transform " +
                (t.featured
                  ? "border-2 border-accent md:scale-105 relative shadow-[0_0_40px_-10px_var(--color-accent)]"
                  : "border border-border")
              }
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-widest">
                  Recommended
                </div>
              )}
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-4">
                {t.name}
              </span>
              <div className="font-display text-5xl uppercase mb-3 font-bold">
                {t.price}
                {t.suffix && <span className="text-sm text-muted-foreground font-normal">{t.suffix}</span>}
              </div>
              <p className="text-sm text-muted-foreground mb-8">{t.desc}</p>
              <ul className="space-y-3 text-sm mb-auto">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">+</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={
                  "mt-10 w-full py-3 font-mono text-xs font-bold uppercase tracking-widest transition-all " +
                  (t.featured
                    ? "bg-accent text-accent-foreground hover:brightness-110"
                    : "border border-border hover:bg-white/5")
                }
              >
                {t.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
