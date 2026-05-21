'use client'

import { useEffect } from 'react'

export default function BookSession() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="book" className="bg-navy py-24 px-6 scroll-mt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Schedule Your Free Consultation
        </h2>
        <p className="text-slate-text text-lg mb-10 max-w-2xl mx-auto">
          Book a free 30-minute call to discuss your goals, your current level,
          and how we can work together to get results.
        </p>
        <div
          className="calendly-inline-widget rounded-2xl overflow-hidden bg-white"
          data-url="https://calendly.com/kjivan525/30min"
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </section>
  )
}
