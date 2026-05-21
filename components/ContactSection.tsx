import ContactForm from '@/components/ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-navy-light py-24 px-6 scroll-mt-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-slate-text text-center mb-10">
          Have a question? Fill out the form and we'll get back to you
          within 24 hours.
        </p>
        <ContactForm />
      </div>
    </section>
  )
}
