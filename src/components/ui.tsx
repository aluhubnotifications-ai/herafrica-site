import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** Full-width section with a centered container + consistent padding. */
export function Section({
  id,
  children,
  className = "",
  tone = "cream",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "cream" | "sand" | "white" | "dark";
}) {
  const tones: Record<string, string> = {
    cream: "bg-cream text-ink",
    sand: "bg-sand text-ink",
    white: "bg-white text-ink",
    dark: "bg-midnight text-white",
  };
  return (
    <section id={id} className={`${tones[tone]} py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

/** Gold-rule eyebrow used across every section for a consistent signature. */
export function Eyebrow({
  label,
  center = false,
}: {
  label: string;
  center?: boolean;
}) {
  if (center) {
    return (
      <div className="mb-5 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold" />
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
          {label}
        </span>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold" />
      </div>
    );
  }
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-gold" />
      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
        {label}
      </span>
    </div>
  );
}

/** Consistent eyebrow + heading block used at the top of every section. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow && <Eyebrow label={eyebrow} center={center} />}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl ${
          dark ? "text-white" : "text-midnight"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            dark ? "text-white/70" : "text-ink-soft"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}

/** Decorative "sand wave" divider tying the site to the E-Lab brand look. */
export function SandWave({
  from,
  to,
}: {
  from: string; // solid color above the wave
  to: string; // wave fill (the section color below)
}) {
  return (
    <div className="-mb-px leading-none" style={{ background: from }} aria-hidden>
      <svg
        viewBox="0 0 1440 110"
        className="block w-full"
        preserveAspectRatio="none"
        style={{ height: "70px" }}
      >
        <path
          fill={to}
          d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,110L0,110Z"
        />
      </svg>
    </div>
  );
}
