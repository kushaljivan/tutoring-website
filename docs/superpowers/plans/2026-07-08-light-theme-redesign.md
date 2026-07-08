# Light Theme Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle all four pages of the McLean Tutoring Center site from a dark navy theme to a warm cream/royal-blue light theme, with serif headlines, custom SVG icons replacing all emoji, a new "Meet Our Tutors" section, a fixed logo treatment, and mobile fixes.

**Architecture:** Pure restyle + one new section. Theme tokens live in `app/globals.css` via Tailwind v4 `@theme` (NOT `tailwind.config.ts` — that file is an empty v3 leftover and is not the source of truth). New light tokens are added alongside the legacy dark tokens so every intermediate commit still builds and renders; legacy tokens are deleted in the final task after all usages are migrated. A new `components/icons.tsx` exports inline SVG icon components used across the site.

**Tech Stack:** Next.js 16.2.6 (App Router), React 19, Tailwind CSS v4 (`@theme` in CSS), `next/font/google`, Jest + React Testing Library, Resend (untouched).

## Global Constraints

- **Tailwind v4:** color/shadow/font tokens are defined in `app/globals.css` inside `@theme`. Do not edit `tailwind.config.ts`.
- **Build command:** `npm run build` (runs `next build --webpack` — the `--webpack` flag is required, do not remove it).
- **Node modules are not installed** at plan start — Task 1 installs them.
- **This repo's AGENTS.md warns the Next.js version may differ from training data.** The only new Next API used in this plan is `Lora` from `next/font/google`, which follows the exact pattern already working in `app/layout.tsx` for `Inter`. If you touch any other Next API, read the docs under `node_modules/next/` first.
- **Palette (exact values):** cream `#FAF7F2`, cream-dark `#F3EEE5`, ink `#1E3A5F`, ink-light `#4A6285`, brand `#2563EB`, brand-dark `#1D4ED8`, amber `#F59E0B`, amber-dark `#B45309`, card `#FFFFFF`.
- **Class migration map** (use unless a task says otherwise): section `bg-navy`→`bg-cream`, section `bg-navy-light`→`bg-cream-dark`; card `bg-navy`/`bg-navy-light` + `border-navy-mid` → `bg-card border-ink/10 shadow-card`; `text-white`→`text-ink`; `text-slate-text`→`text-ink-light`; `text-slate-muted`→`text-ink-light/70`; `text-accent`→`text-brand`; CTA `bg-accent text-navy`→`bg-brand text-white`; `hover:bg-accent-dark`→`hover:bg-brand-dark`; `border-accent`→`border-brand`; result badges `bg-accent/10 border-accent/30 text-accent`→`bg-amber/10 border-amber/30 text-amber-dark`.
- **Headings:** every `h1`/`h2` gets `font-serif` added. Section heading color is `text-ink`.
- **Copy is unchanged** everywhere except the new Tutors section. Do not rewrite marketing text.
- **Existing tests must keep passing:** `__tests__/components/ContactForm.test.tsx`, `__tests__/api/contact.test.ts`.
- **Placeholder tutor content** is expected and intentional (user will supply real bios); it must be marked with a `PLACEHOLDER` comment.

---

## File Map

```
app/globals.css              ← @theme tokens: add light set (Task 2), remove dark set (Task 12)
app/layout.tsx               ← Lora font variable, bg-cream body (Task 2)
components/icons.tsx         ← NEW: all SVG icons (Task 3)
components/Nav.tsx           ← light chrome + mobile tightening (Task 4)
components/TrustBar.tsx      ← light + SVG icons (Task 4)
components/Footer.tsx        ← dark ink anchor footer (Task 4)
components/Hero.tsx          ← light + serif + mobile sizes (Task 5)
components/About.tsx         ← light + logo fix (Task 5)
components/Services.tsx      ← light + SVG icons (Task 5)
components/Tutors.tsx        ← NEW: Meet Our Tutors (Task 6)
components/Testimonials.tsx  ← light (Task 7)
components/CollegeAcceptances.tsx ← light treatment (Task 7)
components/BookSession.tsx   ← light (Task 8)
components/ContactSection.tsx← light (Task 8)
components/ContactForm.tsx   ← light inputs + SVG check (Task 8)
components/BookCTA.tsx       ← dark ink CTA band (Task 9)
app/page.tsx                 ← spacer fix (Task 4), Tutors insert (Task 6)
app/sat-prep/page.tsx        ← full light migration (Task 9)
app/math-prep/page.tsx       ← full light migration (Task 10)
app/why-us/page.tsx          ← full light migration + mobile table (Task 11)
__tests__/components/icons.test.tsx  ← NEW (Task 3)
__tests__/components/Tutors.test.tsx ← NEW (Task 6)
```

---

### Task 1: Install dependencies and verify green baseline

**Files:** none created/modified.

- [ ] **Step 1: Install**

```bash
cd /Users/kushaljivan/code/tutoring-website && npm install
```
Expected: completes without errors, `node_modules/` created.

- [ ] **Step 2: Run existing tests**

```bash
npm test
```
Expected: 2 suites pass (ContactForm + contact API). If anything fails, STOP and report — do not proceed on a red baseline.

- [ ] **Step 3: Verify build**

```bash
npm run build
```
Expected: build completes with no errors.

No commit (no changes).

---

### Task 2: Light theme tokens and fonts

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

**Interfaces:**
- Produces: Tailwind utilities `bg-cream`, `bg-cream-dark`, `text-ink`, `text-ink-light`, `bg-brand`, `hover:bg-brand-dark`, `text-amber`, `text-amber-dark`, `bg-card`, `shadow-card`, `shadow-card-hover`, `font-serif` — used by every later task. Legacy `navy`/`accent`/`slate` utilities remain available until Task 12.

- [ ] **Step 1: Replace `app/globals.css` entirely**

```css
@import "tailwindcss";

@theme {
  /* Light theme */
  --color-cream: #FAF7F2;
  --color-cream-dark: #F3EEE5;
  --color-ink: #1E3A5F;
  --color-ink-light: #4A6285;
  --color-brand: #2563EB;
  --color-brand-dark: #1D4ED8;
  --color-amber: #F59E0B;
  --color-amber-dark: #B45309;
  --color-card: #ffffff;
  --shadow-card: 0 2px 12px rgb(30 58 95 / 0.08);
  --shadow-card-hover: 0 10px 28px rgb(30 58 95 / 0.14);
  --font-serif: var(--font-lora), Georgia, serif;

  /* LEGACY dark tokens — deleted in the final cleanup task once no component references them */
  --color-navy: #0f172a;
  --color-navy-light: #1e293b;
  --color-navy-mid: #334155;
  --color-accent: #38bdf8;
  --color-accent-dark: #0284c7;
  --color-slate-text: #cbd5e1;
  --color-slate-muted: #94a3b8;
}
```

- [ ] **Step 2: Replace `app/layout.tsx` entirely**

```tsx
import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import Nav from '@/components/Nav'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

export const metadata: Metadata = {
  title: 'McLean Tutoring Center — Math & English Tutoring, SAT Prep',
  description:
    '1-on-1 Math and English tutoring for elementary through high school students in McLean, VA — plus SAT prep. Serving Langley HS, McLean HS, Cooper MS, Longfellow MS, and more. Starting at $45/hr.',
  openGraph: {
    siteName: 'McLean Tutoring Center',
    title: 'McLean Tutoring Center — Math & English Tutoring, SAT Prep',
    description:
      '1-on-1 Math and English tutoring for K-12 students in McLean, VA — plus SAT prep. Starting at $45/hr.',
    url: 'https://mcleantutoringcenter.com',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${lora.variable} bg-cream text-ink`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
```

- [ ] **Step 3: Verify build and tests**

```bash
npm run build && npm test
```
Expected: both pass. (Site sections still look dark — each section sets its own `bg-navy`; that migrates task-by-task.)

- [ ] **Step 4: Commit**

```bash
git add app/globals.css app/layout.tsx
git commit -m "feat: add light theme tokens and Lora serif font"
```

---

### Task 3: SVG icon module

**Files:**
- Create: `components/icons.tsx`
- Test: `__tests__/components/icons.test.tsx`

**Interfaces:**
- Produces: named exports `CheckIcon`, `XIcon`, `MinusIcon`, `TrendingUpIcon`, `MapPinIcon`, `UsersIcon`, `DollarIcon`, `GraduationCapIcon`, `BookOpenIcon`, `CalculatorIcon`, `PencilIcon`, `RulerIcon`, `StarIcon`, `SchoolIcon`. Each accepts standard `SVGProps<SVGSVGElement>` (size via `className`, e.g. `className="w-5 h-5"`; color via `currentColor`).

- [ ] **Step 1: Write the failing test**

Create `__tests__/components/icons.test.tsx`:

```tsx
import { render } from '@testing-library/react'
import { CheckIcon, GraduationCapIcon } from '@/components/icons'

describe('icons', () => {
  it('renders an svg that accepts className', () => {
    const { container } = render(<CheckIcon className="w-4 h-4" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveClass('w-4')
  })

  it('is hidden from screen readers by default', () => {
    const { container } = render(<GraduationCapIcon />)
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- __tests__/components/icons.test.tsx
```
Expected: FAIL — "Cannot find module '@/components/icons'"

- [ ] **Step 3: Create `components/icons.tsx`**

Consistent style: 24px grid, `stroke="currentColor"`, stroke-width 2, round caps/joins, `fill="none"` (StarIcon is the one filled shape).

```tsx
import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

function Svg(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M20 6 9 17l-5-5" />
    </Svg>
  )
}

export function XIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </Svg>
  )
}

export function MinusIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 12h14" />
    </Svg>
  )
}

export function TrendingUpIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
      <path d="M16 7h6v6" />
    </Svg>
  )
}

export function MapPinIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </Svg>
  )
}

export function UsersIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Svg>
  )
}

export function DollarIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 2v20" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </Svg>
  )
}

export function GraduationCapIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
    </Svg>
  )
}

export function BookOpenIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </Svg>
  )
}

export function CalculatorIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M8 6h8" />
      <path d="M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h.01M16 19h.01" />
    </Svg>
  )
}

export function PencilIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </Svg>
  )
}

export function RulerIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
      <path d="m14.5 12.5 2-2" />
      <path d="m11.5 9.5 2-2" />
      <path d="m8.5 6.5 2-2" />
      <path d="m17.5 15.5 2-2" />
    </Svg>
  )
}

export function StarIcon(props: IconProps) {
  return (
    <Svg fill="currentColor" stroke="none" {...props}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </Svg>
  )
}

export function SchoolIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 21h18" />
      <path d="M5 21V10l7-6 7 6v11" />
      <path d="M9 21v-6h6v6" />
    </Svg>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/components/icons.test.tsx
```
Expected: 2 tests PASS.

- [ ] **Step 5: Commit**

```bash
git add components/icons.tsx __tests__/components/icons.test.tsx
git commit -m "feat: add custom SVG icon set"
```

---

### Task 4: Site chrome — Nav, TrustBar, Footer, page spacers

**Files:**
- Modify: `components/Nav.tsx`
- Modify: `components/TrustBar.tsx`
- Modify: `components/Footer.tsx`
- Modify: `app/page.tsx`, `app/sat-prep/page.tsx`, `app/math-prep/page.tsx`, `app/why-us/page.tsx` (spacer height only)

**Interfaces:**
- Consumes: icon components from `@/components/icons` (Task 3); theme tokens (Task 2).
- Produces: new fixed-nav heights — mobile 84px (`h-12` top row + `h-9` tabs), desktop 92px (`h-14` + `h-9`). All page spacers become `h-[84px] md:h-[92px]`.

- [ ] **Step 1: Replace `components/Nav.tsx` entirely**

Mobile fixes: shorter tab labels, smaller brand text and top row on phones, light chrome.

```tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { href: '/', label: 'Home' },
  { href: '/sat-prep', label: 'SAT Prep' },
  { href: '/math-prep', label: 'Math & English' },
  { href: '/why-us', label: 'Why Us?' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Top row: brand + CTA */}
        <div className="h-12 md:h-14 flex items-center justify-between">
          <Link href="/" className="text-ink font-serif font-bold text-lg md:text-xl shrink-0">
            McLean Tutoring Center
          </Link>
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="tel:+15714497729"
              className="hidden md:flex flex-col items-end leading-tight hover:opacity-80 transition-opacity"
            >
              <span className="text-brand text-xs font-semibold uppercase tracking-wide">
                Call or text for a FREE 30 min consultation
              </span>
              <span className="text-ink text-sm font-bold">(571) 449-7729</span>
            </a>
            <a
              href="/#book"
              className="bg-brand text-white font-bold text-sm px-4 py-2 rounded-lg hover:bg-brand-dark transition-colors shrink-0"
            >
              Book Session
            </a>
          </div>
        </div>
        {/* Bottom row: page tabs */}
        <div className="h-9 flex items-center gap-1 border-t border-ink/10 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                pathname === tab.href
                  ? 'bg-brand/10 text-brand'
                  : 'text-ink-light hover:text-ink'
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
```

- [ ] **Step 2: Replace `components/TrustBar.tsx` entirely**

```tsx
import { DollarIcon, GraduationCapIcon, UsersIcon, MapPinIcon } from '@/components/icons'

const stats = [
  { Icon: DollarIcon, text: 'Starting at $45/hr' },
  { Icon: GraduationCapIcon, text: 'Math & English · K-12 · SAT Prep' },
  { Icon: UsersIcon, text: '50+ students helped' },
  { Icon: MapPinIcon, text: 'McLean, Tysons, Great Falls & Vienna' },
]

export default function TrustBar() {
  return (
    <div className="bg-cream-dark border-b border-ink/10 py-2.5 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
        {stats.map((s) => (
          <span key={s.text} className="flex items-center gap-1.5 text-xs text-ink-light whitespace-nowrap">
            <s.Icon className="w-3.5 h-3.5 text-brand shrink-0" />
            <span>{s.text}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Replace `components/Footer.tsx` entirely**

Dark ink footer anchors the light page (per spec).

```tsx
export default function Footer() {
  return (
    <footer className="bg-ink py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} McLean Tutoring Center. All rights reserved.
          </p>
          <p className="text-white/50 text-xs mt-1">
            Serving McLean, Tysons, Great Falls &amp; Vienna, VA
          </p>
        </div>
        <a
          href="mailto:mcleantutors21@gmail.com"
          className="text-amber text-sm hover:underline"
        >
          mcleantutors21@gmail.com
        </a>
      </div>
    </footer>
  )
}
```

- [ ] **Step 4: Update the nav spacer in all four pages**

In `app/page.tsx` replace:
```tsx
      {/* spacer for fixed nav (56px top row + 36px tabs = 92px) */}
      <div className="h-[92px]" />
```
with:
```tsx
      {/* spacer for fixed nav: mobile 48+36=84px, desktop 56+36=92px */}
      <div className="h-[84px] md:h-[92px]" />
```

In `app/sat-prep/page.tsx`, `app/math-prep/page.tsx`, and `app/why-us/page.tsx` replace:
```tsx
      <div className="h-[92px]" />
```
with:
```tsx
      <div className="h-[84px] md:h-[92px]" />
```

- [ ] **Step 5: Verify**

```bash
npm test && npm run build
```
Expected: all pass.

```bash
npm run dev
```
Open http://localhost:3000 — nav is white with ink text and serif brand, blue Book Session button, trust bar cream with blue icons; footer deep navy. At 375px width (DevTools), nav is 84px, tab labels fit without wrapping. Stop the dev server.

- [ ] **Step 6: Commit**

```bash
git add components/Nav.tsx components/TrustBar.tsx components/Footer.tsx app/page.tsx app/sat-prep/page.tsx app/math-prep/page.tsx app/why-us/page.tsx
git commit -m "feat: light nav/trustbar/footer chrome with mobile-tightened header"
```

---

### Task 5: Home hero, About (logo fix), Services

**Files:**
- Modify: `components/Hero.tsx`
- Modify: `components/About.tsx`
- Modify: `components/Services.tsx`

**Interfaces:**
- Consumes: `CalculatorIcon`, `BookOpenIcon`, `RulerIcon` from `@/components/icons`.

- [ ] **Step 1: Replace `components/Hero.tsx` entirely**

```tsx
export default function Hero() {
  return (
    <section
      id="hero"
      className="py-16 md:py-20 flex items-center justify-center bg-cream px-6"
    >
      <div className="text-center max-w-3xl">
        <p className="text-brand text-xs md:text-sm font-semibold uppercase tracking-widest mb-4">
          Serving McLean, Tysons, Great Falls &amp; Vienna
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-ink leading-tight">
          Better Grades.
          <br />
          <span className="text-brand">Better Scores.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-ink-light max-w-xl mx-auto leading-relaxed">
          1-on-1 tutoring in Math and English for students from elementary
          through high school — including SAT prep. We work with students at
          Langley HS, McLean HS, Cooper MS, Longfellow MS, and elementary
          schools across Northern Virginia.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#book"
            className="bg-brand text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-brand-dark transition-colors shadow-card"
          >
            Book Free Consultation
          </a>
          <a
            href="tel:+15714497729"
            className="flex flex-col items-center sm:items-start bg-card border border-ink/10 rounded-xl px-6 py-3 shadow-card hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-200"
          >
            <span className="text-brand text-xs font-semibold uppercase tracking-wide">
              Call or text — 30 min, no charge, no commitment
            </span>
            <span className="text-ink text-xl font-bold">(571) 449-7729</span>
          </a>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Replace `components/About.tsx` entirely**

Logo fix: the PNG is a circular badge with a graduation cap that pokes *above* the circle — the old `rounded-full overflow-hidden` + `scale-[1.12]` cropped the cap off. Render it whole with `object-contain`, no circle crop, no scale hack. The navy/gold artwork reads well on cream.

```tsx
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="bg-cream-dark py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56">
          <Image
            src="/logo.png"
            alt="McLean Tutoring Center"
            width={224}
            height={224}
            className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(30,58,95,0.15)]"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl font-bold text-ink mb-4">About Our Tutors</h2>
          <p className="text-ink-light text-lg leading-relaxed mb-4">
            McLean Tutoring Center provides 1-on-1 Math and English tutoring for students
            from elementary through high school — including SAT prep. We work
            with students at <strong className="text-ink">Langley HS, McLean HS,
            Cooper MS, and Longfellow MS</strong>, and schools throughout the DMV.
          </p>
          <p className="text-ink-light text-lg leading-relaxed mb-8">
            Our tutors adapt to each student&apos;s unique learning style and grade
            level — whether it&apos;s building foundational skills in elementary school
            or pushing for a top SAT score in high school.
          </p>
          <div className="flex flex-wrap gap-10">
            <div>
              <div className="text-3xl font-bold text-brand">5+</div>
              <div className="text-ink-light/70 text-sm mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand">50+</div>
              <div className="text-ink-light/70 text-sm mt-1">Students Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand">200+</div>
              <div className="text-ink-light/70 text-sm mt-1">Avg SAT Point Gain</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Replace `components/Services.tsx` entirely**

(Section is `bg-cream-dark` because the new Tutors section from Task 6 slots in before it on `bg-cream`; alternation stays correct once Task 6 lands.)

```tsx
import { CalculatorIcon, BookOpenIcon, RulerIcon } from '@/components/icons'

const services = [
  {
    id: 'sat-math',
    Icon: CalculatorIcon,
    title: 'SAT Math',
    description:
      'Score improvement strategies, test-taking techniques, and full practice test review. Familiar with the curriculum at Langley and McLean HS. Target: 700+ on the Math section.',
  },
  {
    id: 'english-tutoring',
    Icon: BookOpenIcon,
    title: 'English Tutoring',
    description:
      'Reading comprehension, grammar, essay writing, and vocabulary — for elementary through high school students. Also covers SAT English and EBRW prep.',
  },
  {
    id: 'math-tutoring',
    Icon: RulerIcon,
    title: 'Math Tutoring',
    description:
      'Elementary math through Calculus BC — concept mastery, homework help, and exam prep. We tutor students at Cooper MS, Longfellow MS, Langley HS, and McLean HS.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-cream-dark py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl font-bold text-ink text-center mb-12">
          What We Teach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card border border-ink/10 rounded-2xl p-8 flex flex-col shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                <service.Icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ink mb-3">
                {service.title}
              </h3>
              <p className="text-ink-light leading-relaxed flex-1">
                {service.description}
              </p>
              <a
                href="#book"
                className="mt-6 border border-brand text-brand text-sm font-semibold px-4 py-2 rounded-lg text-center hover:bg-brand hover:text-white transition-colors"
              >
                Book a Session
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Verify**

```bash
npm test && npm run build
```
Expected: pass. In `npm run dev`, the home page top half is now light: serif headline, blue CTA, About shows the full logo including the graduation cap (nothing cropped), service cards white with icon chips and hover lift.

- [ ] **Step 5: Commit**

```bash
git add components/Hero.tsx components/About.tsx components/Services.tsx
git commit -m "feat: light hero, about with fixed logo, services with SVG icons"
```

---

### Task 6: Meet Our Tutors section (TDD)

**Files:**
- Create: `components/Tutors.tsx`
- Test: `__tests__/components/Tutors.test.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Produces: default export `Tutors` (server component, no props), section `id="tutors"`. Home page renders it between `<About />` and `<Services />`.

- [ ] **Step 1: Write the failing test**

Create `__tests__/components/Tutors.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Tutors from '@/components/Tutors'

describe('Tutors', () => {
  it('renders the section heading', () => {
    render(<Tutors />)
    expect(
      screen.getByRole('heading', { name: /meet our tutors/i })
    ).toBeInTheDocument()
  })

  it('renders at least three tutor cards with school and specialty', () => {
    render(<Tutors />)
    const cards = screen.getAllByRole('heading', { level: 3 })
    expect(cards.length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByText(/class of/i).length).toBeGreaterThanOrEqual(3)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- __tests__/components/Tutors.test.tsx
```
Expected: FAIL — "Cannot find module '@/components/Tutors'"

- [ ] **Step 3: Create `components/Tutors.tsx`**

```tsx
// PLACEHOLDER PROFILES — Kushal will supply real tutor names, schools, and bios.
// Replace the entries in this array only; the card layout stays the same.
const tutors = [
  {
    initial: 'K',
    name: 'Kushal J.',
    school: 'Langley HS · Class of 2026',
    specialty: 'SAT Math · Calculus',
    bio: 'Scored 1550+ on the 2024 SAT. Tutors math from Pre-Algebra through AP Calculus BC and loves showing students the shortcuts that make hard problems feel easy.',
  },
  {
    initial: 'A',
    name: 'Tutor Name',
    school: 'McLean HS · Class of 2025',
    specialty: 'English & Writing',
    bio: 'AP Lang and Lit specialist who helps students find their voice — from 6th-grade book reports to college application essays.',
  },
  {
    initial: 'S',
    name: 'Tutor Name',
    school: 'Langley HS · Class of 2026',
    specialty: 'Elementary & Middle School Math',
    bio: 'Patient and encouraging, specializes in building confidence and strong foundations for younger students.',
  },
]

export default function Tutors() {
  return (
    <section id="tutors" className="bg-cream py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl font-bold text-ink text-center mb-4">
          Meet Our Tutors
        </h2>
        <p className="text-ink-light text-center mb-12 max-w-xl mx-auto">
          Real students from your student&apos;s schools — who just took the same
          classes and the same tests.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tutors.map((t) => (
            <div
              key={t.name + t.initial}
              className="bg-card border border-ink/10 rounded-2xl p-8 text-center shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-amber/15 border border-amber/30 flex items-center justify-center">
                <span className="font-serif text-3xl font-bold text-ink">{t.initial}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-ink">{t.name}</h3>
              <p className="text-ink-light/70 text-sm mt-0.5">{t.school}</p>
              <p className="text-brand text-sm font-semibold mt-2">{t.specialty}</p>
              <p className="text-ink-light text-sm leading-relaxed mt-4">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/components/Tutors.test.tsx
```
Expected: 2 tests PASS.

- [ ] **Step 5: Add Tutors to `app/page.tsx`**

Add the import after the About import:
```tsx
import About from '@/components/About'
import Tutors from '@/components/Tutors'
```
and render it between About and Services:
```tsx
        <About />
        <Tutors />
        <Services />
```

- [ ] **Step 6: Verify and commit**

```bash
npm test && npm run build
git add components/Tutors.tsx __tests__/components/Tutors.test.tsx app/page.tsx
git commit -m "feat: add Meet Our Tutors section with placeholder profiles"
```

---

### Task 7: Testimonials and College Acceptances

**Files:**
- Modify: `components/Testimonials.tsx`
- Modify: `components/CollegeAcceptances.tsx`

- [ ] **Step 1: Replace `components/Testimonials.tsx` entirely**

The `testimonials` data array is unchanged — copy it verbatim from the current file. Only the JSX below the array changes:

```tsx
export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl font-bold text-ink text-center mb-12">
          What Students &amp; Parents Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-card border border-ink/10 rounded-2xl p-8 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <p className="text-ink-light text-lg leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="rounded-full object-cover w-11 h-11"
                  />
                  <div>
                    <div className="text-ink font-semibold">{t.name}</div>
                    <div className="text-ink-light/70 text-sm">{t.role}</div>
                  </div>
                </div>
                <div className="bg-amber/10 border border-amber/30 text-amber-dark text-xs font-semibold px-3 py-1 rounded-full">
                  {t.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Replace `components/CollegeAcceptances.tsx` entirely**

Light treatment with amber accents (was a dark blue `#1a2d6b` band):

```tsx
const schools = [
  'MIT', 'Yale', 'Georgetown', 'UVA', 'Duke', 'Cornell',
  'William & Mary', 'Johns Hopkins', 'NYU', 'UMD',
  'GW', 'American University', 'Northeastern', 'Fordham',
]

export default function CollegeAcceptances() {
  return (
    <section id="results" className="bg-cream-dark py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">

          {/* Left: heading + stat + school badges */}
          <div className="flex-1">
            <h2 className="font-serif text-3xl font-bold text-ink mb-1">
              Where Our Students Go
            </h2>
            <p className="text-ink-light text-sm mb-6">
              25+ college acceptances since 2020
            </p>
            <div className="flex flex-wrap gap-2">
              {schools.map((school) => (
                <span
                  key={school}
                  className="bg-card border border-ink/10 text-ink text-sm font-medium px-3 py-1.5 rounded-full shadow-card"
                >
                  {school}
                </span>
              ))}
              <span className="bg-card border border-ink/10 text-ink-light/70 text-sm font-medium px-3 py-1.5 rounded-full shadow-card">
                …and many more
              </span>
            </div>
          </div>

          {/* Right: featured quote */}
          <div className="lg:w-80 bg-card border border-ink/10 border-l-4 border-l-amber rounded-xl p-6 shadow-card">
            <p className="text-ink text-lg font-medium leading-snug mb-4">
              &ldquo;I raised my SAT 310 points and got into Georgetown.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-amber/15 border border-amber/30 flex items-center justify-center text-ink font-serif font-bold text-sm">
                M
              </div>
              <div>
                <div className="text-ink text-sm font-semibold">Marcus W.</div>
                <div className="text-ink-light/70 text-xs">Class of 2024 · SAT +310 pts</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Verify and commit**

```bash
npm test && npm run build
git add components/Testimonials.tsx components/CollegeAcceptances.tsx
git commit -m "feat: light testimonials and college acceptances sections"
```

---

### Task 8: Booking and contact — BookSession, ContactSection, ContactForm

**Files:**
- Modify: `components/BookSession.tsx`
- Modify: `components/ContactSection.tsx`
- Modify: `components/ContactForm.tsx`

**Interfaces:**
- Consumes: `CheckIcon` from `@/components/icons`.
- Constraint: `__tests__/components/ContactForm.test.tsx` must pass unchanged — do not alter labels, button text, role="status", "Message sent!", validation messages, or the fetch payload (including `_hp` honeypot).

- [ ] **Step 1: In `components/BookSession.tsx`**, change the section and heading classes only:

Replace:
```tsx
    <section id="book" className="bg-navy py-24 px-6 scroll-mt-24">
```
with:
```tsx
    <section id="book" className="bg-cream py-24 px-6 scroll-mt-24">
```
Replace:
```tsx
        <h2 className="text-3xl font-bold text-white mb-4">
```
with:
```tsx
        <h2 className="font-serif text-3xl font-bold text-ink mb-4">
```
Replace:
```tsx
        <p className="text-slate-text text-lg mb-10 max-w-2xl mx-auto">
```
with:
```tsx
        <p className="text-ink-light text-lg mb-10 max-w-2xl mx-auto">
```
Also add a soft frame to the Calendly widget — replace:
```tsx
          className="calendly-inline-widget rounded-2xl overflow-hidden"
```
with:
```tsx
          className="calendly-inline-widget rounded-2xl overflow-hidden border border-ink/10 shadow-card"
```

- [ ] **Step 2: In `components/ContactSection.tsx`**, replace the three styled lines:

```tsx
    <section id="contact" className="bg-cream-dark py-24 px-6 scroll-mt-24">
```
```tsx
        <h2 className="font-serif text-3xl font-bold text-ink text-center mb-4">
```
```tsx
        <p className="text-ink-light text-center mb-10">
```
(Copy text inside stays identical.)

- [ ] **Step 3: Restyle `components/ContactForm.tsx`**

All logic, labels, and copy stay identical. Make exactly these changes:

1. Add the import at the top (after `import { useState } from 'react'`):
```tsx
import { CheckIcon } from '@/components/icons'
```

2. Replace the success-state check glyph:
```tsx
        <div className="text-accent text-5xl mb-4">✓</div>
```
with:
```tsx
        <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-brand/10 text-brand flex items-center justify-center">
          <CheckIcon className="w-7 h-7" />
        </div>
```

3. In the success block, `text-white` → `text-ink` on the h3, and `text-slate-text` → `text-ink-light` on the paragraph.

4. Every label: `text-slate-text` → `text-ink`.

5. Every input/textarea, replace the shared classes:
```
bg-navy-mid border border-navy-mid rounded-lg px-4 py-3 text-white placeholder-slate-muted focus:outline-none focus:border-accent
```
with:
```
bg-card border border-ink/15 rounded-lg px-4 py-3 text-ink placeholder-ink-light/50 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20
```
(The textarea keeps its `resize-none` suffix.)

6. Error messages: `text-red-400` → `text-red-600` (both field errors and the submit error, 4 occurrences).

7. Submit button, replace:
```tsx
        className="w-full bg-accent text-navy font-bold py-3 rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-50"
```
with:
```tsx
        className="w-full bg-brand text-white font-bold py-3 rounded-lg hover:bg-brand-dark transition-colors disabled:opacity-50"
```

- [ ] **Step 4: Run the ContactForm tests**

```bash
npm test -- __tests__/components/ContactForm.test.tsx
```
Expected: all 4+ tests PASS (behavior untouched).

- [ ] **Step 5: Verify and commit**

```bash
npm test && npm run build
git add components/BookSession.tsx components/ContactSection.tsx components/ContactForm.tsx
git commit -m "feat: light booking and contact sections with restyled form"
```

---

### Task 9: BookCTA band and SAT prep page

**Files:**
- Modify: `components/BookCTA.tsx`
- Modify: `app/sat-prep/page.tsx`

**Interfaces:**
- Consumes: `CalculatorIcon`, `BookOpenIcon`, `CheckIcon` from `@/components/icons`.

- [ ] **Step 1: Replace `components/BookCTA.tsx` entirely**

Deep-ink CTA band — a bold anchor before the footer on subpages:

```tsx
export default function BookCTA() {
  return (
    <section className="bg-ink py-20 px-6 text-center">
      <h2 className="font-serif text-3xl font-bold text-white mb-3">Ready to Get Started?</h2>
      <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
        Book a free 30-minute consultation — no commitment, no charge. We&apos;ll
        talk through your goals and put together a plan.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="/#book"
          className="bg-brand text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-brand-dark transition-colors"
        >
          Book Free Consultation
        </a>
        <a
          href="tel:+15714497729"
          className="flex flex-col items-center border border-white/25 rounded-xl px-6 py-3 hover:border-amber transition-colors"
        >
          <span className="text-amber text-xs font-semibold uppercase tracking-wide">
            Call or text us directly
          </span>
          <span className="text-white text-xl font-bold">(571) 449-7729</span>
        </a>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Migrate `app/sat-prep/page.tsx`**

Add to the imports:
```tsx
import { CalculatorIcon, BookOpenIcon, CheckIcon } from '@/components/icons'
```

The `metadata`, `steps`, `mathTopics`, `englishTopics`, and `results` data blocks are unchanged. Apply these JSX changes:

**Hero section** — replace:
```tsx
      <section className="bg-navy py-24 px-6">
```
with `bg-cream`; replace:
```tsx
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">SAT Prep · McLean, VA</span>
```
with `text-brand` in place of `text-accent`; replace the h1 line:
```tsx
          <h1 className="mt-3 text-5xl md:text-6xl font-extrabold text-white leading-tight">
```
with:
```tsx
          <h1 className="font-serif mt-3 text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-tight">
```
inside it, `<span className="text-accent">` → `<span className="text-brand">`; the paragraph `text-xl text-slate-text` → `text-lg md:text-xl text-ink-light` and its `<strong className="text-white">` → `<strong className="text-ink">`; the CTA link `bg-accent text-navy ... hover:bg-accent-dark` → `bg-brand text-white ... hover:bg-brand-dark`; and `text-slate-muted text-sm` → `text-ink-light/70 text-sm`.

**Results banner** — replace:
```tsx
      <section className="bg-navy-mid py-12 px-6">
```
with `bg-cream-dark`; `text-slate-muted` label → `text-ink-light/70`; each result card:
```tsx
              <div key={r.name} className="flex-1 bg-navy rounded-2xl border border-navy-mid p-6 flex items-center gap-4">
```
→
```tsx
              <div key={r.name} className="flex-1 bg-card rounded-2xl border border-ink/10 shadow-card p-6 flex items-center gap-4">
```
inside cards: `text-white font-semibold` → `text-ink font-semibold`; `text-slate-muted text-xs` → `text-ink-light/70 text-xs`; before-score `text-slate-muted` → `text-ink-light/70`; arrow `text-accent` → `text-brand`; after-score `text-white font-bold` → `text-ink font-bold`; green badge `bg-green-500/15 text-green-400` → `bg-green-600/10 text-green-700`.

**How it works** — section `bg-navy-light` → `bg-cream`; h2 gets `font-serif` and `text-white` → `text-ink`; step cards `bg-navy border border-navy-mid` → `bg-card border border-ink/10 shadow-card`; step number `text-accent` → `text-brand`; h3 `text-white` → `text-ink`; body `text-slate-text` → `text-ink-light`.

**What we cover** — section `bg-navy` → `bg-cream-dark`; h2 `font-serif ... text-ink`; intro `text-slate-text` → `text-ink-light`; the two cards `bg-navy-light border border-navy-mid` → `bg-card border border-ink/10 shadow-card`; card h3s `text-white` → `text-ink` with `font-serif`, and replace the emoji spans:
```tsx
                <span className="text-2xl">📐</span> SAT Math
```
→
```tsx
                <CalculatorIcon className="w-6 h-6 text-brand" /> SAT Math
```
```tsx
                <span className="text-2xl">📖</span> SAT English
```
→
```tsx
                <BookOpenIcon className="w-6 h-6 text-brand" /> SAT English
```
topic list items `text-slate-text` → `text-ink-light`, and each `<span className="text-accent">✓</span>` →
```tsx
                    <CheckIcon className="w-3.5 h-3.5 text-brand shrink-0" />
```

- [ ] **Step 3: Verify and commit**

```bash
npm test && npm run build
```
Then in `npm run dev`, visit http://localhost:3000/sat-prep — fully light page, no dark sections, icons instead of emoji, ink CTA band before footer.

```bash
git add components/BookCTA.tsx app/sat-prep/page.tsx
git commit -m "feat: light SAT prep page and ink CTA band"
```

---

### Task 10: Math & English page

**Files:**
- Modify: `app/math-prep/page.tsx`

**Interfaces:**
- Consumes: `CalculatorIcon`, `BookOpenIcon`, `CheckIcon` from `@/components/icons`.

- [ ] **Step 1: Migrate `app/math-prep/page.tsx`**

Add to imports:
```tsx
import { CalculatorIcon, BookOpenIcon, CheckIcon } from '@/components/icons'
```

Data blocks (`mathCourses`, `englishCourses`, `schools`, `steps`) unchanged. JSX changes:

**Hero** — section `bg-navy` → `bg-cream`; eyebrow `text-accent` → `text-brand`; h1:
```tsx
          <h1 className="mt-3 text-5xl md:text-6xl font-extrabold text-white leading-tight">
```
→
```tsx
          <h1 className="font-serif mt-3 text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-tight">
```
inner span `text-accent` → `text-brand`; paragraph `text-xl text-slate-text` → `text-lg md:text-xl text-ink-light`, `<strong className="text-white">` → `<strong className="text-ink">`; CTA `bg-accent text-navy ... hover:bg-accent-dark` → `bg-brand text-white ... hover:bg-brand-dark`; `text-slate-muted` → `text-ink-light/70`.

**Math Courses** — section `bg-navy-light` → `bg-cream-dark`; heading row:
```tsx
            <span className="text-3xl">📐</span>
            <h2 className="text-3xl font-bold text-white">Math Tutoring</h2>
```
→
```tsx
            <CalculatorIcon className="w-8 h-8 text-brand" />
            <h2 className="font-serif text-3xl font-bold text-ink">Math Tutoring</h2>
```
intro `text-slate-text` → `text-ink-light`; course cards `bg-navy border border-navy-mid` → `bg-card border border-ink/10 shadow-card`; card h3 `text-accent` → `text-brand`; list items `text-white` → `text-ink`, and each `<span className="text-accent text-xs">✓</span>` →
```tsx
                      <CheckIcon className="w-3.5 h-3.5 text-brand shrink-0" />
```

**English Courses** — section `bg-navy` → `bg-cream`; heading row:
```tsx
            <span className="text-3xl">📖</span>
            <h2 className="text-3xl font-bold text-white">English Tutoring</h2>
```
→
```tsx
            <BookOpenIcon className="w-8 h-8 text-brand" />
            <h2 className="font-serif text-3xl font-bold text-ink">English Tutoring</h2>
```
intro `text-slate-text` → `text-ink-light`; cards `bg-navy-light border border-navy-mid` → `bg-card border border-ink/10 shadow-card`; card h3 `text-accent` → `text-brand`; list items and checks same as Math Courses.

**Local schools** — section `bg-navy-light` → `bg-cream-dark`; h2 `font-serif ... text-ink`; paragraph `text-slate-text` → `text-ink-light`; school pills `bg-navy border border-navy-mid text-slate-text` → `bg-card border border-ink/10 text-ink shadow-card`.

**How we work** — section `bg-navy` → `bg-cream`; h2 `font-serif ... text-ink`; cards `bg-navy-light border border-navy-mid` → `bg-card border border-ink/10 shadow-card`; number `text-accent` → `text-brand`; h3 `text-white` → `text-ink`; body `text-slate-text` → `text-ink-light`.

- [ ] **Step 2: Verify and commit**

```bash
npm test && npm run build
git add app/math-prep/page.tsx
git commit -m "feat: light math & english tutoring page"
```

---

### Task 11: Why Us page (incl. mobile comparison table)

**Files:**
- Modify: `app/why-us/page.tsx`

**Interfaces:**
- Consumes: `SchoolIcon`, `UsersIcon`, `DollarIcon`, `PencilIcon`, `BookOpenIcon`, `GraduationCapIcon`, `TrendingUpIcon`, `StarIcon`, `CheckIcon`, `XIcon`, `MinusIcon` from `@/components/icons`.

- [ ] **Step 1: Migrate data arrays to icon components**

Add to imports:
```tsx
import {
  SchoolIcon, UsersIcon, DollarIcon, PencilIcon, BookOpenIcon,
  GraduationCapIcon, TrendingUpIcon, StarIcon, CheckIcon, XIcon, MinusIcon,
} from '@/components/icons'
```

In the `differences` array, replace each `icon: '🏫'` / `'🤝'` / `'💰'` string field with a component field (`Icon: SchoolIcon`, `Icon: UsersIcon`, `Icon: DollarIcon`), keeping titles/bodies verbatim. In `whoWeHelp`, replace `icon: '✏️'`→`Icon: PencilIcon`, `'📚'`→`Icon: BookOpenIcon`, `'🎓'`→`Icon: GraduationCapIcon`, `'📈'`→`Icon: TrendingUpIcon`. `faqs` unchanged.

In the comparison data rows, replace emoji strings with markers rendered later: change every `'✅'` to `'yes'`, `'❌'` to `'no'`, `'❓'` to `'varies'` (plain strings; the render step maps them to icons — text values like `'$150–200+'` pass through unchanged).

- [ ] **Step 2: Migrate the JSX**

**Hero** — section `bg-navy` → `bg-cream`; eyebrow `text-accent` → `text-brand`; h1 →
```tsx
          <h1 className="font-serif mt-3 text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-tight">
```
inner span `text-accent` → `text-brand`; paragraph `text-xl text-slate-text` → `text-lg md:text-xl text-ink-light`; all three `<strong className="text-white">` → `<strong className="text-ink">`.

**Who we help** — section `bg-navy-light` → `bg-cream-dark`; h2 `font-serif ... text-ink`; intro `text-slate-text` → `text-ink-light`; cards `bg-navy border border-navy-mid` → `bg-card border border-ink/10 shadow-card`; the icon render:
```tsx
                  <span className="text-3xl">{w.icon}</span>
```
→
```tsx
                  <span className="w-10 h-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <w.Icon className="w-5 h-5" />
                  </span>
```
h3 `text-white` → `text-ink`; desc + list items `text-slate-text` → `text-ink-light`; list checks `<span className="text-accent text-xs">✓</span>` → `<CheckIcon className="w-3.5 h-3.5 text-brand shrink-0" />`.

**Three differences** — section `bg-navy` → `bg-cream`; h2 `font-serif ... text-ink`; cards `bg-navy-light border border-navy-mid` → `bg-card border border-ink/10 shadow-card`; icon render:
```tsx
                <div className="text-4xl mb-4">{d.icon}</div>
```
→
```tsx
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                  <d.Icon className="w-6 h-6" />
                </div>
```
h3 `text-white` → `text-ink`; body `text-slate-text` → `text-ink-light`.

**Comparison table** — section `bg-navy-light` → `bg-cream-dark`; h2 `font-serif ... text-ink`; intro `text-slate-text` → `text-ink-light`. **Mobile fix:** wrap the header row and all data rows in a horizontal scroll container:
```tsx
          <div className="overflow-x-auto -mx-6 px-6">
            <div className="min-w-[640px]">
              {/* header row and data rows go here, unchanged structure */}
            </div>
          </div>
```
Header cells `bg-navy border border-navy-mid` → `bg-card border border-ink/10`; header labels `text-slate-muted` → `text-ink-light/70` and `text-slate-text` → `text-ink-light`; recommended header `bg-accent/10 border border-accent/50` → `bg-brand/10 border border-brand/40`, its label `text-accent` → `text-brand`, and:
```tsx
              <div className="text-white text-sm font-semibold">⭐ Recommended</div>
```
→
```tsx
              <div className="text-ink text-sm font-semibold flex items-center justify-center gap-1">
                <StarIcon className="w-4 h-4 text-amber" /> Recommended
              </div>
```
Row labels `text-slate-text` → `text-ink`. Cell render — replace the value `<div>` body `{val}` with icon mapping, and update classes:
```tsx
                <div
                  key={i}
                  className={`rounded-xl p-3 text-sm flex items-center justify-center ${
                    i === 2
                      ? 'bg-brand/10 border border-brand/30 text-ink font-semibold'
                      : 'bg-card border border-ink/10 text-ink-light'
                  }`}
                >
                  {val === 'yes' ? (
                    <CheckIcon className="w-5 h-5 text-brand" />
                  ) : val === 'no' ? (
                    <XIcon className="w-5 h-5 text-red-500" />
                  ) : val === 'varies' ? (
                    <MinusIcon className="w-5 h-5 text-ink-light/50" />
                  ) : (
                    val
                  )}
                </div>
```

**Pricing** — section `bg-navy` → `bg-cream`; h2 `font-serif ... text-ink`; intro `text-slate-text` → `text-ink-light`; price card `bg-navy-light border border-accent/30` → `bg-card border border-brand/30 shadow-card`; `$45` `text-accent` → `text-brand`; "per hour" `text-white` → `text-ink`; sub-line `text-slate-muted` → `text-ink-light/70`; list items `text-slate-text` → `text-ink-light` with `<span className="text-accent font-bold">✓</span>` → `<CheckIcon className="w-4 h-4 text-brand shrink-0" />`; CTA `bg-accent text-navy ... hover:bg-accent-dark` → `bg-brand text-white ... hover:bg-brand-dark`.

**FAQ** — section `bg-navy-light` → `bg-cream-dark`; h2 `font-serif ... text-ink`; cards `bg-navy border border-navy-mid` → `bg-card border border-ink/10 shadow-card`; question `text-white` → `text-ink`; answer `text-slate-text` → `text-ink-light`.

- [ ] **Step 3: Verify and commit**

```bash
npm test && npm run build
```
In `npm run dev` at 375px width, /why-us comparison table scrolls horizontally instead of crushing 4 columns.

```bash
git add app/why-us/page.tsx
git commit -m "feat: light why-us page with SVG icons and mobile-friendly comparison table"
```

---

### Task 12: Remove legacy tokens and final verification

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Sweep for leftover dark-theme classes**

```bash
cd /Users/kushaljivan/code/tutoring-website && grep -rnE 'navy|accent|slate-text|slate-muted' app components --include='*.tsx' | grep -v node_modules
```
Expected: no output. If any hits, migrate them per the Global Constraints class map before continuing.

- [ ] **Step 2: Sweep for leftover emoji**

```bash
grep -rnE '📐|📖|📚|🎓|📈|✏️|🏫|🤝|💰|👥|📍|⭐|❌|✅|❓|✓' app components --include='*.tsx'
```
Expected: no output.

- [ ] **Step 3: Delete the legacy token block from `app/globals.css`**

Remove these lines (and the comment above them):
```css
  /* LEGACY dark tokens — deleted in the final cleanup task once no component references them */
  --color-navy: #0f172a;
  --color-navy-light: #1e293b;
  --color-navy-mid: #334155;
  --color-accent: #38bdf8;
  --color-accent-dark: #0284c7;
  --color-slate-text: #cbd5e1;
  --color-slate-muted: #94a3b8;
```

- [ ] **Step 4: Full verification**

```bash
npm test && npm run build
```
Expected: all suites pass, clean build.

- [ ] **Step 5: Manual mobile + desktop audit**

Run `npm run dev` and check every page (`/`, `/sat-prep`, `/math-prep`, `/why-us`) at desktop and 375px width:
- No dark-navy remnants anywhere; sections alternate cream/cream-dark; footer and BookCTA are deep ink
- Serif headlines render (Lora), body is Inter
- Logo in About shows the full badge including the graduation cap, uncropped
- Nav is 84px tall on mobile with all four tabs visible; tap targets comfortable
- Comparison table on /why-us scrolls horizontally on mobile
- Card hover lift works on services/tutors/testimonials
- Contact form fields are white with blue focus ring; submit shows the SVG check on success (mock or just verify styling of idle/error states)

- [ ] **Step 6: Commit**

```bash
git add app/globals.css
git commit -m "chore: remove legacy dark theme tokens"
```

---

## After the plan

- Deploy is out of scope for this plan; use the existing Vercel flow when the user is ready.
- Reminder for the user: `public/logo.png` still reads "McLean **Tutors**" (old brand name) — a logo update is a separate task.
- The Tutors section ships with `PLACEHOLDER` marked profiles; swap in real names/bios (single array in `components/Tutors.tsx`) before deploying to production.
