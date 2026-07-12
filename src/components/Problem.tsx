import { problem } from "../data/content";
import { SectionHeading } from "./ui";
import Reveal from "./Reveal";

/**
 * PROBLEM MEDIA SLOT
 * Drop a photo in /public (e.g. public/problem.jpg) and set PROBLEM_PHOTO to
 * its path ("/problem.jpg"). While it's empty, an on-brand panel shows instead
 * — so the layout always looks intentional, never like a missing image.
 */
const PROBLEM_PHOTO = "/problem.jpg"; // Unsplash / Doug Linstedt — free license

function ProblemMedia() {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-black/10 shadow-[0_30px_60px_-25px_rgba(11,27,59,0.45)]">
      {PROBLEM_PHOTO ? (
        <img
          src={PROBLEM_PHOTO}
          alt="A schoolgirl concentrating during a lesson in a classroom"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        /* Branded placeholder — reads as an intentional data panel */
        <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight to-plum">
          <svg className="absolute inset-0 h-full w-full opacity-[0.10]" aria-hidden>
            <defs>
              <pattern id="pr-dia" width="46" height="46" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <path d="M23 4 L42 23 L23 42 L4 23 Z" fill="none" stroke="#F5A623" strokeWidth="1.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pr-dia)" />
          </svg>
          <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-gold/15 blur-3xl" aria-hidden />
          <div className="absolute -left-12 bottom-0 h-52 w-52 rounded-full bg-coral/15 blur-3xl" aria-hidden />
        </div>
      )}

      {/* Scrim + location chip — sits over the photo or the placeholder */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent" />
      <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/30 px-3 py-1.5 text-sm text-white/90 ring-1 ring-white/15 backdrop-blur-sm">
        <span aria-hidden>📍</span> Kimironko, Rwanda
      </span>
    </div>
  );
}

export default function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden bg-sand py-24 sm:py-32">
      {/* subtle depth */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-coral/[0.06] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Statement + photo, side by side */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <SectionHeading
            eyebrow={problem.eyebrow}
            title={problem.heading}
            intro={problem.statement}
          />
          <Reveal delay={120}>
            <ProblemMedia />
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {problem.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="h-full rounded-3xl border border-black/[0.06] bg-white/90 p-8 text-center shadow-[0_14px_40px_-18px_rgba(11,27,59,0.25)]">
                <div className="bg-gradient-to-r from-gold to-coral bg-clip-text font-display text-4xl font-extrabold text-transparent sm:text-5xl">
                  {s.value}
                </div>
                <p className="mx-auto mt-4 max-w-[15rem] text-sm leading-relaxed text-ink-soft">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Root cause — the 5 Whys, "excavation" timeline */}
        <Reveal className="mt-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-midnight/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-coral ring-1 ring-black/5">
            Digging to the root
          </span>
          <h3 className="mt-4 font-display text-3xl font-bold text-midnight sm:text-4xl">
            Root cause — the 5 Whys
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-ink-soft">
            Tracing the problem to its source leads us straight to the culture of silence.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* Animated spine — a highlight flows down toward the root */}
          <div
            className="absolute left-5 top-4 bottom-4 w-px bg-gradient-to-b from-gold/50 via-coral/40 to-midnight/60 sm:left-7"
            aria-hidden
          >
            <span className="absolute left-1/2 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold to-transparent blur-[1px] motion-safe:animate-flowdown" />
          </div>

          <ol className="space-y-4">
            {problem.rootCause.map((r, i) => {
              const isRoot = i === problem.rootCause.length - 1;
              return (
                <Reveal as="li" key={i} delay={i * 90} className="relative pl-14 sm:pl-20">
                  {/* Node on the spine */}
                  <span
                    className={`absolute left-5 top-6 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full font-display text-sm font-bold shadow-md ring-4 ring-sand sm:left-7 sm:h-12 sm:w-12 ${
                      isRoot ? "bg-gold text-midnight" : "bg-midnight text-gold"
                    }`}
                  >
                    {isRoot ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <circle cx="12" cy="12" r="8" />
                        <circle cx="12" cy="12" r="3.2" fill="currentColor" stroke="none" />
                      </svg>
                    ) : (
                      i + 1
                    )}
                  </span>

                  {/* Card */}
                  <div
                    className={`group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 sm:p-6 ${
                      isRoot
                        ? "bg-midnight text-white shadow-2xl ring-1 ring-gold/40"
                        : "border border-black/[0.06] bg-white/90 shadow-sm hover:-translate-y-0.5 hover:shadow-md"
                    }`}
                  >
                    {isRoot && (
                      <div
                        className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gold/25 blur-3xl motion-safe:animate-rootpulse"
                        aria-hidden
                      />
                    )}

                    {/* Ghost watermark number */}
                    <span
                      className={`pointer-events-none absolute right-4 top-0 select-none font-display text-6xl font-extrabold leading-none ${
                        isRoot ? "text-white/[0.07]" : "text-midnight/[0.05]"
                      }`}
                      aria-hidden
                    >
                      0{i + 1}
                    </span>

                    {isRoot && (
                      <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
                        The root cause
                      </p>
                    )}
                    <p
                      className={`relative font-display text-lg font-bold ${
                        isRoot ? "mt-1.5 text-white" : "text-midnight"
                      }`}
                    >
                      {r.why}
                    </p>

                    {/* Because — chained from the question above */}
                    <div className={`relative mt-3 flex items-start gap-2.5 text-sm ${isRoot ? "text-white/85" : "text-ink-soft"}`}>
                      <span
                        className={`mt-px inline-grid h-5 w-5 shrink-0 place-items-center rounded-full text-xs font-bold ${
                          isRoot ? "bg-gold text-midnight" : "bg-coral/10 text-coral"
                        }`}
                        aria-hidden
                      >
                        ↳
                      </span>
                      <p>
                        <span className={`font-semibold ${isRoot ? "text-gold" : "text-coral"}`}>Because </span>
                        {r.because.charAt(0).toLowerCase() + r.because.slice(1)}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
