# McLean Tutoring Center — Light Theme Redesign Spec

**Date:** 2026-07-08
**Goal:** Improve visitor→client conversion (currently ~3 clients from 30+ visits) by making the site feel warm, personal, and trustworthy instead of dark and generic.

**Reference:** principiaeducation.com — warm light palette, real tutor profiles, academic-but-approachable feel.

---

## Scope

Site-wide redesign in one pass, covering all four pages (`/`, `/sat-prep`, `/math-prep`, `/why-us`):

1. Flip the dark navy theme to a warm cream light theme
2. Custom typography (serif headlines + Inter body)
3. Replace all emoji icons with custom inline SVG icons
4. New "Meet Our Tutors" section on the home page
5. Fix the logo crop in the About section circle
6. Full mobile pass across every section

**Stack unchanged:** Next.js App Router + Tailwind CSS. This is a restyle and content addition, not a rewrite.

---

## Design System

### Colors (replace the navy token set in `tailwind.config.ts`)

| Token | Value | Use |
|-------|-------|-----|
| `cream` | `#FAF7F2` | Page background |
| `cream-dark` | `#F3EEE5` | Alternating section background |
| `ink` | `#1E3A5F` | Headings, primary text |
| `ink-light` | `#4A6285` | Secondary text |
| `brand` | `#2563EB` | Primary CTAs, links, icon strokes |
| `brand-dark` | `#1D4ED8` | CTA hover |
| `amber` | `#F59E0B` | Result badges, highlights, accents |
| `card` | `#FFFFFF` | Card surfaces |

Cards: white, `rounded-2xl`, soft layered shadow (e.g. `shadow-[0_2px_12px_rgba(30,58,95,0.08)]`), subtle hover lift (`translate-y`/shadow transition).

Old navy tokens (`navy`, `navy-light`, `navy-mid`, `accent`, `slate-text`, `slate-muted`) are removed; every usage across components and pages is migrated.

### Typography

- **Headings:** Lora (Google Fonts via `next/font`), semi-bold/bold — warm academic serif
- **Body/UI:** Inter (already in use)
- Heading color `ink`; body `ink-light`

### Icons

A single `components/icons.tsx` module exporting small inline SVG icon components (24px grid, `stroke="currentColor"`, stroke-width 2, rounded caps — consistent outline style). Replaces every emoji across the site. Needed icons: calculator/math, book/English, pencil, graduation cap, chart-up, dollar/pricing, location pin, users, check, star, phone, clock/calendar, school building, lightbulb.

Emoji currently live in: `Services.tsx`, `TrustBar.tsx`, `math-prep` (📐 📖 ✓), `why-us` (🏫 🤝 💰 ✏️ 📚 🎓 📈 ⭐ ❌ ✅ ❓), comparison table marks, list checks.

Comparison-table cell marks (✅ ❌ ❓) become SVG check (brand blue), x (muted red), and question/dash (gray).

---

## New Section: Meet Our Tutors

New `components/Tutors.tsx`, placed on the home page between About and Services; `/why-us` links to it.

Per-tutor card:
- Circular initial avatar (cream/amber tinted circle, serif initial) — real photos may be swapped in later
- Real name, school + grad year
- Specialty line (e.g., "SAT Math · 1560 SAT" or "English & Writing")
- 2–3 sentence personal bio

Content: user will supply real names/bios after seeing the redesign. Until then, ship with clearly-marked placeholder profiles in a single `tutors` data array at the top of the component so swapping content is a one-place edit.

---

## Fixes

### Logo fit
`components/About.tsx` currently uses `scale-[1.12]` to force `logo.png` into a circle. Inspect the image, then fix properly: correct `object-fit`/positioning, or pad/re-export the asset if the artwork itself isn't centered. Remove the scale hack.

On the light theme, verify the logo (likely designed for dark background) still reads correctly; if not, place it on a navy-ink circle or white card.

### Mobile pass (audit every page at 375px and 768px)

Known issues to fix:
- **Nav:** two-row fixed header is 92px tall on phones; tighten (smaller brand text, compact tab row, reduce spacer height to match)
- **Hero:** headline size steps down properly; no text overflowing or awkward wraps
- **Why Us comparison table:** 4-column grid unreadable on phones — restack as per-row cards or horizontal scroll with sticky label column
- **Card grids:** confirm single-column stacking with sane gaps everywhere
- **Tap targets:** nav links/CTAs at least ~44px
- **Trust bar:** wraps cleanly without truncation

---

## Page-by-Page Changes

All pages: background flips to cream, sections alternate `cream`/`cream-dark` (replacing navy/navy-light alternation), cards flip to white, all text tokens migrated, emoji → SVG.

- **Home (`/`):** Hero (cream bg, serif headline, ink text, brand CTA) → TrustBar → About (logo fix) → **Tutors (new)** → Services → Testimonials → CollegeAcceptances (retint from dark blue gradient to light treatment with amber accents) → BookSession → Contact → Footer (dark `ink` background — a deep navy footer anchors the light page, a common pattern on light-theme sites)
- **SAT prep, Math prep, Why Us:** theme migration + icon swap + mobile fixes; no structural content changes
- **Forms (`ContactForm`):** inputs restyle to white fields with ink text and brand focus ring (currently navy-mid backgrounds)
- **BookSession:** Calendly widget already white — now blends naturally with light theme

---

## Testing

- Existing Jest tests (`ContactForm`, `/api/contact`) must keep passing — validation/behavior untouched
- `npm run build` clean
- Manual verification: all 4 pages at desktop + 375px mobile, hover states, nav scroll behavior

---

## Out of Scope

- New pages, CMS, booking flow changes
- Copy rewrites beyond the Tutors section
- Removing Tailwind
- Real tutor photos (placeholder avatars until provided)
