## Plan: Landing Page coreblow.com + Octopus Mascot SVG

**Positioning**: Coreblow = CLI AI agent rival openclaw.ai. Brutalist neon dark theme, octopus coral sebagai mascot playful contrast.

**Arah desain**: Brutalist Kinetic Neon (v3) — bg hitam #050607, aksen neon cyan #00f5ff, tipografi Space Grotesk + JetBrains Mono. Mascot octopus coral memberi kontras warna hangat di tengah dunia neon dingin.

### Mascot Octopus (BARU)

`src/components/landing/OctopusMark.tsx` — komponen SVG inline:
- `viewBox="0 0 240 240"`, recreated dari gambar referensi user (body bulat coral, 6 tentakel curl simetris, mata coklat tua dengan highlight putih)
- Warna asli: body `#E26A56` (coral), bintik `#C9523F`, mata `#3A2018`
- Props: `className`, `size` (default 240)
- Tidak embed PNG — semua path SVG agar tajam & ringan
- Animasi CSS: float halus translateY ±6px (4s ease infinite), opsional mata blink

### Sections landing page (single page `/`)

1. **Nav sticky** — mini octopus (32px) + wordmark "COREBLOW", link Docs/Plugins/Pricing, tombol Sign In outline neon
2. **Hero** — badge versi, headline "The AI Agent with Explosive Speed", **octopus besar (200-240px) mengambang di atas terminal window** dengan glow halo cyan, terminal dengan typewriter `curl -sL coreblow.sh | sh`
3. **Feature grid** — 6 kartu (Sub-ms Latency, Multi-Model Routing, Plugin Forge, Context Aware, Secure Vault, Native GUI)
4. **Comparison table** — Coreblow vs OpenClaw, 4 baris dengan kolom Coreblow di-highlight neon
5. **Pricing** — 3 tier (Hacker free, Pro $20, Enterprise custom), tier tengah ditinggikan
6. **Testimonials** — 3 dev quotes gaya tweet
7. **Footer** — logo octopus + tagline + 3 kolom link + copyright

### Detail teknis

- Update `src/styles.css`: tambah CSS variables `--accent` (neon cyan oklch), `--coral` (octopus), import Google Fonts Space Grotesk + JetBrains Mono. Keyframes `typewriter`, `blink`, `float`, `slideUp`.
- `src/routes/__root.tsx`: tambahkan `<link>` ke Google Fonts di head, update default meta site name
- `src/routes/index.tsx`: hapus placeholder, update `head()` (title "Coreblow — The AI Agent with Explosive Speed", description, og tags), render landing sections
- Komponen di `src/components/landing/`: `Nav.tsx`, `Hero.tsx`, `Features.tsx`, `Comparison.tsx`, `Pricing.tsx`, `Testimonials.tsx`, `Footer.tsx`, `OctopusMark.tsx`, `TerminalWindow.tsx`

### Yang TIDAK termasuk
- Auth, database, payment, halaman terpisah, backend install script
- Tidak ada gambar raster — semuanya SVG inline + CSS
