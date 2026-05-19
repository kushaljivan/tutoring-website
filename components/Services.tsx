const services = [
  {
    id: 'sat-math',
    icon: '📐',
    title: 'SAT Math',
    description:
      'Score improvement strategies, test-taking techniques, and full practice test review. Target: 700+ on the Math section.',
  },
  {
    id: 'sat-english',
    icon: '📖',
    title: 'SAT English',
    description:
      'Reading comprehension, grammar, evidence-based writing, and pacing strategies. Target: 700+ on the EBRW section.',
  },
  {
    id: 'math-tutoring',
    icon: '∫',
    title: 'Math Tutoring',
    description:
      'Pre-Algebra through Calculus BC — concept mastery, homework help, and exam prep for every level.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-navy py-24 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          What I Teach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-navy-light border border-navy-mid rounded-2xl p-8 flex flex-col"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-text leading-relaxed flex-1">
                {service.description}
              </p>
              <a
                href="#book"
                className="mt-6 border border-accent text-accent text-sm font-semibold px-4 py-2 rounded-lg text-center hover:bg-accent hover:text-navy transition-colors"
              >
                Book a Session
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
