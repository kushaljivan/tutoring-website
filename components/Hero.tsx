export default function Hero() {
  return (
    <section
      id="hero"
      className="py-16 md:py-20 flex items-center justify-center bg-cream px-6"
    >
      <div className="text-center max-w-3xl">
        <p className="text-brand text-xs md:text-sm font-semibold uppercase tracking-widest mb-4">
          Serving McLean, Tysons, Great Falls &amp; Vienna
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-ink leading-tight">
          Better Grades.
          <br />
          <span className="text-brand">Better Scores.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-ink-light max-w-xl mx-auto leading-relaxed">
          1-on-1 tutoring in Math and English for students from elementary
          through high school — including SAT prep. We work with students at
          Langley HS, McLean HS, Cooper MS, Longfellow MS, and elementary
          schools across Northern Virginia.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#book"
            className="bg-brand text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-brand-dark transition-colors shadow-card"
          >
            Book Free Consultation
          </a>
          <a
            href="tel:+15714497729"
            className="flex flex-col items-center sm:items-start bg-card border border-ink/10 rounded-xl px-6 py-3 shadow-card hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-200"
          >
            <span className="text-brand text-xs font-semibold uppercase tracking-wide">
              Call or text — 30 min, no charge, no commitment
            </span>
            <span className="text-ink text-xl font-bold">(571) 449-7729</span>
          </a>
        </div>
      </div>
    </section>
  )
}
