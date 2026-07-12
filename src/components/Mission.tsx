import { mission } from "../data/content";
import Reveal from "./Reveal";

/** Gold highlight for key phrases inside the mission statement. */
function Em({ children }: { children: React.ReactNode }) {
  return <span className="text-gold">{children}</span>;
}

export default function Mission() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-midnight py-28 text-white sm:py-36"
    >
      {/* Depth */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/[0.12] blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-plum/50 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.045]">
          <defs>
            <pattern
              id="mi-dia"
              width="46"
              height="46"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <path d="M23 4 L42 23 L23 42 L4 23 Z" fill="none" stroke="#F5A623" strokeWidth="1.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mi-dia)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          {/* Eyebrow */}
          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              {mission.eyebrow}
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold" />
          </div>

          {/* Decorative quote mark */}
          <span
            className="pointer-events-none block font-display text-7xl leading-[0.4] text-gold/25 sm:text-8xl"
            aria-hidden
          >
            &ldquo;
          </span>

          {/* Statement with highlighted keywords */}
          <p className="mt-6 font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl md:text-[2.35rem] md:leading-[1.25]">
            To tackle the rising rates of <Em>teenage pregnancy</Em> in{" "}
            <Em>Kimironko, Rwanda</Em> by using our technical skills and experience in
            health to desensitize the <Em>cultural taboos</Em> that drive this issue — and
            to <Em>educate teenagers</Em> on sexual health and the value of informed
            choices.
          </p>

          {/* Divider + attribution */}
          <div className="mx-auto mt-10 h-1 w-24 rounded-full bg-gradient-to-r from-gold to-coral" />
          <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-white/60">
            — {mission.attribution}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
