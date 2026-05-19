# Kushal Jivan — SAT & Math Tutor

Personal tutoring website for Kushal Jivan. Single-page Next.js site with a contact form and Calendly booking embed.

## Stack

- **Next.js 15** (App Router, deployed on Vercel)
- **Tailwind CSS v4** with dark theme
- **Resend** for contact form emails
- **Jest + React Testing Library** for tests

## Sections

1. Sticky nav — phone number, Book Session, Contact always visible
2. Hero
3. About
4. Services — SAT Math, SAT English, Math (Pre-Algebra → Calculus BC)
5. Testimonials
6. Book Session — Calendly embed
7. Contact form + Footer

## Local development

```bash
npm install
cp .env.local.example .env.local   # fill in your keys
npm run dev
```

## Environment variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | From the [Resend dashboard](https://resend.com) |
| `CONTACT_EMAIL` | Email address where contact form submissions are sent |

## Before going live

- [ ] Replace phone number placeholder in `components/Nav.tsx`
- [ ] Replace email placeholder in `components/Footer.tsx`
- [ ] Replace Calendly URL in `components/BookSession.tsx`
- [ ] Replace Resend sender domain in `app/api/contact/route.ts` (after verifying domain in Resend)
- [ ] Set `RESEND_API_KEY` and `CONTACT_EMAIL` in Vercel environment variables

## Tests

```bash
npm test
```
