export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-navy px-6 pt-16"
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Ace the SAT.
          <br />
          <span className="text-accent">Master the Math.</span>
        </h1>
        <p className="mt-6 text-xl text-slate-text max-w-xl mx-auto leading-relaxed">
          1-on-1 tutoring with Kushal Jivan — SAT Math, SAT English, and Math
          from Pre-Algebra through Calculus BC.
        </p>
        <a
          href="#book"
          className="mt-10 inline-block bg-accent text-navy font-bold text-lg px-8 py-4 rounded-xl hover:bg-accent-dark transition-colors"
        >
          Book Free Consultation
        </a>
      </div>
    </section>
  )
}
