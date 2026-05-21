'use client'

import Script from 'next/script'

export default function BookSession() {
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
          className="calendly-inline-widget rounded-2xl overflow-hidden"
          data-url="https://calendly.com/kjivan525/30min?hide_gdpr_banner=1"
          style={{ minWidth: '320px', height: '700px' }}
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </div>
    </section>
  )
}
