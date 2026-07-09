import Image from 'next/image'
import { NotebookIllustration } from '@/components/illustrations'

const testimonials = [
  {
    id: 5,
    quote:
      'We looked at the big-name tutoring companies first — three times the price for half the attention. Here my son got a tutor who genuinely cares, and his report card shows it.',
    name: 'Priya S.',
    role: 'Parent — Longfellow MS',
    result: 'Math & English',
  },
  {
    id: 1,
    quote:
      'My tutor helped me go from a 1180 to a 1430 on the SAT in just 8 weeks. The method is systematic and actually works.',
    name: 'Jamie R.',
    role: 'Student — Langley HS',
    result: 'SAT +250 pts',
    photo: '/student-jamie.jpg',
  },
  {
    id: 2,
    quote:
      "My daughter was failing Pre-Calc and is now getting A's. Our tutor has a gift for making hard concepts click.",
    name: 'Maria T.',
    role: 'Parent — McLean HS',
    result: 'Pre-Calculus',
    photo: '/student-maria.jpg',
  },
  {
    id: 3,
    quote:
      "I got a 5 on the AP Calculus BC exam thanks to McLean Tutoring Center. Couldn't have done it without them.",
    name: 'Alex K.',
    role: 'Student — Langley HS',
    result: 'AP Calc BC: 5',
    photo: '/student-alex.jpg',
  },
  {
    id: 4,
    quote:
      "Clear explanations, patient, and always prepared. My son's math confidence is completely transformed.",
    name: 'David L.',
    role: 'Parent — Cooper MS',
    result: 'Algebra II',
    photo: '/student-david.jpg',
  },
  {
    id: 6,
    quote:
      "Tutors this good at $50 an hour is honestly a steal. My daughter's scores jumped, her essays got sharper, and she actually looks forward to her sessions now.",
    name: 'Karen W.',
    role: 'Parent — McLean HS',
    result: 'SAT Prep',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-16 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <NotebookIllustration className="w-16 h-16 mx-auto mb-4" />
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
                  {t.photo ? (
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={44}
                      height={44}
                      className="rounded-full object-cover w-11 h-11"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="w-11 h-11 rounded-full bg-brand/10 text-brand font-serif font-bold flex items-center justify-center"
                    >
                      {t.name.charAt(0)}
                    </div>
                  )}
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
