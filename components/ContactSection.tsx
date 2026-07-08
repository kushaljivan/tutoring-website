import ContactForm from '@/components/ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-cream-dark py-16 px-6 scroll-mt-24">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl font-bold text-ink text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-ink-light text-center mb-10">
          Have a question? Fill out the form and we'll get back to you
          within 12 hours.
        </p>
        <ContactForm />
      </div>
    </section>
  )
}
