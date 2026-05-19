import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
      </main>
    </>
  )
}
