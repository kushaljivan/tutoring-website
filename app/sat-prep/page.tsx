import type { Metadata } from 'next'
import TrustBar from '@/components/TrustBar'
import BookCTA from '@/components/BookCTA'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { CalculatorIcon, BookOpenIcon, CheckIcon, TrendingUpIcon } from '@/components/icons'
import { CalculatorIllustration, BookIllustration } from '@/components/illustrations'

export const metadata: Metadata = {
  title: 'SAT & ACT Prep | McLean Tutoring Center',
  description:
    '1-on-1 SAT and ACT prep in McLean, VA. Our tutors scored 1550+ and took these tests in 2024–2025. Starting at $50/hr.',
}

const steps = [
  {
    num: '01',
    title: 'Diagnostic Session',
    body: 'We start with a full practice SAT or ACT to pinpoint exactly where points are being lost — not just a score, but a section-by-section breakdown. Not sure which test to take? The diagnostic tells us that too.',
  },
  {
    num: '02',
    title: 'Custom Study Plan',
    body: 'Based on the diagnostic, we build a targeted plan. No wasted time on things you already know — every session attacks the highest-leverage gaps.',
  },
  {
    num: '03',
    title: 'Practice, Review, Repeat',
    body: 'We drill the specific question types and strategies that get points. Progress is tracked session-by-session so you can see improvement in real time.',
  },
]

const mathTopics = [
  'Linear equations & inequalities',
  'Systems of equations',
  'Quadratics & polynomials',
  'Ratios, rates & proportions',
  'Statistics & data analysis',
  'Geometry & trigonometry',
  'Advanced algebra',
  'Problem-solving strategies',
]

const englishTopics = [
  'Reading comprehension',
  'Evidence-based questions',
  'Grammar & punctuation rules',
  'Sentence structure',
  'Transitions & rhetoric',
  'Vocabulary in context',
  'Time management & pacing',
  'Process of elimination',
]

const actTopics = [
  'English: grammar & rhetoric',
  'Math: through pre-calculus',
  'Reading: speed & pacing',
  'Science: data & reasoning',
  'Section time management',
  'Guessing & elimination strategy',
  'Full timed practice tests',
  'SAT vs. ACT: which fits you',
]

const results = [
  { name: 'Jamie R.', school: 'Langley HS', before: 1180, after: 1430, photo: '/student-jamie.jpg' },
  { name: 'Marcus W.', school: 'McLean HS', before: 1200, after: 1510, photo: '/student-david.jpg' },
]

export default function SatPrepPage() {
  return (
    <>
      <div className="h-[84px] md:h-[92px]" />
      <TrustBar />

      {/* Hero */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-8 lg:gap-12">
          <CalculatorIllustration className="hidden lg:block w-32 h-32 shrink-0 -rotate-6" />
          <div className="max-w-4xl text-center">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">SAT & ACT Prep · McLean, VA</span>
          <h1 className="font-serif mt-3 text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-tight">
            Score 200+ Points Higher.<br />
            <span className="text-brand">We Know Exactly How.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-light max-w-2xl mx-auto leading-relaxed">
            We prep for <strong className="text-ink">both the SAT and the ACT</strong>. Our
            tutors took these tests in 2024–2025 and scored{' '}
            <strong className="text-ink">1550+</strong> — we teach the current tests, with
            the exact strategies, patterns, and shortcuts that work right now.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/#book" className="bg-brand text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-brand-dark transition-colors">
              Book Free Consultation
            </a>
            <span className="text-ink-light/70 text-sm">Starting at $50/hr · No commitment</span>
          </div>
          </div>
          <BookIllustration className="hidden lg:block w-32 h-32 shrink-0 rotate-6" />
        </div>
      </section>

      {/* Score results banner */}
      <section className="bg-cream-dark py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-ink-light/70 text-sm uppercase tracking-widest mb-8">Recent student results</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {results.map((r) => (
              <div key={r.name} className="flex-1 bg-card rounded-2xl border border-ink/10 shadow-card p-6 flex items-center gap-4">
                <Image src={r.photo} alt={r.name} width={56} height={56} className="rounded-full w-14 h-14 object-cover shrink-0" />
                <div>
                  <div className="text-ink font-semibold">{r.name}</div>
                  <div className="text-ink-light/70 text-xs mb-2">{r.school}</div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-ink-light/70">{r.before}</span>
                    <span className="text-brand">→</span>
                    <span className="text-ink font-bold text-lg">{r.after}</span>
                    <span className="bg-green-600/10 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                      +{r.after - r.before} pts
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-ink text-center mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="bg-card border border-ink/10 shadow-card rounded-2xl p-8">
                <div className="text-brand text-4xl font-extrabold mb-4">{s.num}</div>
                <h3 className="text-xl font-bold text-ink mb-3">{s.title}</h3>
                <p className="text-ink-light leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's covered */}
      <section className="bg-cream-dark py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-ink text-center mb-4">What We Cover</h2>
          <p className="text-ink-light text-center mb-10 max-w-xl mx-auto">
            Every session is targeted — we focus on the specific skills that move your score.
            Not sure whether to take the SAT or ACT? We&apos;ll run a diagnostic of each and
            tell you where your score ceiling is higher.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-ink/10 shadow-card rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-ink mb-6 flex items-center gap-2">
                <CalculatorIcon className="w-6 h-6 text-brand" /> SAT Math
              </h3>
              <ul className="space-y-2">
                {mathTopics.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-ink-light text-sm">
                    <CheckIcon className="w-3.5 h-3.5 text-brand shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-ink/10 shadow-card rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-ink mb-6 flex items-center gap-2">
                <BookOpenIcon className="w-6 h-6 text-brand" /> SAT English
              </h3>
              <ul className="space-y-2">
                {englishTopics.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-ink-light text-sm">
                    <CheckIcon className="w-3.5 h-3.5 text-brand shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-ink/10 shadow-card rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-ink mb-6 flex items-center gap-2">
                <TrendingUpIcon className="w-6 h-6 text-brand" /> ACT — All Sections
              </h3>
              <ul className="space-y-2">
                {actTopics.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-ink-light text-sm">
                    <CheckIcon className="w-3.5 h-3.5 text-brand shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <BookCTA />
      <Footer />
    </>
  )
}
