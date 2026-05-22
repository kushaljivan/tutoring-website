import Image from 'next/image'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-sm border-b border-navy-mid">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Image src="/logo.png" alt="McLean Tutors" width={48} height={48} className="rounded-full" />
        <div className="flex items-center gap-3 md:gap-4">
          <a
            href="tel:+15551234567"
            className="hidden md:flex flex-col items-end leading-tight hover:opacity-80 transition-opacity"
          >
            <span className="text-accent text-xs font-semibold uppercase tracking-wide">
              Call now for a FREE 30 min consultation
            </span>
            <span className="text-white text-sm font-bold">(555) 123-4567</span>
          </a>
          <a
            href="#book"
            className="bg-accent text-navy font-bold text-sm px-4 py-2 rounded-lg hover:bg-accent-dark transition-colors"
          >
            Book Session
          </a>
          <a
            href="#contact"
            className="border border-accent text-accent text-sm px-4 py-2 rounded-lg hover:bg-accent hover:text-navy transition-colors hidden sm:block"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
