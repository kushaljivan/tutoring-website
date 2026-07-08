// PLACEHOLDER PROFILES — Kushal will supply real tutor names, schools, and bios.
// Replace the entries in this array only; the card layout stays the same.
const tutors = [
  {
    initial: 'K',
    name: 'Kushal J.',
    school: 'Langley HS · Class of 2026',
    specialty: 'SAT Math · Calculus',
    bio: 'Scored 1550+ on the 2024 SAT. Tutors math from Pre-Algebra through AP Calculus BC and loves showing students the shortcuts that make hard problems feel easy.',
  },
  {
    initial: 'A',
    name: 'Tutor Name',
    school: 'McLean HS · Class of 2025',
    specialty: 'English & Writing',
    bio: 'AP Lang and Lit specialist who helps students find their voice — from 6th-grade book reports to college application essays.',
  },
  {
    initial: 'S',
    name: 'Tutor Name',
    school: 'Langley HS · Class of 2026',
    specialty: 'Elementary & Middle School Math',
    bio: 'Patient and encouraging, specializes in building confidence and strong foundations for younger students.',
  },
]

export default function Tutors() {
  return (
    <section id="tutors" className="bg-cream py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl font-bold text-ink text-center mb-4">
          Meet Our Tutors
        </h2>
        <p className="text-ink-light text-center mb-12 max-w-xl mx-auto">
          Real students from your student&apos;s schools — who just took the same
          classes and the same tests.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tutors.map((t) => (
            <div
              key={t.name + t.initial}
              className="bg-card border border-ink/10 rounded-2xl p-8 text-center shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-amber/15 border border-amber/30 flex items-center justify-center">
                <span className="font-serif text-3xl font-bold text-ink">{t.initial}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-ink">{t.name}</h3>
              <p className="text-ink-light/70 text-sm mt-0.5">{t.school}</p>
              <p className="text-brand text-sm font-semibold mt-2">{t.specialty}</p>
              <p className="text-ink-light text-sm leading-relaxed mt-4">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
