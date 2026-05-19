export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-sm border-b border-navy-mid">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-white font-bold text-lg">Kushal Jivan</span>
        <div className="flex items-center gap-3 md:gap-4">
          {/* TODO: Replace with Kushal's real phone number */}
          <a
            href="tel:+15551234567"
            className="text-accent text-sm hidden md:block hover:underline"
          >
            (555) 123-4567
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
