import { CalculatorIcon, BookOpenIcon, RulerIcon, FlaskIcon, CodeIcon } from '@/components/icons'
import { CalculatorIllustration } from '@/components/illustrations'
import { LeafCluster, Pumpkin } from '@/components/fall'

const services = [
  {
    id: 'sat-act',
    Icon: CalculatorIcon,
    title: 'SAT/ACT',
    description:
      'Prep for every section of the SAT and ACT, from math to reading and writing to ACT science. We work on strategy, timing, and full practice test review so students walk in ready on test day.',
  },
  {
    id: 'english-tutoring',
    Icon: BookOpenIcon,
    title: 'English Tutoring',
    description:
      'Reading comprehension, grammar, essay writing, and vocabulary, for elementary through high school students. Also covers SAT English and EBRW prep.',
  },
  {
    id: 'math-tutoring',
    Icon: RulerIcon,
    title: 'Math Tutoring',
    description:
      'Elementary math through Calculus BC. Concept mastery, homework help, and exam prep. We tutor students at Cooper MS, Longfellow MS, Langley HS, and McLean HS.',
  },
  {
    id: 'science-history',
    Icon: FlaskIcon,
    title: 'Science & History',
    description:
      'Biology, Chemistry, Physics, US and World History, including AP courses. Concept review, essay and lab report help, and exam prep for every class.',
  },
  {
    id: 'stem-topics',
    Icon: CodeIcon,
    title: 'STEM Topics',
    description:
      'Help with the more niche STEM classes, like AP Computer Science A, coding in Java or Python, and AP Statistics. Great for students in a class most tutors don\'t cover or anyone who wants to get ahead.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-cream-dark py-16 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <CalculatorIllustration className="w-16 h-16" />
          <Pumpkin className="seasonal absolute -right-5 bottom-0 w-8 h-8" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-ink text-center mb-12">
          What We Teach
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-card border border-ink/10 rounded-2xl p-8 flex flex-col shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <LeafCluster className="seasonal absolute top-2 right-2 w-12 h-12 pointer-events-none" />
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
