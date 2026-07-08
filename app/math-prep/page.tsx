import type { Metadata } from 'next'
import TrustBar from '@/components/TrustBar'
import BookCTA from '@/components/BookCTA'
import Footer from '@/components/Footer'
import { CalculatorIcon, BookOpenIcon, CheckIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Math & English Tutoring | McLean Tutoring Center',
  description:
    'Math and English tutoring from elementary through high school in McLean, VA. Familiar with Langley HS, McLean HS, Cooper MS, and Longfellow MS curriculum. Starting at $45/hr.',
}

const mathCourses = [
  { level: 'Middle School', subjects: ['Pre-Algebra', 'Algebra I', 'Geometry'] },
  { level: 'High School Core', subjects: ['Algebra II', 'Pre-Calculus', 'Trigonometry'] },
  { level: 'AP & Advanced', subjects: ['AP Calculus AB', 'AP Calculus BC', 'AP Statistics'] },
  { level: 'Test Prep', subjects: ['SAT Math', 'ACT Math', 'AMC 8 / 10 / 12'] },
]

const englishCourses = [
  { level: 'Middle School', subjects: ['Reading Comprehension', 'Essay Writing', 'Grammar & Mechanics'] },
  { level: 'High School Core', subjects: ['Analytical Writing', 'Literary Analysis', 'Research Papers'] },
  { level: 'AP English', subjects: ['AP Language & Composition', 'AP Literature & Composition'] },
  { level: 'Test Prep', subjects: ['SAT Reading & Writing', 'ACT English', 'College Essays'] },
]

const schools = [
  'Langley High School',
  'McLean High School',
  'Cooper Middle School',
  'Longfellow Middle School',
  'Chesterbrook Elementary',
  'Spring Hill Elementary',
  'Kent Gardens Elementary',
  'Other FCPS schools',
]

const steps = [
  {
    num: '01',
    title: 'Identify the Gaps',
    body: 'We review recent tests and homework to find exactly where understanding breaks down — not just what questions were wrong, but why.',
  },
  {
    num: '02',
    title: 'Build the Foundation',
    body: 'We go back to the root of the confusion, rebuild the concept clearly, then connect it forward to how it shows up on future tests.',
  },
  {
    num: '03',
    title: 'Practice Until It Sticks',
    body: 'We work through problems together until the process is automatic — not just memorized but truly understood.',
  },
]

export default function MathPrepPage() {
  return (
    <>
      <div className="h-[84px] md:h-[92px]" />
      <TrustBar />

      {/* Hero */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">Math & English Tutoring · McLean, VA</span>
          <h1 className="font-serif mt-3 text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-tight">
            Math & English.<br />
            <span className="text-brand">Every Level, Every School.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-light max-w-2xl mx-auto leading-relaxed">
            We tutor Math and English for students at{' '}
            <strong className="text-ink">Langley HS, McLean HS, Cooper MS, and Longfellow MS</strong>.
            Our tutors recently took the same classes — we know the curriculum,
            the teachers, and exactly what gets tested.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/#book" className="bg-brand text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-brand-dark transition-colors">
              Book Free Consultation
            </a>
            <span className="text-ink-light/70 text-sm">Starting at $45/hr · No commitment</span>
          </div>
        </div>
      </section>

      {/* Math Courses */}
      <section className="bg-cream-dark py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-4">
            <CalculatorIcon className="w-8 h-8 text-brand" />
            <h2 className="font-serif text-3xl font-bold text-ink">Math Tutoring</h2>
          </div>
          <p className="text-ink-light text-center mb-14 max-w-xl mx-auto">
            From fractions to AP Calculus BC — we cover every math course taught at local schools.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {mathCourses.map((c) => (
              <div key={c.level} className="bg-card border border-ink/10 shadow-card rounded-2xl p-6">
                <h3 className="text-brand text-sm font-semibold uppercase tracking-wide mb-4">{c.level}</h3>
                <ul className="space-y-2">
                  {c.subjects.map((s) => (
                    <li key={s} className="text-ink text-sm flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-brand shrink-0" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* English Courses */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-4">
            <BookOpenIcon className="w-8 h-8 text-brand" />
            <h2 className="font-serif text-3xl font-bold text-ink">English Tutoring</h2>
          </div>
          <p className="text-ink-light text-center mb-14 max-w-xl mx-auto">
            From reading comprehension to college essays — we help students write clearly, read critically, and score higher.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {englishCourses.map((c) => (
              <div key={c.level} className="bg-card border border-ink/10 shadow-card rounded-2xl p-6">
                <h3 className="text-brand text-sm font-semibold uppercase tracking-wide mb-4">{c.level}</h3>
                <ul className="space-y-2">
                  {c.subjects.map((s) => (
                    <li key={s} className="text-ink text-sm flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-brand shrink-0" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local schools */}
      <section className="bg-cream-dark py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-ink mb-4">We Know Your School&apos;s Curriculum</h2>
          <p className="text-ink-light text-lg mb-10 max-w-2xl mx-auto">
            Our tutors attended these schools. We&apos;re familiar with how each
            school paces its courses, what teachers emphasize, and how tests are structured.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {schools.map((s) => (
              <span key={s} className="bg-card border border-ink/10 text-ink shadow-card text-sm px-4 py-2 rounded-full">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-ink text-center mb-14">How We Work</h2>
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

      <BookCTA />
      <Footer />
    </>
  )
}
