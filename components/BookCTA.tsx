export default function BookCTA() {
  return (
    <section className="bg-navy-light py-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-white mb-3">Ready to Get Started?</h2>
      <p className="text-slate-text text-lg mb-8 max-w-xl mx-auto">
        Book a free 30-minute consultation — no commitment, no charge. We&apos;ll
        talk through your goals and put together a plan.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="/#book"
          className="bg-accent text-navy font-bold text-lg px-8 py-4 rounded-xl hover:bg-accent-dark transition-colors"
        >
          Book Free Consultation
        </a>
        <a
          href="tel:+15714497729"
          className="flex flex-col items-center border border-accent/40 rounded-xl px-6 py-3 hover:border-accent transition-colors"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-wide">
            Call or text us directly
          </span>
          <span className="text-white text-xl font-bold">(571) 449-7729</span>
        </a>
      </div>
    </section>
  )
}
