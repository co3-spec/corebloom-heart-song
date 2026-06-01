type OctopusMarkProps = {
  size?: number;
  className?: string;
  monochrome?: boolean;
};

/**
 * Coreblow octopus mascot — clean proportional build.
 * - Round head (ellipse) centered top-half of viewBox
 * - 6 symmetric stroked tentacles with rounded caps
 * - Big friendly eyes on lower half of head
 * API (size/className/monochrome) is unchanged.
 */
export function OctopusMark({ size = 240, className, monochrome = false }: OctopusMarkProps) {
  const body = monochrome ? "currentColor" : "var(--color-coral)";
  const spot = monochrome ? "currentColor" : "var(--color-coral-deep)";
  const eye = monochrome ? "var(--color-background)" : "#3A2018";
  const shine = monochrome ? "currentColor" : "#ffffff";

  // Tentacles: start near bottom of head, curl outward.
  // Each path: M start -> C control1 control2 end
  const tentacles = [
    // Far left — longest, curling out & down
    "M 70 150 C 50 170, 30 190, 24 214",
    // Mid left
    "M 86 162 C 74 184, 64 202, 60 222",
    // Inner left — short, tucked in
    "M 104 170 C 100 188, 98 204, 100 220",
    // Inner right
    "M 136 170 C 140 188, 142 204, 140 220",
    // Mid right
    "M 154 162 C 166 184, 176 202, 180 222",
    // Far right — longest mirror
    "M 170 150 C 190 170, 210 190, 216 214",
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Coreblow octopus mascot"
      role="img"
    >
      {/* Tentacles (drawn first so head overlaps their tops cleanly) */}
      <g stroke={body} strokeWidth="22" strokeLinecap="round" fill="none">
        {tentacles.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>

      {/* Head — round, slightly wider than tall */}
      <ellipse cx="120" cy="110" rx="74" ry="70" fill={body} />

      {/* Sucker cluster — small, on upper-right of head */}
      <ellipse cx="160" cy="78" rx="3.2" ry="2.6" fill={spot} opacity="0.9" />
      <ellipse cx="170" cy="88" rx="2.8" ry="2.2" fill={spot} opacity="0.9" />
      <ellipse cx="158" cy="94" rx="2.4" ry="2" fill={spot} opacity="0.9" />
      <ellipse cx="168" cy="104" rx="2.2" ry="1.8" fill={spot} opacity="0.9" />

      {/* Eyes — proportional, lower half of head */}
      <ellipse cx="98" cy="122" rx="9" ry="11" fill={eye} />
      <ellipse cx="142" cy="122" rx="9" ry="11" fill={eye} />
      <circle cx="95" cy="118" r="2.6" fill={shine} />
      <circle cx="139" cy="118" r="2.6" fill={shine} />

      {/* Subtle smile */}
      <path
        d="M 110 148 Q 120 156, 130 148"
        stroke={eye}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}
