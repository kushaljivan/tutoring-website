import { BookIllustration } from '@/components/illustrations'

// Add new tutors to this array; the card layout stays the same.
const tutors = [
  {
    name: 'Kushal Jivan',
    school: 'Virginia Tech · Applied Math & Computer Science',
    specialty: 'Math · CS · Reading & Writing · SAT',
    bio: "Hey, I'm Kushal! I'm heading to Virginia Tech to study Applied Math and Computer Science. I tutor math, computer science, reading, and English writing — plus SAT prep — and I love the moment a tricky concept finally clicks. Sessions with me are relaxed, encouraging, and focused on building real confidence.",
  },
]

function FriendlyAvatar() {
  return (
    <svg viewBox="0 0 64 64" className="w-20 h-20" aria-hidden="true">
      {/* warm background */}
      <circle cx="32" cy="32" r="32" fill="#FDEBD2" />
      {/* shoulders */}
      <path d="M12 64a20 15 0 0 1 40 0Z" fill="#2563EB" />
      {/* head */}
      <circle cx="32" cy="27" r="13" fill="#9C6644" />
      {/* hair */}
      <path d="M19 26c0-8 6-13 13-13s13 5 13 13c-2.5-4.5-6.5-6.5-13-6.5S21.5 21.5 19 26Z" fill="#2F2013" />
      {/* eyes */}
      <circle cx="27" cy="27" r="1.7" fill="#2F2013" />
      <circle cx="37" cy="27" r="1.7" fill="#2F2013" />
      {/* smile */}
      <path
        d="M26.5 32c1.7 2.3 3.8 3.2 5.5 3.2s3.8-.9 5.5-3.2"
        stroke="#2F2013"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Tutors() {
  return (
    <section id="tutors" className="bg-cream py-16 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <BookIllustration className="w-16 h-16 mx-auto mb-4" />
        <h2 className="font-serif text-3xl font-bold text-ink text-center mb-4">
          Meet Our Tutors
        </h2>
        <p className="text-ink-light text-center mb-12 max-w-xl mx-auto">
          Real students who just took the same classes and the same tests —
          and know exactly how to help.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {tutors.map((t) => (
            <div
              key={t.name}
              className="w-full max-w-sm bg-card border border-ink/10 rounded-2xl p-8 text-center shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="mx-auto mb-4 w-20 h-20 rounded-full border border-amber/30 overflow-hidden">
                <FriendlyAvatar />
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
