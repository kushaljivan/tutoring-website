# Kushal Jivan Tutoring Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page Next.js tutoring website for Kushal Jivan with a sticky nav, 6 content sections, Calendly booking embed, and a contact form backed by the Resend email API.

**Architecture:** App Router Next.js with all page content rendered as a single route (`/`). Eight section components compose the page top-to-bottom. The only server-side logic is `/api/contact`, a serverless route that forwards form submissions to Kushal via Resend.

**Tech Stack:** Next.js 14+, TypeScript, Tailwind CSS, Resend SDK, Jest + React Testing Library

---

## File Map

```
app/
  layout.tsx            ← root layout: metadata, Inter font, dark base styles
  page.tsx              ← single page: imports and orders all section components
  globals.css           ← Tailwind directives only
  api/contact/
    route.ts            ← POST handler: validates fields, sends email via Resend
components/
  Nav.tsx               ← sticky header: name, phone, Book Session + Contact anchor links
  Hero.tsx              ← full-viewport headline + Book Free Consultation CTA
  About.tsx             ← photo placeholder, bio, stat counters
  Services.tsx          ← 3 service cards (SAT Math, SAT English, Math Tutoring)
  Testimonials.tsx      ← 4 student/parent quotes with result tags
  BookSession.tsx       ← Calendly inline embed (client component)
  ContactSection.tsx    ← section wrapper that imports ContactForm
  ContactForm.tsx       ← form with validation, loading, success/error states (client)
  Footer.tsx            ← copyright line + email address
__tests__/
  components/
    ContactForm.test.tsx
  api/
    contact.test.ts
tailwind.config.ts      ← custom navy/accent color tokens
.env.local.example      ← RESEND_API_KEY, CONTACT_EMAIL
```

---

## Task 1: Initialize project and configure testing

**Files:**
- Scaffold: all top-level project files via `create-next-app`
- Create: `jest.config.ts`
- Create: `jest.setup.ts`

- [ ] **Step 1: Scaffold the project**

Run from `/Users/rajiv/Documents/kushal/website`:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=no --import-alias "@/*" --use-npm
```
Answer "Yes" to any prompts about overwriting existing files.

Expected: `package.json`, `app/`, `public/`, `next.config.ts` created.

- [ ] **Step 2: Install Resend and testing dependencies**

```bash
npm install resend
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest
```

Expected: All packages install without errors.

- [ ] **Step 3: Create jest.config.ts**

```typescript
import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterFramework: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}

export default createJestConfig(config)
```

- [ ] **Step 4: Create jest.setup.ts**

```typescript
import '@testing-library/jest-dom'
```

- [ ] **Step 5: Add test scripts to package.json**

In `package.json`, ensure `scripts` contains:
```json
"test": "jest",
"test:watch": "jest --watch"
```

- [ ] **Step 6: Verify Jest works**

```bash
npm test -- --passWithNoTests
```
Expected: `Test Suites: 0 passed, 0 total` with no errors.

- [ ] **Step 7: Commit**

```bash
git add .
git commit -m "feat: initialize Next.js project with Tailwind, TypeScript, and Jest"
```

---

## Task 2: Configure Tailwind theme and base layout

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace tailwind.config.ts**

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0f172a',
        'navy-light': '#1e293b',
        'navy-mid': '#334155',
        accent: '#38bdf8',
        'accent-dark': '#0284c7',
        'slate-text': '#cbd5e1',
        'slate-muted': '#94a3b8',
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 2: Replace app/globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- [ ] **Step 3: Replace app/layout.tsx**

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kushal Jivan — SAT & Math Tutor',
  description:
    '1-on-1 tutoring for SAT Math, SAT English, and Math from Pre-Algebra through Calculus BC. Book a free consultation.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-navy text-white`}>
        {children}
      </body>
    </html>
  )
}
```

- [ ] **Step 4: Verify build**

```bash
npm run build
```
Expected: Build completes with no TypeScript or Tailwind errors.

- [ ] **Step 5: Commit**

```bash
git add app/globals.css app/layout.tsx tailwind.config.ts
git commit -m "feat: configure Tailwind theme colors and base layout"
```

---

## Task 3: Nav component

**Files:**
- Create: `components/Nav.tsx`
- Modify: `app/page.tsx` (temporary stub to verify render)

- [ ] **Step 1: Create components/Nav.tsx**

```tsx
export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-sm border-b border-navy-mid">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-white font-bold text-lg">Kushal Jivan</span>
        <div className="flex items-center gap-3 md:gap-4">
          <a
            href="tel:+15551234567"
            className="text-accent text-sm hidden md:block hover:underline"
          >
            (555) 123-4567
          </a>
          <a
            href="#book"
            className="bg-accent text-navy font-bold text-sm px-4 py-2 rounded-lg hover:bg-accent-dark transition-colors"
          >
            Book Session
          </a>
          <a
            href="#contact"
            className="border border-accent text-accent text-sm px-4 py-2 rounded-lg hover:bg-accent hover:text-navy transition-colors hidden sm:block"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
```

- [ ] **Step 2: Update app/page.tsx as a temporary stub**

```tsx
import Nav from '@/components/Nav'

export default function Home() {
  return <Nav />
}
```

- [ ] **Step 3: Verify Nav renders**

```bash
npm run dev
```
Open http://localhost:3000. Verify sticky nav shows Kushal's name, phone number (desktop), Book Session button, and Contact button.

- [ ] **Step 4: Commit**

```bash
git add components/Nav.tsx app/page.tsx
git commit -m "feat: add sticky navigation bar"
```

---

## Task 4: Hero section

**Files:**
- Create: `components/Hero.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create components/Hero.tsx**

```tsx
export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-navy px-6 pt-16"
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Ace the SAT.
          <br />
          <span className="text-accent">Master the Math.</span>
        </h1>
        <p className="mt-6 text-xl text-slate-text max-w-xl mx-auto leading-relaxed">
          1-on-1 tutoring with Kushal Jivan — SAT Math, SAT English, and Math
          from Pre-Algebra through Calculus BC.
        </p>
        <a
          href="#book"
          className="mt-10 inline-block bg-accent text-navy font-bold text-lg px-8 py-4 rounded-xl hover:bg-accent-dark transition-colors"
        >
          Book Free Consultation
        </a>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Update app/page.tsx**

```tsx
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
      </main>
    </>
  )
}
```

- [ ] **Step 3: Verify in browser**

With `npm run dev` running, reload http://localhost:3000. Verify the hero fills the viewport with the headline, subheading, and CTA button.

- [ ] **Step 4: Commit**

```bash
git add components/Hero.tsx app/page.tsx
git commit -m "feat: add hero section"
```

---

## Task 5: About section

**Files:**
- Create: `components/About.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create components/About.tsx**

```tsx
export default function About() {
  return (
    <section id="about" className="bg-navy-light py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0">
          <div className="w-48 h-48 rounded-full bg-navy-mid flex items-center justify-center text-accent text-6xl font-bold select-none">
            K
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">About Kushal</h2>
          <p className="text-slate-text text-lg leading-relaxed mb-8">
            Kushal Jivan is a dedicated SAT and math tutor with over 5 years of
            experience helping students reach their academic potential. With a
            strong foundation in mathematics and a proven teaching framework,
            Kushal adapts to each student&apos;s unique learning style — turning
            confusion into confidence.
          </p>
          <div className="flex flex-wrap gap-10">
            <div>
              <div className="text-3xl font-bold text-accent">5+</div>
              <div className="text-slate-muted text-sm mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">100+</div>
              <div className="text-slate-muted text-sm mt-1">Students Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">200+</div>
              <div className="text-slate-muted text-sm mt-1">Avg SAT Point Gain</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add About to app/page.tsx**

```tsx
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
      </main>
    </>
  )
}
```

- [ ] **Step 3: Verify in browser**

Scroll past Hero. Verify About section shows avatar placeholder, bio, and 3 stat counters. On mobile, photo and text should stack vertically.

- [ ] **Step 4: Commit**

```bash
git add components/About.tsx app/page.tsx
git commit -m "feat: add about section"
```

---

## Task 6: Services section

**Files:**
- Create: `components/Services.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create components/Services.tsx**

```tsx
const services = [
  {
    id: 'sat-math',
    icon: '📐',
    title: 'SAT Math',
    description:
      'Score improvement strategies, test-taking techniques, and full practice test review. Target: 700+ on the Math section.',
  },
  {
    id: 'sat-english',
    icon: '📖',
    title: 'SAT English',
    description:
      'Reading comprehension, grammar, evidence-based writing, and pacing strategies. Target: 700+ on the EBRW section.',
  },
  {
    id: 'math-tutoring',
    icon: '∫',
    title: 'Math Tutoring',
    description:
      'Pre-Algebra through Calculus BC — concept mastery, homework help, and exam prep for every level.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-navy py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          What I Teach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-navy-light border border-navy-mid rounded-2xl p-8 flex flex-col"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-text leading-relaxed flex-1">
                {service.description}
              </p>
              <a
                href="#book"
                className="mt-6 border border-accent text-accent text-sm font-semibold px-4 py-2 rounded-lg text-center hover:bg-accent hover:text-navy transition-colors"
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

- [ ] **Step 2: Add Services to app/page.tsx**

```tsx
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
      </main>
    </>
  )
}
```

- [ ] **Step 3: Verify in browser**

Scroll to Services. Verify 3 cards render side-by-side on desktop, stacked on mobile. Each card has an icon, title, description, and "Book a Session" link.

- [ ] **Step 4: Commit**

```bash
git add components/Services.tsx app/page.tsx
git commit -m "feat: add services section"
```

---

## Task 7: Testimonials section

**Files:**
- Create: `components/Testimonials.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create components/Testimonials.tsx**

```tsx
const testimonials = [
  {
    id: 1,
    quote:
      'Kushal helped me go from a 1180 to a 1430 on the SAT in just 8 weeks. His method is systematic and actually works.',
    name: 'Jamie R.',
    role: 'Student',
    result: 'SAT +250 pts',
  },
  {
    id: 2,
    quote:
      "My daughter was failing Pre-Calc and is now getting A's. Kushal has a gift for making hard concepts click.",
    name: 'Maria T.',
    role: 'Parent',
    result: 'Pre-Calculus',
  },
  {
    id: 3,
    quote:
      "I got a 5 on the AP Calculus BC exam thanks to Kushal. Couldn't have done it without him.",
    name: 'Alex K.',
    role: 'Student',
    result: 'AP Calc BC: 5',
  },
  {
    id: 4,
    quote:
      "Clear explanations, patient, and always prepared. My son's math confidence is completely transformed.",
    name: 'David L.',
    role: 'Parent',
    result: 'Algebra II',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-navy-light py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          What Students & Parents Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-navy border border-navy-mid rounded-2xl p-8"
            >
              <p className="text-slate-text text-lg leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-slate-muted text-sm">{t.role}</div>
                </div>
                <div className="bg-accent/10 border border-accent/30 text-accent text-xs font-semibold px-3 py-1 rounded-full">
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

- [ ] **Step 2: Add Testimonials to app/page.tsx**

```tsx
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
      </main>
    </>
  )
}
```

- [ ] **Step 3: Verify in browser**

Scroll to Testimonials. Verify 4 cards in a 2-column grid. Each has a quote, name/role, and result badge.

- [ ] **Step 4: Commit**

```bash
git add components/Testimonials.tsx app/page.tsx
git commit -m "feat: add testimonials section"
```

---

## Task 8: Book Session section (Calendly embed)

**Files:**
- Create: `components/BookSession.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create components/BookSession.tsx**

This is a client component because it loads the Calendly script via `useEffect`.

```tsx
'use client'

import { useEffect } from 'react'

export default function BookSession() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="book" className="bg-navy py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Schedule Your Free Consultation
        </h2>
        <p className="text-slate-text text-lg mb-10 max-w-2xl mx-auto">
          Book a free 30-minute call to discuss your goals, your current level,
          and how we can work together to get results.
        </p>
        <div
          className="calendly-inline-widget rounded-2xl overflow-hidden bg-white"
          data-url="https://calendly.com/your-calendly-url/free-consultation"
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add BookSession to app/page.tsx**

```tsx
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import BookSession from '@/components/BookSession'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <BookSession />
      </main>
    </>
  )
}
```

- [ ] **Step 3: Verify in browser**

Scroll to Book Session section. The Calendly embed area renders (placeholder URL will show a Calendly error state — that is expected until Kushal's real URL is substituted). Verify the section headline and description text render correctly.

- [ ] **Step 4: Commit**

```bash
git add components/BookSession.tsx app/page.tsx
git commit -m "feat: add book session section with Calendly embed"
```

---

## Task 9: Contact form with validation (TDD)

**Files:**
- Create: `__tests__/components/ContactForm.test.tsx`
- Create: `components/ContactForm.tsx`

- [ ] **Step 1: Write failing tests**

Create `__tests__/components/ContactForm.test.tsx`:

```tsx
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from '@/components/ContactForm'

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/name \*/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email \*/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message \*/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('shows validation errors when submitting with empty required fields', async () => {
    render(<ContactForm />)
    await userEvent.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Message is required')).toBeInTheDocument()
  })

  it('shows success message after successful submission', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true })
    render(<ContactForm />)
    await userEvent.type(screen.getByLabelText(/name \*/i), 'Jamie Smith')
    await userEvent.type(screen.getByLabelText(/email \*/i), 'jamie@example.com')
    await userEvent.type(screen.getByLabelText(/message \*/i), 'I need SAT help')
    await userEvent.click(screen.getByRole('button', { name: /send message/i }))
    await waitFor(() =>
      expect(screen.getByText('Message sent!')).toBeInTheDocument()
    )
  })

  it('shows error message when submission fails', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false })
    render(<ContactForm />)
    await userEvent.type(screen.getByLabelText(/name \*/i), 'Jamie Smith')
    await userEvent.type(screen.getByLabelText(/email \*/i), 'jamie@example.com')
    await userEvent.type(screen.getByLabelText(/message \*/i), 'I need SAT help')
    await userEvent.click(screen.getByRole('button', { name: /send message/i }))
    await waitFor(() =>
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
    )
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- __tests__/components/ContactForm.test.tsx
```
Expected: FAIL — "Cannot find module '@/components/ContactForm'"

- [ ] **Step 3: Create components/ContactForm.tsx**

```tsx
'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

function validate(data: FormData): Record<string, string> {
  const errors: Record<string, string> = {}
  if (!data.get('name')) errors.name = 'Name is required'
  if (!data.get('email')) errors.email = 'Email is required'
  if (!data.get('message')) errors.message = 'Message is required'
  return errors
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const errs = validate(data)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          subject: data.get('subject'),
          message: data.get('message'),
        }),
      })
      setState(res.ok ? 'success' : 'error')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="text-center py-12" role="status">
        <div className="text-accent text-5xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
        <p className="text-slate-text">
          Kushal will get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-text mb-2"
          >
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full bg-navy-mid border border-navy-mid rounded-lg px-4 py-3 text-white placeholder-slate-muted focus:outline-none focus:border-accent"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-text mb-2"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full bg-navy-mid border border-navy-mid rounded-lg px-4 py-3 text-white placeholder-slate-muted focus:outline-none focus:border-accent"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-slate-text mb-2"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="w-full bg-navy-mid border border-navy-mid rounded-lg px-4 py-3 text-white placeholder-slate-muted focus:outline-none focus:border-accent"
          placeholder="What's this about?"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-text mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full bg-navy-mid border border-navy-mid rounded-lg px-4 py-3 text-white placeholder-slate-muted focus:outline-none focus:border-accent resize-none"
          placeholder="Tell Kushal about your goals..."
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message}</p>
        )}
      </div>
      {state === 'error' && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please try again or email directly.
        </p>
      )}
      <button
        type="submit"
        disabled={state === 'loading'}
        className="w-full bg-accent text-navy font-bold py-3 rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-50"
      >
        {state === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- __tests__/components/ContactForm.test.tsx
```
Expected: 4 tests PASS.

- [ ] **Step 5: Commit**

```bash
git add components/ContactForm.tsx __tests__/components/ContactForm.test.tsx
git commit -m "feat: add contact form with client-side validation and submit states"
```

---

## Task 10: Contact API route (TDD)

**Files:**
- Create: `__tests__/api/contact.test.ts`
- Create: `app/api/contact/route.ts`

- [ ] **Step 1: Write failing tests**

Create `__tests__/api/contact.test.ts`:

```typescript
import { POST } from '@/app/api/contact/route'

jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({ data: { id: 'mock-id' }, error: null }),
    },
  })),
}))

function makeRequest(body: Record<string, unknown>) {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

describe('POST /api/contact', () => {
  beforeEach(() => {
    process.env.RESEND_API_KEY = 'test-key'
    process.env.CONTACT_EMAIL = 'kushal@example.com'
  })

  it('returns 400 when name is missing', async () => {
    const res = await POST(makeRequest({ email: 'a@b.com', message: 'hi' }))
    expect(res.status).toBe(400)
  })

  it('returns 400 when email is missing', async () => {
    const res = await POST(makeRequest({ name: 'Jamie', message: 'hi' }))
    expect(res.status).toBe(400)
  })

  it('returns 400 when message is missing', async () => {
    const res = await POST(makeRequest({ name: 'Jamie', email: 'a@b.com' }))
    expect(res.status).toBe(400)
  })

  it('returns 200 with success:true on valid input', async () => {
    const res = await POST(
      makeRequest({ name: 'Jamie', email: 'jamie@example.com', message: 'Hello' })
    )
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.success).toBe(true)
  })

  it('returns 500 when Resend reports an error', async () => {
    const { Resend } = require('resend')
    ;(Resend as jest.Mock).mockImplementationOnce(() => ({
      emails: {
        send: jest.fn().mockResolvedValue({ data: null, error: { message: 'API failure' } }),
      },
    }))
    const res = await POST(
      makeRequest({ name: 'Jamie', email: 'jamie@example.com', message: 'Hello' })
    )
    expect(res.status).toBe(500)
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
npm test -- __tests__/api/contact.test.ts
```
Expected: FAIL — "Cannot find module '@/app/api/contact/route'"

- [ ] **Step 3: Create app/api/contact/route.ts**

```typescript
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, subject, message } = body

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from: 'Contact Form <onboarding@resend.dev>',
    to: process.env.CONTACT_EMAIL!,
    replyTo: email as string,
    subject: subject ? `Contact: ${subject}` : `New message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  })

  if (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- __tests__/api/contact.test.ts
```
Expected: 5 tests PASS.

- [ ] **Step 5: Commit**

```bash
git add app/api/contact/route.ts __tests__/api/contact.test.ts
git commit -m "feat: add contact API route backed by Resend"
```

---

## Task 11: Contact section wrapper and Footer

**Files:**
- Create: `components/ContactSection.tsx`
- Create: `components/Footer.tsx`

- [ ] **Step 1: Create components/ContactSection.tsx**

```tsx
import ContactForm from '@/components/ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-navy-light py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-slate-text text-center mb-10">
          Have a question? Fill out the form and Kushal will get back to you
          within 24 hours.
        </p>
        <ContactForm />
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create components/Footer.tsx**

```tsx
export default function Footer() {
  return (
    <footer className="bg-navy border-t border-navy-mid py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-muted text-sm">
          © {new Date().getFullYear()} Kushal Jivan. All rights reserved.
        </p>
        <a
          href="mailto:kushal@example.com"
          className="text-accent text-sm hover:underline"
        >
          kushal@example.com
        </a>
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add components/ContactSection.tsx components/Footer.tsx
git commit -m "feat: add contact section and footer"
```

---

## Task 12: Assemble the full page

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace app/page.tsx with final assembly**

```tsx
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import BookSession from '@/components/BookSession'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <BookSession />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Run all tests**

```bash
npm test
```
Expected: All 9 tests PASS (4 ContactForm + 5 API route).

- [ ] **Step 3: Verify the full site in browser**

```bash
npm run dev
```
Open http://localhost:3000 and verify:
- Sticky nav stays fixed while scrolling
- "Book Session" nav button scrolls to the Calendly section (`#book`)
- "Contact" nav button scrolls to the contact form (`#contact`)
- All 6 sections render in order: Hero → About → Services → Testimonials → Book Session → Contact
- On mobile (DevTools responsive mode): nav collapses phone/Contact, sections stack vertically
- Contact form shows validation errors when submitted empty
- Contact form shows "Sending..." when loading (mock your network to slow 3G to observe)

- [ ] **Step 4: Build check**

```bash
npm run build
```
Expected: Build completes with no TypeScript errors.

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx
git commit -m "feat: assemble full single-page site"
```

---

## Task 13: Environment setup and deployment prep

**Files:**
- Create: `.env.local.example`
- Modify: `.gitignore`

- [ ] **Step 1: Create .env.local.example**

```bash
# Resend API key — create one at https://resend.com/api-keys
RESEND_API_KEY=re_your_api_key_here

# Email address that receives contact form submissions
CONTACT_EMAIL=kushal@yourdomain.com
```

- [ ] **Step 2: Ensure .env.local and .superpowers/ are in .gitignore**

Verify `.gitignore` contains these lines (add if missing):
```
.env.local
.superpowers/
```

- [ ] **Step 3: Replace placeholder contact details**

In `components/Nav.tsx`, replace:
```tsx
href="tel:+15551234567"  →  href="tel:+1XXXXXXXXXX"   (Kushal's real number)
>(555) 123-4567<          →  >(XXX) XXX-XXXX<
```

In `components/Footer.tsx`, replace:
```tsx
href="mailto:kushal@example.com"  →  href="mailto:kushal@realdomain.com"
>kushal@example.com<              →  >kushal@realdomain.com<
```

- [ ] **Step 4: Replace the Calendly placeholder URL**

Before going live, update `components/BookSession.tsx` line:
```tsx
data-url="https://calendly.com/your-calendly-url/free-consultation"
```
Replace `your-calendly-url` with Kushal's actual Calendly username (found in Calendly → Event Types → Share).

- [ ] **Step 5: Update the Resend sender address for production**

The `from` field in `app/api/contact/route.ts` uses `onboarding@resend.dev` which works only for testing. For production, add and verify a custom domain in the Resend dashboard, then update to:
```typescript
from: 'Contact Form <noreply@yourdomain.com>',
```

- [ ] **Step 6: Commit**

```bash
git add .env.local.example .gitignore
git commit -m "chore: add env example and gitignore for deployment"
```

---

## Deploy to Vercel

After completing all tasks:

1. Push to GitHub: `git push origin main`
2. Go to [vercel.com](https://vercel.com) → New Project → Import the repo
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY` — your Resend API key
   - `CONTACT_EMAIL` — Kushal's email address
4. Deploy — Vercel auto-detects Next.js and configures everything
