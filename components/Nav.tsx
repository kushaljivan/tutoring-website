'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { href: '/', label: 'Home' },
  { href: '/sat-prep', label: 'SAT Prep' },
  { href: '/math-prep', label: 'Math Tutoring' },
  { href: '/why-us', label: 'Why McLean Tutors?' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-navy-mid">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top row: brand + CTA */}
        <div className="h-14 flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl shrink-0">
            McLean Tutors
          </Link>
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="tel:+15714497729"
              className="hidden md:flex flex-col items-end leading-tight hover:opacity-80 transition-opacity"
            >
              <span className="text-accent text-xs font-semibold uppercase tracking-wide">
                Call or text for a FREE 30 min consultation
              </span>
              <span className="text-white text-sm font-bold">(571) 449-7729</span>
            </a>
            <a
              href="/#book"
              className="bg-accent text-navy font-bold text-sm px-4 py-2 rounded-lg hover:bg-accent-dark transition-colors shrink-0"
            >
              Book Session
            </a>
          </div>
        </div>
        {/* Bottom row: page tabs */}
        <div className="h-9 flex items-center gap-1 border-t border-navy-mid/40 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                pathname === tab.href
                  ? 'bg-accent/15 text-accent'
                  : 'text-slate-text hover:text-white'
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
