type TerminalWindowProps = {
  command: string;
  output?: string[];
  className?: string;
};

export function TerminalWindow({ command, output = [], className }: TerminalWindowProps) {
  return (
    <div
      className={
        "relative border border-border bg-[#0a0b0d] rounded-lg shadow-2xl overflow-hidden " +
        (className ?? "")
      }
    >
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-white/5">
        <div className="size-2.5 rounded-full bg-red-500/50" />
        <div className="size-2.5 rounded-full bg-amber-500/50" />
        <div className="size-2.5 rounded-full bg-emerald-500/50" />
        <span className="ml-4 text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
          coreblow — bash
        </span>
      </div>
      <div className="p-6 text-left font-mono text-sm">
        <div className="flex items-center gap-3">
          <span className="text-accent">$</span>
          <code className="text-accent flex-1 whitespace-nowrap overflow-hidden border-r-2 border-accent animate-typewriter">
            {command}
          </code>
        </div>
        {output.length > 0 && (
          <div className="mt-4 space-y-1 text-muted-foreground text-xs">
            {output.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
