import { BookIllustration } from '@/components/illustrations'

type HairStyle = 'short' | 'fluffy' | 'long' | 'frizzy'

type Avatar = {
  skin: string
  hair: HairStyle
  shirt: string
}

// Add new tutors to this array; the card layout stays the same.
const tutors: {
  name: string
  role: 'Founder' | 'Tutor'
  school: string
  specialty: string
  bio: string
  avatar: Avatar
}[] = [
  {
    name: 'Kushal Jivan',
    role: 'Founder',
    school: 'Virginia Tech · Applied Math & Computer Science',
    specialty: 'Math · CS · Reading & Writing · SAT',
    bio: "Hey, I'm Kushal! I'm heading to Virginia Tech to study Applied Math and Computer Science. I tutor math, computer science, reading, and English writing — plus SAT prep — and I love the moment a tricky concept finally clicks. Sessions with me are relaxed, encouraging, and focused on building real confidence.",
    avatar: { skin: '#9C6644', hair: 'short', shirt: '#2563EB' },
  },
  {
    name: 'Henock',
    role: 'Tutor',
    school: 'McLean High School · Senior',
    specialty: 'Math',
    bio: "Hey, I'm Henock! I'm a senior currently attending McLean High School. Math is my favorite subject to learn, as I love tackling challenging problems. My goal when tutoring is to give good advice that sticks and clear up any confusion.",
    avatar: { skin: '#6B4226', hair: 'frizzy', shirt: '#1E3A5F' },
  },
  {
    name: 'Vanika',
    role: 'Tutor',
    school: 'McLean High School · Junior',
    specialty: 'Science',
    bio: "Hi, I'm Vanika! I'm a junior at McLean High School, and science is my favorite subject — I love figuring out how and why things work, from chemical reactions to the human body. When I tutor, I break big concepts into simple steps and connect them to real life so they actually make sense.",
    avatar: { skin: '#A0673F', hair: 'long', shirt: '#F59E0B' },
  },
  {
    name: 'Shanmukha',
    role: 'Tutor',
    school: 'McLean High School · Senior',
    specialty: 'Math',
    bio: "Hi, I'm Shanmukha! I'm a senior at McLean High School, and math has always been my favorite subject — nothing beats working through a tough problem and watching it all come together. I walk through problems step by step and explain the reasoning behind each move, so students can solve the next one on their own.",
    avatar: { skin: '#8D5A36', hair: 'fluffy', shirt: '#0D9488' },
  },
  {
    name: 'Yimin',
    role: 'Tutor',
    school: 'McLean High School · Senior',
    specialty: 'Biology · Math',
    bio: "Hi, I'm Yimin! I'm a senior at McLean High School, and biology and math are my two favorite subjects — I love how one explains the living world and the other gives you the tools to make sense of it. When I tutor, I focus on real understanding over memorization, with plenty of practice so students walk into every test feeling prepared.",
    avatar: { skin: '#F3D2B3', hair: 'short', shirt: '#7C3AED' },
  },
]

const HAIR_COLOR = '#2F2013'

// Small circles tracing the outline of a hair shape, for a fluffy/frizzy edge.
const fluffyPuffs: [number, number, number][] = [
  [19.5, 23, 4.5], [21.5, 17, 5.5], [26.5, 13.5, 6], [32, 12, 6.5], [37.5, 13.5, 6],
  [42.5, 17, 5.5], [44.5, 23, 4.5],
]
const frizzyPuffs: [number, number, number][] = [
  [16, 28, 3.5], [15.5, 22, 3.5], [17.5, 16, 3.5], [21.5, 11.5, 3.5], [26.5, 8.5, 3.5],
  [32, 7.5, 3.5], [37.5, 8.5, 3.5], [42.5, 11.5, 3.5], [46.5, 16, 3.5], [48.5, 22, 3.5],
  [48, 28, 3.5],
]

function FriendlyAvatar({ skin, hair, shirt }: Avatar) {
  return (
    <svg viewBox="0 0 64 64" className="w-20 h-20" aria-hidden="true">
      {/* warm background */}
      <circle cx="32" cy="32" r="32" fill="#FDEBD2" />
      {/* hair that sits behind the head */}
      {hair === 'frizzy' && (
        <g fill={HAIR_COLOR}>
          <ellipse cx="32" cy="20" rx="16.5" ry="13" />
          {frizzyPuffs.map(([cx, cy, r]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
          ))}
        </g>
      )}
      {/* shoulders */}
      <path d="M12 64a20 15 0 0 1 40 0Z" fill={shirt} />
      {hair === 'long' && (
        <path
          d="M18 27c0-9 6-15 14-15s14 6 14 15v26c0 2.5-2 4-4.5 4h-19c-2.5 0-4.5-1.5-4.5-4Z"
          fill={HAIR_COLOR}
        />
      )}
      {/* head */}
      <circle cx="32" cy="27" r="13" fill={skin} />
      {/* hair on top of the head */}
      {hair === 'short' && (
        <path d="M19 26c0-8 6-13 13-13s13 5 13 13c-2.5-4.5-6.5-6.5-13-6.5S21.5 21.5 19 26Z" fill={HAIR_COLOR} />
      )}
      {hair === 'fluffy' && (
        <g fill={HAIR_COLOR}>
          <path d="M19 26c0-8 6-13 13-13s13 5 13 13c-2.5-4.5-6.5-6.5-13-6.5S21.5 21.5 19 26Z" />
          {fluffyPuffs.map(([cx, cy, r]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
          ))}
        </g>
      )}
      {hair === 'frizzy' && (
        <path d="M19 24c0-7 6-11 13-11s13 4 13 11c-3-3.5-7-5-13-5s-10 1.5-13 5Z" fill={HAIR_COLOR} />
      )}
      {hair === 'long' && (
        <path d="M19 27c0-9 6-14 13-14s13 5 13 14c-3-5-8-7.5-15-6.5c-4 .5-8 2.5-11 6.5Z" fill={HAIR_COLOR} />
      )}
      {/* eyes */}
      <circle cx="27" cy="27" r="1.7" fill={HAIR_COLOR} />
      <circle cx="37" cy="27" r="1.7" fill={HAIR_COLOR} />
      {/* smile */}
      <path
        d="M26.5 32c1.7 2.3 3.8 3.2 5.5 3.2s3.8-.9 5.5-3.2"
        stroke={HAIR_COLOR}
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
        <p className="text-ink-light text-center mb-8 max-w-xl mx-auto">
          Real students who just took the same classes and the same tests —
          and know exactly how to help.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {tutors.map((t) => (
            <div
              key={t.name}
              className="w-full max-w-md sm:max-w-none sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-card border border-ink/10 rounded-2xl p-6 text-center shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="mx-auto mb-4 w-20 h-20 rounded-full border border-amber/30 overflow-hidden">
                <FriendlyAvatar {...t.avatar} />
              </div>
              <span
                className={`inline-block text-xs font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded-full mb-2 ${
                  t.role === 'Founder' ? 'bg-amber/15 text-amber-dark' : 'bg-brand/10 text-brand'
                }`}
              >
                {t.role}
              </span>
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
