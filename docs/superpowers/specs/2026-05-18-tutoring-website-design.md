# Kushal Jivan Tutoring Website — Design Spec

**Date:** 2026-05-18
**Stack:** Next.js (statically generated), deployed to Vercel

---

## Overview

A single-page personal tutoring website for Kushal Jivan. The primary goal is to convert visitors (students and parents) into booked free consultations. Secondary goal is to provide a contact form for general inquiries.

**Subjects offered:** SAT Math, SAT English, Math (Pre-Algebra through Calculus BC)

---

## Visual Style

- **Theme:** Modern & Bold — dark background (`#0f172a`), electric blue accents (`#38bdf8`), white/light slate text
- **Font:** System sans-serif stack (e.g. Inter or Geist) for body; heavier weights for headings
- **Tone:** Confident, results-focused, ambitious — appeals to both students and parents

---

## Page Architecture

Single scrolling page (`/`) with a sticky navigation header. All sections live on one page; nav buttons smooth-scroll to their target section.

### Sticky Navigation (fixed, always visible)

- **Left:** Kushal's name / logo
- **Right:** Phone number, "Book Session" button (scrolls to §5), "Contact" button (scrolls to §6)
- Background: semi-transparent dark with backdrop blur so content scrolls beneath it cleanly

### Section 1 — Hero

- Bold two-line headline: *"Ace the SAT. Master the Math."*
- One-line subheading introducing Kushal and the subjects
- Large primary CTA button: **Book Free Consultation** (scrolls to §5)
- Full-viewport-height section

### Section 2 — About Kushal

- Headshot / avatar placeholder
- Bio paragraph (2–3 sentences): background, teaching philosophy
- Credential highlights: degree/institution, years of experience, number of students helped
- Layout: photo left, text right (stacks on mobile)

### Section 3 — Services

Three cards in a row (stacks to single column on mobile):

| Card | Title | Description |
|------|-------|-------------|
| 1 | SAT Math | Score improvement strategies, test-taking techniques, full practice test review |
| 2 | SAT English | Reading comprehension, grammar, essay writing, pacing strategies |
| 3 | Math Tutoring | Pre-Algebra through Calculus BC — concept mastery, homework help, exam prep |

Each card includes a secondary "Learn More / Book" CTA.

### Section 4 — Testimonials

3–4 fabricated testimonials from students and parents. Each includes:
- Quote (1–3 sentences, outcome-focused)
- Name (first name + last initial)
- Role (Student / Parent of student)
- Result tag (e.g. "SAT +200 points", "Passed Calc BC")

Example testimonials:
- *"Kushal helped me go from a 1180 to a 1430 on the SAT in just 8 weeks. His method is systematic and actually works."* — Jamie R., Student · SAT +250
- *"My daughter was failing Pre-Calc and is now getting A's. Kushal has a gift for making hard concepts click."* — Maria T., Parent · Pre-Calculus
- *"I got a 5 on the AP Calculus BC exam thanks to Kushal. Couldn't have done it without him."* — Alex K., Student · AP Calc BC Score: 5
- *"Clear explanations, patient, and always prepared. My son's math confidence is completely transformed."* — David L., Parent · Algebra II

### Section 5 — Book a Session

- Section headline: *"Schedule Your Free Consultation"*
- 2–3 sentence description of what to expect on the call
- **Calendly embed** (inline widget, not popup) — placeholder iframe until Kushal provides his Calendly URL
- Fallback: if no Calendly, a prominent email link

### Section 6 — Contact + Footer

**Contact form fields:**
- Name (text input, required)
- Email (email input, required)
- Subject (text input, optional)
- Message (textarea, required)
- Submit button

Form submission: Next.js API route (`/api/contact`) sends email via a transactional email service (e.g. Resend or EmailJS). Environment variable `CONTACT_EMAIL` sets the recipient address.

**Footer:**
- Copyright line
- Email address
- Optional: social links (LinkedIn, etc.) — placeholder for now

---

## Technical Architecture

### Stack
- **Framework:** Next.js 14+ (App Router, static export)
- **Styling:** Tailwind CSS
- **Booking:** Calendly inline embed (script tag)
- **Contact form:** Next.js API route + Resend (or EmailJS as a simpler alternative)
- **Deployment:** Vercel

### Project Structure
```
/app
  page.tsx          ← single page, imports all sections
  /api/contact
    route.ts        ← contact form handler
/components
  Nav.tsx
  Hero.tsx
  About.tsx
  Services.tsx
  Testimonials.tsx
  BookSession.tsx
  ContactForm.tsx
  Footer.tsx
/public
  (assets)
```

### Key Behaviors
- **Smooth scroll:** `scroll-behavior: smooth` on `html`, anchor links on nav buttons
- **Responsive:** Mobile-first, single-column on small screens
- **Performance:** Static export (`output: 'export'`), no client-side data fetching
- **Contact form:** Client-side validation before submit; success/error state shown inline

---

## Out of Scope
- User accounts / login
- Pricing page or payment processing
- Blog or resources section
- Multiple tutors / platform features
- CMS integration
