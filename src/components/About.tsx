import { about } from "../data/content";
import Reveal from "./Reveal";

/* ---------- Refined line icons (stroke inherits `color`) ---------- */
const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function BookIcon({ color }: { color: string }) {
  return (
    <svg {...iconProps} stroke={color}>
      <path d="M12 6.6C10.4 5.2 8.2 4.8 6 5.1a1 1 0 0 0-.9 1v9.8a1 1 0 0 0 1.1 1c2-.3 4 .1 5.8 1.4" />
      <path d="M12 6.6c1.6-1.4 3.8-1.8 6-1.5a1 1 0 0 1 .9 1v9.8a1 1 0 0 1-1.1 1c-2-.3-4 .1-5.8 1.4" />
      <path d="M12 6.6v11.5" />
    </svg>
  );
}
function VoiceIcon({ color }: { color: string }) {
  return (
    <svg {...iconProps} stroke={color}>
      <path d="M20 11.4a7.6 7.6 0 0 1-10.8 6.9L4.5 19.6l1.3-4.4A7.6 7.6 0 1 1 20 11.4Z" />
      <path d="M8.7 11.6h.01M12 11.6h.01M15.3 11.6h.01" />
    </svg>
  );
}
function ShieldIcon({ color }: { color: string }) {
  return (
    <svg {...iconProps} stroke={color}>
      <path d="M12 3.4l6.6 2.8v4.7c0 4.3-2.8 7-6.6 8.4-3.8-1.4-6.6-4.1-6.6-8.4V6.2z" />
      <path d="M9.1 12.1l1.9 1.9 3.8-3.9" />
    </svg>
  );
}

const decor = [
  { accent: "#E0902A", tint: "rgba(245,166,35,0.12)", ring: "rgba(245,166,35,0.30)", Icon: BookIcon },
  { accent: "#E4572E", tint: "rgba(228,87,46,0.11)", ring: "rgba(228,87,46,0.28)", Icon: VoiceIcon },
  { accent: "#6E5AA6", tint: "rgba(110,90,166,0.13)", ring: "rgba(110,90,166,0.30)", Icon: ShieldIcon },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: "linear-gradient(180deg,#fbf9f5 0%,#f6efe4 100%)" }}
    >
      {/* Decorative depth */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-gold/[0.07] blur-3xl" />
        <svg className="absolute -bottom-10 right-[-4rem] h-80 w-80 opacity-[0.05]">
          <defs>
            <pattern id="ab-dia" width="44" height="44" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <path d="M22 4 L40 22 L22 40 L4 22 Z" fill="none" stroke="#0b1b3b" strokeWidth="1.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ab-dia)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Intro */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              {about.eyebrow}
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-midnight sm:text-4xl md:text-[2.9rem]">
            {about.heading}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{about.lead}</p>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink-soft">{about.sub}</p>
        </Reveal>

        {/* Pillars */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {about.pillars.map((p, i) => {
            const d = decor[i];
            return (
              <Reveal key={p.title} delay={i * 100}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-black/[0.06] bg-white/90 p-8 shadow-[0_14px_40px_-18px_rgba(11,27,59,0.25)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_55px_-20px_rgba(11,27,59,0.35)]">
                  {/* top accent hairline */}
                  <span
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: `linear-gradient(90deg, ${d.accent}, ${d.ring})` }}
                  />
                  {/* index watermark */}
                  <span className="absolute right-7 top-6 select-none font-display text-6xl font-extrabold leading-none text-midnight/[0.05]">
                    0{i + 1}
                  </span>
                  {/* icon medallion */}
                  <span
                    className="relative grid h-14 w-14 place-items-center rounded-2xl"
                    style={{ background: d.tint, boxShadow: `inset 0 0 0 1px ${d.ring}` }}
                  >
                    <d.Icon color={d.accent} />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-midnight">{p.title}</h3>
                  <div
                    className="mt-3 h-px w-10"
                    style={{ background: d.ring }}
                    aria-hidden
                  />
                  <p className="mt-3 leading-relaxed text-ink-soft">{p.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
