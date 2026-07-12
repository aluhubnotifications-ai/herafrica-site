/**
 * HerAfrica — Hero section.
 *
 * Follows the researched pattern for social-impact sites:
 *  full-bleed dark hero · gold accents · confident type · ONE primary CTA.
 *
 * MEDIA SLOT: the hero background is real HerAfrica team footage
 * (public/hero-video.mp4) — muted + looping — with hero.jpg as the poster/fallback.
 * Set HERO_VIDEO to "" to use the photo instead; set both empty for the gradient.
 */
const HERO_VIDEO = "/hero-video.mp4"; // real team clip (muted, autoplay loop)
const HERO_PHOTO = "/hero.jpg"; // poster while the video loads + fallback

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden bg-midnight text-white"
    >
      {/* ---------- Layered background ---------- */}
      <div className="absolute inset-0" aria-hidden>
        {HERO_VIDEO || HERO_PHOTO ? (
          <>
            {HERO_VIDEO ? (
              /* Real team footage — muted, looping background video */
              <video
                className="h-full w-full object-cover object-[center_35%]"
                autoPlay
                muted
                loop
                playsInline
                poster={HERO_PHOTO || undefined}
              >
                <source src={HERO_VIDEO} type="video/mp4" />
              </video>
            ) : (
              <img
                src={HERO_PHOTO}
                alt=""
                className="h-full w-full object-cover object-[center_28%]"
              />
            )}
            {/* Dark scrim for text legibility — strong at top/bottom, lighter mid */}
            <div className="absolute inset-0 bg-gradient-to-b from-midnight/85 via-midnight/60 to-midnight/95" />
            <div className="absolute inset-0 bg-midnight/35" />
            {/* Warm gold glow keeps the brand tone */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(245,166,35,0.18),transparent_55%)]" />
            {/* Focused scrim behind the centered copy — keeps text legible
                even on the brightest video frames, without darkening the edges */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_62%_54%_at_50%_46%,rgba(11,27,59,0.55),transparent_72%)]" />
          </>
        ) : (
          <>
            {/* Fallback: brand gradient + African-inspired diamond pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight to-plum" />
            <svg className="absolute inset-0 h-full w-full opacity-[0.06]">
              <defs>
                <pattern
                  id="diamonds"
                  width="46"
                  height="46"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)"
                >
                  <rect width="46" height="46" fill="none" />
                  <path
                    d="M23 4 L42 23 L23 42 L4 23 Z"
                    fill="none"
                    stroke="#F5A623"
                    strokeWidth="1.4"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diamonds)" />
            </svg>
            <div className="animate-drift absolute -left-32 top-4 h-[30rem] w-[30rem] rounded-full bg-gold/20 blur-3xl" />
            <div className="animate-drift absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-plum/60 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(245,166,35,0.14),transparent_55%)]" />
          </>
        )}
        {/* Bottom vignette for legibility / section transition */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-midnight to-transparent" />
      </div>

      {/* ---------- Hero content (global Nav overlays the top) ---------- */}
      <div className="relative z-10 flex flex-1 items-center pt-16">
        <div className="mx-auto w-full max-w-4xl px-5 py-16 text-center sm:px-8">
          <h1
            className="fade-up text-5xl font-extrabold leading-[1.02] sm:text-6xl md:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            HerAfrica
          </h1>

          <p
            className="fade-up mx-auto mt-4 max-w-2xl bg-gradient-to-r from-gold-soft via-gold to-coral bg-clip-text font-display text-2xl font-bold text-transparent sm:text-3xl md:text-4xl"
            style={{ animationDelay: "160ms" }}
          >
            Breaking the silence. Protecting her future.
          </p>

          <p
            className="fade-up mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
            style={{ animationDelay: "240ms" }}
          >
            A student think tank tackling teenage pregnancy in Kimironko, Rwanda —
            through education, culture change, and{" "}
            <span className="font-semibold text-white">HerSafe Space</span>, our
            anonymous, AI-powered support platform.
          </p>

          <div
            className="fade-up mt-9 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "320ms" }}
          >
            <a
              href="#journey"
              className="rounded-full bg-gold px-7 py-3.5 font-semibold text-midnight shadow-lg shadow-gold/25 transition-transform hover:-translate-y-0.5"
            >
              Explore our work
            </a>
            <a
              href="#solution"
              className="rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Meet HerSafe Space
            </a>
          </div>

          <p
            className="fade-up mt-8 text-sm text-white/65"
            style={{ animationDelay: "400ms" }}
          >
            📍 Kimironko, Rwanda &nbsp;·&nbsp; Teen pregnancy up from 5% to 8% since 2020
          </p>
        </div>
      </div>

      {/* ---------- Scroll cue ---------- */}
      <div className="relative z-10 flex justify-center pb-7" aria-hidden>
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/25 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}
