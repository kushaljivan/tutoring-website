import TrustBar from '@/components/TrustBar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import CollegeAcceptances from '@/components/CollegeAcceptances'
import BookSession from '@/components/BookSession'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      {/* spacer for fixed nav (56px top row + 36px tabs = 92px) */}
      <div className="h-[92px]" />
      <TrustBar />
      <main>
        <Hero />
        <About />
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
