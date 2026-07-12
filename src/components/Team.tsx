import { team, teamStrengths, type Member } from "../data/content";
import { SectionHeading } from "./ui";
import Reveal from "./Reveal";

/* Fallback tints for members without a photo (colored initials). */
const gradients = [
  "from-gold to-coral",
  "from-coral to-plum",
  "from-plum to-gold",
  "from-gold to-plum",
  "from-coral to-gold",
  "from-plum to-coral",
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function StarIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function MemberCard({ m, i }: { m: Member; i: number }) {
  return (
    <div className="group flex h-full flex-col items-center px-2 text-center transition-transform duration-300 hover:-translate-y-1.5">
      {/* Circular avatar with an animated gradient ring */}
      <div className="relative h-28 w-28 sm:h-32 sm:w-32">
        <div
          aria-hidden
          className={`absolute -inset-1 rounded-full blur-[3px] [background:conic-gradient(from_0deg,var(--color-gold),var(--color-coral),var(--color-plum),var(--color-gold))] transition-opacity duration-300 ${
            m.lead
              ? "opacity-80 motion-safe:animate-borderspin"
              : "opacity-0 group-hover:opacity-90 motion-safe:group-hover:animate-borderspin"
          }`}
        />
        {m.photo ? (
          <img
            src={m.photo}
            alt={`Portrait of ${m.name}`}
            loading="lazy"
            className="relative h-full w-full rounded-full object-cover object-[center_20%] ring-2 ring-white/10 grayscale-[30%] transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
          />
        ) : (
          <div
            className={`relative grid h-full w-full place-items-center rounded-full bg-gradient-to-br ring-2 ring-white/10 ${gradients[i % gradients.length]}`}
            aria-hidden
          >
            <span className="font-display text-3xl font-extrabold text-white/95">
              {initials(m.name)}
            </span>
          </div>
        )}
        {m.lead && (
          <span className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gold px-3 py-1 text-[0.7rem] font-bold text-midnight shadow-lg">
            <StarIcon /> Team Lead
          </span>
        )}
      </div>

      <h3 className="mt-7 font-display text-xl font-bold text-white">{m.name}</h3>
      <p className="mt-1 text-sm font-semibold text-gold">{m.title}</p>
      <p className="mt-3 text-sm leading-relaxed text-white/60">{m.role}</p>

      <div className="mt-auto flex items-center gap-3 pt-4 text-sm text-white/65">
        <span className="flex items-center gap-1">
          <span aria-hidden>📍</span> {m.country}
        </span>
        <span aria-hidden className="text-white/20">·</span>
        <a
          href={`mailto:${m.email}`}
          aria-label={`Email ${m.name}`}
          className="flex items-center gap-1.5 text-white/60 transition-colors hover:text-gold"
        >
          <MailIcon /> Email
        </a>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-midnight py-24 text-white sm:py-32">
      {/* depth */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-gold/[0.10] blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-plum/50 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]">
          <defs>
            <pattern id="tm-dia" width="46" height="46" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <path d="M23 4 L42 23 L23 42 L4 23 Z" fill="none" stroke="#F5A623" strokeWidth="1.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tm-dia)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The people behind HerAfrica"
          title="Meet the Think Tank"
          intro="Six students from across the continent, uniting health experience and technology to protect African girls."
          center
          dark
        />

        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.email} delay={(i % 3) * 90}>
              <MemberCard m={m} i={i} />
            </Reveal>
          ))}
        </div>

        {/* Collective strengths — auto-scrolling marquee (pauses on hover) */}
        <Reveal className="mt-16">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
            What we bring to the table
          </p>
          <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
            <div className="flex w-max gap-3 motion-safe:animate-marquee hover:[animation-play-state:paused]">
              {[...teamStrengths, ...teamStrengths].map((s, idx) => (
                <span
                  key={idx}
                  className="whitespace-nowrap rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm text-white/80"
                  aria-hidden={idx >= teamStrengths.length}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
