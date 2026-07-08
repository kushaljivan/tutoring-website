import type { Metadata } from 'next'
import TrustBar from '@/components/TrustBar'
import BookCTA from '@/components/BookCTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Why McLean Tutoring Center?',
  description:
    'Affordable K-12 tutoring in McLean, VA — Math, English, and SAT prep. Our tutors recently took the same classes your student is in. Starting at $45/hr, no contracts.',
}

const differences = [
  {
    icon: '🏫',
    title: 'We Know the Curriculum',
    body: 'Our tutors recently attended the same FCPS schools — Langley, McLean, Cooper, Longfellow, and more. We know the teachers, the pacing, and exactly what shows up on tests. This isn\'t generic tutoring; it\'s targeted to your student\'s specific class.',
  },
  {
    icon: '🤝',
    title: 'We Get It — We Were You',
    body: "We're in high school or just graduated. We remember what it's like to juggle AP homework, extracurriculars, and a big test — all at the same time. We don't lecture from a textbook. We help the way a knowledgeable older sibling would.",
  },
  {
    icon: '💰',
    title: 'Fraction of the Cost',
    body: "Big tutoring centers charge $150–200+/hr and often assign tutors with no connection to your local schools. We start at $45/hr — same results, a tutor who actually knows your student's curriculum, and zero long-term contracts.",
  },
]

const whoWeHelp = [
  {
    grade: 'Elementary School',
    icon: '✏️',
    subjects: ['Reading & Phonics', 'Writing Fundamentals', 'Math Foundations', 'Homework Help'],
    desc: 'Building strong habits and filling gaps early makes everything easier later. We meet students where they are and make learning feel manageable.',
  },
  {
    grade: 'Middle School',
    icon: '📚',
    subjects: ['Pre-Algebra & Algebra I', 'Geometry', 'Essay Writing', 'Reading Comprehension'],
    desc: 'Middle school is where a lot of students start falling behind. We catch those gaps before they compound in high school.',
  },
  {
    grade: 'High School',
    icon: '🎓',
    subjects: ['Algebra II through AP Calc BC', 'AP English Lang & Lit', 'Analytical Writing', 'Course-specific tutoring'],
    desc: 'GPA matters. We help students keep up, get ahead, and build the confidence that shows in grades.',
  },
  {
    grade: 'SAT / ACT Prep',
    icon: '📈',
    subjects: ['SAT Math & Reading/Writing', 'ACT all sections', 'Score strategy', 'Full practice tests'],
    desc: 'Our tutors scored 1550+ on the SAT in 2024–2025. We know the current test — not a version from years ago.',
  },
]

const faqs = [
  {
    q: 'Do you only do SAT prep, or can you help with school coursework too?',
    a: 'We do both. Most of our students come to us for help with school courses — math from Pre-Algebra through AP Calculus, English writing and reading, and more. SAT/ACT prep is one part of what we offer, not the whole thing.',
  },
  {
    q: 'My child is in elementary school. Can you help?',
    a: 'Yes. We work with students as young as elementary school on reading, writing fundamentals, and math foundations. Building strong habits early makes a real difference as coursework gets harder.',
  },
  {
    q: 'How are your tutors qualified if they\'re in high school?',
    a: 'Our tutors recently attended the same FCPS schools your student is in — they know the curriculum, the teachers, and what gets tested. For SAT prep, they scored 1550+ (99th percentile) on the 2024–2025 test. That combination of recent experience and local knowledge is hard to find anywhere else.',
  },
  {
    q: 'Do you have a minimum number of sessions?',
    a: 'No contracts, no minimums. Start with a free 30-minute consultation, then book sessions as needed. Most families do 1–3 sessions per week depending on their goals.',
  },
  {
    q: 'Where do sessions take place?',
    a: 'We tutor in-person throughout McLean, Tysons, Great Falls, and Vienna — at a library, coffee shop, or other public setting. Online sessions are also available.',
  },
  {
    q: 'How much improvement can I expect?',
    a: 'It depends on the subject and starting point. For SAT, our students average 200+ point improvements over 8–12 weeks. For coursework, most students see grade improvements within the first few sessions as gaps get identified and addressed.',
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
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Why McLean Tutoring Center?</span>
          <h1 className="mt-3 text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Tutors Who Know<br />
            <span className="text-accent">Your Student&apos;s School.</span>
          </h1>
          <p className="mt-6 text-xl text-slate-text max-w-2xl mx-auto leading-relaxed">
            From <strong className="text-white">elementary school homework</strong> to{' '}
            <strong className="text-white">AP classes and SAT prep</strong> — we tutor K-12
            students across McLean and Northern Virginia, starting at{' '}
            <strong className="text-white">$45/hr</strong> with no contracts.
          </p>
        </div>
      </section>

      {/* Who we help */}
      <section className="bg-navy-light py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Who We Help</h2>
          <p className="text-slate-text text-center mb-14 max-w-xl mx-auto">
            We work with students at every stage — from building foundational skills in elementary school to pushing for top scores before college applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whoWeHelp.map((w) => (
              <div key={w.grade} className="bg-navy border border-navy-mid rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{w.icon}</span>
                  <h3 className="text-xl font-bold text-white">{w.grade}</h3>
                </div>
                <p className="text-slate-text text-sm mb-4 leading-relaxed">{w.desc}</p>
                <ul className="space-y-1">
                  {w.subjects.map((s) => (
                    <li key={s} className="text-slate-text text-sm flex items-center gap-2">
                      <span className="text-accent text-xs">✓</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three differences */}
      <section className="bg-navy py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-14">The McLean Tutoring Center Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differences.map((d) => (
              <div key={d.title} className="bg-navy-light border border-navy-mid rounded-2xl p-8">
                <div className="text-4xl mb-4">{d.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{d.title}</h3>
                <p className="text-slate-text leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-navy-light py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">How We Stack Up</h2>
          <p className="text-slate-text text-center mb-14 max-w-xl mx-auto">
            See how McLean Tutoring Center compares to the alternatives parents in the area typically consider.
          </p>

          {/* Header row */}
          <div className="grid grid-cols-4 gap-3 mb-3 text-center">
            <div />
            <div className="bg-navy border border-navy-mid rounded-xl p-4">
              <div className="text-slate-muted text-xs uppercase tracking-wide mb-1">Big Centers</div>
              <div className="text-slate-text text-sm">(C2, Mathnasium, etc.)</div>
            </div>
            <div className="bg-navy border border-navy-mid rounded-xl p-4">
              <div className="text-slate-muted text-xs uppercase tracking-wide mb-1">Random Freelancer</div>
              <div className="text-slate-text text-sm">(Craigslist, Wyzant)</div>
            </div>
            <div className="bg-accent/10 border border-accent/50 rounded-xl p-4">
              <div className="text-accent text-xs uppercase tracking-wide font-bold mb-1">McLean Tutoring Center</div>
              <div className="text-white text-sm font-semibold">⭐ Recommended</div>
            </div>
          </div>

          {/* Data rows */}
          {[
            { label: 'Hourly Rate', vals: ['$150–200+', '$60–100', 'From $45'] },
            { label: 'K-12 coursework', vals: ['Limited', '❓', '✅'] },
            { label: 'Math & English', vals: ['Separate centers', '❓', '✅'] },
            { label: 'Knows local curriculum', vals: ['❌', '❓', '✅'] },
            { label: 'Relatable to students', vals: ['❌', '❓', '✅'] },
            { label: 'SAT/ACT Prep', vals: ['✅', '❓', '✅'] },
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
                      : 'bg-navy border border-navy-mid text-slate-text'
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
      <section className="bg-navy py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-text text-lg mb-12 max-w-xl mx-auto">
            No hidden fees, no contracts, no pressure. Pay per session.
          </p>
          <div className="bg-navy-light border border-accent/30 rounded-2xl p-10">
            <div className="text-accent text-6xl font-extrabold">$45</div>
            <div className="text-white text-xl font-semibold mt-1">per hour</div>
            <div className="text-slate-muted text-sm mt-1">Starting rate · discounts available for packages</div>
            <ul className="mt-8 space-y-3 text-left max-w-xs mx-auto">
              {[
                'Free 30-min consultation',
                'No minimum sessions',
                'Cancel anytime',
                'In-person or online',
                'All subjects — Math, English & more',
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
      <section className="bg-navy-light py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-14">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-navy border border-navy-mid rounded-2xl p-7">
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
