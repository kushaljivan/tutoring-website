import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="bg-cream-dark py-16 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56">
          <Image
            src="/logo.png"
            alt="McLean Tutoring Center"
            width={224}
            height={224}
            className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(30,58,95,0.15)]"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl font-bold text-ink mb-4">About Our Tutors</h2>
          <p className="text-ink-light text-lg leading-relaxed mb-4">
            McLean Tutoring Center provides 1-on-1 tutoring in Math, English,
            Science, and History for students from elementary through high
            school — including SAT prep. We work
            with students at <strong className="text-ink">Langley HS, McLean HS,
            Cooper MS, and Longfellow MS</strong>, and schools throughout the DMV.
          </p>
          <p className="text-ink-light text-lg leading-relaxed mb-8">
            Our tutors adapt to each student&apos;s unique learning style and grade
            level — whether it&apos;s building foundational skills in elementary school
            or pushing for a top SAT score in high school.
          </p>
          <div className="flex flex-wrap gap-10">
            <div>
              <div className="text-3xl font-bold text-brand">5+</div>
              <div className="text-ink-light/70 text-sm mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand">50+</div>
              <div className="text-ink-light/70 text-sm mt-1">Students Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand">200+</div>
              <div className="text-ink-light/70 text-sm mt-1">Avg SAT Point Gain</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
