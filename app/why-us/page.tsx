import type { Metadata } from 'next'
import TrustBar from '@/components/TrustBar'
import BookCTA from '@/components/BookCTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Why McLean Tutors?',
  description:
    'Affordable SAT and math tutoring in McLean, VA. Our tutors scored 1550+ and took the SAT in 2024–2025. Starting at $45/hr vs $150+ at big tutoring centers.',
}

const differences = [
  {
    icon: '🧠',
    title: 'We Just Did This',
    body: 'Our tutors scored 1550+ on the SAT in 2024–2025 — not years ago. The test has changed. We know the current format, the current tricks, and what actually works on this version of the exam.',
  },
  {
    icon: '🤝',
    title: 'We Get It — We Were You',
    body: "We're in high school or just graduated. We know what it feels like to have AP homework, extracurriculars, and a looming SAT date at the same time. We don't lecture — we help.",
  },
  {
    icon: '💰',
    title: 'Fraction of the Cost',
    body: "Big centers charge $150–200+/hr for tutors who may have taken the SAT a decade ago. We start at $45/hr. Same results. A tutor who actually relates to your student. No long contracts.",
  },
]

const faqs = [
  {
    q: 'How are your tutors qualified if they\'re in high school?',
    a: 'Our tutors scored 1550+ on the SAT within the last 1–2 years — that\'s the 99th percentile. They know the current test format cold. Compare that to centers where tutors may have taken a very different version of the SAT years ago.',
  },
  {
    q: 'Do you have a minimum number of sessions?',
    a: 'No contracts, no minimums. Start with a free 30-minute consultation, then book sessions as you need them. Most families do around 3 sessions per week.',
  },
  {
    q: 'Where do sessions take place?',
    a: 'We tutor in-person throughout McLean, Tysons, Great Falls, and Vienna — at a library, coffee shop, or other public setting. Online sessions are also available.',
  },
  {
    q: 'How much improvement can I expect?',
    a: 'Results depend on starting point and effort, but our students have seen an average of 200+ point improvements on the SAT with 8–12 weeks of consistent tutoring.',
  },
  {
    q: 'What if my student needs help with school math, not SAT?',
    a: 'Absolutely — math tutoring from Pre-Algebra through AP Calculus BC is a core part of what we do. See our Math Tutoring page for details.',
  },
]

export default function WhyUsPage() {
  return (
    <>
      <div className="h-[92px]" />
      <TrustBar />

      {/* Hero */}
      <section className="bg-navy py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Why McLean Tutors?</span>
          <h1 className="mt-3 text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Tutored by Students<br />
            <span className="text-accent">Who Just Aced It.</span>
          </h1>
          <p className="mt-6 text-xl text-slate-text max-w-2xl mx-auto leading-relaxed">
            Our tutors scored <strong className="text-white">1550+</strong> on the SAT in
            2024–2025. Starting at <strong className="text-white">$45/hr</strong> — a fraction
            of what big tutoring centers charge for tutors who took a different test years ago.
          </p>
        </div>
      </section>

      {/* Three differences */}
      <section className="bg-navy-light py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-14">The McLean Tutors Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differences.map((d) => (
              <div key={d.title} className="bg-navy border border-navy-mid rounded-2xl p-8">
                <div className="text-4xl mb-4">{d.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{d.title}</h3>
                <p className="text-slate-text leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-navy py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">How We Stack Up</h2>
          <p className="text-slate-text text-center mb-14 max-w-xl mx-auto">
            See how McLean Tutors compares to the alternatives parents in the area typically consider.
          </p>

          {/* Header row */}
          <div className="grid grid-cols-4 gap-3 mb-3 text-center">
            <div />
            <div className="bg-navy-light border border-navy-mid rounded-xl p-4">
              <div className="text-slate-muted text-xs uppercase tracking-wide mb-1">Big Centers</div>
              <div className="text-slate-text text-sm">(C2, Mathnasium, etc.)</div>
            </div>
            <div className="bg-navy-light border border-navy-mid rounded-xl p-4">
              <div className="text-slate-muted text-xs uppercase tracking-wide mb-1">Random Freelancer</div>
              <div className="text-slate-text text-sm">(Craigslist, Wyzant)</div>
            </div>
            <div className="bg-accent/10 border border-accent/50 rounded-xl p-4">
              <div className="text-accent text-xs uppercase tracking-wide font-bold mb-1">McLean Tutors</div>
              <div className="text-white text-sm font-semibold">⭐ Recommended</div>
            </div>
          </div>

          {/* Data rows */}
          {[
            { label: 'Hourly Rate', vals: ['$150–200+', '$60–100', 'From $45'] },
            { label: 'SAT Taken', vals: ['Years ago', 'Varies', '2024–2025'] },
            { label: 'SAT Score', vals: ['Unknown', 'Varies', '1550+'] },
            { label: 'Knows current test', vals: ['❌', '❓', '✅'] },
            { label: 'Relatable to students', vals: ['❌', '❓', '✅'] },
            { label: 'No long-term contract', vals: ['❌', '✅', '✅'] },
            { label: 'Local to McLean', vals: ['Some', 'Varies', '✅'] },
          ].map((row) => (
            <div key={row.label} className="grid grid-cols-4 gap-3 mb-3 items-center">
              <div className="text-slate-text text-sm font-medium pl-1">{row.label}</div>
              {row.vals.map((val, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-3 text-center text-sm ${
                    i === 2
                      ? 'bg-accent/10 border border-accent/30 text-white font-semibold'
                      : 'bg-navy-light border border-navy-mid text-slate-text'
                  }`}
                >
                  {val}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-navy-light py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-text text-lg mb-12 max-w-xl mx-auto">
            No hidden fees, no contracts, no pressure. Pay per session.
          </p>
          <div className="bg-navy border border-accent/30 rounded-2xl p-10">
            <div className="text-accent text-6xl font-extrabold">$45</div>
            <div className="text-white text-xl font-semibold mt-1">per hour</div>
            <div className="text-slate-muted text-sm mt-1">Starting rate · discounts available for packages</div>
            <ul className="mt-8 space-y-3 text-left max-w-xs mx-auto">
              {[
                'Free 30-min consultation',
                'No minimum sessions',
                'Cancel anytime',
                'In-person or online',
                'McLean & surrounding areas',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-text">
                  <span className="text-accent font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
            <a
              href="/#book"
              className="mt-10 inline-block bg-accent text-navy font-bold text-lg px-8 py-4 rounded-xl hover:bg-accent-dark transition-colors"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-14">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-navy-light border border-navy-mid rounded-2xl p-7">
                <h3 className="text-white font-semibold text-lg mb-3">{faq.q}</h3>
                <p className="text-slate-text leading-relaxed">{faq.a}</p>
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
