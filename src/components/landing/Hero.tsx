import { OctopusMark } from "./OctopusMark";
import { TerminalWindow } from "./TerminalWindow";

export function Hero() {
  return (
    <section className="relative pt-20 pb-32 px-6 overflow-hidden">
      {/* Soft ambient glow */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 size-[700px] rounded-full blur-3xl pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-coral) 18%, transparent), transparent 70%)",
        }}
      />


      <div className="relative max-w-5xl mx-auto text-center">
        {/* Mascot */}
        <div className="flex justify-center mb-8 animate-reveal">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 blur-2xl opacity-50 -z-10"
              style={{ background: "radial-gradient(circle, var(--color-accent), transparent 60%)" }}
            />
            <div className="animate-float drop-shadow-[0_0_40px_color-mix(in_oklab,var(--color-coral)_50%,transparent)]">
              <OctopusMark size={180} />
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 border border-border bg-white/5 mb-8 animate-reveal [animation-delay:100ms]">
          <span className="size-2 bg-accent rounded-full animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold">
            v1.4.0 · Multi-Model Sync
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase text-balance leading-[0.92] mb-6 font-bold animate-reveal [animation-delay:200ms]">
          The AI agent with{" "}
          <span className="text-accent">explosive</span> speed
        </h1>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 animate-reveal [animation-delay:300ms]">
          A multi-model CLI agent built for developers who outgrew the lobster.
          Native plugin SDK, local execution, sub-second latency.
        </p>

        <div className="max-w-xl mx-auto animate-reveal [animation-delay:400ms]">
          <TerminalWindow
            command="curl -sL coreblow.sh | sh"
            output={[
              "[info] fetching binaries...",
              "[info] installed → /usr/local/bin/cb",
              "[ok]   ready. try: cb ask \"refactor this file\"",
            ]}
          />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3 animate-reveal [animation-delay:500ms]">
          <button className="px-6 py-3 bg-accent text-accent-foreground font-mono text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all">
            Install Coreblow
          </button>
          <button className="px-6 py-3 border border-border font-mono text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
            Read the docs →
          </button>
        </div>
      </div>
    </section>
  );
}
