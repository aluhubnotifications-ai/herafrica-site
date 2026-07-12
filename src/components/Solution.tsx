import { solution } from "../data/content";
import { Eyebrow } from "./ui";
import Reveal from "./Reveal";

/** Live HerSafe Space prototype (Cloudflare Pages). */
const PROTOTYPE_URL = "https://hersafespace.pages.dev/";

function PhoneMockup() {
  // Render the app at a real mobile viewport (390px) and scale it down so its
  // responsive layout shows correctly and fills the phone screen exactly.
  const SCREEN_W = 264; // inner screen width (outer 280 − 2×8px border)
  const SCREEN_H = 544; // inner screen height
  const LOGICAL_W = 390; // true mobile viewport for the iframe
  const scale = SCREEN_W / LOGICAL_W;
  const LOGICAL_H = Math.round(SCREEN_H / scale);

  return (
    <div className="relative mx-auto w-[280px] max-w-full">
      {/* glow */}
      <div className="absolute inset-0 -z-10 scale-110 rounded-[3rem] bg-gradient-to-b from-gold/20 to-plum/20 blur-2xl" aria-hidden />
      <div className="rounded-[2.2rem] border-[8px] border-midnight bg-midnight shadow-2xl shadow-midnight/40">
        {/* Live indicator + open-in-new-tab */}
        <div className="flex items-center justify-between px-3.5 py-2">
          <span className="flex items-center gap-1.5 text-[11px] font-medium text-white/75">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
            Live prototype
          </span>
          <a
            href={PROTOTYPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold text-gold transition-colors hover:text-gold-soft"
          >
            Open ↗
          </a>
        </div>
        {/* The real, interactive app — scaled to fit */}
        <div
          className="relative overflow-hidden rounded-[1.5rem] bg-[#0e1f42]"
          style={{ height: SCREEN_H }}
        >
          <iframe
            src={PROTOTYPE_URL}
            title="HerSafe Space — live prototype"
            loading="lazy"
            className="absolute left-0 top-0 border-0 bg-white"
            style={{
              width: LOGICAL_W,
              height: LOGICAL_H,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Solution() {
  return (
    <section id="solution" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-gold/[0.07] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Intro + mockup */}
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow label={solution.eyebrow} />
            <h2 className="text-3xl font-bold tracking-tight text-midnight sm:text-4xl md:text-5xl">
              {solution.name}
            </h2>
            <Reveal className="mt-5">
              <p className="text-lg leading-relaxed text-ink-soft">{solution.intro}</p>
              <a
                href={PROTOTYPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-midnight shadow-lg shadow-gold/25 transition-transform hover:-translate-y-0.5"
              >
                Try HerSafe Space live
                <span aria-hidden>↗</span>
              </a>
              <p className="mt-3 text-sm text-ink-soft/70">
                The working prototype is running on the right — go ahead and chat with it.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <PhoneMockup />
          </Reveal>
        </div>

        {/* How it works */}
        <Reveal className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-midnight">How it works</h3>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {solution.how.map((h, i) => (
            <Reveal key={h.step} delay={i * 90}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-black/[0.06] bg-white/90 p-7 shadow-[0_14px_40px_-18px_rgba(11,27,59,0.22)]">
                <span className="font-display text-5xl font-extrabold text-gold/25">0{h.step}</span>
                <h4 className="mt-2 text-lg font-bold text-midnight">{h.title}</h4>
                <p className="mt-2 text-ink-soft">{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Features */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solution.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="h-full rounded-3xl bg-midnight p-6 text-white shadow-lg shadow-midnight/20">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-gold">
                  <Dot />
                </span>
                <h4 className="mt-4 font-bold text-gold">{f.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* USP */}
        <Reveal className="mt-6">
          <div className="rounded-3xl border-l-4 border-coral bg-white/90 p-7 shadow-[0_14px_40px_-18px_rgba(11,27,59,0.22)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
              Our unique advantage
            </p>
            <p className="mt-3 text-lg leading-relaxed text-ink">{solution.usp}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Dot() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
