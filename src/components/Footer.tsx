import { brand, team } from "../data/content";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-midnight text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-gold/[0.08] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/logo-mark.png" alt="HerAfrica logo" className="h-11 w-11 rounded-full" />
              <div className="leading-tight">
                <span className="block font-display text-xl font-bold">{brand.name}</span>
                <span className="font-display text-sm italic text-gold">{brand.motto}</span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-white/75">{brand.tagline}</p>
            <p className="mt-2 max-w-sm text-sm text-white/65">
              Breaking the silence on teenage pregnancy in Kimironko, Rwanda — with
              education, empathy, and technology.
            </p>
            <a
              href="#top"
              className="mt-6 inline-block rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-midnight transition-transform hover:-translate-y-0.5"
            >
              Back to top ↑
            </a>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-gold">The Team</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {team.map((m) => (
                <li key={m.email} className="text-sm">
                  <span className="block text-white/85">{m.name}</span>
                  <a href={`mailto:${m.email}`} className="break-all text-white/65 hover:text-gold">
                    {m.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row">
          <p>© {brand.year} {brand.name}. All rights reserved.</p>
          <p>Built for the {brand.program}.</p>
        </div>
      </div>
    </footer>
  );
}
