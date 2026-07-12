# HerAfrica — E-Lab Challenge 06: Your Digital Print

An advanced **React + TypeScript + Vite + Tailwind CSS v4** single-page site for the
HerAfrica think tank, built to score full marks on the Challenge 06 rubric and deploy
on **Cloudflare**.

Live sections: **Hero → Who We Are → Mission → Problem → Team → HerSafe Space
(Solution) → The Six Challenges → Impact → Footer**, with a sticky nav, wave
transitions, and reveal-on-scroll motion.

---

## Run it locally

```bash
cd herafrica-site
npm install
npm run dev          # hot-reloading dev server (http://localhost:5173)
npm run build        # production build → dist/
npm run preview      # preview the production build
```

---

## Deploy to Cloudflare

This is a pure static SPA served via **Cloudflare Workers Static Assets** (config in
[`wrangler.jsonc`](wrangler.jsonc)).

```bash
# one-time: log in to your Cloudflare account
npx wrangler login

# build + deploy
npm run deploy
# (equivalent to: npm run build && npx wrangler deploy)
```

Wrangler prints a public URL like `https://herafrica.<your-subdomain>.workers.dev`.
**Paste that URL into Canvas** for the challenge submission. To use your own domain,
add a route/custom domain in the Cloudflare dashboard or `wrangler.jsonc`.

> Prefer the dashboard? You can also connect this repo to **Cloudflare Pages** (build
> command `npm run build`, output directory `dist`).

---

## ✏️ How to customise (all content is in one file)

Everything editable lives in [`src/data/content.ts`](src/data/content.ts).

### 1. Add the 6 YouTube videos (Journey section)
Find each `challenge` and set `youtubeId` to the ID after `v=` or `youtu.be/`:

```ts
// https://youtu.be/dQw4w9WgXcQ  →
{ number: "01", title: "Team Introductions", youtubeId: "dQw4w9WgXcQ", ... }
```

Empty `youtubeId` shows a “Video coming soon” placeholder. Once set, the card shows the
video thumbnail and plays inline on click.

### 2. Add team headshots (Team section)
Drop square photos into `public/team/` and set each member’s `photo`:

```ts
{ name: "Jean Chretien Horugavye", photo: "/team/jean.jpg", ... }
```

Empty `photo` shows a colored initials avatar. Also confirm the fields marked
`// TODO: confirm` (country/role for Kevine, Miriam, Elina).

### 3. Swap the hero photo
Replace [`public/hero.jpg`](public/hero.jpg) with a real HerAfrica team/community photo
(landscape or portrait, ~1600px+ wide). It’s wired up in
[`src/components/Hero.tsx`](src/components/Hero.tsx) via `HERO_PHOTO`.

> The current hero image is a free-licensed placeholder (Pexels, no attribution
> required) — replace it with your own for the strongest result.

---

## Tech notes

- **Design system:** one palette + type scale in [`src/index.css`](src/index.css)
  (`@theme` tokens: midnight, plum, gold, coral, sand, cream).
- **Sections:** [`src/components/`](src/components/) — each is self-contained.
- **No external runtime calls** except Google Fonts and (optional) YouTube embeds.
- Production build is ~57 KB gzipped JS.

Built for the **ALU E-Lab · Challenge 06: Your Digital Print**.
