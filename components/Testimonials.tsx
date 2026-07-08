import Image from 'next/image'

const testimonials = [
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
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
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
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="rounded-full object-cover w-11 h-11"
                  />
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
