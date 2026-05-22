export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-navy px-6 pt-16"
    >
      <div className="text-center max-w-3xl">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
          Serving McLean, Tysons, Great Falls &amp; Vienna
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Ace the SAT.
          <br />
          <span className="text-accent">Master the Math.</span>
        </h1>
        <p className="mt-6 text-xl text-slate-text max-w-xl mx-auto leading-relaxed">
          1-on-1 tutoring for SAT Math, SAT English, and Math from Pre-Algebra
          through Calculus BC — tailored for students at Langley, McLean HS,
          and Cooper Middle School.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#book"
            className="bg-accent text-navy font-bold text-lg px-8 py-4 rounded-xl hover:bg-accent-dark transition-colors"
          >
            Book Free Consultation
          </a>
          <a
            href="tel:+15551234567"
            className="flex flex-col items-center sm:items-start border border-accent/40 rounded-xl px-6 py-3 hover:border-accent transition-colors"
          >
            <span className="text-accent text-xs font-semibold uppercase tracking-wide">
              Call — 30 min, no charge, no commitment
            </span>
            <span className="text-white text-xl font-bold">(555) 123-4567</span>
          </a>
        </div>
      </div>
    </section>
  )
}
