type OctopusMarkProps = {
  size?: number;
  className?: string;
  monochrome?: boolean;
};

/**
 * Coreblow octopus mascot — recreated as inline SVG from reference image.
 * Coral body, six curling tentacles, big dark eyes with highlight.
 * Set `monochrome` to render in currentColor (useful for nav/footer logo).
 */
export function OctopusMark({ size = 240, className, monochrome = false }: OctopusMarkProps) {
  const body = monochrome ? "currentColor" : "var(--color-coral)";
  const spot = monochrome ? "currentColor" : "var(--color-coral-deep)";
  const eye = monochrome ? "var(--color-background)" : "#3A2018";
  const shine = monochrome ? "currentColor" : "#ffffff";

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
      {/* Body + tentacles as one continuous shape */}
      <path
        d="M120 22
           C 76 22, 44 54, 44 100
           C 44 124, 52 142, 62 156
           L 56 168
           C 50 178, 44 184, 36 188
           C 28 192, 22 192, 22 188
           C 22 184, 28 180, 34 178
           C 28 184, 28 192, 36 198
           C 44 204, 56 200, 64 188
           L 74 172
           C 76 176, 80 180, 84 184
           L 78 196
           C 74 204, 68 210, 60 212
           C 54 213, 50 210, 52 206
           C 54 202, 60 200, 66 202
           C 58 196, 50 200, 46 210
           C 42 220, 52 226, 64 222
           C 76 218, 84 208, 88 196
           L 92 188
           C 96 192, 102 196, 106 198
           L 102 212
           C 100 222, 96 228, 92 230
           C 88 232, 86 228, 88 224
           C 90 220, 96 218, 100 220
           C 92 214, 84 220, 82 230
           C 80 240, 92 240, 100 232
           C 108 224, 112 214, 112 202
           L 112 200
           C 116 200, 120 200, 124 200
           L 124 202
           C 124 214, 128 224, 136 232
           C 144 240, 156 240, 154 230
           C 152 220, 144 214, 138 220
           C 142 218, 148 220, 150 224
           C 152 228, 150 232, 146 230
           C 142 228, 138 222, 136 212
           L 132 198
           C 138 196, 144 192, 148 188
           L 152 196
           C 156 208, 164 218, 176 222
           C 188 226, 198 220, 194 210
           C 190 200, 182 196, 174 202
           C 180 200, 186 202, 188 206
           C 190 210, 186 213, 180 212
           C 172 210, 166 204, 162 196
           L 156 184
           C 160 180, 164 176, 166 172
           L 176 188
           C 184 200, 196 204, 204 198
           C 212 192, 212 184, 206 178
           C 212 180, 218 184, 218 188
           C 218 192, 212 192, 204 188
           C 196 184, 190 178, 184 168
           L 178 156
           C 188 142, 196 124, 196 100
           C 196 54, 164 22, 120 22 Z"
        fill={body}
      />

      {/* Sucker dots on top-right of head */}
      <ellipse cx="158" cy="58" rx="4.5" ry="3.5" fill={spot} opacity="0.85" />
      <ellipse cx="170" cy="68" rx="3.5" ry="2.8" fill={spot} opacity="0.85" />
      <ellipse cx="156" cy="74" rx="3" ry="2.4" fill={spot} opacity="0.85" />
      <ellipse cx="168" cy="84" rx="3.2" ry="2.6" fill={spot} opacity="0.85" />
      <ellipse cx="158" cy="92" rx="2.6" ry="2.2" fill={spot} opacity="0.85" />
      <ellipse cx="148" cy="84" rx="2.2" ry="1.8" fill={spot} opacity="0.85" />

      {/* Eyes */}
      <circle cx="96" cy="124" r="13" fill={eye} />
      <circle cx="144" cy="124" r="13" fill={eye} />
      <circle cx="92" cy="120" r="3.2" fill={shine} />
      <circle cx="140" cy="120" r="3.2" fill={shine} />
    </svg>
  );
}
