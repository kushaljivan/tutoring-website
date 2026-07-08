import TrustBar from '@/components/TrustBar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Tutors from '@/components/Tutors'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import CollegeAcceptances from '@/components/CollegeAcceptances'
import BookSession from '@/components/BookSession'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      {/* spacer for fixed nav: mobile 48+36=84px, desktop 56+36=92px */}
      <div className="h-[84px] md:h-[92px]" />
      <TrustBar />
      <main>
        <Hero />
        <About />
        <Tutors />
        <Services />
        <Testimonials />
        <CollegeAcceptances />
        <BookSession />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
