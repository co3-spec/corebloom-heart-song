import { OctopusMark } from "./OctopusMark";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <OctopusMark size={32} />
          <span className="font-display text-xl tracking-tighter uppercase font-bold">
            Coreblow
          </span>
        </a>
        <div className="hidden md:flex gap-8 text-xs font-mono font-medium uppercase tracking-widest">
          <a href="#features" className="hover:text-accent transition-colors">Features</a>
          <a href="#compare" className="hover:text-accent transition-colors">vs OpenClaw</a>
          <a href="#pricing" className="hover:text-accent transition-colors">Pricing</a>
          <a href="#docs" className="hover:text-accent transition-colors">Docs</a>
        </div>
        <button className="px-4 py-1.5 border border-accent text-accent text-xs font-mono font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all">
          Sign In
        </button>
      </div>
    </nav>
  );
}
