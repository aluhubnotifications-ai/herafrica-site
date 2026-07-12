import { useState } from "react";
import { challenges, type Challenge } from "../data/content";
import { SectionHeading } from "./ui";
import Reveal from "./Reveal";

const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

function PlayIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.29-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14z" />
    </svg>
  );
}

function FlagIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 22V4M4 4h11l-2 3 2 3H4" />
    </svg>
  );
}

/* Challenge 06 — the website itself (no video). */
function WebsiteCard() {
  return (
    <div className="absolute inset-0 flex flex-col bg-gradient-to-br from-midnight to-plum">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-coral/80" />
        <span className="h-2 w-2 rounded-full bg-gold/80" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
        <span className="ml-2 flex-1 truncate rounded bg-white/10 px-2 py-0.5 text-[10px] text-white/45">
          herafrica · Your Digital Print
        </span>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-2 p-4 text-center">
        <img src="/logo-mark.png" alt="" className="h-12 w-12 rounded-full" />
        <p className="font-display text-lg font-bold text-white">You're looking at it.</p>
        <a
          href="#top"
          className="rounded-full bg-gold px-3.5 py-1.5 text-xs font-semibold text-midnight shadow-lg transition-transform hover:-translate-y-0.5"
        >
          Back to top ↑
        </a>
      </div>
    </div>
  );
}

function Media({ c, playing, onPlay }: { c: Challenge; playing: boolean; onPlay: () => void }) {
  if (!c.youtubeId) return <WebsiteCard />;
  if (playing)
    return (
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${c.youtubeId}?autoplay=1&rel=0`}
        title={c.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  return (
    <button onClick={onPlay} className="group absolute inset-0 block h-full w-full" aria-label={`Play video: ${c.title}`}>
      <img src={thumb(c.youtubeId)} alt="" className="h-full w-full object-cover" />
      <span className="absolute inset-0 bg-midnight/35 transition-colors group-hover:bg-midnight/15" />
      <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-coral pl-1 text-white shadow-2xl transition-transform group-hover:scale-110">
        <PlayIcon size={26} />
      </span>
    </button>
  );
}

export default function Journey() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section id="journey" className="relative overflow-hidden bg-midnight py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gold/[0.08] blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.035]">
          <defs>
            <pattern id="jn-dia" width="46" height="46" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <path d="M23 4 L42 23 L23 42 L4 23 Z" fill="none" stroke="#F5A623" strokeWidth="1.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#jn-dia)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our E-Lab journey"
          title="The Six Challenges"
          intro="Every step of HerAfrica's E-Lab experience — from our first introductions to this digital print. Tap any challenge to watch its story."
          center
          dark
        />

        {/* All six, equal height */}
        <ol className="mt-14 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((c, i) => {
            const isSite = !c.youtubeId;
            return (
              <Reveal as="li" key={c.number} delay={(i % 3) * 80} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/30">
                  <div className="relative aspect-video bg-black">
                    <Media c={c} playing={playingId === c.youtubeId} onPlay={() => setPlayingId(c.youtubeId)} />
                    {/* Milestone node */}
                    <span
                      className={`pointer-events-none absolute left-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full font-display text-xs font-bold shadow-lg ring-2 ring-midnight ${
                        isSite ? "bg-gold text-midnight" : "bg-midnight/90 text-gold backdrop-blur"
                      }`}
                    >
                      {isSite ? <FlagIcon /> : c.number}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-bold text-white">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{c.definition}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
