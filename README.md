# Dr. Ankita Mago — portfolio site

A one-page portfolio / practice site for Dr. Ankita Mago, Obstetrician & Gynaecologist.
Built with [Astro](https://astro.build) and Tailwind CSS v4.

**Status: pitch draft.** Every factual detail on the site is a placeholder. Nothing
about Dr. Mago's qualifications, experience, clinic, or patients has been invented —
unconfirmed values appear in `[square brackets]` and are highlighted in yellow on the
page so they are impossible to miss during a walkthrough.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built site
```

## Editing the content

Almost everything lives in one file: **`src/data/site.ts`**.

Name, tagline, bio, services, credentials, testimonials, FAQs, clinic hours, phone,
WhatsApp and address are all defined there. Change the data, and every section of the
page updates. You should not need to touch the components to swap in real content.

## Before this goes live

- [ ] Replace every `[bracketed]` value in `src/data/site.ts`
- [ ] Add a professional photograph at `public/images/doctor.jpg` and use it in `Hero.astro`
- [ ] Real phone / WhatsApp numbers (`contact.phoneHref`, `contact.whatsappHref` — digits only)
- [ ] Real Google Maps link (`contact.mapsUrl`)
- [ ] Point the booking form at a backend — Formspree, Web3Forms, or a Practo embed.
      It currently has `action="#"` and does not submit anywhere. See the TODO in
      `src/components/Visit.astro`.
- [ ] Testimonials: only publish real, consented quotes. Some medical councils restrict
      how patient testimonials may be used in advertising — confirm the rules that apply.
- [ ] Confirm the medical registration number shown in the About section
- [ ] Remove the `.ph-mark` highlight rule from `src/styles/global.css` and the
      `<span class="ph-mark">` wrappers once content is confirmed
- [ ] Set the real domain in `astro.config.mjs` (`site:`)

## Structure

```
src/
  data/site.ts        ← all content, all placeholders
  layouts/Base.astro  ← <head>, fonts, Physician schema.org markup
  components/
    Nav  Hero  About  Services  Credentials
    Testimonials  Visit  Faq  Footer  MobileBar  Icon
  pages/index.astro   ← section order
  styles/global.css   ← palette + type tokens
```

## Design notes

- Mobile-first. A sticky bottom bar (Call / WhatsApp / Book) is pinned on phones so the
  two actions that matter are always one thumb away.
- Palette is warm rather than clinical — cream, rose, plum, with sage as a quiet
  secondary. Fraunces for headings, Inter for text.
- Booking appears three times: nav, hero, and the Visit section, plus the mobile bar.
- `Physician` schema.org JSON-LD is in the layout for local search results. It reads
  from the same data file, so it stays correct once the placeholders are filled in.

## Deploying

Static output — drop `dist/` on Vercel, Netlify, or Cloudflare Pages. On Vercel:
connect the repo, framework preset "Astro", no configuration needed.

## Research notes (v2)

Content was pre-filled from public sources — her Instagram (@doctor_ovary),
her Lybrate profile, and search results around her Practo listing. **None of it
is confirmed with her.** Directory listings are self-reported and often stale,
and the sources contradict each other on several points:

| Detail | Lybrate | Practo |
| --- | --- | --- |
| MBBS | 2011 | 2012 |
| DNB | 2016 | 2017 |
| Experience | 15 years | 14 years |
| Clinic | Pitampura | Rohini |

Tags used in `src/data/site.ts`: `[confirm]` sourced but unverified,
`[CONFLICT]` sources disagree, `[TODO]` nothing found. Anything still tagged
renders with a yellow highlight on the page.

Also note: `drankitamagoclinic.com` appears in search results but did not
resolve during research. Check whether she already has a live site before
pitching.

### Why the site is built this way

She has ~228K Instagram followers. This is not a discovery site for a doctor
nobody can find — it is a conversion funnel for an audience she already owns
but cannot contact. Three decisions follow from that:

1. **The hero speaks to someone arriving from her bio link**, not from Google.
2. **Fertility/IVF leads the services**, because it is her stated specialty and
   the highest-value patient.
3. **The Answers section** restates the explainers she already posts. Instagram
   is invisible to search; the same content here is permanent and indexable.
   Each card should become its own page at `/answers/<slug>`.

Teleconsultation is featured prominently — her audience is nationwide, her
clinic is in one part of Delhi.
