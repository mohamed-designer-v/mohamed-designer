@import "tailwindcss";

@theme {
  --font-sans: "Outfit", "Cairo", ui-sans-serif, system-ui, sans-serif;
  --font-ar: "Cairo", "Outfit", ui-sans-serif, sans-serif;

  --color-ink: #07070d;
  --color-ink-2: #0c0c16;
  --color-ink-3: #12121f;
  --color-brand: #7c5cff;
  --color-brand-2: #c05cff;
  --color-brand-3: #22d3ee;
  --color-gold: #ffc46b;

  --animate-float: float 7s ease-in-out infinite;
  --animate-spin-slow: spin 18s linear infinite;
  --animate-marquee: marquee 28s linear infinite;
  --animate-pulse-ring: pulse-ring 2.2s ease-out infinite;
  --animate-shine: shine 3.2s linear infinite;
}

@keyframes float {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, -18px, 0); }
}
@keyframes marquee {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-50%, 0, 0); }
}
@keyframes pulse-ring {
  0% { transform: scale(0.85); opacity: 0.65; }
  80%, 100% { transform: scale(1.7); opacity: 0; }
}
@keyframes shine {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
}

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    background-color: var(--color-ink);
    color: #e9e9f2;
    font-family: var(--font-sans);
    overflow-x: hidden;
  }
  html[lang="ar"] body,
  html[dir="rtl"] body {
    font-family: var(--font-ar);
  }
  ::selection {
    background: var(--color-brand);
    color: #fff;
  }
  h1, h2, h3, h4 {
    text-wrap: balance;
    line-height: 1.15;
  }
  ::-webkit-scrollbar { width: 10px; height: 10px; }
  ::-webkit-scrollbar-track { background: #0a0a12; }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(var(--color-brand), var(--color-brand-2));
    border-radius: 99px;
    border: 2px solid #0a0a12;
  }
}

@utility container-x {
  width: 100%;
  margin-inline: auto;
  max-width: 82rem;
  padding-inline: 1.25rem;
}

@utility glass {
  background: linear-gradient(150deg, rgb(255 255 255 / 0.07), rgb(255 255 255 / 0.02));
  border: 1px solid rgb(255 255 255 / 0.09);
  backdrop-filter: blur(14px);
}

@utility grad-text {
  background: linear-gradient(100deg, #fff 0%, var(--color-brand-3) 38%, var(--color-brand) 62%, var(--color-brand-2) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@utility grad-brand {
  background-image: linear-gradient(120deg, var(--color-brand), var(--color-brand-2) 55%, var(--color-brand-3));
}

@utility ring-glow {
  box-shadow: 0 0 0 1px rgb(255 255 255 / 0.08), 0 24px 60px -24px rgb(124 92 255 / 0.65);
}

/* scroll reveal */
.reveal {
  opacity: 0;
  transform: translateY(26px);
  transition: opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--reveal-delay, 0ms);
  will-change: opacity, transform;
}
.reveal.is-visible {
  opacity: 1;
  transform: none;
}

/* animated gradient border card */
.card-hover {
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.4s, box-shadow 0.4s;
}
.card-hover:hover {
  transform: translateY(-6px);
  border-color: rgb(255 255 255 / 0.22);
  box-shadow: 0 30px 60px -30px rgb(124 92 255 / 0.55);
}

.grain::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.35;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E");
}

.shine-text {
  background: linear-gradient(90deg, #fff, var(--color-gold), #fff);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: var(--animate-shine);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: var(--animate-marquee);
}
.marquee-wrap:hover .marquee-track {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .reveal { opacity: 1; transform: none; }
}
