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
