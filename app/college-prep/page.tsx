import type { Metadata } from 'next'
import TrustBar from '@/components/TrustBar'
import BookCTA from '@/components/BookCTA'
import Footer from '@/components/Footer'
import {
  PencilIcon, BookOpenIcon, StarIcon, SchoolIcon, CheckIcon, UsersIcon,
  GraduationCapIcon, TrendingUpIcon, DollarIcon,
} from '@/components/icons'
import { NotebookIllustration, BookIllustration } from '@/components/illustrations'

export const metadata: Metadata = {
  title: 'College Prep & Essay Coaching | McLean Tutoring Center',
  description:
    'Affordable 1-on-1 college application help in McLean, VA — Common App essays, supplemental essays, activities lists, school strategy, and interview prep. Our consultants attend Top-50 universities. Starting at $50/hr.',
}

const services = [
  {
    Icon: PencilIcon,
    title: 'Common App Essay',
    body: 'From brainstorming a story only your student can tell to line-by-line polish — we guide the personal statement through every draft until it genuinely stands out.',
  },
  {
    Icon: BookOpenIcon,
    title: 'Supplemental Essays',
    body: '"Why us?" essays, community essays, short answers — we help tailor each one to the school so no prompt gets a recycled, generic response.',
  },
  {
    Icon: StarIcon,
    title: 'Activities List & Résumé',
    body: 'Ten activities, 150 characters each — every word counts. We help frame four years of work so admissions officers see impact, not just participation.',
  },
  {
    Icon: SchoolIcon,
    title: 'School List & Strategy',
    body: 'A balanced list of reach, target, and safety schools built around your student’s goals, stats, and budget — plus early decision and early action strategy.',
  },
  {
    Icon: CheckIcon,
    title: 'Full Application Review',
    body: 'Before anything is submitted, we go through the entire application the way an admissions reader would — catching weak spots while there’s still time to fix them.',
  },
  {
    Icon: UsersIcon,
    title: 'Interview Prep',
    body: 'Mock interviews with honest feedback, so alumni and admissions interviews feel like conversations instead of interrogations.',
  },
]

const differences = [
  {
    Icon: GraduationCapIcon,
    title: 'Consultants at Top-50 Universities',
    body: 'Every one of our college consultants attends a Top-50 university. They wrote essays that worked, built applications that got results, and know what today’s admissions bar actually looks like.',
  },
  {
    Icon: TrendingUpIcon,
    title: 'They Just Went Through It',
    body: 'Not advice from a decade ago — our consultants applied within the last few years. They know the current Common App, the current prompts, and what admissions offices are looking for right now.',
  },
  {
    Icon: DollarIcon,
    title: 'A Fraction of the Cost',
    body: 'Traditional college consultants charge $200–500+/hr, and full packages can run into five figures. We start at $50/hr with no packages and no contracts — pay only for the help you need.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Profile & Goals Session',
    body: 'We start with a free consultation: transcript, scores, activities, and dream schools. You leave with an honest read on where your student stands and a plan of attack.',
  },
  {
    num: '02',
    title: 'Build the Roadmap',
    body: 'School list, essay topics, and a deadline calendar — everything mapped out so senior fall is organized instead of chaotic.',
  },
  {
    num: '03',
    title: 'Draft, Revise, Submit',
    body: 'Weekly working sessions on essays and applications, with real feedback each round. We stay with you through the final submit button.',
  },
]

export default function CollegePrepPage() {
  return (
    <>
      <div className="h-[84px] md:h-[92px]" />
      <TrustBar />

      {/* Hero */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-8 lg:gap-12">
          <NotebookIllustration className="hidden lg:block w-32 h-32 shrink-0" />
          <div className="max-w-4xl text-center">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">College Prep · McLean, VA</span>
          <h1 className="font-serif mt-3 text-4xl sm:text-5xl md:text-6xl font-bold text-ink leading-tight">
            Your Dream School,<br />
            <span className="text-brand">Within Reach.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-light max-w-2xl mx-auto leading-relaxed">
            Affordable 1-on-1 college application coaching from consultants at{' '}
            <strong className="text-ink">Top-50 universities</strong> — essays, activities
            lists, school strategy, and everything in between. Expert guidance without
            the five-figure price tag.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/#book" className="bg-brand text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-brand-dark transition-colors">
              Book Free Consultation
            </a>
            <span className="text-ink-light/70 text-sm">Starting at $50/hr · No packages, no contracts</span>
          </div>
          </div>
          <BookIllustration className="hidden lg:block w-32 h-32 shrink-0 rotate-6" />
        </div>
      </section>

      {/* What we help with */}
      <section className="bg-cream-dark py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-ink text-center mb-4">Everything the Application Demands</h2>
          <p className="text-ink-light text-center mb-10 max-w-xl mx-auto">
            The same services traditional college consultants offer — handled 1-on-1, at a price that makes sense.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-card border border-ink/10 shadow-card rounded-2xl p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                  <s.Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink mb-3">{s.title}</h3>
                <p className="text-ink-light text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why our consultants */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-ink text-center mb-10">Why Families Choose Our Consultants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differences.map((d) => (
              <div key={d.title} className="bg-card border border-ink/10 shadow-card rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                  <d.Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink mb-3">{d.title}</h3>
                <p className="text-ink-light leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-cream-dark py-16 px-6">
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

      <BookCTA />
      <Footer />
    </>
  )
}
