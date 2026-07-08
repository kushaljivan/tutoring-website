import { DollarIcon, GraduationCapIcon, UsersIcon, MapPinIcon } from '@/components/icons'

const stats = [
  { Icon: DollarIcon, text: 'Starting at $45/hr' },
  { Icon: GraduationCapIcon, text: 'Math & English · K-12 · SAT Prep' },
  { Icon: UsersIcon, text: '50+ students helped' },
  { Icon: MapPinIcon, text: 'McLean, Tysons, Great Falls & Vienna' },
]

export default function TrustBar() {
  return (
    <div className="bg-cream-dark border-b border-ink/10 py-2.5 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
        {stats.map((s) => (
          <span key={s.text} className="flex items-center gap-1.5 text-xs text-ink-light whitespace-nowrap">
            <s.Icon className="w-3.5 h-3.5 text-brand shrink-0" />
            <span>{s.text}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
