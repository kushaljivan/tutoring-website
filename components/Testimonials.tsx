const testimonials = [
  {
    id: 1,
    quote:
      'Kushal helped me go from a 1180 to a 1430 on the SAT in just 8 weeks. His method is systematic and actually works.',
    name: 'Jamie R.',
    role: 'Student',
    result: 'SAT +250 pts',
  },
  {
    id: 2,
    quote:
      "My daughter was failing Pre-Calc and is now getting A's. Kushal has a gift for making hard concepts click.",
    name: 'Maria T.',
    role: 'Parent',
    result: 'Pre-Calculus',
  },
  {
    id: 3,
    quote:
      "I got a 5 on the AP Calculus BC exam thanks to Kushal. Couldn't have done it without him.",
    name: 'Alex K.',
    role: 'Student',
    result: 'AP Calc BC: 5',
  },
  {
    id: 4,
    quote:
      "Clear explanations, patient, and always prepared. My son's math confidence is completely transformed.",
    name: 'David L.',
    role: 'Parent',
    result: 'Algebra II',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-navy-light py-24 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          What Students & Parents Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-navy border border-navy-mid rounded-2xl p-8"
            >
              <p className="text-slate-text text-lg leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-slate-muted text-sm">{t.role}</div>
                </div>
                <div className="bg-accent/10 border border-accent/30 text-accent text-xs font-semibold px-3 py-1 rounded-full">
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
