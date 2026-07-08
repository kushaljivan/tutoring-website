import type { Metadata } from 'next'
import TrustBar from '@/components/TrustBar'
import BookCTA from '@/components/BookCTA'
import Footer from '@/components/Footer'
import {
  SchoolIcon, UsersIcon, DollarIcon, PencilIcon, BookOpenIcon,
  GraduationCapIcon, TrendingUpIcon, StarIcon, CheckIcon, XIcon, MinusIcon,
} from '@/components/icons'

export const metadata: Metadata = {
  title: 'Why McLean Tutoring Center?',
  description:
    'Affordable K-12 tutoring in McLean, VA — Math, English, and SAT prep. Our tutors recently took the same classes your student is in. Starting at $45/hr, no contracts.',
}

const differences = [
  {
    Icon: SchoolIcon,
    title: 'We Know the Curriculum',
    body: 'Our tutors recently attended the same FCPS schools — Langley, McLean, Cooper, Longfellow, and more. We know the teachers, the pacing, and exactly what shows up on tests. This isn\'t generic tutoring; it\'s targeted to your student\'s specific class.',
  },
  {
    Icon: UsersIcon,
    title: 'We Get It — We Were You',
    body: "We're in high school or just graduated. We remember what it's like to juggle AP homework, extracurriculars, and a big test — all at the same time. We don't lecture from a textbook. We help the way a knowledgeable older sibling would.",
  },
  {
    Icon: DollarIcon,
    title: 'Fraction of the Cost',
    body: "Big tutoring centers charge $150–200+/hr and often assign tutors with no connection to your local schools. We start at $45/hr — same results, a tutor who actually knows your student's curriculum, and zero long-term contracts.",
  },
]

const whoWeHelp = [
  {
    grade: 'Elementary School',
    Icon: PencilIcon,
    subjects: ['Reading & Phonics', 'Writing Fundamentals', 'Math Foundations', 'Homework Help'],
    desc: 'Building strong habits and filling gaps early makes everything easier later. We meet students where they are and make learning feel manageable.',
  },
  {
    grade: 'Middle School',
    Icon: BookOpenIcon,
    subjects: ['Pre-Algebra & Algebra I', 'Geometry', 'Essay Writing', 'Reading Comprehension'],
    desc: 'Middle school is where a lot of students start falling behind. We catch those gaps before they compound in high school.',
  },
  {
    grade: 'High School',
    Icon: GraduationCapIcon,
    subjects: ['Algebra II through AP Calc BC', 'AP English Lang & Lit', 'Analytical Writing', 'Course-specific tutoring'],
    desc: 'GPA matters. We help students keep up, get ahead, and build the confidence that shows in grades.',
  },
  {
    grade: 'SAT / ACT Prep',
    Icon: TrendingUpIcon,
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
      <div className="h-[84px] md:h-[92px]" />
      <TrustBar />

      {/* Hero */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">Why McLean Tutoring Center?</span>
          <h1 className="font-serif mt-3 text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-tight">
            Tutors Who Know<br />
            <span className="text-brand">Your Student&apos;s School.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-light max-w-2xl mx-auto leading-relaxed">
            From <strong className="text-ink">elementary school homework</strong> to{' '}
            <strong className="text-ink">AP classes and SAT prep</strong> — we tutor K-12
            students across McLean and Northern Virginia, starting at{' '}
            <strong className="text-ink">$45/hr</strong> with no contracts.
          </p>
        </div>
      </section>

      {/* Who we help */}
      <section className="bg-cream-dark py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-ink text-center mb-4">Who We Help</h2>
          <p className="text-ink-light text-center mb-14 max-w-xl mx-auto">
            We work with students at every stage — from building foundational skills in elementary school to pushing for top scores before college applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whoWeHelp.map((w) => (
              <div key={w.grade} className="bg-card border border-ink/10 shadow-card rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <w.Icon className="w-5 h-5" />
                  </span>
                  <h3 className="text-xl font-bold text-ink">{w.grade}</h3>
                </div>
                <p className="text-ink-light text-sm mb-4 leading-relaxed">{w.desc}</p>
                <ul className="space-y-1">
                  {w.subjects.map((s) => (
                    <li key={s} className="text-ink-light text-sm flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-brand shrink-0" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three differences */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-ink text-center mb-14">The McLean Tutoring Center Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differences.map((d) => (
              <div key={d.title} className="bg-card border border-ink/10 shadow-card rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                  <d.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">{d.title}</h3>
                <p className="text-ink-light leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-cream-dark py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-ink text-center mb-4">How We Stack Up</h2>
          <p className="text-ink-light text-center mb-14 max-w-xl mx-auto">
            See how McLean Tutoring Center compares to the alternatives parents in the area typically consider.
          </p>

          <div className="overflow-x-auto -mx-6 px-6">
            <div className="min-w-[640px]">
              {/* Header row */}
              <div className="grid grid-cols-4 gap-3 mb-3 text-center">
                <div />
                <div className="bg-card border border-ink/10 rounded-xl p-4">
                  <div className="text-ink-light/70 text-xs uppercase tracking-wide mb-1">Big Centers</div>
                  <div className="text-ink-light text-sm">(C2, Mathnasium, etc.)</div>
                </div>
                <div className="bg-card border border-ink/10 rounded-xl p-4">
                  <div className="text-ink-light/70 text-xs uppercase tracking-wide mb-1">Random Freelancer</div>
                  <div className="text-ink-light text-sm">(Craigslist, Wyzant)</div>
                </div>
                <div className="bg-brand/10 border border-brand/40 rounded-xl p-4">
                  <div className="text-brand text-xs uppercase tracking-wide font-bold mb-1">McLean Tutoring Center</div>
                  <div className="text-ink text-sm font-semibold flex items-center justify-center gap-1">
                    <StarIcon className="w-4 h-4 text-amber" /> Recommended
                  </div>
                </div>
              </div>

              {/* Data rows */}
              {[
                { label: 'Hourly Rate', vals: ['$150–200+', '$60–100', 'From $45'] },
                { label: 'K-12 coursework', vals: ['Limited', 'varies', 'yes'] },
                { label: 'Math & English', vals: ['Separate centers', 'varies', 'yes'] },
                { label: 'Knows local curriculum', vals: ['no', 'varies', 'yes'] },
                { label: 'Relatable to students', vals: ['no', 'varies', 'yes'] },
                { label: 'SAT/ACT Prep', vals: ['yes', 'varies', 'yes'] },
                { label: 'No long-term contract', vals: ['no', 'yes', 'yes'] },
                { label: 'Local to McLean', vals: ['Some', 'Varies', 'yes'] },
              ].map((row) => (
                <div key={row.label} className="grid grid-cols-4 gap-3 mb-3 items-center">
                  <div className="text-ink text-sm font-medium pl-1">{row.label}</div>
                  {row.vals.map((val, i) => (
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
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-ink mb-4">Simple, Transparent Pricing</h2>
          <p className="text-ink-light text-lg mb-12 max-w-xl mx-auto">
            No hidden fees, no contracts, no pressure. Pay per session.
          </p>
          <div className="bg-card border border-brand/30 shadow-card rounded-2xl p-10">
            <div className="text-brand text-6xl font-extrabold">$45</div>
            <div className="text-ink text-xl font-semibold mt-1">per hour</div>
            <div className="text-ink-light/70 text-sm mt-1">Starting rate · discounts available for packages</div>
            <ul className="mt-8 space-y-3 text-left max-w-xs mx-auto">
              {[
                'Free 30-min consultation',
                'No minimum sessions',
                'Cancel anytime',
                'In-person or online',
                'All subjects — Math, English & more',
                'McLean & surrounding areas',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink-light">
                  <CheckIcon className="w-4 h-4 text-brand shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <a
              href="/#book"
              className="mt-10 inline-block bg-brand text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-brand-dark transition-colors"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-dark py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-ink text-center mb-14">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-card border border-ink/10 shadow-card rounded-2xl p-7">
                <h3 className="text-ink font-semibold text-lg mb-3">{faq.q}</h3>
                <p className="text-ink-light leading-relaxed">{faq.a}</p>
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
