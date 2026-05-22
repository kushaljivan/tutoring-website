const stats = [
  { icon: '💰', text: 'Starting at $45/hr' },
  { icon: '🎓', text: 'Tutors scored 1550+ (2024–2025)' },
  { icon: '👥', text: '100+ students helped' },
  { icon: '📍', text: 'McLean, Tysons, Great Falls & Vienna' },
]

export default function TrustBar() {
  return (
    <div className="bg-navy-mid/60 border-b border-navy-mid py-2.5 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
        {stats.map((s) => (
          <span key={s.text} className="flex items-center gap-1.5 text-xs text-slate-text whitespace-nowrap">
            <span>{s.icon}</span>
            <span>{s.text}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
