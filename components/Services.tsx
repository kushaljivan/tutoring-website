import { CalculatorIcon, BookOpenIcon, RulerIcon } from '@/components/icons'
import { CalculatorIllustration } from '@/components/illustrations'

const services = [
  {
    id: 'sat-math',
    Icon: CalculatorIcon,
    title: 'SAT Math',
    description:
      'Score improvement strategies, test-taking techniques, and full practice test review. Familiar with the curriculum at Langley and McLean HS. Target: 700+ on the Math section.',
  },
  {
    id: 'english-tutoring',
    Icon: BookOpenIcon,
    title: 'English Tutoring',
    description:
      'Reading comprehension, grammar, essay writing, and vocabulary — for elementary through high school students. Also covers SAT English and EBRW prep.',
  },
  {
    id: 'math-tutoring',
    Icon: RulerIcon,
    title: 'Math Tutoring',
    description:
      'Elementary math through Calculus BC — concept mastery, homework help, and exam prep. We tutor students at Cooper MS, Longfellow MS, Langley HS, and McLean HS.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-cream-dark py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <CalculatorIllustration className="w-16 h-16 mx-auto mb-4" />
        <h2 className="font-serif text-3xl font-bold text-ink text-center mb-12">
          What We Teach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card border border-ink/10 rounded-2xl p-8 flex flex-col shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                <service.Icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-ink mb-3">
                {service.title}
              </h3>
              <p className="text-ink-light leading-relaxed flex-1">
                {service.description}
              </p>
              <a
                href="#book"
                className="mt-6 border border-brand text-brand text-sm font-semibold px-4 py-2 rounded-lg text-center hover:bg-brand hover:text-white transition-colors"
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
