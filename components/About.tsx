import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="bg-navy-light py-24 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0">
          <Image src="/logo.png" alt="McLean Tutors" width={192} height={192} className="rounded-full" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">About Our Tutors</h2>
          <p className="text-slate-text text-lg leading-relaxed mb-8">
            McLean Tutors provides dedicated SAT and math tutoring with over 5 years
            of experience helping students reach their academic potential. With a
            strong foundation in mathematics and a proven teaching framework,
            our tutors adapt to each student&apos;s unique learning style — turning
            confusion into confidence.
          </p>
          <div className="flex flex-wrap gap-10">
            <div>
              <div className="text-3xl font-bold text-accent">5+</div>
              <div className="text-slate-muted text-sm mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">100+</div>
              <div className="text-slate-muted text-sm mt-1">Students Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">200+</div>
              <div className="text-slate-muted text-sm mt-1">Avg SAT Point Gain</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
