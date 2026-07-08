'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const tabs = [
  { href: '/', label: 'Home' },
  { href: '/sat-prep', label: 'SAT/ACT Prep' },
  { href: '/math-prep', label: 'Schoolwork' },
  { href: '/college-prep', label: 'College Prep' },
  { href: '/why-us', label: 'Why Us?' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-ink/10">
      {/* Corner logo: lives in the gutter left of the centered content on wide screens */}
      <Link
        href="/"
        className="hidden xl:flex absolute left-3 inset-y-0 items-center"
        aria-label="McLean Tutoring Center home"
      >
        <Image
          src="/logo.png"
          alt=""
          width={76}
          height={72}
          className="w-[76px] h-[72px] object-contain"
        />
      </Link>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Top row: brand + CTA */}
        <div className="h-12 md:h-14 flex items-center justify-between">
          <Link href="/" className="text-ink font-serif font-bold text-lg md:text-xl shrink-0">
            McLean Tutoring Center
          </Link>
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="tel:+15714497729"
              className="hidden md:flex flex-col items-end leading-tight hover:opacity-80 transition-opacity"
            >
              <span className="text-brand text-xs font-semibold uppercase tracking-wide">
                Call or text for a FREE 30 min consultation
              </span>
              <span className="text-ink text-sm font-bold">(571) 449-7729</span>
            </a>
            <a
              href="/#book"
              className="bg-brand text-white font-bold text-sm px-4 py-2 rounded-lg hover:bg-brand-dark transition-colors shrink-0"
            >
              Get Started
            </a>
          </div>
        </div>
        {/* Bottom row: page tabs */}
        <div className="h-9 flex items-center gap-1 border-t border-ink/10 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                pathname === tab.href
                  ? 'bg-brand/10 text-brand'
                  : 'text-ink-light hover:text-ink'
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
