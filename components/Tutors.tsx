import { BookIllustration } from '@/components/illustrations'
import { FallLeaf, LeafCluster } from '@/components/fall'

type HairStyle = 'short' | 'fluffy' | 'long' | 'frizzy'

type Avatar = {
  skin: string
  hair: HairStyle
  shirt: string
  /** Fall-only knit scarf color */
  scarf: string
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
    bio: "Hey, I'm Kushal! I founded McLean Tutoring Center and I study Applied Math and Computer Science at Virginia Tech. I tutor math, computer science, reading, writing, and SAT prep. My favorite part of tutoring is seeing a tricky concept finally click, and I keep sessions relaxed so students feel comfortable asking anything.",
    avatar: { skin: '#9C6644', hair: 'short', shirt: '#2563EB', scarf: '#B4532A' },
  },
  {
    name: 'Henock',
    role: 'Tutor',
    school: 'McLean High School · Senior',
    specialty: 'Math',
    bio: "Hey, I'm Henock! I'm a senior currently attending McLean High School. Math is my favorite subject to learn, as I love tackling challenging problems. My goal when tutoring is to give good advice that sticks and clear up any confusion.",
    avatar: { skin: '#6B4226', hair: 'frizzy', shirt: '#1E3A5F', scarf: '#D4A017' },
  },
  {
    name: 'Vanika',
    role: 'Tutor',
    school: 'McLean High School · Junior',
    specialty: 'Science',
    bio: "Hi, I'm Vanika! I'm a junior at McLean High School and science has always been my favorite subject. I love learning how things work, whether it's chemical reactions or the human body. When I tutor, I like breaking big ideas into small steps and connecting them to real life so they actually make sense.",
    avatar: { skin: '#A0673F', hair: 'long', shirt: '#F59E0B', scarf: '#9F1239' },
  },
  {
    name: 'Shanmukha',
    role: 'Tutor',
    school: 'McLean High School · Senior',
    specialty: 'Math',
    bio: "Hey, I'm Shanmukha! I'm a senior at McLean High School and math is my favorite subject. I love working through a hard problem until everything comes together. When I tutor, I go step by step and explain the why behind each move so students can solve the next one on their own.",
    avatar: { skin: '#8D5A36', hair: 'fluffy', shirt: '#0D9488', scarf: '#C2410C' },
  },
  {
    name: 'Yimin',
    role: 'Tutor',
    school: 'McLean High School · Senior',
    specialty: 'Biology · Math',
    bio: "Hi, I'm Yimin! I'm a senior at McLean High School and my favorite subjects are biology and math. I like how the two connect, and I love helping students see that too. My goal when tutoring is to help students actually understand the material instead of just memorizing it, so they feel ready for any test.",
    avatar: { skin: '#F3D2B3', hair: 'short', shirt: '#7C3AED', scarf: '#D4A017' },
  },
  {
    name: 'Esther',
    role: 'Tutor',
    school: 'McLean High School · Senior',
    specialty: 'Science',
    bio: "Hi, I'm Esther! I'm a senior at McLean High School and I've loved science for as long as I can remember. Biology, chemistry, physics, I enjoy all of it because there's always something new to learn. When I tutor, I try to make science feel less intimidating and a lot more fun.",
    avatar: { skin: '#EFC9A4', hair: 'long', shirt: '#DB2777', scarf: '#6B7F3A' },
  },
  {
    name: 'Anar',
    role: 'Tutor',
    school: 'McLean High School · Senior',
    specialty: 'Physics · STEM',
    bio: "Hey, I'm Anar! I'm a senior at McLean High School and physics is my favorite subject. I'm really into STEM and love seeing how math explains the way things move and work in the real world. When I tutor, I focus on building strong problem solving skills that carry over to any STEM class.",
    avatar: { skin: '#9A6240', hair: 'short', shirt: '#0EA5E9', scarf: '#B4532A' },
  },
  {
    name: 'Michelle',
    role: 'Tutor',
    school: 'McLean High School · Junior',
    specialty: 'Elementary & Middle School',
    bio: "Hi, I'm Michelle! I'm a junior at McLean High School and I love working with kids. I've always enjoyed helping younger students and seeing them get excited when they figure something out. My goal when tutoring is to make learning fun and help every student feel confident in themselves.",
    avatar: { skin: '#F5D5B8', hair: 'long', shirt: '#16A34A', scarf: '#D4A017' },
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

function FriendlyAvatar({ skin, hair, shirt, scarf }: Avatar) {
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
      {/* fall scarf: wrap around the neck plus a hanging tail */}
      <g className="seasonal">
        <rect x="21" y="38.5" width="22" height="7" rx="3.5" fill={scarf} />
        <path d="M35 43h6l1.5 12h-6Z" fill={scarf} />
        <path d="M26 39.5v5M31 39.5v5M36 39.5v5M36.5 50h5.5" stroke="#000" strokeOpacity=".18" strokeWidth="1" />
      </g>
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
        <div className="relative w-16 h-16 mx-auto mb-4">
          <BookIllustration className="w-16 h-16" />
          <FallLeaf className="seasonal absolute -right-3 -bottom-1 w-8 h-6" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-ink text-center mb-4">
          Meet Our Tutors
        </h2>
        <p className="text-ink-light text-center mb-8 max-w-xl mx-auto">
          Real students who just took the same classes and the same tests,
          and know exactly how to help.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {tutors.map((t) => (
            <div
              key={t.name}
              className="relative w-full max-w-md sm:max-w-none sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] bg-card border border-ink/10 rounded-2xl p-6 text-center shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <LeafCluster className="seasonal absolute top-2 right-2 w-12 h-12 pointer-events-none" />
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
