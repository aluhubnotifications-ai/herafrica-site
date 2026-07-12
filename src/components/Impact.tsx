import { leanCanvas } from "../data/content";
import { SectionHeading } from "./ui";
import Reveal from "./Reveal";

export default function Impact() {
  return (
    <section id="impact" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The model behind the mission"
          title="Impact & Sustainability"
          intro="How HerSafe Space creates value — and how we keep it running and growing."
          center
        />

        {/* Lean canvas snapshot */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {leanCanvas.map((b, i) => (
            <Reveal key={b.title} delay={(i % 5) * 70}>
              <div className="h-full rounded-2xl border border-black/[0.06] bg-white/90 p-5 shadow-[0_10px_30px_-16px_rgba(11,27,59,0.25)]">
                <h3 className="text-sm font-bold uppercase tracking-wide text-coral">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
